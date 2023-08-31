

var s = "";
var generatecaptcha = ()=>{
    var length = 1;
    s="";
    var a = "abcdefghijk1234567890lmnopqrstyuvwxyz";
    for(var i=0;i<1;i++){
        s = s + a.charAt(Math.floor(Math.random()*35));
    }
    document.querySelector("#captcha").src="https://dummyimage.com/200x80/000/fff&text="+s;
    document.querySelector("#signupcaptcha").src="https://dummyimage.com/200x80/000/fff&text="+s;
    document.querySelector("#forgetcaptchablock").src = "https://dummyimage.com/200x80/000/fff&text="+s;
}
document.addEventListener("DOMContentLoaded", (event) => {
    generatecaptcha();
});
var validateuser = ()=>{
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var captcha = document.querySelector("#captchablock").value;
    var invalid = document.getElementById("invalid");
    var capt = document.getElementById("capt");

    var d = {};
    d.username = username;
    d.password = password;
    // data.captcha = captcha;
    if(captcha == s){    
        axios.get('/validate/user',{params: d})
        .then(function(response){
                console.log(response);
            if(response.data.msg == "Validuser"){
                invalid.style.display = "none";
                var closeloginpopup = document.getElementById("closeloginpopup");
                closeloginpopup.click();
                // alert("Logged In");
                main("loadproducts");
                document.getElementById("loginbtn").style.display = "none";
                document.getElementById("signupbtn").style.display = "none";
                document.getElementById("logoutbtn").style.display = "block";
            }
            else{
                // invalid.style.display = "block";
                capt.style.display = "none";
                document.getElementById("signupfirst").style.display = "block";
            }          
        })
        .catch(function(error){
            console.log(error);
        })
    }
    else{
        capt.style.display = "block";
        invalid.style.display = "none";
    }

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#captchablock").value = "";
}
