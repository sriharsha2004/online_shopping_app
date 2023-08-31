var loadproductdetails = (data)=>{
    var divTag = $("<div></div>").addClass("productcontainer");
    var ul = $("<ul></ul>").addClass("ultag");
    var li1 = $("<li></li>").html(data.name).addClass("litag");
    ul.append(li1);
    var img = $("<img></img>").attr("src",data.image).addClass("productsimages");
    ul.append(img);
    var li2 = $("<li></li>").html("<b>Price : </b>"+data.price).addClass("litag");
    ul.append(li2);
    var li3 = $("<li></li>").html("<b>Rating : </b>"+data.rating).addClass("litag");
    ul.append(li3);
    var li4 = $("<li></li>").html("<b>Seller : </b>"+data.seller).addClass("litag");
    ul.append(li4);
    divTag.append(ul);
    console.log(divTag);
    $("#showingproducts").append(divTag);

}

var gettingproductdata = ()=>{

    axios.get("/loadproducts",{})
        .then(function(response){
            // console.log(response);
            var p = response.data;
            for(var i=0;i<p.length;i++){
                loadproductdetails(p[i]);
            }
            // main("loadproducts");
        })
        .catch(function(error){
            console.log(error);
    })
}