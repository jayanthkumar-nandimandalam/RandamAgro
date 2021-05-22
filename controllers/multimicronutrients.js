const multimicronutrientsServices=require('../services/productservices');

class Multimicronutrients{

    display=async(req,res)=>{

        let name="multimicronutrients";
        let product;
        global.res = res;
        global.names = "MULTI MICRONUTRIENTS";

        try {

            let result = await multimicronutrientsServices.display(name);

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

module.exports=new Multimicronutrients();