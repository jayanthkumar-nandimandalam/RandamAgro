const biostimulantServices=require('../services/productservices');

class Biostimulant{

    display=async(req,res)=>{

        let name="biostimulant";
        let product;
        global.res = res;
        global.names = "BIO STIMULANT";

        try {

            let result = await biostimulantServices.display(name);

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

module.exports=new Biostimulant();