window.onload = () => {

    sessionStorage.setItem('loginstatus', "1");
}

const loginId = () => {
    var id = document.getElementById("name").value;
    sessionStorage.setItem('loginId', id);
}