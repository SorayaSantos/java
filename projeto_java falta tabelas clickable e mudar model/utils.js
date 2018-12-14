function Home() {
    $("#table_products").hide();
    $("#table_shelves").hide();
    $('#table_products').DataTable();
};

function getDataProducts() {
    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/products",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            products = data;
            var t_products = $('#table_products').DataTable();
            t_products.clear().draw();
            get_TableProducts(products);
        }
    });
};
function get_TableProducts(products_all) {
    //t_products.clear().draw();
    for (let index = 0; index < products_all.length; index++) {
        //     $("#table_products").append(`<tr class="border border-dark">
        //     <td class="border border-dark"><strong>`+ index +`</strong></td>
        //     <td class="border border-dark"><strong>`+ products_all[index].discountValue +`</strong></td>
        //     <td class="border border-dark"><strong>`+ products_all[index].iva +`</strong></td>
        //     <td class="border border-dark"><strong>`+ products_all[index].pvp +`</strong></td>
        //     <td class="border border-dark"><strong>`+ products_all[index].id +`</strong></td>
        //   </tr>`)   

        var t_products = $('#table_products').DataTable();
        t_products.row.add([index, products_all[index].discount, products_all[index].iva, products_all[index].pvp, products_all[index].id]).draw();
    }
    search_product = [];
};
function getDataShelves() {
    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/shelves",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            shelves = data;
            var t_shelves = $('#table_shelves').DataTable();
            t_shelves.clear().draw();
            get_TableShelves(shelves);
        }
    });
};
function get_TableShelves(shelves_all) {
   //t_shelves.clear().draw();

    for (let index = 0; index < shelves_all.length; index++) {

        //     $("#table_shelves").append(`<tr class="border border-dark">
        //     <td class="border border-dark"><strong>`+ index +`</strong></td>
        //     <td class="border border-dark"><strong>`+ shelves_all[index].capacity +`</strong></td>
        //     <td class="border border-dark"><strong>`+ shelves_all[index].rentPrice +`</strong></td>
        //     <td class="border border-dark"><strong>`+ shelves_all[index].id +`</strong></td>
        //     <td class="border border-dark"><strong>`+ shelves_all[index].productId +`</strong></td>
        //   </tr>`) 

        var t_shelves = $('#table_shelves').DataTable();
        var idCanBeNull= shelves_all[index].product;
        if (idCanBeNull!=null) {
            t_shelves.row.add([index, shelves_all[index].capacity, shelves_all[index].price, shelves_all[index].id, shelves_all[index].product.id]).draw();
        }
        else {
            t_shelves.row.add([index, shelves_all[index].capacity, shelves_all[index].price, shelves_all[index].id, "empty"]).draw();
        }
    }
    search_shelf = [];
};
function notFound(not_found) {

    $("#table_shelves").append(`<tr class="border border-dark">
    <td class="border border-dark"><strong>`+ not_found + `</strong></td>
     </tr>`)
    $("#table_products").append(`<tr class="border border-dark">
     <td class="border border-dark"><strong>`+ not_found + `</strong></td>
      </tr>`)
};
function PostProduct() {
    var discount = $("#discountValue").val();
    var IVA = $("#IVA").val();
    var pvp = $("#pvp").val();
    product = new Product(discount, IVA, pvp);

    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/products",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(product),
        success: function (data) {
        }
    });
};
function PostShelf() {
    var capacity = $("#capacity").val();
    var rentprice = $("#rentprice").val();
    var id_product = $("#id_product").val();
    product = new IdProduct(id_product);
    shelf = new Shelf(capacity, rentprice, product);

    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/shelves",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(shelf),
        success: function (data) {
        }
    });
};
function ReplaceProduct() {

    var id_product_replace = $("#id_product_replace").val();
    var newdiscount = $("#new_discountValue").val();
    var newIVA = $("#new_IVA").val();
    var newpvp = $("#new_pvp").val();
    product = new AcessProduct(id_product_replace,newdiscount, newIVA, newpvp);

    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/products",
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(product),
        success: function (data) {
        }
    });
};
function ReplaceShelf() {

    var id_shelf_replace = $("#id_shelf_replace").val();
    var new_capacity = $("#new_capacity").val();
    var new_rentprice = $("#new_rentprice").val();
    var new_id_product = $("#new_product_id").val();
    product = new IdProduct(new_id_product);
    shelf = new AcessShelf(id_shelf_replace,new_capacity, new_rentprice, product);

    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/shelves",
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(shelf),
        success: function (data) {
        }
    });
};
function DeleteProduct() {
    var id_Product = $("#id_product_delete").val();
    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/products/" + id_Product,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (data) {
        }
    });
};
function DeleteShelf() {
    var id_Shelf = $("#id_shelf_delete").val();
    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/shelves/" + id_Shelf,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (data) {
        }
    });
};
function Search() {
    var id_search = $("#search").val();
    var notFound = "Not Found"
    $("tBody").each(function (element) {
        $(this).html('');
    });
    $("#table_products").show();
    $("#table_shelves").show();

    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/products/" + id_search,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            search_product.push(data);
            var t_products = $('#table_products').DataTable();
            t_products.clear().draw();
            get_TableProducts(search_product);
            // if (search_product.indexOf(data)!=-1){
            //     get_TableProducts(search_product);
            // }
        }
    });
    $.ajax({
        url: "http://localhost:8080/StocksManagement/api/shelves/product/" + id_search,
        type: 'GET',
        contentType: 'application/json',
        // error: function (notFound) {
        //     notFound(notFound);
        // },
        success: function (data) {
            console.log(data);
            
            search_shelf=data;
            var t_products = $('#table_products').DataTable();
            t_products.clear().draw();
            get_TableShelves(search_shelf);
            // if (search_shelf.indexOf(data)!=-1){
            //     get_TableShelves(search_shelf) ;
            //             }
        }
    });
};