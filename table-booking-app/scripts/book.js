function BookNow(guestName,guestEmail,guestPax){
    let url = 'https://api.sheety.co/ee581d1468ba79b9f91410ef97673070/bookingApp/booking';
    let body = {
      booking: {
        name:guestName,
        email:guestEmail,
        pax:guestPax
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
      //document.getElementById("bookMsg").innerHTML = json.booking.name + "successfully added!";
      //GetBookings();
    });
    }

    window.addEventListener("load",function(){
        document.getElementById("bookNow").addEventListener("click", function(){
            let name = document.getElementById("guestName").value;
                let email = document.getElementById("guestEmail").value;
                let pax = document.getElementById("guestPax").value;
                let remark = document.getElementById("guestRemarks").value;
        
                console.log(name + "," + email + "," + pax + "," + remarks);
        
            });
    });

   