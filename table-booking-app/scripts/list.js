window.addEventListener("load",function(){
    GetBookings();
});

function GetBookings(){
    let url = 'https://api.sheety.co/ee581d1468ba79b9f91410ef97673070/bookingApp/booking';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.booking);
      var bookings = document.getElementById("booking-list");
      var bookingIds = [];
     
      for(var i=0; i<json.booking.length; i++){
        var gName = json.booking[i].name;
        var gEmail = json.booking[i].email;
        var gPax = json.booking[i].pax;
        var gId = json.booking[i].id;
        var buttonId = "delete" + gId; //<--

        let row = bookings.insertRow(booking.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = ""; //Remarks
        row.insertCell(5).innerHTML = "<button id='" + buttonId +"' class='btn btn-danger'>Delete</button><br/>";

        bookingIds.push(buttonId);
           
      }

      for (let j = 0; j < bookingIds.length; j++){
        //console.log(bookingIds[j]);
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function(){
          //console.log(typeof bookingIds[j])
          let theId = bookingIds[j].replace("delete", "");
          DeleteBooking(theId);
        });
      }
      
    });
    }

    function DeleteBooking(id){
      if(confirm("Are you sure you want to delete?")){
        let url = 'https://api.sheety.co/ee581d1468ba79b9f91410ef97673070/bookingApp/booking/' +id;
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