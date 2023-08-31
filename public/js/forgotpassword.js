
var forgetpassword=()=>{
    var email = document.getElementById("email").value;
    var captcha = document.getElementById("captblock").value;
    var data = {};
    data.email = email;
    if(captcha == s){
        // document.getElementById("invalidforgot").style.display = "none";
        // document.getElementById("captforgot").style.display = "none";
        axios.get("/user/forgotpassword",{params : data})
            .then(function(response){
                if(response.data.msg == "Valid user"){
                    console.log("Valid user");
                }else{
                    console.log("Invalid user");
                }
            })
            .catch(function(error){
               console.log(error); 
            })
    }
    else{
        document.getElementById("invalidforgot").style.display = "none";
        document.getElementById("captforgot").style.display = "block";
    }
}