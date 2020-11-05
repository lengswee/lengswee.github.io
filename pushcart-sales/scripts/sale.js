function SaleNow(shopItemcode,shopPrice,shopQuantity, shopTotal){
  let url = 'https://api.sheety.co/0c070c57cf2f4892b8315fb13d8077b7/untitledSpreadsheet/sale';
    let body = {
      sale: {
        itemcode:shopItemcode,
        price:shopPrice,
        quantity:shopQuantity,
        total:shopTotal,
        date:shopDate
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
      console.log(json.sale);
      alert(json.sale.itemcode + "successfully added!");
      
    });
    }

    window.addEventListener("load",function(){
        document.getElementById("saleNow").addEventListener("click", function(){
            let itemcode = document.getElementById("shopItemcode").value;
                let price = document.getElementById("shopPrice").value;
                let quantity = document.getElementById("shopQuantity").value;
                let total = document.getElementById("shopTotal").value;
                let date = document.getElementById("shopDate").value;
        
                BookNow(itemcode, price, quantity, total)
        
            });
    });