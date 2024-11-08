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
const position_19A = document.querySelector('.position_19A');
const position_19B = document.querySelector('.position_19B');
const position_19C = document.querySelector('.position_19C');
const position_20 = document.querySelector('.position_20');
const position_21 = document.querySelector('.position_21');
const position_22 = document.querySelector('.position_22');
const position_23 = document.querySelector('.position_23');
const position_24 = document.querySelector('.position_24');
const position_25 = document.querySelector('.position_25');
const position_26 = document.querySelector('.position_26');
const position_27 = document.querySelector('.position_27');
const position_28 = document.querySelector('.position_28');
const position_29 = document.querySelector('.position_29');
const position_30 = document.querySelector('.position_30');
const position_31 = document.querySelector('.position_31');
const position_32 = document.querySelector('.position_32');
const position_33 = document.querySelector('.position_33');
const position_34 = document.querySelector('.position_34');
const position_35 = document.querySelector('.position_35');
const position_36 = document.querySelector('.position_36');
const position_37 = document.querySelector('.position_37');
const position_38 = document.querySelector('.position_38');
const position_39 = document.querySelector('.position_39');
const position_40 = document.querySelector('.position_40');
const position_41 = document.querySelector('.position_41');
const position_42 = document.querySelector('.position_42');
const position_43 = document.querySelector('.position_43');
const position_44 = document.querySelector('.position_44');
const position_45 = document.querySelector('.position_45');
const position_46 = document.querySelector('.position_46');
const position_47 = document.querySelector('.position_47');
const position_48 = document.querySelector('.position_48');
const position_49 = document.querySelector('.position_49');
const position_50 = document.querySelector('.position_50');
const position_51 = document.querySelector('.position_51');
const position_52 = document.querySelector('.position_52');
const position_53 = document.querySelector('.position_53');
const position_54 = document.querySelector('.position_54');
const position_55 = document.querySelector('.position_55');
const position_56 = document.querySelector('.position_56');
const position_57 = document.querySelector('.position_57');
const position_58 = document.querySelector('.position_58');
const position_59 = document.querySelector('.position_59');
const position_60 = document.querySelector('.position_60');
const position_61 = document.querySelector('.position_61');
const position_62 = document.querySelector('.position_62');
const position_63 = document.querySelector('.position_63');
const position_64 = document.querySelector('.position_64');
const position_65 = document.querySelector('.position_65');
const position_66 = document.querySelector('.position_66');


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
  position0Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder0" name="numbersOrder0" placeholder="Numbers order" value="Order number: 1,">`;
  quantity0Element.innerHTML = `Quantity: <input type="text" id="quantity0" name="quantity0"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position1Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder1" name="numbersOrder1" placeholder="Numbers order" value="Order number: 2,">`;
  quantity1Element.innerHTML = `Quantity: <input type="text" id="quantity1" name="quantity1"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position2Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder2" name="numbersOrder2" placeholder="Numbers order" value="Order number: 3,">`;
  quantity2Element.innerHTML = `Quantity: <input type="text" id="quantity2" name="quantity2"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position3Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder3" name="numbersOrder3" placeholder="Numbers order" value="Order number: 4,">`;
  quantity3Element.innerHTML = `Quantity: <input type="text" id="quantity3" name="quantity3"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position4Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder4" name="numbersOrder4" placeholder="Numbers order" value="Order number: 5,">`;
  quantity4Element.innerHTML = `Quantity: <input type="text" id="quantity4" name="quantity4"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position5Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder5" name="numbersOrder5" placeholder="Numbers order" value="Order number: 6,">`;
  quantity5Element.innerHTML = `Quantity: <input type="text" id="quantity5" name="quantity5"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position6Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder6" name="numbersOrder6" placeholder="Numbers order" value="Order number: 7,">`;
  quantity6Element.innerHTML = `Quantity: <input type="text" id="quantity6" name="quantity6"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position7Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder7" name="numbersOrder7" placeholder="Numbers order" value="Order number: 8,">`;
  quantity7Element.innerHTML = `Quantity: <input type="text" id="quantity7" name="quantity7"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position8Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder8" name="numbersOrder8" placeholder="Numbers order" value="Order number: 9,">`;
  quantity8Element.innerHTML = `Quantity: <input type="text" id="quantity8" name="quantity8"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position9Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder9" name="numbersOrder9" placeholder="Numbers order" value="Order number: 10,">`;
  quantity9Element.innerHTML = `Quantity: <input type="text" id="quantity9" name="quantity9"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position10Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder10" name="numbersOrder10" placeholder="Numbers order" value="Order number: 11,">`;
  quantity10Element.innerHTML = `Quantity: <input type="text" id="quantity10" name="quantity10"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position11Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder11" name="numbersOrder11" placeholder="Numbers order" value="Order number: 12,">`;
  quantity11Element.innerHTML = `Quantity: <input type="text" id="quantity11" name="quantity11"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position12Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder12" name="numbersOrder12" placeholder="Numbers order" value="Order number: 13,">`;
  quantity12Element.innerHTML = `Quantity: <input type="text" id="quantity12" name="quantity12"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position13Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder13" name="numbersOrder13" placeholder="Numbers order" value="Order number: 14,">`;
  quantity13Element.innerHTML = `Quantity: <input type="text" id="quantity13" name="quantity13"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position14Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder14" name="numbersOrder14" placeholder="Numbers order" value="Order number: 15,">`;
  quantity14Element.innerHTML = `Quantity: <input type="text" id="quantity14" name="quantity14"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position15Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder15" name="numbersOrder15" placeholder="Numbers order" value="Order number: 16,">`;
  quantity15Element.innerHTML = `Quantity: <input type="text" id="quantity15" name="quantity15"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position16Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder16" name="numbersOrder16" placeholder="Numbers order" value="Order number: 17,">`;
  quantity16Element.innerHTML = `Quantity: <input type="text" id="quantity16" name="quantity16"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position17Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder17" name="numbersOrder17" placeholder="Numbers order" value="Order number: 18,">`;
  quantity17Element.innerHTML = `Quantity: <input type="text" id="quantity17" name="quantity17"  placeholder="Quantity"  value=" Quantity: 1;">`;
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
  position18Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder18" name="numbersOrder18" placeholder="Numbers order" value="Order number: 19,">`;
  quantity18Element.innerHTML = `Quantity: <input type="text" id="quantity18" name="quantity18"  placeholder="Quantity"  value=" Quantity: 1;">`;
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


position_19A.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";

 
  let position19AElement = document.createElement('div');
  let quantity19AElement = document.createElement('div');
  let position19AValue = document.createElement('div');
  let quantity19AValue = document.createElement('div');

  
  position19AElement.innerHTML = `Numbers order: <input type="text" id="numbersOrder19A" name="numbersOrder19A" placeholder="Numbers order" value="Order number:20A,">`;
  quantity19AElement.innerHTML = `Quantity: <input type="text" id="quantity19A" name="quantity19A" placeholder="Quantity" value="Quantity: 1;">`;

  document.querySelector('.numbersOrderLocation19A').appendChild(position19AElement);
  document.querySelector('.quantityLocation19A').appendChild(quantity19AElement);
  document.querySelector('.position19AValue').appendChild(position19AValue);
  document.querySelector('.quantity19AValue').appendChild(quantity19AValue);


  let inputElement19A = position19AElement.querySelector('input');
  position19AValue.innerHTML = `${inputElement19A.value}`;
});


position_19B.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";


  let position19BElement = document.createElement('div');
  let quantity19BElement = document.createElement('div');
  let position19BValue = document.createElement('div');
  let quantity19BValue = document.createElement('div');


  position19BElement.innerHTML = `Numbers order: <input type="text" id="numbersOrder19B" name="numbersOrder19B" placeholder="Numbers order" value="Order number:20B,">`;
  quantity19BElement.innerHTML = `Quantity: <input type="text" id="quantity19B" name="quantity19B" placeholder="Quantity" value="Quantity: 1;">`;


  document.querySelector('.numbersOrderLocation19B').appendChild(position19BElement);
  document.querySelector('.quantityLocation19B').appendChild(quantity19BElement);
  document.querySelector('.position19BValue').appendChild(position19BValue);
  document.querySelector('.quantity19BValue').appendChild(quantity19BValue);


  let inputElement19B = position19BElement.querySelector('input');
  position19BValue.innerHTML = `${inputElement19B.value}`;
});


position_19C.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";

  let position19CElement = document.createElement('div');
  let quantity19CElement = document.createElement('div');
  let position19CValue = document.createElement('div');
  let quantity19CValue = document.createElement('div');


  position19CElement.innerHTML = `Numbers order: <input type="text" id="numbersOrder19C" name="numbersOrder19C" placeholder="Numbers order" value="Order number:20C,">`;
  quantity19CElement.innerHTML = `Quantity: <input type="text" id="quantity19C" name="quantity19C" placeholder="Quantity" value="Quantity: 1;">`;

  document.querySelector('.numbersOrderLocation19C').appendChild(position19CElement);
  document.querySelector('.quantityLocation19C').appendChild(quantity19CElement);
  document.querySelector('.position19CValue').appendChild(position19CValue);
  document.querySelector('.quantity19CValue').appendChild(quantity19CValue);


  let inputElement19C = position19CElement.querySelector('input');
  position19CValue.innerHTML = `${inputElement19C.value}`;
});


position_20.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position20Element = document.createElement('div');
  let quantity20Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position20Value = document.createElement('div');
  let quantity20Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position20Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder20" name="numbersOrder20" placeholder="Numbers order" value="Order number: 21,">`;
  quantity20Element.innerHTML = `Quantity: <input type="text" id="quantity20" name="quantity20"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation20').appendChild(position20Element);
  document.querySelector('.quantityLocation20').appendChild(quantity20Element);
  document.querySelector('.position20Value').appendChild(position20Value);
  document.querySelector('.quantity20Value').appendChild(quantity20Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement20 = position20Element.querySelector('input');

  // Displaying input value
  position20Value.innerHTML = `${inputElement20.value}`;
});


position_21.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position21Element = document.createElement('div');
  let quantity21Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position21Value = document.createElement('div');
  let quantity21Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position21Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder21" name="numbersOrder21" placeholder="Numbers order" value="Order number: 22,">`;
  quantity21Element.innerHTML = `Quantity: <input type="text" id="quantity21" name="quantity21"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation21').appendChild(position21Element);
  document.querySelector('.quantityLocation21').appendChild(quantity21Element);
  document.querySelector('.position21Value').appendChild(position21Value);
  document.querySelector('.quantity21Value').appendChild(quantity21Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement21 = position21Element.querySelector('input');

  // Displaying input value
  position21Value.innerHTML = `${inputElement21.value}`;
});

position_22.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position22Element = document.createElement('div');
  let quantity22Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position22Value = document.createElement('div');
  let quantity22Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position22Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder22" name="numbersOrder22" placeholder="Numbers order" value="Order number: 23,">`;
  quantity22Element.innerHTML = `Quantity: <input type="text" id="quantity22" name="quantity22"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation22').appendChild(position22Element);
  document.querySelector('.quantityLocation22').appendChild(quantity22Element);
  document.querySelector('.position22Value').appendChild(position22Value);
  document.querySelector('.quantity22Value').appendChild(quantity22Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement22 = position22Element.querySelector('input');

  // Displaying input value
  position22Value.innerHTML = `${inputElement22.value}`;
});


position_23.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position23Element = document.createElement('div');
  let quantity23Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position23Value = document.createElement('div');
  let quantity23Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position23Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder23" name="numbersOrder23" placeholder="Numbers order" value="Order number: 24,">`;
  quantity23Element.innerHTML = `Quantity: <input type="text" id="quantity23" name="quantity23"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation23').appendChild(position23Element);
  document.querySelector('.quantityLocation23').appendChild(quantity23Element);
  document.querySelector('.position23Value').appendChild(position23Value);
  document.querySelector('.quantity23Value').appendChild(quantity23Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement23 = position23Element.querySelector('input');

  // Displaying input value
  position23Value.innerHTML = `${inputElement23.value}`;
});

position_24.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position24Element = document.createElement('div');
  let quantity24Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position24Value = document.createElement('div');
  let quantity24Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position24Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder24" name="numbersOrder24" placeholder="Numbers order" value="Order number: 25,">`;
  quantity24Element.innerHTML = `Quantity: <input type="text" id="quantity24" name="quantity24"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation24').appendChild(position24Element);
  document.querySelector('.quantityLocation24').appendChild(quantity24Element);
  document.querySelector('.position24Value').appendChild(position24Value);
  document.querySelector('.quantity24Value').appendChild(quantity24Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement24 = position24Element.querySelector('input');

  // Displaying input value
  position24Value.innerHTML = `${inputElement24.value}`;
});

position_25.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position25Element = document.createElement('div');
  let quantity25Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position25Value = document.createElement('div');
  let quantity25Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position25Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder25" name="numbersOrder25" placeholder="Numbers order" value="Order number: 26,">`;
  quantity25Element.innerHTML = `Quantity: <input type="text" id="quantity25" name="quantity25"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation25').appendChild(position25Element);
  document.querySelector('.quantityLocation25').appendChild(quantity25Element);
  document.querySelector('.position25Value').appendChild(position25Value);
  document.querySelector('.quantity25Value').appendChild(quantity25Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement25 = position25Element.querySelector('input');

  // Displaying input value
  position25Value.innerHTML = `${inputElement25.value}`;
});

position_26.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position26Element = document.createElement('div');
  let quantity26Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position26Value = document.createElement('div');
  let quantity26Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position26Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder26" name="numbersOrder26" placeholder="Numbers order" value="Order number: 27,">`;
  quantity26Element.innerHTML = `Quantity: <input type="text" id="quantity26" name="quantity26"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation26').appendChild(position26Element);
  document.querySelector('.quantityLocation26').appendChild(quantity26Element);
  document.querySelector('.position26Value').appendChild(position26Value);
  document.querySelector('.quantity26Value').appendChild(quantity26Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement26 = position26Element.querySelector('input');

  // Displaying input value
  position26Value.innerHTML = `${inputElement26.value}`;
});

position_27.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position27Element = document.createElement('div');
  let quantity27Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position27Value = document.createElement('div');
  let quantity27Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position27Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder27" name="numbersOrder27" placeholder="Numbers order" value="Order number: 28,">`;
  quantity27Element.innerHTML = `Quantity: <input type="text" id="quantity27" name="quantity27"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation27').appendChild(position27Element);
  document.querySelector('.quantityLocation27').appendChild(quantity27Element);
  document.querySelector('.position27Value').appendChild(position27Value);
  document.querySelector('.quantity27Value').appendChild(quantity27Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement27 = position27Element.querySelector('input');

  // Displaying input value
  position27Value.innerHTML = `${inputElement27.value}`;
});



position_28.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position28Element = document.createElement('div');
  let quantity28Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position28Value = document.createElement('div');
  let quantity28Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position28Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder28" name="numbersOrder28" placeholder="Numbers order" value="Order number: 29,">`;
  quantity28Element.innerHTML = `Quantity: <input type="text" id="quantity28" name="quantity28"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation28').appendChild(position28Element);
  document.querySelector('.quantityLocation28').appendChild(quantity28Element);
  document.querySelector('.position28Value').appendChild(position28Value);
  document.querySelector('.quantity28Value').appendChild(quantity28Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement28 = position28Element.querySelector('input');

  // Displaying input value
  position28Value.innerHTML = `${inputElement28.value}`;
});


position_29.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position29Element = document.createElement('div');
  let quantity29Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position29Value = document.createElement('div');
  let quantity29Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position29Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder29" name="numbersOrder29" placeholder="Numbers order" value="Order number: 30,">`;
  quantity29Element.innerHTML = `Quantity: <input type="text" id="quantity29" name="quantity29"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation29').appendChild(position29Element);
  document.querySelector('.quantityLocation29').appendChild(quantity29Element);
  document.querySelector('.position29Value').appendChild(position29Value);
  document.querySelector('.quantity29Value').appendChild(quantity29Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement29 = position29Element.querySelector('input');

  // Displaying input value
  position29Value.innerHTML = `${inputElement29.value}`;
});


position_30.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position30Element = document.createElement('div');
  let quantity30Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position30Value = document.createElement('div');
  let quantity30Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position30Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder30" name="numbersOrder30" placeholder="Numbers order" value="Order number: 31,">`;
  quantity30Element.innerHTML = `Quantity: <input type="text" id="quantity30" name="quantity30"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation30').appendChild(position30Element);
  document.querySelector('.quantityLocation30').appendChild(quantity30Element);
  document.querySelector('.position30Value').appendChild(position30Value);
  document.querySelector('.quantity30Value').appendChild(quantity30Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement30 = position30Element.querySelector('input');

  // Displaying input value
  position30Value.innerHTML = `${inputElement30.value}`;
});


position_31.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position31Element = document.createElement('div');
  let quantity31Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position31Value = document.createElement('div');
  let quantity31Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position31Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder31" name="numbersOrder31" placeholder="Numbers order" value="Order number: 32,">`;
  quantity31Element.innerHTML = `Quantity: <input type="text" id="quantity31" name="quantity31"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation31').appendChild(position31Element);
  document.querySelector('.quantityLocation31').appendChild(quantity31Element);
  document.querySelector('.position31Value').appendChild(position31Value);
  document.querySelector('.quantity31Value').appendChild(quantity31Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement31 = position31Element.querySelector('input');

  // Displaying input value
  position31Value.innerHTML = `${inputElement31.value}`;
});


position_32.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position32Element = document.createElement('div');
  let quantity32Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position32Value = document.createElement('div');
  let quantity32Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position32Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder32" name="numbersOrder32" placeholder="Numbers order" value="Order number: 33,">`;
  quantity32Element.innerHTML = `Quantity: <input type="text" id="quantity32" name="quantity32"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation32').appendChild(position32Element);
  document.querySelector('.quantityLocation32').appendChild(quantity32Element);
  document.querySelector('.position32Value').appendChild(position32Value);
  document.querySelector('.quantity32Value').appendChild(quantity32Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement32 = position32Element.querySelector('input');

  // Displaying input value
  position32Value.innerHTML = `${inputElement32.value}`;
});


position_33.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position33Element = document.createElement('div');
  let quantity33Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position33Value = document.createElement('div');
  let quantity33Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position33Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder33" name="numbersOrder33" placeholder="Numbers order" value="Order number: 34,">`;
  quantity33Element.innerHTML = `Quantity: <input type="text" id="quantity33" name="quantity33"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation33').appendChild(position33Element);
  document.querySelector('.quantityLocation33').appendChild(quantity33Element);
  document.querySelector('.position33Value').appendChild(position33Value);
  document.querySelector('.quantity33Value').appendChild(quantity33Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement33 = position33Element.querySelector('input');

  // Displaying input value
  position33Value.innerHTML = `${inputElement33.value}`;
});

position_34.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position34Element = document.createElement('div');
  let quantity34Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position34Value = document.createElement('div');
  let quantity34Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position34Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder34" name="numbersOrder34" placeholder="Numbers order" value="Order number: 35,">`;
  quantity34Element.innerHTML = `Quantity: <input type="text" id="quantity34" name="quantity34"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation34').appendChild(position34Element);
  document.querySelector('.quantityLocation34').appendChild(quantity34Element);
  document.querySelector('.position34Value').appendChild(position34Value);
  document.querySelector('.quantity34Value').appendChild(quantity34Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement34 = position34Element.querySelector('input');

  // Displaying input value
  position34Value.innerHTML = `${inputElement34.value}`;
});

position_35.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position35Element = document.createElement('div');
  let quantity35Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position35Value = document.createElement('div');
  let quantity35Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position35Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder35" name="numbersOrder35" placeholder="Numbers order" value="Order number: 36,">`;
  quantity35Element.innerHTML = `Quantity: <input type="text" id="quantity35" name="quantity35"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation35').appendChild(position35Element);
  document.querySelector('.quantityLocation35').appendChild(quantity35Element);
  document.querySelector('.position35Value').appendChild(position35Value);
  document.querySelector('.quantity35Value').appendChild(quantity35Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement35 = position35Element.querySelector('input');

  // Displaying input value
  position35Value.innerHTML = `${inputElement35.value}`;
});

position_36.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position36Element = document.createElement('div');
  let quantity36Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position36Value = document.createElement('div');
  let quantity36Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position36Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder36" name="numbersOrder36" placeholder="Numbers order" value="Order number: 37,">`;
  quantity36Element.innerHTML = `Quantity: <input type="text" id="quantity36" name="quantity36"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation36').appendChild(position36Element);
  document.querySelector('.quantityLocation36').appendChild(quantity36Element);
  document.querySelector('.position36Value').appendChild(position36Value);
  document.querySelector('.quantity36Value').appendChild(quantity36Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement36 = position36Element.querySelector('input');

  // Displaying input value
  position36Value.innerHTML = `${inputElement36.value}`;
});


position_37.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position37Element = document.createElement('div');
  let quantity37Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position37Value = document.createElement('div');
  let quantity37Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position37Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder37" name="numbersOrder37" placeholder="Numbers order" value="Order number: 38,">`;
  quantity37Element.innerHTML = `Quantity: <input type="text" id="quantity37" name="quantity37"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation37').appendChild(position37Element);
  document.querySelector('.quantityLocation37').appendChild(quantity37Element);
  document.querySelector('.position37Value').appendChild(position37Value);
  document.querySelector('.quantity37Value').appendChild(quantity37Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement37 = position37Element.querySelector('input');

  // Displaying input value
  position37Value.innerHTML = `${inputElement37.value}`;
});


position_38.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position38Element = document.createElement('div');
  let quantity38Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position38Value = document.createElement('div');
  let quantity38Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position38Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder38" name="numbersOrder38" placeholder="Numbers order" value="Order number: 39,">`;
  quantity38Element.innerHTML = `Quantity: <input type="text" id="quantity38" name="quantity38"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation38').appendChild(position38Element);
  document.querySelector('.quantityLocation38').appendChild(quantity38Element);
  document.querySelector('.position38Value').appendChild(position38Value);
  document.querySelector('.quantity38Value').appendChild(quantity38Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement38 = position38Element.querySelector('input');

  // Displaying input value
  position38Value.innerHTML = `${inputElement38.value}`;
});

position_39.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position39Element = document.createElement('div');
  let quantity39Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position39Value = document.createElement('div');
  let quantity39Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position39Element.innerHTML = `Numbers order: <input type="text" id="numbersOrder39" name="numbersOrder39" placeholder="Numbers order" value="Order number: 40,">`;
  quantity39Element.innerHTML = `Quantity: <input type="text" id="quantity39" name="quantity39"  placeholder="Quantity"  value=" Quantity: 1;">`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation39').appendChild(position39Element);
  document.querySelector('.quantityLocation39').appendChild(quantity39Element);
  document.querySelector('.position39Value').appendChild(position39Value);
  document.querySelector('.quantity39Value').appendChild(quantity39Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement39 = position39Element.querySelector('input');

  // Displaying input value
  position39Value.innerHTML = `${inputElement39.value}`;
});



if (document.querySelector('#numbersOrder0').value == undefined || 
    document.querySelector('#quantity0').value == undefined ||
    document.querySelector('#numbersOrder1').value == undefined || 
    document.querySelector('#quantity1').value == undefined ||
    document.querySelector('#numbersOrder2').value == undefined || 
    document.querySelector('#quantity2').value == undefined ||
    document.querySelector('#numbersOrder3').value == undefined || 
    document.querySelector('#quantity3').value == undefined ||
    document.querySelector('#numbersOrder4').value == undefined || 
    document.querySelector('#quantity4').value == undefined ||
    document.querySelector('#numbersOrder5').value == undefined || 
    document.querySelector('#quantity5').value == undefined ||
    document.querySelector('#numbersOrder6').value == undefined || 
    document.querySelector('#quantity6').value == undefined ||
    document.querySelector('#numbersOrder7').value == undefined || 
    document.querySelector('#quantity7').value == undefined ||
    document.querySelector('#numbersOrder8').value == undefined || 
    document.querySelector('#quantity8').value == undefined ||
    document.querySelector('#numbersOrder9').value == undefined || 
    document.querySelector('#quantity9').value == undefined ||
    document.querySelector('#numbersOrder10').value == undefined || 
    document.querySelector('#quantity10').value == undefined ||
    document.querySelector('#numbersOrder11').value == undefined || 
    document.querySelector('#quantity11').value == undefined ||
    document.querySelector('#numbersOrder12').value == undefined || 
    document.querySelector('#quantity12').value == undefined ||
    document.querySelector('#numbersOrder13').value == undefined || 
    document.querySelector('#quantity13').value == undefined ||
    document.querySelector('#numbersOrder14').value == undefined || 
    document.querySelector('#quantity14').value == undefined ||
    document.querySelector('#numbersOrder15').value == undefined || 
    document.querySelector('#quantity15').value == undefined ||
    document.querySelector('#numbersOrder16').value == undefined || 
    document.querySelector('#quantity16').value == undefined ||
    document.querySelector('#numbersOrder17').value == undefined || 
    document.querySelector('#quantity17').value == undefined ||
    document.querySelector('#numbersOrder18').value == undefined || 
    document.querySelector('#quantity18').value == undefined ||
    document.querySelector('#numbersOrder19A').value == undefined || 
    document.querySelector('#quantity19A').value == undefined ||
    document.querySelector('#numbersOrder19B').value == undefined || 
    document.querySelector('#quantity19B').value == undefined ||
    document.querySelector('#numbersOrder19C').value == undefined || 
    document.querySelector('#quantity19C').value == undefined ||
    document.querySelector('#numbersOrder20').value == undefined || 
    document.querySelector('#quantity20').value == undefined ||
    document.querySelector('#numbersOrder21').value == undefined || 
    document.querySelector('#quantity21').value == undefined ||
    document.querySelector('#numbersOrder22').value == undefined || 
    document.querySelector('#quantity22').value == undefined ||
    document.querySelector('#numbersOrder23').value == undefined || 
    document.querySelector('#quantity23').value == undefined ||
    document.querySelector('#numbersOrder24').value == undefined || 
    document.querySelector('#quantity24').value == undefined ||
    document.querySelector('#numbersOrder25').value == undefined || 
    document.querySelector('#quantity25').value == undefined ||
    document.querySelector('#numbersOrder26').value == undefined || 
    document.querySelector('#quantity26').value == undefined ||
    document.querySelector('#numbersOrder27').value == undefined || 
    document.querySelector('#quantity27').value == undefined ||
    document.querySelector('#numbersOrder28').value == undefined || 
    document.querySelector('#quantity28').value == undefined ||
    document.querySelector('#numbersOrder29').value == undefined || 
    document.querySelector('#quantity29').value == undefined ||
    document.querySelector('#numbersOrder30').value == undefined || 
    document.querySelector('#quantity30').value == undefined ||
    document.querySelector('#numbersOrder31').value == undefined || 
    document.querySelector('#quantity31').value == undefined ||
    document.querySelector('#numbersOrder32').value == undefined || 
    document.querySelector('#quantity32').value == undefined ||
    document.querySelector('#numbersOrder33').value == undefined || 
    document.querySelector('#quantity33').value == undefined ||
    document.querySelector('#numbersOrder34').value == undefined || 
    document.querySelector('#quantity34').value == undefined ||
    document.querySelector('#numbersOrder35').value == undefined || 
    document.querySelector('#quantity35').value == undefined ||
    document.querySelector('#numbersOrder36').value == undefined || 
    document.querySelector('#quantity36').value == undefined ||
    document.querySelector('#numbersOrder37').value == undefined || 
    document.querySelector('#quantity37').value == undefined ||
    document.querySelector('#numbersOrder38').value == undefined || 
    document.querySelector('#quantity38').value == undefined ||
    document.querySelector('#numbersOrder39').value == undefined || 
    document.querySelector('#quantity39').value == undefined 
  )

{
  document.querySelector('#numbersOrder0').value = " ";
  document.querySelector('#quantity0').value = " ";
  document.querySelector('#numbersOrder1').value = " ";
  document.querySelector('#quantity1').value = " ";
  document.querySelector('#numbersOrder2').value = " ";
  document.querySelector('#quantity2').value = " ";
  document.querySelector('#numbersOrder3').value = " ";
  document.querySelector('#quantity3').value = " ";
  document.querySelector('#numbersOrder4').value = " ";
  document.querySelector('#quantity4').value = " ";
  document.querySelector('#numbersOrder5').value = " ";
  document.querySelector('#quantity5').value = " ";
  document.querySelector('#numbersOrder6').value = " ";
  document.querySelector('#quantity6').value = " ";
  document.querySelector('#numbersOrder7').value = " ";
  document.querySelector('#quantity7').value = " ";
  document.querySelector('#numbersOrder8').value = " ";
  document.querySelector('#quantity8').value = " ";
  document.querySelector('#numbersOrder9').value = " ";
  document.querySelector('#quantity9').value = " ";
  document.querySelector('#numbersOrder10').value = " ";
  document.querySelector('#quantity10').value = " ";
  document.querySelector('#numbersOrder11').value = " ";
  document.querySelector('#quantity11').value = " ";
  document.querySelector('#numbersOrder12').value = " ";
  document.querySelector('#quantity12').value = " ";
  document.querySelector('#numbersOrder13').value = " ";
  document.querySelector('#quantity13').value = " ";
  document.querySelector('#numbersOrder14').value = " ";
  document.querySelector('#quantity14').value = " ";
  document.querySelector('#numbersOrder15').value = " ";
  document.querySelector('#quantity15').value = " ";
  document.querySelector('#numbersOrder16').value = " ";
  document.querySelector('#quantity16').value = " ";
  document.querySelector('#numbersOrder17').value = " ";
  document.querySelector('#quantity17').value = " ";
  document.querySelector('#numbersOrder18').value = " ";
  document.querySelector('#quantity18').value = " ";
  document.querySelector('#numbersOrder19A').value = " ";
  document.querySelector('#quantity19A').value = " ";
  document.querySelector('#numbersOrder19B').value = " ";
  document.querySelector('#quantity19B').value = " ";
  document.querySelector('#numbersOrder19C').value = " ";
  document.querySelector('#quantity19C').value = " ";
  document.querySelector('#numbersOrder20').value = " ";
  document.querySelector('#quantity20').value = " ";
  document.querySelector('#numbersOrder21').value = " ";
  document.querySelector('#quantity21').value = " ";
  document.querySelector('#numbersOrder22').value = " ";
  document.querySelector('#quantity22').value = " ";
  document.querySelector('#numbersOrder23').value = " ";
  document.querySelector('#quantity23').value = " ";
  document.querySelector('#numbersOrder24').value = " ";
  document.querySelector('#quantity24').value = " ";
  document.querySelector('#numbersOrder25').value = " ";
  document.querySelector('#quantity25').value = " ";
  document.querySelector('#numbersOrder26').value = " ";
  document.querySelector('#quantity26').value = " ";
  document.querySelector('#numbersOrder27').value = " ";
  document.querySelector('#quantity27').value = " ";
  document.querySelector('#numbersOrder28').value = " ";
  document.querySelector('#quantity28').value = " ";
  document.querySelector('#numbersOrder29').value = " ";
  document.querySelector('#quantity29').value = " ";
  document.querySelector('#numbersOrder30').value = " ";
  document.querySelector('#quantity30').value = " ";
  document.querySelector('#numbersOrder31').value = " ";
  document.querySelector('#quantity31').value = " ";
  document.querySelector('#numbersOrder32').value = " ";
  document.querySelector('#quantity32').value = " ";
  document.querySelector('#numbersOrder33').value = " ";
  document.querySelector('#quantity33').value = " ";
  document.querySelector('#numbersOrder34').value = " ";
  document.querySelector('#quantity34').value = " ";
  document.querySelector('#numbersOrder35').value = " ";
  document.querySelector('#quantity35').value = " ";
  document.querySelector('#numbersOrder36').value = " ";
  document.querySelector('#quantity36').value = " ";
  document.querySelector('#numbersOrder37').value = " ";
  document.querySelector('#quantity37').value = " ";
  document.querySelector('#numbersOrder38').value = " ";
  document.querySelector('#quantity38').value = " ";
  document.querySelector('#numbersOrder39').value = " ";
  document.querySelector('#quantity39').value = " ";

  
}





const textStatus = document.querySelector('.textStatus');
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
                  Subject: `Nowe zamówienie numer: ${orderCode}`,
                  Body: `
                   Kod zamówienia: ${orderCode}<br>
                      Nazwisko: ${name}<br>
                      Telefon: ${phone}<br>
                      Email: ${email}<br>
                      Adres: ${addres}<br>
                         Wiadomość od klienta: ${message}<br>
                         ${document.querySelector('#numbersOrder0').value}
                         ${document.querySelector('#quantity0').value}
                         ${document.querySelector('#numbersOrder1').value}
                         ${document.querySelector('#quantity1').value}
                         ${document.querySelector('#numbersOrder2').value}
                         ${document.querySelector('#quantity2').value}
                         ${document.querySelector('#numbersOrder3').value}
                         ${document.querySelector('#quantity3').value}
                         ${document.querySelector('#numbersOrder4').value}
                         ${document.querySelector('#quantity4').value}
                         ${document.querySelector('#numbersOrder5').value}
                         ${document.querySelector('#quantity5').value}
                         ${document.querySelector('#numbersOrder6').value}
                         ${document.querySelector('#quantity6').value}
                         ${document.querySelector('#numbersOrder7').value}
                         ${document.querySelector('#quantity7').value}
                         ${document.querySelector('#numbersOrder8').value}
                         ${document.querySelector('#quantity8').value}
                         ${document.querySelector('#numbersOrder9').value}
                         ${document.querySelector('#quantity9').value}
                         ${document.querySelector('#numbersOrder10').value}
                         ${document.querySelector('#quantity10').value}
                         ${document.querySelector('#numbersOrder11').value}
                         ${document.querySelector('#quantity11').value}
                         ${document.querySelector('#numbersOrder12').value}
                         ${document.querySelector('#quantity12').value}
                         ${document.querySelector('#numbersOrder13').value}
                         ${document.querySelector('#quantity13').value}
                         ${document.querySelector('#numbersOrder14').value}
                         ${document.querySelector('#quantity14').value}
                         ${document.querySelector('#numbersOrder15').value}
                         ${document.querySelector('#quantity15').value}
                         ${document.querySelector('#numbersOrder16').value}
                         ${document.querySelector('#quantity16').value}
                         ${document.querySelector('#numbersOrder17').value}
                         ${document.querySelector('#quantity17').value}
                         ${document.querySelector('#numbersOrder18').value}
                         ${document.querySelector('#quantity18').value}
                         ${document.querySelector('#numbersOrder19A').value}
                         ${document.querySelector('#quantity19A').value}
                         ${document.querySelector('#numbersOrder19B').value}
                         ${document.querySelector('#quantity19B').value}
                        ${document.querySelector('#numbersOrder19C').value}
                         ${document.querySelector('#quantity19C').value}
                         ${document.querySelector('#numbersOrder20').value}
                         ${document.querySelector('#quantity20').value}
                         ${document.querySelector('#numbersOrder21').value}
                         ${document.querySelector('#quantity21').value}<br>
                         ${document.querySelector('#numbersOrder22').value}
                         ${document.querySelector('#quantity22').value}
                         ${document.querySelector('#numbersOrder23').value}
                         ${document.querySelector('#quantity23').value}
                         ${document.querySelector('#numbersOrder24').value}
                         ${document.querySelector('#quantity24').value}
                         ${document.querySelector('#numbersOrder25').value}
                         ${document.querySelector('#quantity25').value}
                         ${document.querySelector('#numbersOrder26').value}
                         ${document.querySelector('#quantity26').value}
                         ${document.querySelector('#numbersOrder27').value}
                         ${document.querySelector('#quantity27').value}
                         ${document.querySelector('#numbersOrder28').value}
                         ${document.querySelector('#quantity28').value}
                         ${document.querySelector('#numbersOrder29').value}
                         ${document.querySelector('#quantity29').value}
                         ${document.querySelector('#numbersOrder30').value}
                         ${document.querySelector('#quantity30').value}
                         ${document.querySelector('#numbersOrder31').value}
                         ${document.querySelector('#quantity31').value}
                         ${document.querySelector('#numbersOrder32').value}
                         ${document.querySelector('#quantity32').value}
                         ${document.querySelector('#numbersOrder33').value}
                         ${document.querySelector('#quantity33').value}
                         ${document.querySelector('#numbersOrder34').value}
                         ${document.querySelector('#quantity34').value}
                         ${document.querySelector('#numbersOrder35').value}
                         ${document.querySelector('#quantity35').value}
                         ${document.querySelector('#numbersOrder36').value}
                         ${document.querySelector('#quantity36').value}
                         ${document.querySelector('#numbersOrder37').value}
                         ${document.querySelector('#quantity37').value}
                         ${document.querySelector('#numbersOrder38').value}
                         ${document.querySelector('#quantity38').value}
                         ${document.querySelector('#numbersOrder39').value}
                         ${document.querySelector('#quantity39').value}
                       <br><br>
                         

    Zgody: <br><br>
                       zgoda0: I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose and to the extent necessary to process the application.<br>
zgoda1: I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose of sending me commercial offers for the company's own products electronically.<br>
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
                  textStatus.innerHTML = 'Failed to send the message. This may be due to too many messages being sent at once. Please send your message via hollapolla66@gmail.com ';
                  textStatus.style.color = 'red';
                  orderCodeText.style.display = "none";
                  setTimeout( () => {
                    orderSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    orderCodeText.style.display = "none";
                   
                  },10000)
              }
            
});





