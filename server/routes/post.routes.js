import express from 'express';
const router = express.Router();

router.get('/:type', async(req,res) =>{
  try {
    let response = await fetch(`http://20.244.56.144/evaluation-service/posts/${req.params.type}`);
    // let jsonResponse = await response.json();
    
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: "Internal server error"});
  }
})



export default router;