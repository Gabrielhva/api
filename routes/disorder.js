
const express = require('express')
const router = express.Router()
const cdisorder = require ('../controllers/disorder')
 
router.post("/create",cdisorder.create_disorder)
 
router.get("/read", cdisorder.read_disorder)
 
router.put("/update/:id", cdisorder.update_disorder)
 
router.delete("/del/:id", cdisorder.delete_disorder)
 
router.get("/show/:id", cdisorder.show_disorder)
 
module.exports = router