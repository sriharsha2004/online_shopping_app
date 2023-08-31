var invalidpassword = document.getElementById("invalidpassword");
var invalidreenter = document.getElementById("invalidreenter");
var invalidemail = document.getElementById("invalidemail");
// var signuppassword = document.getElementById("signuppassword");

var signuppassword = document.querySelector("#signuppassword");

var changepassword = () =>{
    // console.log(signuppassword.value);
    invalidpassword.style.display = "block";
    var l = signuppassword.value.length;
    var ct = 0;
    if(l < 5){
        document.getElementById("i1").style.color = "red";
    }else{
        document.getElementById("i1").style.color = "green";
        ct++;
    }
    var dct = 0;
    var sct = 0;
    for(var i=0;i<l;i++){
        if(signuppassword.value.charCodeAt(i) >= 48 && signuppassword.value.charCodeAt(i)<= 57){
            dct++;
        }
        else if((signuppassword.value.charCodeAt(i) >= 33 && signuppassword.value.charCodeAt(i) <= 47) || (signuppassword.value.charCodeAt(i) >= 58 && signuppassword.value.charCodeAt(i) <= 64)){
            sct++;
        }
    }
    if(sct<1){
        document.getElementById("i2").style.color = "red";
    }else{
        document.getElementById("i2").style.color = "green";
    }
    if(dct < 1){
        document.getElementById("i3").style.color = "red";
    }else{
        document.getElementById("i3").style.color = "green";
    }
}

var signupemail = document.getElementById("signupemail")
var changeemail = ()=>{    
    signupemail.addEventListener("change",()=>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        invalidemail.style.display = "block";
        if((signupemail.value).match(validRegex)){
            // $("invalidemail").hide();
        //    invalidemail.style.display = "none";
        invalidemail.hidden = "true"
        }
        else{
            invalidemail.style.color = "red";
            invalidemail.style.display = "block";
        }
    })
}


var signuprepassword = document.getElementById("signuprepassword");

var changereenter =()=>{
    signuprepassword.addEventListener("change",()=>{
        invalidreenter.style.display = "block";
        if(signuppassword.value == signuprepassword.value){
            // $("invalidreenter").hide();
            invalidreenter.hidden = "true";
            // invalidreenter.style.display = "none";
        }else{
            invalidreenter.style.color = "red";
            invalidreenter.style.display = "block";
        }
    })
}

// var validatepwd =  (password)=>{
//     if(password.length <= 5){
//         invalidpassword.style.display = "block";
//         invalidpassword.innerText = "Password length should be atleast 5";
//         invalidpassword.style.color = "red";
//         return "invalidpassword";
//     }
//     // if(password.)
// }

// var validateemail = (email)=>{
//     // ^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(email.match(validRegex)){
//         invalidemail.style.display = "block";
//         invalidemail.innerHTML = "Invalid email id";
//         invalidemail.style.color = "red";
//         return "invalidemail";
//     }   
// }


var storingdata = ()=>{
    var signupusername = $("#signupusername").val();
    var signuppassword = $("#signuppassword").val();
    var signupemail = $("#signupemail").val();
    var signupcaptchablock = $("#signupcaptchablock").val();
    var signuprepassword = $("#signuprepassword").val();

    data = {};
    data.username = signupusername;
    data.password = signuppassword;
    data.email = signupemail;

    // console.log(s);
    if(signupcaptchablock == s){
        axios.get("shoppingapp/signup",{params : data})
        .then(function(response){
            console.log(response);
            var signupclose = document.getElementById("signupclose");
            signupclose.click();
        })
        .catch(function(error){
            console.log(error);
        })
        
        $("#signupusername").val("");
        $("#signuppassword").val("");
        $("#signupemail").val("");
        $("#signupcaptchablock").val("");
        $("#signuprepassword").val("");

        invalidreenter.style.color = "red";
        invalidpassword.style.color = "red";
    }
    else{
        document.getElementById("signupcapt").style.display = "block";
    }
}