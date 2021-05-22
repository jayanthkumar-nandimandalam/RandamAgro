window.onload = () => {
    $('#cover-spin').hide(0);
    console.log(document.getElementById("eid"))
    if (!document.getElementById("eid")) {
        document.getElementById("table3Div").style.backgroundImage = "url('https://cdn.dribbble.com/users/220043/screenshots/6288970/dttr_loaderricerca_ac_ver1.gif')";

        document.getElementById("table3Div").style.backgroundPosition = "0px -80px";
    } else {
        document.getElementById("table3Div").style.backgroundImage = "none";
    }
    let loginstatus = sessionStorage.getItem('loginstatus');
    if (loginstatus == 2) {

        document.getElementById("empButton").style.display = "none";
    }

}