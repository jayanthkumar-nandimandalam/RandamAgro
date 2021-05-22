window.onload = () => {

    $('#cover-spin').hide(0);
    let loginstatus = sessionStorage.getItem('loginstatus');
    if (loginstatus == 2) {
        document.getElementById("empDetails").style.display = "none";
        document.getElementById("empButton").style.display = "none";
    }
    let loginId = sessionStorage.getItem('loginId');
    document.getElementById("loginId").value = loginId;
}