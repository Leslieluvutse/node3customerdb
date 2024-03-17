const express = require("express")
const customerController = require ("../controller/customerController");
const  router=express.Router();

router.post("/addCustomer",customerController.addCustomer);


module.exports=router;