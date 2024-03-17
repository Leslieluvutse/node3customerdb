const db = require('../model/dbConnect')
const customer = db.customer

module.exports = {
    addCustomer : async(req, res, next)=> {
        try{
              let info = {
                            customer_id: req.body.customer_id,
                            first_name: req.body.first_name, 
                            last_name: req.body.last_name,
                            gender: req.body.gender,
                            email: req.body.email,
                            phone: req.body.phone,
                        }
                        
            const addCustomer = await customer.create(info);
        

        res.status(200).send("addCustomerMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllCustomers:(req,res,next)=>{
        try{
            let customer = customer.findAll({})
            res.status(200).send(customer)
        }
        catch (error)
        {
            next(error)
        }
},

}