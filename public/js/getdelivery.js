window.onload = () => {
    $('#cover-spin').hide(0);
    console.log(document.getElementById("del"))
    if (!document.getElementById("del")) {
        document.getElementById("table5Div").style.backgroundImage = "url('https://cdn.dribbble.com/users/766361/screenshots/4999056/loader2_box_1.gif')";

        document.getElementById("table5Div").style.backgroundPosition = "0px -120px";
    } else {
        document.getElementById("table5Div").style.backgroundImage = "none";
    }
    let loginstatus = sessionStorage.getItem('loginstatus');
    if (loginstatus == 2) {

        document.getElementById("empButton").style.display = "none";
    }

}