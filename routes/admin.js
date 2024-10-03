const express = require('express')
const router = express.Router()
const cadmin = require ('../controllers/admin')


router.post("/create", cadmin.create_admin )

router.get("/show/:id", cadmin.show_admin)

router.get("/read", cadmin.read_admin)

router.put("/update/:id", cadmin.update_admin)

router.delete("/del/:id", cadmin.delete_admin)

module.exports = router