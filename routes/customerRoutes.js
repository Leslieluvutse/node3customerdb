const express = require("express")
const customerController = require ("../controller/customerController");
const  router=express.Router();

router.post("/addCustomer",customerController.addCustomer);
router.get("/getAllCustomers", customerController.getAllCustomers)


module.exports=router;