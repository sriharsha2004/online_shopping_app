var logoutuser = () =>{
    
    var closelogoutpopup = document.getElementById("closelogoutpopup");
    closelogoutpopup.click();
    
    main("welcome");
    document.getElementById("logoutbtn").style.display = "none";
    document.getElementById("loginbtn").style.display = "block";
    document.getElementById("signupbtn").style.display = "block";
}