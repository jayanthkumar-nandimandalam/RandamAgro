const biopesticidesServices=require('../services/productservices');

class Biopesticides{

    display=async(req,res)=>{

        let name = "biopesticides";
        
        global.res = res;
        global.names = "BIO PESTICIDES";
        
        try {

            let result = await biopesticidesServices.display(name);

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

module.exports=new Biopesticides();