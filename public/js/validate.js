

   
  

const validatePhone = () => {
    
    var phn = document.getElementById("phone").value;
    if (!/^[6-9]\d{9}$/.test(phn)) {

        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phoneErr").innerHTML = "Invalid Phone Number";
        document.getElementById("submitBtn").style.display = "none";
        
    } else {
        document.getElementById("phone").style.borderColor = "#eeeeee";
        document.getElementById("phoneErr").innerHTML = "";
    }

    if (document.getElementById("phoneErr").innerHTML == "" && document.getElementById("emailErr").innerHTML == "" && document.getElementById("phone").value!="" && document.getElementById("email").value!="") {
        document.getElementById("submitBtn").style.display = "inline-block";
    }
}
const validateEmail=()=>{

    var mail = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+$/.test(mail)) {

        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailErr").innerHTML = "Invalid Email Id";
        document.getElementById("submitBtn").style.display = "none";
        
    } else {
        document.getElementById("email").style.borderColor = "#eeeeee";
        document.getElementById("emailErr").innerHTML = "";
    }
    if (document.getElementById("phoneErr").innerHTML == "" && document.getElementById("emailErr").innerHTML == "" && document.getElementById("phone").value!="" && document.getElementById("email").value!="") {
        document.getElementById("submitBtn").style.display = "inline-block";
    }
    
}