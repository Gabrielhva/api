const express = require('express')
const router = express.Router()
const cdoctor = require ('../controllers/doctor')

router.post("/create",cdoctor.create_doctor)

router.get("/read",cdoctor.read_doctor)

router.get("/show/:id",cdoctor.show_doctor)
  
router.put("/update/:id",cdoctor.update_doctor)

router.delete("/del/:id",cdoctor.delete_doctor)

module.exports = router