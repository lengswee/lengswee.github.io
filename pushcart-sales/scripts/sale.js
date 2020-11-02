function BookNow(guestName,guestEmail,guestPax, guestRemarks){
    let url = 'https://api.sheety.co/ee581d1468ba79b9f91410ef97673070/bookingApp/booking';
    let body = {
      booking: {
        itemcode:guestName,
        price:guestEmail,
        quantity:guestPax,
        total: guestRemarks
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
      alert(json.booking.name + "successfully added!");
      
    });
    }

    window.addEventListener("load",function(){
        document.getElementById("bookNow").addEventListener("click", function(){
            let itemcode = document.getElementById("guestName").value;
                let price = document.getElementById("guestEmail").value;
                let quantity = document.getElementById("guestPax").value;
                let total = document.getElementById("guestRemarks").value;
        
                BookNow(itemcode, price, quantity, total)
        
            });
    });