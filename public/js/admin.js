var productimagepath = '';
var readProductDetails=()=>{
    var productdata = {};
    productdata.id = $("#id").val();
    productdata.select = $("#selectbox").val();
    productdata.price = $("#price").val();
    productdata.manufacturer = $("#manufacturer").val();
    productdata.seller = $("#seller").val();
    productdata.rating  = $("#rating").val();
    productdata.image = productimagepath;
    
    console.log(productdata);

    axios.get("/adminpage",{params:productdata}).then((response)=>{
        // console.log(response);
        if(response.data.msg == "done"){
            console.log("Succesfully added");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
var UploadProductImage=()=>{
    // console.log($("input[name = ProdImage]"));
    var uploadedimg = $("input[name = ProdImage]")[0].files[0];
    // console.log(uploadedimg);
    if(uploadedimg.type == "image/jpeg" || uploadedimg.type == "image/jpg" || uploadedimg.type == "image/gif" || uploadedimg.type == "image/png"){
        var uploadfile = $("input[name = ProdImage]")[0].files[0];
        let formdata = new FormData();   
        formdata.append("ProdImage",uploadfile);

        var imageUploader = $.ajax({
            url : "/upload/productImage",
            type : "GET",
            data : formdata,
            enctype : "multipart/form-data",
            processData : false,
            contentType : false,
            datatype : 'JSON'
        })
        imageUploader.done((response)=>{
            console.log("Uploading Done");
            productimagepath = response.file_path;
        })
    }
}