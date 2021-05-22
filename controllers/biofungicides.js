const biofungicidesServices=require('../services/productservices');

class Biofungicides{

    display=async(req,res)=>{

        let name="biofungicides";
        let product;
        global.res = res;
        global.names = 'BIO FUNGICIDES';

        try {

            let result = await biofungicidesServices.display(name);

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

module.exports=new Biofungicides();