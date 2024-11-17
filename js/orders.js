let contenerOrderInfo = document.querySelector("#contenerOrderInfo");
let orderSummaryBackground = document.querySelector(".orderSummaryBackground");
let orderCodeText = document.querySelector(".orderCodeText");
let deleteOrder = document.querySelector('.deleteOrder');
let position = document.querySelectorAll('.position');
let displayInfo = document.querySelector('.display');
let quantity  = 1;
let orderCode;
const textStatus = document.querySelector('.textStatus');
displayInfo.style.display = "none";
deleteOrder.style.display = "none";
contenerOrderInfo.style.display = "none";
orderSummaryBackground.style.display = "none";





 let orderCounter = setInterval(() => {
orderCode = Math.floor(Math.random() * 100);
orderCodeText.innerHTML = `Order code: ${orderCode}`;
},1000);










function handlePositionClick(orderNumber) {
position[orderNumber -1].style.display = "none";
displayInfo.style.display = "none";
deleteOrder.style.display = "block";
contenerOrderInfo.style.display = "block";
const positionElement = document.createElement('div');
const quantityElement = document.createElement('div');
const addQuantityElement = document.createElement('div');
const deleteQuantityElement = document.createElement('div');
quantityElement.id = `quantity${orderNumber}`;
quantityElement.innerHTML = `Quantity <div> 1 </div>`;
addQuantityElement.id = `   Quantity <div> ${orderNumber} </div>`;
deleteQuantityElement.id = `   Quantity <div> ${orderNumber} </div>`;
positionElement.innerHTML = `Numbers order <input type="text" id="numbersOrder" name="numbersOrder" placeholder="Numbers order" value=" ${orderNumber}">`;


addQuantityElement.addEventListener("click", () => {
let quantityId1 =  document.querySelector(`#quantity${orderNumber}`) ;
let quantitValue1 = quantityId1.innerHTML = `Quantity <div> ${quantity ++} </div>`

if(quantityId1.innerHTML <= 0)
  {
  quantityId1.innerHTML = ` Quantity <div> ${1} </div>`;
  }
});

 deleteQuantityElement.addEventListener("click", () => {

 let quantityId =  document.querySelector(`#quantity${orderNumber}`) ;
 let quantitValue = quantityId.innerHTML =  `Quantity <div> ${quantity --} </div>`
if(quantityId.innerHTML <= 0)
    {
      quantityId.innerHTML = ` Quantity <div> ${1} </div>`;
    }
  });
  
  
  deleteOrder.addEventListener("click", () =>
    {
      position[orderNumber -1].style.display = "block";
      document.querySelector('.numbersOrderLocation').removeChild(positionElement);
      document.querySelector('.quantityLocation').removeChild(quantityElement);
      document.querySelector('.addQuantity').removeChild(addQuantityElement);
      document.querySelector('.deleteQuantity').removeChild(deleteQuantityElement);
      deleteOrder.style.display = "none";
      contenerOrderInfo.style.display = "none";
    
    });
    


addQuantityElement.innerHTML = `<br><br>+<br><br>`;
deleteQuantityElement.innerHTML = `<br><br>-<br><br>`;  


document.querySelector('.numbersOrderLocation').appendChild(positionElement);
document.querySelector('.quantityLocation').appendChild(quantityElement);
document.querySelector('.addQuantity').appendChild(addQuantityElement);
document.querySelector('.deleteQuantity').appendChild(deleteQuantityElement);

    
document.querySelector('#ordersForm').addEventListener('submit', async function(e) {

  e.preventDefault();
  clearInterval(orderCounter )
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const addres = document.querySelector('#addres').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

    
            const emailResponse = await Email.send({
              SecureToken: '',
              To: 'reservations@hollapolla.nl',
              From: 'reservations@hollapolla.nl',
                  Subject: `Nowe zamówienie, kod zamówienia: ${orderCode}`,
                  Body: `
                   Kod zamówienia: ${orderCode}<br>
                      Nazwisko: ${name}<br>
                      Telefon: ${phone}<br>
                      Email: ${email}<br>
                      Adres: ${addres}<br>
                       Wiadomość od klienta: ${message}
                <br><br>
                       Danie numer:  ${orderNumber}<br>
                         Ilość: ${quantity}<br><br>
 

    Zgody: <br><br>
                       zgoda0: I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose and to the extent necessary to process the application.<br><br>
zgoda1: I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose of sending me commercial offers for the company's own products electronically.<br><br>
zgoda3: I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose of telephone contact by the company's representatives in matters related to the commercial offer for its own products.

                        
                  `
              });
              if (emailResponse === 'OK') {
                orderSummaryBackground.style.display = "block";
                orderCodeText.style.color = 'greenyellow';
                textStatus.innerHTML = `Your order has been accepted!`;
             
                  setTimeout( () => {
                    orderSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    orderCodeText.style.display = "none";
                   
                  },10000)
              } else {
                orderSummaryBackground.style.display = "block";
                  textStatus.innerHTML = 'Failed to send the message. This may be due to too many messages being sent at once. Please send your message via rezerwacjehollapolla@gmail.com ';
                  textStatus.style.color = 'red';
                  orderCodeText.style.display = "none";
                  setTimeout( () => {
                    orderSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    orderCodeText.style.display = "none";
                   
                  },10000)
              }
                      
});


};





document.querySelectorAll('.position').forEach((position, index) => {
  position.addEventListener("click", () => handlePositionClick(   index +1 ));


});



