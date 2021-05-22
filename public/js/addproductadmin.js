window.onload = () => {
    $('#cover-spin').hide(0);
    if (window.sessionStorage.length < 4) {
        sessionStorage.setItem('deliveryArr', JSON.stringify([]));
    }
    let itemsArr = sessionStorage.getItem("deliveryArr");
    itemsArr = JSON.parse(itemsArr);
    if (itemsArr.length == 0) {
        document.getElementById("listBody").style.display = "none";
    } else {
        document.getElementById("listBody").style.display = "block";
    }

    if (document.getElementById("successMsg") || document.getElementById("errorMsg")) {
        document.getElementById("listdiv").style.display = "none";
        sessionStorage.setItem('deliveryArr', JSON.stringify([]));

    }
    let loginstatus = sessionStorage.getItem('loginstatus');
    if (loginstatus == 2) {

        document.getElementById("empButton").style.display = "none";
    }

}

const addProduct = () => {

    let pName = document.getElementById("product_name").value;
    let capacity = document.getElementById("capacity").value;
    let quantity = document.getElementById("quantity").value;
    document.getElementById("product_name").selectedIndex = "0";
    document.getElementById("capacity").selectedIndex = "0";
    document.getElementById("quantity").value = "";

    let deliveryItems = JSON.parse(sessionStorage.getItem('deliveryArr'));
    let obj = {
        productName: pName,
        capacity: capacity,
        quantity: quantity
    }
    deliveryItems.push(obj);
    sessionStorage.setItem('deliveryArr', JSON.stringify(deliveryItems));
    buidTable();

}



const buidTable = () => {


    document.getElementById("listdiv").style.display = "block";
    let itemsArr = sessionStorage.getItem("deliveryArr");
    itemsArr = JSON.parse(itemsArr);
    if (itemsArr.length == 0) {
        document.getElementById("listBody").style.display = "none";
    } else {
        document.getElementById("listBody").style.display = "block";
    }

    let table = document.getElementById("deliveryTable");
    table.innerHTML = '';
    var table_len;
    for (var i = 0; i < itemsArr.length; i++) {
        table_len = (table.rows.length);
        var row = table.insertRow(table_len).outerHTML = `
        <tr id="row${table_len}">
        <td>
          ${itemsArr[i].productName}
        </td>
        <td>
        ${itemsArr[i].capacity}
        </td>
        <td>${itemsArr[i].quantity}
         </td>
         <td><button style="border: none; background-color: red; color:white;" onclick='delete_row(${table_len})'> Remove</button></td>
   </tr>
       
        `
    }
    document.getElementById("deliveryValue").value = JSON.stringify(itemsArr);
}


const delete_row = (no) => {

    let itemsArr = sessionStorage.getItem("deliveryArr");
    itemsArr = JSON.parse(itemsArr);

    itemsArr.splice(no, 1);


    console.log(no, "number")

    document.getElementById("row" + no).outerHTML = "";

    // Put the object into storage
    sessionStorage.setItem('deliveryArr', JSON.stringify(itemsArr));
    buidTable();

}