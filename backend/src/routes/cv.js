import express from 'express';
import { ObjectId } from 'mongodb';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Create or update CV
router.post('/save', verifyToken, async (req, res) => {
  try {
    const { cvData, cvId } = req.body;
    const db = req.db;
    
    if (!cvData) {
      return res.status(400).json({ error: 'CV data required' });
    }
    
    const cvDocument = {
      userId: new ObjectId(req.userId),
      ...cvData,
      updatedAt: new Date()
    };
    
    let result;
    if (cvId && ObjectId.isValid(cvId)) {
      // Update existing CV
      result = await db.collection('cvs').findOneAndUpdate(
        { _id: new ObjectId(cvId), userId: new ObjectId(req.userId) },
        { $set: cvDocument },
        { returnDocument: 'after' }
      );
      
      if (!result.value) {
        return res.status(404).json({ error: 'CV not found' });
      }
    } else {
      // Create new CV
      cvDocument.createdAt = new Date();
      result = await db.collection('cvs').insertOne(cvDocument);
      cvDocument._id = result.insertedId;
    }
    
    res.json({
      message: 'CV saved successfully',
      cvId: result.value?._id || result.insertedId,
      cv: result.value || cvDocument
    });
  } catch (error) {
    console.error('Save CV error:', error);
    res.status(500).json({ error: 'Failed to save CV' });
  }
});

// Get single CV
router.get('/:cvId', verifyToken, async (req, res) => {
  try {
    const { cvId } = req.params;
    const db = req.db;
    
    if (!ObjectId.isValid(cvId)) {
      return res.status(400).json({ error: 'Invalid CV ID' });
    }
    
    const cv = await db.collection('cvs').findOne({
      _id: new ObjectId(cvId),
      userId: new ObjectId(req.userId)
    });
    
    if (!cv) {
      return res.status(404).json({ error: 'CV not found' });
    }
    
    res.json(cv);
  } catch (error) {
    console.error('Get CV error:', error);
    res.status(500).json({ error: 'Failed to get CV' });
  }
});

// Get all CVs for user
router.get('/', verifyToken, async (req, res) => {
  try {
    const db = req.db;
    
    const cvs = await db.collection('cvs')
      .find({ userId: new ObjectId(req.userId) })
      .sort({ createdAt: -1 })
      .toArray();
    
    res.json(cvs);
  } catch (error) {
    console.error('Get CVs error:', error);
    res.status(500).json({ error: 'Failed to get CVs' });
  }
});

// Delete CV
router.delete('/:cvId', verifyToken, async (req, res) => {
  try {
    const { cvId } = req.params;
    const db = req.db;
    
    if (!ObjectId.isValid(cvId)) {
      return res.status(400).json({ error: 'Invalid CV ID' });
    }
    
    const result = await db.collection('cvs').deleteOne({
      _id: new ObjectId(cvId),
      userId: new ObjectId(req.userId)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'CV not found' });
    }
    
    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    console.error('Delete CV error:', error);
    res.status(500).json({ error: 'Failed to delete CV' });
  }
});

export default router;
