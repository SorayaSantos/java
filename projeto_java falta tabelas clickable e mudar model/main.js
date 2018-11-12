$(document).ready(function () {
    console.log("ready!")
    $("#table_products").hide();
    $("#table_shelves").hide();
});

$("#button_products").click(function(){
    console.log("aqui");
    $("#table_products").show();
    // $("#tbody_products").html('');
    $("#tbody_products").each(function(element){
        console.log("Buu");
        $(this).html('');
    });
    

    getDataProducts();
});
$("#button_shelves").click(function(){
    $("#tbody_shelves").html('');
    $("#table_shelves").show();
    getDataShelves();
});
$("#home").click(function(){
    Home();
});
$("#addProduct").click(function(){
    PostProduct();
});
$("#addShelf").click(function(){
    PostShelf();
});
$("#replace_product").click(function(){
    ReplaceProduct();
});
$("#replace_shelf").click(function(){
    ReplaceShelf();
});
$("#deleteProduct").click(function(){
    DeleteProduct();
});
$("#deleteshelf").click(function(){
    DeleteShelf();
});
$("#search_submit").click(function(){
    Search();
});
var products=[];
var shelves=[];
var search_product=[];
var search_shelf=[];