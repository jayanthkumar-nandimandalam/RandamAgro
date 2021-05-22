window.onload = () => {

    displayProducts();



}
const displayProducts = () => {

    let list = document.getElementById("list").innerHTML;
    console.log(typeof list)
    console.log(list)
    let productObj = JSON.parse(list);
    let content = '';
    document.getElementById("productsList").innerHTML = "";
    let param = '';
    for (let i = 0; i < productObj.length; i++) {

        param = `${productObj[i].description}<br><strong>Capacity:</strong> ${productObj[i].capacity}`;
        content = content + `
        <div class="col-lg-3 col-md-6">
        <div class="single-product">
           <center> <a onclick="return trigger_popup_fricc('${param}','${productObj[i].imageUrl}')"><img class="img-fluid" src="${productObj[i].imageUrl}" alt="" width="30px" height="250px"></a></center>
            <div class="product-details">
                
                <center><b style="color: black; font-size: x-large;">${productObj[i].name}</b><br>
                    
                    <br><button type="button" id="button${i}" class="btn btn-outline-success btn-sm" onclick='cCount("${productObj[i].name}","${productObj[i].imageUrl}","${productObj[i].capacity}","${i}")'>Add to cart</button></center>								
            </div>
        </div>
    </div>
        `
    }

    document.getElementById("productsList").innerHTML = content;

}