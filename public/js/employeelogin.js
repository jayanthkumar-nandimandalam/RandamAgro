window.onload = () => {

    sessionStorage.setItem('loginstatus', "2");
}


const loginId = () => {
    var id = document.getElementById("name").value;
    sessionStorage.setItem('loginId', id);
}