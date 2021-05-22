window.onload = () => {
    $('#cover-spin').hide(0);

    buidTable();
    let count = sessionStorage.getItem('cartArr');
    count = JSON.parse(count)
    document.getElementById("cartCountValue").value = count.length;



}
const buidTable = () => {


    if (document.getElementById("orderStatus")) {
        console.log(document.getElementById("orderStatus").innerHTML + "hello");
        if (document.getElementById("orderStatus").innerHTML.trim() == "Order Placed Successfully") {
            sessionStorage.setItem('cartArr', JSON.stringify([]));
            let count = sessionStorage.getItem('cartArr');
            count = JSON.parse(count)
            document.getElementById("cartItemsCount").innerHTML = count.length;
        }
    }

    let itemsArr = sessionStorage.getItem("cartArr");
    itemsArr = JSON.parse(itemsArr);
    if (itemsArr.length == 0) {


        document.getElementById("cartStatus").innerHTML = "Your cart is Empty";

        document.getElementById("cartTable").style.display = "none";

        document.getElementById("checkout").style.display = "none";

    } else {
        document.getElementById("cartStatus").innerHTML = "Products in your cart";
        document.getElementById("checkout").style.display = "block";
    }


    let table = document.getElementById("table");
    table.innerHTML = '';


    var table_len;
    for (var i = 0; i < itemsArr.length; i++) {
        table_len = (table.rows.length);
        var row = table.insertRow(table_len).outerHTML = `
        <tr id="row${table_len}">
        <td>
            <div class="media">
                <div class="d-flex">
                    <img src="${itemsArr[i].imgUrl}" width="100px" height="100px" alt="">
                </div>
                <div class="media-body">
                    <p>${itemsArr[i].id}</p>
                    <input type="hidden" name="product${table_len}" value="${itemsArr[i].id}">
                </div>
            </div>
        </td>
        <td>
            <h5>${itemsArr[i].capacity}</h5>
            <input type="hidden" name="capacity${table_len}" value="${itemsArr[i].capacity}">
        </td>
        <td>
            <div class="product_count">
                <input type="text" name="qty" id="sst${table_len}" maxlength="12" value="${itemsArr[table_len].quantity}" title="Quantity:"
                    class="input-text qty" disabled="disabled">
                <button onclick="addQuantity(${table_len})"
                    class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                <button onclick="delQuantity(${table_len})"
                    class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
            </div>
            <input type="hidden" name="quantity${table_len}" id="quantity${table_len}" value="${itemsArr[table_len].quantity}">
        </td>
       <td><button style="border: none; background-color: red; color:white;" onclick='delete_row(${table_len})'> Remove</button></td>
    </tr>
       
        `
    }

    document.getElementById("cartObjValue").value = JSON.stringify(itemsArr);
}
const checkout = () => {

    sessionStorage.setItem('cartArr', JSON.stringify([]));



    location.reload();
}
const addQuantity = (no) => {
    let itemsArr = sessionStorage.getItem("cartArr");
    itemsArr = JSON.parse(itemsArr);
    itemsArr[no].quantity += 1;
    sessionStorage.setItem('cartArr', JSON.stringify(itemsArr));
    var result = document.getElementById('sst' + no);
    var sst = result.value;
    document.getElementById("quantity" + no).value = parseInt(sst) + 1;
    if (!isNaN(sst)) return result.value++;
    return false;
}
const delQuantity = (no) => {

    var result = document.getElementById('sst' + no);
    var sst = result.value;
    if (!isNaN(sst) && sst > 1) {

        let itemsArr = sessionStorage.getItem("cartArr");
        itemsArr = JSON.parse(itemsArr);
        itemsArr[no].quantity -= 1;
        document.getElementById("quantity" + no).value = sst - 1;
        sessionStorage.setItem('cartArr', JSON.stringify(itemsArr));
        result.value--;
    }



    return false;
}

const delete_row = (no) => {

    let itemsArr = sessionStorage.getItem("cartArr");
    itemsArr = JSON.parse(itemsArr);

    itemsArr.splice(no, 1);


    console.log(no, "number")

    document.getElementById("row" + no).outerHTML = "";

    // Put the object into storage
    sessionStorage.setItem('cartArr', JSON.stringify(itemsArr));
    buidTable();

    // Retrieve the object from storage
    let count = sessionStorage.getItem('cartArr');
    count = JSON.parse(count)
    document.getElementById("cartItemsCount").innerHTML = count.length;


    if (itemsArr.length == 0) {
        document.getElementById("checkout").style.display = "none";
    }



}