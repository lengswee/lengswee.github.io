window.addEventListener("load",function(){
    GetSales();
});

function GetSales(){
  let url = 'https://api.sheety.co/0c070c57cf2f4892b8315fb13d8077b7/untitledSpreadsheet/sale';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.booking);
      var sales = document.getElementById("sale-list");
      var saleIds = [];
     
      for(var i=0; i<json.sale.length; i++){
        var gItemcode = json.sale[i].name;
        var gPrice = json.sale[i].email;
        var gQuantity = json.sale[i].pax;
        var gId = json.sale[i].id;
        var gTotal = json.sale[i].total;
        var gDate = json.sale[i].date;
        var buttonId = "delete" + gId; 

        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gItemcode;
        row.insertCell(2).innerHTML = gPrice;
        row.insertCell(3).innerHTML = gQuantity;
        row.insertCell(4).innerHTML = gTotal;
        row.insertCell(5).innerHTML = gDate;
        row.insertCell(6).innerHTML = "<button id='" + buttonId +"' class='btn btn-danger'>Delete</button><br/>";

        bookingIds.push(buttonId);
           
      }

      for (let j = 0; j < saleIds.length; j++){
        //console.log(bookingIds[j]);
        let el = document.getElementById(saleIds[j]);
        el.addEventListener("click", function(){
          //console.log(typeof saleIds[j])
          let theId = saleIds[j].replace("delete", "");
          DeleteSale(theId);
        });
      }
      
    });
    }

    function DeleteBooking(id){
      if(confirm("Are you sure you want to delete?")){
        let url = 'https://api.sheety.co/0c070c57cf2f4892b8315fb13d8077b7/untitledSpreadsheet/sale' +id;
        fetch(url, {
          method: 'DELETE',
        })
        .then((response) => {
          location.reload();
        });
      } else {
        alert("Delete cancelled.");
      }
      
      
  }