let contenerOrderInfo = document.querySelector("#contenerOrderInfo");
let orderSummaryBackground = document.querySelector(".orderSummaryBackground");
let orderCodeText = document.querySelector(".orderCodeText");
let orderCode ;
contenerOrderInfo.style.display = "none";
orderSummaryBackground.style.display = "none";


 let orderCounter = setInterval(() => {
 orderCode = Math.floor(Math.random() * 100);

orderCodeText.innerHTML = `Order code: ${orderCode}`;

},1000);






// Dish name start
const position_0 = document.querySelector('.position_0');
const position_1 = document.querySelector('.position_1');
const position_2 = document.querySelector('.position_2');
const position_3 = document.querySelector('.position_3');
const position_4 = document.querySelector('.position_4');
const position_5 = document.querySelector('.position_5');
const position_6 = document.querySelector('.position_6');
const position_7 = document.querySelector('.position_7');
const position_8 = document.querySelector('.position_8');
const position_9 = document.querySelector('.position_9');
const position_10 = document.querySelector('.position_10');
const position_11 = document.querySelector('.position_11');
const position_12 = document.querySelector('.position_12');
const position_13 = document.querySelector('.position_13');
const position_14 = document.querySelector('.position_14');
const position_15 = document.querySelector('.position_15');
const position_16 = document.querySelector('.position_16');
const position_17 = document.querySelector('.position_17');
const position_18 = document.querySelector('.position_18');
const position_19 = document.querySelector('.position_19');
// Dish name end

// A function responsible for selecting a specific dish name (async)
position_0.addEventListener("click", async () => {


  contenerOrderInfo.style.display = "block";
  // Creating a new div for input start
  let position0Element = document.createElement('div');
  let quantity0Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position0Value = document.createElement('div');
  let quantity0Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position0Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder0" name="numbersOrder0" placeholder="Numbers order" value="1">`;
  quantity0Element.innerHTML = `Quantity: <br><input type="number" id="quantity0" name="quantity0" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation0').appendChild(position0Element);
  document.querySelector('.quantityLocation0').appendChild(quantity0Element);
  document.querySelector('.position0Value').appendChild(position0Value);
  document.querySelector('.quantity0Value').appendChild(quantity0Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement0 = position0Element.querySelector('input');

  // Displaying input value
  position0Value.innerHTML = `${inputElement0.value}`;
});

// A function responsible for selecting a specific dish name (async)
position_1.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position1Element = document.createElement('div');
  let quantity1Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position1Value = document.createElement('div');
  let quantity1Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position1Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder1" name="numbersOrder1" placeholder="Numbers order" value="2">`;
  quantity1Element.innerHTML = `Quantity: <br><input type="number" id="quantity1" name="quantity1" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation1').appendChild(position1Element);
  document.querySelector('.quantityLocation1').appendChild(quantity1Element);
  document.querySelector('.position1Value').appendChild(position1Value);
  document.querySelector('.quantity1Value').appendChild(quantity1Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement1 = position1Element.querySelector('input');

  // Displaying input value
  position1Value.innerHTML = `${inputElement1.value}`;
});


// A function responsible for selecting a specific dish name (async)
position_2.addEventListener("click", async () => {


  contenerOrderInfo.style.display = "block";
  // Creating a new div for input start
  let position2Element = document.createElement('div');
  let quantity2Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position2Value = document.createElement('div');
  let quantity2Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position2Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder2" name="numbersOrder2" placeholder="Numbers order" value="3">`;
  quantity2Element.innerHTML = `Quantity: <br><input type="number" id="quantity2" name="quantity2" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation2').appendChild(position2Element);
  document.querySelector('.quantityLocation2').appendChild(quantity2Element);
  document.querySelector('.position2Value').appendChild(position2Value);
  document.querySelector('.quantity2Value').appendChild(quantity2Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement2 = position2Element.querySelector('input');

  // Displaying input value
  position2Value.innerHTML = `${inputElement2.value}`;
});


position_3.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position3Element = document.createElement('div');
  let quantity3Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position3Value = document.createElement('div');
  let quantity3Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position3Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder3" name="numbersOrder3" placeholder="Numbers order" value="4">`;
  quantity3Element.innerHTML = `Quantity: <br><input type="number" id="quantity3" name="quantity3" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation3').appendChild(position3Element);
  document.querySelector('.quantityLocation3').appendChild(quantity3Element);
  document.querySelector('.position3Value').appendChild(position3Value);
  document.querySelector('.quantity3Value').appendChild(quantity3Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement3 = position3Element.querySelector('input');

  // Displaying input value
  position3Value.innerHTML = `${inputElement3.value}`;
});


position_4.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position4Element = document.createElement('div');
  let quantity4Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position4Value = document.createElement('div');
  let quantity4Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position4Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder4" name="numbersOrder4" placeholder="Numbers order" value="5">`;
  quantity4Element.innerHTML = `Quantity: <br><input type="number" id="quantity4" name="quantity4" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation4').appendChild(position4Element);
  document.querySelector('.quantityLocation4').appendChild(quantity4Element);
  document.querySelector('.position4Value').appendChild(position4Value);
  document.querySelector('.quantity4Value').appendChild(quantity4Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement4 = position4Element.querySelector('input');

  // Displaying input value
  position4Value.innerHTML = `${inputElement4.value}`;
});


position_5.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position5Element = document.createElement('div');
  let quantity5Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position5Value = document.createElement('div');
  let quantity5Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position5Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder5" name="numbersOrder5" placeholder="Numbers order" value="6">`;
  quantity5Element.innerHTML = `Quantity: <br><input type="number" id="quantity5" name="quantity5" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation5').appendChild(position5Element);
  document.querySelector('.quantityLocation5').appendChild(quantity5Element);
  document.querySelector('.position5Value').appendChild(position5Value);
  document.querySelector('.quantity5Value').appendChild(quantity5Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement5 = position5Element.querySelector('input');

  // Displaying input value
  position5Value.innerHTML = `${inputElement5.value}`;
});

position_6.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position6Element = document.createElement('div');
  let quantity6Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position6Value = document.createElement('div');
  let quantity6Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position6Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder6" name="numbersOrder6" placeholder="Numbers order" value="7">`;
  quantity6Element.innerHTML = `Quantity: <br><input type="number" id="quantity6" name="quantity6" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation6').appendChild(position6Element);
  document.querySelector('.quantityLocation6').appendChild(quantity6Element);
  document.querySelector('.position6Value').appendChild(position6Value);
  document.querySelector('.quantity6Value').appendChild(quantity6Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement6 = position6Element.querySelector('input');

  // Displaying input value
  position6Value.innerHTML = `${inputElement6.value}`;
});


position_7.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position7Element = document.createElement('div');
  let quantity7Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position7Value = document.createElement('div');
  let quantity7Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position7Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder7" name="numbersOrder7" placeholder="Numbers order" value="8">`;
  quantity7Element.innerHTML = `Quantity: <br><input type="number" id="quantity7" name="quantity7" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation7').appendChild(position7Element);
  document.querySelector('.quantityLocation7').appendChild(quantity7Element);
  document.querySelector('.position7Value').appendChild(position7Value);
  document.querySelector('.quantity7Value').appendChild(quantity7Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement7 = position7Element.querySelector('input');

  // Displaying input value
  position7Value.innerHTML = `${inputElement7.value}`;
});

position_8.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position8Element = document.createElement('div');
  let quantity8Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position8Value = document.createElement('div');
  let quantity8Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position8Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder8" name="numbersOrder8" placeholder="Numbers order" value="9">`;
  quantity8Element.innerHTML = `Quantity: <br><input type="number" id="quantity8" name="quantity8" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation8').appendChild(position8Element);
  document.querySelector('.quantityLocation8').appendChild(quantity8Element);
  document.querySelector('.position8Value').appendChild(position8Value);
  document.querySelector('.quantity8Value').appendChild(quantity8Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement8 = position8Element.querySelector('input');

  // Displaying input value
  position8Value.innerHTML = `${inputElement8.value}`;
});

position_9.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position9Element = document.createElement('div');
  let quantity9Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position9Value = document.createElement('div');
  let quantity9Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position9Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder9" name="numbersOrder9" placeholder="Numbers order" value="10">`;
  quantity9Element.innerHTML = `Quantity: <br><input type="number" id="quantity9" name="quantity9" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation9').appendChild(position9Element);
  document.querySelector('.quantityLocation9').appendChild(quantity9Element);
  document.querySelector('.position9Value').appendChild(position9Value);
  document.querySelector('.quantity9Value').appendChild(quantity9Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement9 = position9Element.querySelector('input');

  // Displaying input value
  position9Value.innerHTML = `${inputElement9.value}`;
});

position_10.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position10Element = document.createElement('div');
  let quantity10Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position10Value = document.createElement('div');
  let quantity10Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position10Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder10" name="numbersOrder10" placeholder="Numbers order" value="11">`;
  quantity10Element.innerHTML = `Quantity: <br><input type="number" id="quantity10" name="quantity10" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation10').appendChild(position10Element);
  document.querySelector('.quantityLocation10').appendChild(quantity10Element);
  document.querySelector('.position10Value').appendChild(position10Value);
  document.querySelector('.quantity10Value').appendChild(quantity10Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement10 = position10Element.querySelector('input');

  // Displaying input value
  position10Value.innerHTML = `${inputElement10.value}`;
});


position_11.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position11Element = document.createElement('div');
  let quantity11Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position11Value = document.createElement('div');
  let quantity11Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position11Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder11" name="numbersOrder11" placeholder="Numbers order" value="12">`;
  quantity11Element.innerHTML = `Quantity: <br><input type="number" id="quantity11" name="quantity11" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation11').appendChild(position11Element);
  document.querySelector('.quantityLocation11').appendChild(quantity11Element);
  document.querySelector('.position11Value').appendChild(position11Value);
  document.querySelector('.quantity11Value').appendChild(quantity11Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement11 = position11Element.querySelector('input');

  // Displaying input value
  position11Value.innerHTML = `${inputElement11.value}`;
});


position_12.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position12Element = document.createElement('div');
  let quantity12Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position12Value = document.createElement('div');
  let quantity12Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position12Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder12" name="numbersOrder12" placeholder="Numbers order" value="13">`;
  quantity12Element.innerHTML = `Quantity: <br><input type="number" id="quantity12" name="quantity12" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation12').appendChild(position12Element);
  document.querySelector('.quantityLocation12').appendChild(quantity12Element);
  document.querySelector('.position12Value').appendChild(position12Value);
  document.querySelector('.quantity12Value').appendChild(quantity12Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement12 = position12Element.querySelector('input');

  // Displaying input value
  position12Value.innerHTML = `${inputElement12.value}`;
});


position_13.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position13Element = document.createElement('div');
  let quantity13Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position13Value = document.createElement('div');
  let quantity13Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position13Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder13" name="numbersOrder13" placeholder="Numbers order" value="14">`;
  quantity13Element.innerHTML = `Quantity: <br><input type="number" id="quantity13" name="quantity13" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation13').appendChild(position13Element);
  document.querySelector('.quantityLocation13').appendChild(quantity13Element);
  document.querySelector('.position13Value').appendChild(position13Value);
  document.querySelector('.quantity13Value').appendChild(quantity13Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement13 = position13Element.querySelector('input');

  // Displaying input value
  position13Value.innerHTML = `${inputElement13.value}`;
});

position_14.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position14Element = document.createElement('div');
  let quantity14Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position14Value = document.createElement('div');
  let quantity14Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position14Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder14" name="numbersOrder14" placeholder="Numbers order" value="15">`;
  quantity14Element.innerHTML = `Quantity: <br><input type="number" id="quantity14" name="quantity14" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation14').appendChild(position14Element);
  document.querySelector('.quantityLocation14').appendChild(quantity14Element);
  document.querySelector('.position14Value').appendChild(position14Value);
  document.querySelector('.quantity14Value').appendChild(quantity14Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement14 = position14Element.querySelector('input');

  // Displaying input value
  position14Value.innerHTML = `${inputElement14.value}`;
});


position_15.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position15Element = document.createElement('div');
  let quantity15Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position15Value = document.createElement('div');
  let quantity15Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position15Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder15" name="numbersOrder15" placeholder="Numbers order" value="16">`;
  quantity15Element.innerHTML = `Quantity: <br><input type="number" id="quantity15" name="quantity15" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation15').appendChild(position15Element);
  document.querySelector('.quantityLocation15').appendChild(quantity15Element);
  document.querySelector('.position15Value').appendChild(position15Value);
  document.querySelector('.quantity15Value').appendChild(quantity15Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement15 = position15Element.querySelector('input');

  // Displaying input value
  position15Value.innerHTML = `${inputElement15.value}`;
});

position_16.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position16Element = document.createElement('div');
  let quantity16Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position16Value = document.createElement('div');
  let quantity16Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position16Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder16" name="numbersOrder16" placeholder="Numbers order" value="17">`;
  quantity16Element.innerHTML = `Quantity: <br><input type="number" id="quantity16" name="quantity16" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation16').appendChild(position16Element);
  document.querySelector('.quantityLocation16').appendChild(quantity16Element);
  document.querySelector('.position16Value').appendChild(position16Value);
  document.querySelector('.quantity16Value').appendChild(quantity16Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement16 = position16Element.querySelector('input');

  // Displaying input value
  position16Value.innerHTML = `${inputElement16.value}`;
});

position_17.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position17Element = document.createElement('div');
  let quantity17Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position17Value = document.createElement('div');
  let quantity17Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position17Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder17" name="numbersOrder17" placeholder="Numbers order" value="18">`;
  quantity17Element.innerHTML = `Quantity: <br><input type="number" id="quantity17" name="quantity17" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation17').appendChild(position17Element);
  document.querySelector('.quantityLocation17').appendChild(quantity17Element);
  document.querySelector('.position17Value').appendChild(position17Value);
  document.querySelector('.quantity17Value').appendChild(quantity17Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement17 = position17Element.querySelector('input');

  // Displaying input value
  position17Value.innerHTML = `${inputElement17.value}`;
});

position_18.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position18Element = document.createElement('div');
  let quantity18Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position18Value = document.createElement('div');
  let quantity18Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position18Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder18" name="numbersOrder18" placeholder="Numbers order" value="19">`;
  quantity18Element.innerHTML = `Quantity: <br><input type="number" id="quantity18" name="quantity18" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation18').appendChild(position18Element);
  document.querySelector('.quantityLocation18').appendChild(quantity18Element);
  document.querySelector('.position18Value').appendChild(position18Value);
  document.querySelector('.quantity18Value').appendChild(quantity18Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement18 = position18Element.querySelector('input');

  // Displaying input value
  position18Value.innerHTML = `${inputElement18.value}`;
});

position_19.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position19Element = document.createElement('div');
  let quantity19Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position19Value = document.createElement('div');
  let quantity19Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position19Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder19" name="numbersOrder19" placeholder="Numbers order" value="20">`;
  quantity19Element.innerHTML = `Quantity: <br><input type="number" id="quantity19" name="quantity19" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation19').appendChild(position19Element);
  document.querySelector('.quantityLocation19').appendChild(quantity19Element);
  document.querySelector('.position19Value').appendChild(position19Value);
  document.querySelector('.quantity19Value').appendChild(quantity19Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement19 = position19Element.querySelector('input');

  // Displaying input value
  position19Value.innerHTML = `${inputElement19.value}`;
});
const textStatus = document.querySelector('.textStatus');
document.querySelector('#reservationForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  clearInterval(orderCounter )
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const addres = document.querySelector('#addres').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  

  
  if (name && phone && addres  && email) {
      const formData = new FormData();
      // quantityLocation0
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('addres', addres);
      formData.append('orderCode', orderCode);

      
      formData.append('position0Value', document.querySelector('#numbersOrder0').value);
      formData.append('quantity0Value', document.querySelector('#quantity0').value);
      formData.append('position1Value', document.querySelector('#numbersOrder1').value);
      formData.append('quantity1Value', document.querySelector('#quantity1').value);
      formData.append('position2Value', document.querySelector('#numbersOrder2').value);
      formData.append('quantity2Value', document.querySelector('#quantity2').value);
      formData.append('position3Value', document.querySelector('#numbersOrder3').value);
      formData.append('quantity3Value', document.querySelector('#quantity3').value);
      formData.append('position4Value', document.querySelector('#numbersOrder4').value);
      formData.append('quantity4Value', document.querySelector('#quantity4').value);
      formData.append('position5Value', document.querySelector('#numbersOrder5').value);
      formData.append('quantity5Value', document.querySelector('#quantity5').value);
      formData.append('position6Value', document.querySelector('#numbersOrder6').value);
      formData.append('quantity6Value', document.querySelector('#quantity6').value);
          formData.append('position7Value', document.querySelector('#numbersOrder7').value);
      formData.append('quantity7Value', document.querySelector('#quantity7').value);
              formData.append('position8Value', document.querySelector('#numbersOrder8').value);
      formData.append('quantity8Value', document.querySelector('#quantity8').value);

              formData.append('position9Value', document.querySelector('#numbersOrder9').value);
      formData.append('quantity9Value', document.querySelector('#quantity9').value);


      
              formData.append('position10Value', document.querySelector('#numbersOrder10').value);
      formData.append('quantity10Value', document.querySelector('#quantity10').value);

           formData.append('position11Value', document.querySelector('#numbersOrder11').value);
      formData.append('quantity11Value', document.querySelector('#quantity11').value);

            formData.append('position12Value', document.querySelector('#numbersOrder12').value);
      formData.append('quantity12Value', document.querySelector('#quantity12').value);


            formData.append('position13Value', document.querySelector('#numbersOrder13').value);
      formData.append('quantity13Value', document.querySelector('#quantity13').value);

                  formData.append('position14Value', document.querySelector('#numbersOrder14').value);
      formData.append('quantity14Value', document.querySelector('#quantity14').value);


      formData.append('position15Value', document.querySelector('#numbersOrder15').value);
      formData.append('quantity15Value', document.querySelector('#quantity15').value);

      formData.append('position16Value', document.querySelector('#numbersOrder16').value);
      formData.append('quantity16Value', document.querySelector('#quantity16').value);

      formData.append('position17Value', document.querySelector('#numbersOrder17').value);
      formData.append('quantity17Value', document.querySelector('#quantity17').value);

      formData.append('position18Value', document.querySelector('#numbersOrder18').value);
      formData.append('quantity18Value', document.querySelector('#quantity18').value);

      formData.append('position19Value', document.querySelector('#numbersOrder19').value);
      formData.append('quantity19Value', document.querySelector('#quantity19').value);
      formData.append('message', message);

      try {
          const response = await fetch('orderConfiguration.php', {
              method: 'POST',
              body: formData
          });
          const data = await response.text();

          if (!data.includes('This date is already booked')) {

    
              const emailResponse = await Email.send({
                  SecureToken: '',
                  To: '',
                  From: '',
                  Subject: `Nowe zamówienie numer: ${orderCode}`,
                  Body: `
                      Imię: ${name}<br><br>
                      Telefon: ${phone}<br><br>
                      Email: ${email}<br><br>
                      Adres: ${addres}<br><br>
                      Kod zamówenia: ${orderCode} <br><br>
                         Wiadomość od klienta: ${message}<br><br>
                      Numer zamówienia 01: ${document.querySelector('#numbersOrder0').value}<br><br>
                        Ilość 01:  ${document.querySelector('#quantity0').value}<br><br><br><br>
                      Numer zamówienia 02: ${document.querySelector('#numbersOrder1').value}<br><br>
                        Ilość 02:  ${document.querySelector('#quantity1').value}<br><br><br><br>
                           Numer zamówienia 03: ${document.querySelector('#numbersOrder2').value}<br><br>
                        Ilość 03:  ${document.querySelector('#quantity2').value}<br><br><br><br>
                           Numer zamówienia 04: ${document.querySelector('#numbersOrder3').value}<br><br>
                        Ilość 04:  ${document.querySelector('#quantity3').value}<br><br><br><br>
                         Numer zamówienia 05: ${document.querySelector('#numbersOrder4').value}<br><br>
                        Ilość 05:  ${document.querySelector('#quantity4').value}<br><br><br><br>
                                  Numer zamówienia 06: ${document.querySelector('#numbersOrder5').value}<br><br>
                        Ilość 06:  ${document.querySelector('#quantity5').value}<br><br><br><br>
                                      Numer zamówienia 07: ${document.querySelector('#numbersOrder6').value}<br><br>
                        Ilość 07:  ${document.querySelector('#quantity6').value}<br><br><br><br>
                                      Numer zamówienia 08: ${document.querySelector('#numbersOrder7').value}<br><br>
                        Ilość 08:  ${document.querySelector('#quantity7').value}<br><br><br><br>
                                                 Numer zamówienia 09: ${document.querySelector('#numbersOrder8').value}<br><br>
                        Ilość 09:  ${document.querySelector('#quantity8').value}<br><br><br><br>

                                                Numer zamówienia 10: ${document.querySelector('#numbersOrder9').value}<br><br>
                        Ilość 10:  ${document.querySelector('#quantity9').value}<br><br><br><br>

                                                   Numer zamówienia 11: ${document.querySelector('#numbersOrder10').value}<br><br>
                        Ilość 11:  ${document.querySelector('#quantity10').value}<br><br><br><br>

                                                     Numer zamówienia 12: ${document.querySelector('#numbersOrder11').value}<br><br>
                        Ilość 12:  ${document.querySelector('#quantity11').value}<br><br><br><br>
                                                      Numer zamówienia 13: ${document.querySelector('#numbersOrder12').value}<br><br>
                        Ilość 13:  ${document.querySelector('#quantity12').value}<br><br><br><br>


                                                           Numer zamówienia 14: ${document.querySelector('#numbersOrder13').value}<br><br>
                        Ilość 14:  ${document.querySelector('#quantity13').value}<br><br><br><br>
                        

                                                                          Numer zamówienia 15: ${document.querySelector('#numbersOrder14').value}<br><br>
                        Ilość 15:  ${document.querySelector('#quantity14').value}<br><br><br><br>

                                                                                             Numer zamówienia 16: ${document.querySelector('#numbersOrder15').value}<br><br>
                        Ilość 16:  ${document.querySelector('#quantity15').value}<br><br><br><br>

                                                                                     Numer zamówienia 17: ${document.querySelector('#numbersOrder16').value}<br><br>
                        Ilość 17:  ${document.querySelector('#quantity16').value}<br><br><br><br>

                        
                                                                                     Numer zamówienia 18: ${document.querySelector('#numbersOrder17').value}<br><br>
                        Ilość 18:  ${document.querySelector('#quantity17').value}<br><br><br><br>

                                                                                       Numer zamówienia 19: ${document.querySelector('#numbersOrder18').value}<br><br>
                        Ilość 19:  ${document.querySelector('#quantity18').value}<br><br><br><br>

                        
                                                                                       Numer zamówienia 20: ${document.querySelector('#numbersOrder19').value}<br><br>
                        Ilość 20:  ${document.querySelector('#quantity19').value}<br><br><br><br>
                   
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
                   
                  },5000)
              } else {
                  textStatus.innerHTML = '<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send your message via hollapolla66@gmail.com <br><br>';
                  textStatus.style.color = 'red';
                
              }
          } else if (data.includes('This date is already booked')) {
              textStatus.innerHTML = 'This date is already booked';
              textStatus.style.color = 'red';
          }
      } catch (error) {
          console.error('Error:', error);
          textStatus.innerHTML = 'An error occurred while sending the reservation.';
          textStatus.style.color = 'red';
      }
  }
});





