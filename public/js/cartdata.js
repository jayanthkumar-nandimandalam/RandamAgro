const cCount = (id, imgUrl, capacity, i) => {
    let cartItems = sessionStorage.getItem('cartArr');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let itemFound = false;
    document.getElementById("button" + i).style.background = "green";
    document.getElementById("button" + i).style.color = "white";
    document.getElementById("button" + i).innerHTML = "Added to cart";
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            itemFound = true;
        }
    }
    if (itemFound) {
        console.log("no");
    } else {
        let obj = {
            id: id,
            imgUrl: imgUrl,
            quantity: 1,
            capacity: capacity
        }
        cartItems.push(obj);
    }
    // Put the object into storage
    sessionStorage.setItem('cartArr', JSON.stringify(cartItems));
    // Retrieve the object from storage
    let count = sessionStorage.getItem('cartArr');
    count = JSON.parse(count)
    document.getElementById("cartItemsCount").innerHTML = count.length;
    document.getElementById("cartCountValue").value = count.length;
}