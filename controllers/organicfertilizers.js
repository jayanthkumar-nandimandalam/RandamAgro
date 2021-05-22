const organicfertilizersServices=require('../services/productservices');

class Organicfertilizers{

    display=async(req,res)=>{

        let name="organicfertilizers";
        let product;
        global.res = res;
        global.names = "ORGANIC FERTILIZERS";

        try {

            let result = await organicfertilizersServices.display(name);

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

module.exports=new Organicfertilizers();