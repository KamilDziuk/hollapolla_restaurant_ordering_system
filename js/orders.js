let contenerOrderInfo = document.querySelector("#contenerOrderInfo");
let orderSummaryBackground = document.querySelector(".orderSummaryBackground");
let codeNumber = document.querySelector(".codeNumber");
let position = document.querySelectorAll('.position');

let positionClickSttus = false;








let displayInfo = document.querySelector('.display');

let orderCodeValue;
const textStatus = document.querySelector('.textStatus');

contenerOrderInfo.style.display = "none";
orderSummaryBackground.style.display = "none";





 let orderCounter = setInterval(() => {
orderCodeValue = Math.floor(Math.random() * 100);
codeNumber.innerHTML = `Order code: ${orderCodeValue}`;
},1000);









 async   function handlePositionClick(orderNumber) {


position[orderNumber -1].style.display = "none";
clearInterval(orderCounter);

contenerOrderInfo.style.display = "block";

const positionElement = document.createElement('div');



const quantityElement = document.createElement('div');


positionElement.innerHTML = ` <input type="text" id="numbersOrder" name="numbersOrder" placeholder="Numbers order" value=" ${orderNumber}">`;

quantityElement.innerHTML = ` <input type="number" id="quantity${orderNumber}"  value="1">`;
  
  




document.querySelector('.numbersOrderLocation').appendChild(positionElement);
document.querySelector('.quantityLocation').appendChild(quantityElement);





let date = new Date();
  
let currentDateResult =  date.getFullYear() + "-" +
("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}


let h = addZero(date.getHours());
let m = addZero(date.getMinutes());
let s = addZero(date.getSeconds());
let fullTime = h + ":" + m + ":" + s;
document.querySelector('#submit').addEventListener('click',  () => {

let order_date = currentDateResult;
let order_time = fullTime;
let first_name = document.querySelector("#first_name").value;
let email = document.querySelector("#email").value;
let addres = document.querySelector("#addres").value;
let message = document.querySelector("#message").value;


let quantity = document.querySelector(`#quantity${orderNumber}`).value;




let formData = new FormData();


formData.append('codeNumber',orderCodeValue);
 formData.append('orderNumber',orderNumber);


    formData.append('quantity', quantity);

formData.append('first_name',first_name);
  formData.append('message',message);
formData.append('email',email);
formData.append('addres',addres);
formData.append('order_date',order_date);
formData.append('order_time',order_time);

    fetch("orders_db/adding_orders.php",{

  method: "POST",
  body: formData
})
})

}








 

  
acceptContent = () => {
document.querySelectorAll('.position').forEach( (position, index) => {


  
  document.querySelector('#submit').addEventListener('click',  () => {
 

      if(positionClickSttus === true || displayInfo.innerHTML === !"To send an order, click on the name of the dish on the menu or enter the dish number in the message.")
        {

  clearInterval(orderCounter);


  orderSummaryBackground.style.display = "block";
  codeNumber.style.color = 'greenyellow';
  textStatus.innerHTML = `Your order has been accepted!`;



  setTimeout( () => {
  orderSummaryBackground.style.display = "none";
  textStatus.style.display = "none";
  codeNumber.style.display = "none";
  },10000)

                // } else {
                //   orderSummaryBackground.style.display = "block";
                //     textStatus.innerHTML = 'Failed to send the message. This may be due to too many messages being sent at once. Please send your message via rezerwacjehollapolla@gmail.com ';
                //     textStatus.style.color = 'red';
                //     codeNumber.style.display = "none";
                //     setTimeout( () => {
                //       orderSummaryBackground.style.display = "none";
                //       textStatus.style.display = "none";
                //       codeNumber.style.display = "none";
                     
                //     },10000)
                
              }
              else
              {
                displayInfo.style.display = "black";
              }              
  })



  position.addEventListener("click",  ()  => 
    {

      displayInfo.style.display = "none";
        handlePositionClick(   index +1 );
   return   positionClickSttus = true;
    })
});
}

acceptContent();


  
//   if(positionClickSttus === false)
//     {
//       displayInfo.style.display = "block";
//     }

