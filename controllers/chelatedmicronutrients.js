const chelatedmicronutrientsServices=require('../services/productservices');

class Chelatedmicronutrients{

    display=async(req,res)=>{

        let name="chelatedmicronutrients";
        let product;
        global.res = res;
        global.names = "CHELATED MICRONUTRIENTS";

        try {

            let result = await chelatedmicronutrientsServices.display(name);

            if (result) {
                console.log(result);
 
                 res.render('products',{productresult:result.result});
             }
             else res.redirect("/");

        } catch (e) {

            console.log(e)
            res.render('products');
        }

    }

}

module.exports=new Chelatedmicronutrients();