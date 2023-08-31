var type;
var templateurl;
var main = (type) =>{
    switch(type){
        case "welcome" : 
            templateurl = 'templates/welcome.htm';
            break;
        case "loadproducts" :
            templateurl = "templates/loadproducts.htm";
            break;
    }
    axios.get(templateurl)
    .then(function(response){
        if(type == "loadproducts"){
            gettingproductdata();
        }
        $("main").html(response.data);
        // if(type == "loadproducts"){
        //     $("main").html(response.data);
        // }
    })
    .catch(function(error){
        console.log(error);
    })
    
}
document.addEventListener("DOMContentLoaded",()=>{
    main("welcome");
})