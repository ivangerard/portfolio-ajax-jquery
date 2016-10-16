function getItems() {

    $.get({
        url: "http://localhost:8080/api/items",
        success: function(result) {

            var list = $("tbody#item-list")

            list.empty()
            for (var idx = 0; idx < result.length; idx++) {
                //var html = `<li><h3>${result[idx].contributor}</h3></li><li><h3>${result[idx].article}</h3></li>`
                var html = `<tr id="${result[idx]._id}"><td>${result[idx].item_code}</td><td>${result[idx].name}</td><td>${result[idx].description}</td><td>${result[idx].price}</td><td>${result[idx].stock}</td><td id="idDelete" value="${result[idx]._id}" style="display:none"></td>
                <input type="hidden" id="productid" value="${result[idx]._id}" />
                <td>
                <button id="${result[idx]._id}" class='btn btn-md btn-primary' type='button'>Delete</button></td>
                </tr>
                `
                  list.append(html)
            }
            $("button.btn").on("click",function(event){

              //var bla = $('productid').val();

              delete_stock(this.id)

            })
            console.log(result);
        }
    })
}

function postItem(result) {

    $.post({
        url: "http://localhost:8080/api/items",
        data: {
            "item_code": $("#item_code").val().trim(),
            "name": $("#name").val().trim(),
            "description": $("#description").val().trim(),
            "price": $("#price").val().trim(),
            "stock": $("#stock").val().trim()
        },
        success: function(result) {
            getItems()
        }
    })
}


function delete_stock(id_delete) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:8080/api/items/'+id_delete,
    dataType: 'json'
  }).done(function(result){
      getItems()
  })
}

function test(){

}

$(function() {
    getItems()
    $("#form-item").unbind().on("submit", function(event) {
        event.preventDefault()
        postItem()
    })


})
