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
  position20Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder20" name="numbersOrder20" placeholder="Numbers order" value="21">`;
  quantity20Element.innerHTML = `Quantity: <br><input type="number" id="quantity20" name="quantity20" placeholder="Quantity"  value="1" >`;
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
  position21Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder21" name="numbersOrder21" placeholder="Numbers order" value="22">`;
  quantity21Element.innerHTML = `Quantity: <br><input type="number" id="quantity21" name="quantity21" placeholder="Quantity"  value="1" >`;
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
  position22Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder22" name="numbersOrder22" placeholder="Numbers order" value="23">`;
  quantity22Element.innerHTML = `Quantity: <br><input type="number" id="quantity22" name="quantity22" placeholder="Quantity"  value="1" >`;
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
  position23Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder23" name="numbersOrder23" placeholder="Numbers order" value="24">`;
  quantity23Element.innerHTML = `Quantity: <br><input type="number" id="quantity23" name="quantity23" placeholder="Quantity"  value="1" >`;
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
  position24Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder24" name="numbersOrder24" placeholder="Numbers order" value="25">`;
  quantity24Element.innerHTML = `Quantity: <br><input type="number" id="quantity24" name="quantity24" placeholder="Quantity"  value="1" >`;
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
  position25Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder25" name="numbersOrder25" placeholder="Numbers order" value="26">`;
  quantity25Element.innerHTML = `Quantity: <br><input type="number" id="quantity25" name="quantity25" placeholder="Quantity"  value="1" >`;
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
  position26Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder26" name="numbersOrder26" placeholder="Numbers order" value="27">`;
  quantity26Element.innerHTML = `Quantity: <br><input type="number" id="quantity26" name="quantity26" placeholder="Quantity"  value="1" >`;
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
  position27Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder27" name="numbersOrder27" placeholder="Numbers order" value="28">`;
  quantity27Element.innerHTML = `Quantity: <br><input type="number" id="quantity27" name="quantity27" placeholder="Quantity"  value="1" >`;
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
  position28Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder28" name="numbersOrder28" placeholder="Numbers order" value="29">`;
  quantity28Element.innerHTML = `Quantity: <br><input type="number" id="quantity28" name="quantity28" placeholder="Quantity"  value="1" >`;
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
  position29Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder29" name="numbersOrder29" placeholder="Numbers order" value="30">`;
  quantity29Element.innerHTML = `Quantity: <br><input type="number" id="quantity29" name="quantity29" placeholder="Quantity"  value="1" >`;
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
  position30Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder30" name="numbersOrder30" placeholder="Numbers order" value="31">`;
  quantity30Element.innerHTML = `Quantity: <br><input type="number" id="quantity30" name="quantity30" placeholder="Quantity"  value="1" >`;
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
  position31Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder31" name="numbersOrder31" placeholder="Numbers order" value="32">`;
  quantity31Element.innerHTML = `Quantity: <br><input type="number" id="quantity31" name="quantity31" placeholder="Quantity"  value="1" >`;
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
  position32Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder32" name="numbersOrder32" placeholder="Numbers order" value="33">`;
  quantity32Element.innerHTML = `Quantity: <br><input type="number" id="quantity32" name="quantity32" placeholder="Quantity"  value="1" >`;
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
  position33Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder33" name="numbersOrder33" placeholder="Numbers order" value="34">`;
  quantity33Element.innerHTML = `Quantity: <br><input type="number" id="quantity33" name="quantity33" placeholder="Quantity"  value="1" >`;
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
  position34Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder34" name="numbersOrder34" placeholder="Numbers order" value="35">`;
  quantity34Element.innerHTML = `Quantity: <br><input type="number" id="quantity34" name="quantity34" placeholder="Quantity"  value="1" >`;
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
  position35Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder35" name="numbersOrder35" placeholder="Numbers order" value="36">`;
  quantity35Element.innerHTML = `Quantity: <br><input type="number" id="quantity35" name="quantity35" placeholder="Quantity"  value="1" >`;
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
  position36Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder36" name="numbersOrder36" placeholder="Numbers order" value="37">`;
  quantity36Element.innerHTML = `Quantity: <br><input type="number" id="quantity36" name="quantity36" placeholder="Quantity"  value="1" >`;
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
  position37Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder37" name="numbersOrder37" placeholder="Numbers order" value="38">`;
  quantity37Element.innerHTML = `Quantity: <br><input type="number" id="quantity37" name="quantity37" placeholder="Quantity"  value="1" >`;
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
  position38Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder38" name="numbersOrder38" placeholder="Numbers order" value="39">`;
  quantity38Element.innerHTML = `Quantity: <br><input type="number" id="quantity38" name="quantity38" placeholder="Quantity"  value="1" >`;
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
  position39Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder39" name="numbersOrder39" placeholder="Numbers order" value="40">`;
  quantity39Element.innerHTML = `Quantity: <br><input type="number" id="quantity39" name="quantity39" placeholder="Quantity"  value="1" >`;
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


position_40.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position40Element = document.createElement('div');
  let quantity40Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position40Value = document.createElement('div');
  let quantity40Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position40Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder40" name="numbersOrder40" placeholder="Numbers order" value="41">`;
  quantity40Element.innerHTML = `Quantity: <br><input type="number" id="quantity40" name="quantity40" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation40').appendChild(position40Element);
  document.querySelector('.quantityLocation40').appendChild(quantity40Element);
  document.querySelector('.position40Value').appendChild(position40Value);
  document.querySelector('.quantity40Value').appendChild(quantity40Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement40 = position40Element.querySelector('input');

  // Displaying input value
  position40Value.innerHTML = `${inputElement40.value}`;
});


position_41.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position41Element = document.createElement('div');
  let quantity41Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position41Value = document.createElement('div');
  let quantity41Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position41Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder41" name="numbersOrder41" placeholder="Numbers order" value="42">`;
  quantity41Element.innerHTML = `Quantity: <br><input type="number" id="quantity41" name="quantity41" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation41').appendChild(position41Element);
  document.querySelector('.quantityLocation41').appendChild(quantity41Element);
  document.querySelector('.position41Value').appendChild(position41Value);
  document.querySelector('.quantity41Value').appendChild(quantity41Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement41 = position41Element.querySelector('input');

  // Displaying input value
  position41Value.innerHTML = `${inputElement41.value}`;
});

position_42.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position42Element = document.createElement('div');
  let quantity42Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position42Value = document.createElement('div');
  let quantity42Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position42Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder42" name="numbersOrder42" placeholder="Numbers order" value="43">`;
  quantity42Element.innerHTML = `Quantity: <br><input type="number" id="quantity42" name="quantity42" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation42').appendChild(position42Element);
  document.querySelector('.quantityLocation42').appendChild(quantity42Element);
  document.querySelector('.position42Value').appendChild(position42Value);
  document.querySelector('.quantity42Value').appendChild(quantity42Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement42 = position42Element.querySelector('input');

  // Displaying input value
  position42Value.innerHTML = `${inputElement42.value}`;
});


position_43.addEventListener("click", async () => {

  contenerOrderInfo.style.display = "block";

  // Creating a new div for input start
  let position43Element = document.createElement('div');
  let quantity43Element = document.createElement('div');
    // Creating a new div for input end
  // Creating a new div for value start
  let position43Value = document.createElement('div');
  let quantity43Value = document.createElement('div');
  // Creating a new div for value end

  // Displaying input start
  position43Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder43" name="numbersOrder43" placeholder="Numbers order" value="44">`;
  quantity43Element.innerHTML = `Quantity: <br><input type="number" id="quantity43" name="quantity43" placeholder="Quantity"  value="1" >`;
    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersOrderLocation43').appendChild(position43Element);
  document.querySelector('.quantityLocation43').appendChild(quantity43Element);
  document.querySelector('.position43Value').appendChild(position43Value);
  document.querySelector('.quantity43Value').appendChild(quantity43Value);
// A new element is added to the selected element as its child end

// defining input
  let inputElement43 = position43Element.querySelector('input');

  // Displaying input value
  position43Value.innerHTML = `${inputElement43.value}`;
});
position_45.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position45Element = document.createElement('div');
  let quantity45Element = document.createElement('div');
  let position45Value = document.createElement('div');
  let quantity45Value = document.createElement('div');
  position45Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder45" name="numbersOrder45" placeholder="Numbers order" value="46">`;
  quantity45Element.innerHTML = `Quantity: <br><input type="number" id="quantity45" name="quantity45" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation45').appendChild(position45Element);
  document.querySelector('.quantityLocation45').appendChild(quantity45Element);
  document.querySelector('.position45Value').appendChild(position45Value);
  document.querySelector('.quantity45Value').appendChild(quantity45Value);
  let inputElement45 = position45Element.querySelector('input');
  position45Value.innerHTML = `${inputElement45.value}`;
});

position_46.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position46Element = document.createElement('div');
  let quantity46Element = document.createElement('div');
  let position46Value = document.createElement('div');
  let quantity46Value = document.createElement('div');
  position46Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder46" name="numbersOrder46" placeholder="Numbers order" value="47">`;
  quantity46Element.innerHTML = `Quantity: <br><input type="number" id="quantity46" name="quantity46" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation46').appendChild(position46Element);
  document.querySelector('.quantityLocation46').appendChild(quantity46Element);
  document.querySelector('.position46Value').appendChild(position46Value);
  document.querySelector('.quantity46Value').appendChild(quantity46Value);
  let inputElement46 = position46Element.querySelector('input');
  position46Value.innerHTML = `${inputElement46.value}`;
});

position_47.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position47Element = document.createElement('div');
  let quantity47Element = document.createElement('div');
  let position47Value = document.createElement('div');
  let quantity47Value = document.createElement('div');
  position47Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder47" name="numbersOrder47" placeholder="Numbers order" value="48">`;
  quantity47Element.innerHTML = `Quantity: <br><input type="number" id="quantity47" name="quantity47" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation47').appendChild(position47Element);
  document.querySelector('.quantityLocation47').appendChild(quantity47Element);
  document.querySelector('.position47Value').appendChild(position47Value);
  document.querySelector('.quantity47Value').appendChild(quantity47Value);
  let inputElement47 = position47Element.querySelector('input');
  position47Value.innerHTML = `${inputElement47.value}`;
});

position_48.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position48Element = document.createElement('div');
  let quantity48Element = document.createElement('div');
  let position48Value = document.createElement('div');
  let quantity48Value = document.createElement('div');
  position48Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder48" name="numbersOrder48" placeholder="Numbers order" value="49">`;
  quantity48Element.innerHTML = `Quantity: <br><input type="number" id="quantity48" name="quantity48" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation48').appendChild(position48Element);
  document.querySelector('.quantityLocation48').appendChild(quantity48Element);
  document.querySelector('.position48Value').appendChild(position48Value);
  document.querySelector('.quantity48Value').appendChild(quantity48Value);
  let inputElement48 = position48Element.querySelector('input');
  position48Value.innerHTML = `${inputElement48.value}`;
});

position_49.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position49Element = document.createElement('div');
  let quantity49Element = document.createElement('div');
  let position49Value = document.createElement('div');
  let quantity49Value = document.createElement('div');
  position49Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder49" name="numbersOrder49" placeholder="Numbers order" value="50">`;
  quantity49Element.innerHTML = `Quantity: <br><input type="number" id="quantity49" name="quantity49" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation49').appendChild(position49Element);
  document.querySelector('.quantityLocation49').appendChild(quantity49Element);
  document.querySelector('.position49Value').appendChild(position49Value);
  document.querySelector('.quantity49Value').appendChild(quantity49Value);
  let inputElement49 = position49Element.querySelector('input');
  position49Value.innerHTML = `${inputElement49.value}`;
});

position_50.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position50Element = document.createElement('div');
  let quantity50Element = document.createElement('div');
  let position50Value = document.createElement('div');
  let quantity50Value = document.createElement('div');
  position50Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder50" name="numbersOrder50" placeholder="Numbers order" value="51">`;
  quantity50Element.innerHTML = `Quantity: <br><input type="number" id="quantity50" name="quantity50" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation50').appendChild(position50Element);
  document.querySelector('.quantityLocation50').appendChild(quantity50Element);
  document.querySelector('.position50Value').appendChild(position50Value);
  document.querySelector('.quantity50Value').appendChild(quantity50Value);
  let inputElement50 = position50Element.querySelector('input');
  position50Value.innerHTML = `${inputElement50.value}`;
});

position_51.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position51Element = document.createElement('div');
  let quantity51Element = document.createElement('div');
  let position51Value = document.createElement('div');
  let quantity51Value = document.createElement('div');
  position51Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder51" name="numbersOrder51" placeholder="Numbers order" value="52">`;
  quantity51Element.innerHTML = `Quantity: <br><input type="number" id="quantity51" name="quantity51" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation51').appendChild(position51Element);
  document.querySelector('.quantityLocation51').appendChild(quantity51Element);
  document.querySelector('.position51Value').appendChild(position51Value);
  document.querySelector('.quantity51Value').appendChild(quantity51Value);
  let inputElement51 = position51Element.querySelector('input');
  position51Value.innerHTML = `${inputElement51.value}`;
});

position_52.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position52Element = document.createElement('div');
  let quantity52Element = document.createElement('div');
  let position52Value = document.createElement('div');
  let quantity52Value = document.createElement('div');
  position52Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder52" name="numbersOrder52" placeholder="Numbers order" value="53">`;
  quantity52Element.innerHTML = `Quantity: <br><input type="number" id="quantity52" name="quantity52" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation52').appendChild(position52Element);
  document.querySelector('.quantityLocation52').appendChild(quantity52Element);
  document.querySelector('.position52Value').appendChild(position52Value);
  document.querySelector('.quantity52Value').appendChild(quantity52Value);
  let inputElement52 = position52Element.querySelector('input');
  position52Value.innerHTML = `${inputElement52.value}`;
});

position_53.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position53Element = document.createElement('div');
  let quantity53Element = document.createElement('div');
  let position53Value = document.createElement('div');
  let quantity53Value = document.createElement('div');
  position53Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder53" name="numbersOrder53" placeholder="Numbers order" value="54">`;
  quantity53Element.innerHTML = `Quantity: <br><input type="number" id="quantity53" name="quantity53" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation53').appendChild(position53Element);
  document.querySelector('.quantityLocation53').appendChild(quantity53Element);
  document.querySelector('.position53Value').appendChild(position53Value);
  document.querySelector('.quantity53Value').appendChild(quantity53Value);
  let inputElement53 = position53Element.querySelector('input');
  position53Value.innerHTML = `${inputElement53.value}`;
});

position_54.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position54Element = document.createElement('div');
  let quantity54Element = document.createElement('div');
  let position54Value = document.createElement('div');
  let quantity54Value = document.createElement('div');
  position54Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder54" name="numbersOrder54" placeholder="Numbers order" value="55">`;
  quantity54Element.innerHTML = `Quantity: <br><input type="number" id="quantity54" name="quantity54" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation54').appendChild(position54Element);
  document.querySelector('.quantityLocation54').appendChild(quantity54Element);
  document.querySelector('.position54Value').appendChild(position54Value);
  document.querySelector('.quantity54Value').appendChild(quantity54Value);
  let inputElement54 = position54Element.querySelector('input');
  position54Value.innerHTML = `${inputElement54.value}`;
});

position_55.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position55Element = document.createElement('div');
  let quantity55Element = document.createElement('div');
  let position55Value = document.createElement('div');
  let quantity55Value = document.createElement('div');
  position55Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder55" name="numbersOrder55" placeholder="Numbers order" value="56">`;
  quantity55Element.innerHTML = `Quantity: <br><input type="number" id="quantity55" name="quantity55" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation55').appendChild(position55Element);
  document.querySelector('.quantityLocation55').appendChild(quantity55Element);
  document.querySelector('.position55Value').appendChild(position55Value);
  document.querySelector('.quantity55Value').appendChild(quantity55Value);
  let inputElement55 = position55Element.querySelector('input');
  position55Value.innerHTML = `${inputElement55.value}`;
});

position_56.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position56Element = document.createElement('div');
  let quantity56Element = document.createElement('div');
  let position56Value = document.createElement('div');
  let quantity56Value = document.createElement('div');
  position56Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder56" name="numbersOrder56" placeholder="Numbers order" value="57">`;
  quantity56Element.innerHTML = `Quantity: <br><input type="number" id="quantity56" name="quantity56" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation56').appendChild(position56Element);
  document.querySelector('.quantityLocation56').appendChild(quantity56Element);
  document.querySelector('.position56Value').appendChild(position56Value);
  document.querySelector('.quantity56Value').appendChild(quantity56Value);
  let inputElement56 = position56Element.querySelector('input');
  position56Value.innerHTML = `${inputElement56.value}`;
});

position_57.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position57Element = document.createElement('div');
  let quantity57Element = document.createElement('div');
  let position57Value = document.createElement('div');
  let quantity57Value = document.createElement('div');
  position57Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder57" name="numbersOrder57" placeholder="Numbers order" value="58">`;
  quantity57Element.innerHTML = `Quantity: <br><input type="number" id="quantity57" name="quantity57" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation57').appendChild(position57Element);
  document.querySelector('.quantityLocation57').appendChild(quantity57Element);
  document.querySelector('.position57Value').appendChild(position57Value);
  document.querySelector('.quantity57Value').appendChild(quantity57Value);
  let inputElement57 = position57Element.querySelector('input');
  position57Value.innerHTML = `${inputElement57.value}`;
});

position_58.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position58Element = document.createElement('div');
  let quantity58Element = document.createElement('div');
  let position58Value = document.createElement('div');
  let quantity58Value = document.createElement('div');
  position58Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder58" name="numbersOrder58" placeholder="Numbers order" value="59">`;
  quantity58Element.innerHTML = `Quantity: <br><input type="number" id="quantity58" name="quantity58" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation58').appendChild(position58Element);
  document.querySelector('.quantityLocation58').appendChild(quantity58Element);
  document.querySelector('.position58Value').appendChild(position58Value);
  document.querySelector('.quantity58Value').appendChild(quantity58Value);
  let inputElement58 = position58Element.querySelector('input');
  position58Value.innerHTML = `${inputElement58.value}`;
});

position_59.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position59Element = document.createElement('div');
  let quantity59Element = document.createElement('div');
  let position59Value = document.createElement('div');
  let quantity59Value = document.createElement('div');
  position59Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder59" name="numbersOrder59" placeholder="Numbers order" value="60">`;
  quantity59Element.innerHTML = `Quantity: <br><input type="number" id="quantity59" name="quantity59" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation59').appendChild(position59Element);
  document.querySelector('.quantityLocation59').appendChild(quantity59Element);
  document.querySelector('.position59Value').appendChild(position59Value);
  document.querySelector('.quantity59Value').appendChild(quantity59Value);
  let inputElement59 = position59Element.querySelector('input');
  position59Value.innerHTML = `${inputElement59.value}`;
});

position_60.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position60Element = document.createElement('div');
  let quantity60Element = document.createElement('div');
  let position60Value = document.createElement('div');
  let quantity60Value = document.createElement('div');
  position60Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder60" name="numbersOrder60" placeholder="Numbers order" value="61">`;
  quantity60Element.innerHTML = `Quantity: <br><input type="number" id="quantity60" name="quantity60" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation60').appendChild(position60Element);
  document.querySelector('.quantityLocation60').appendChild(quantity60Element);
  document.querySelector('.position60Value').appendChild(position60Value);
  document.querySelector('.quantity60Value').appendChild(quantity60Value);
  let inputElement60 = position60Element.querySelector('input');
  position60Value.innerHTML = `${inputElement60.value}`;
});

position_61.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position61Element = document.createElement('div');
  let quantity61Element = document.createElement('div');
  let position61Value = document.createElement('div');
  let quantity61Value = document.createElement('div');
  position61Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder61" name="numbersOrder61" placeholder="Numbers order" value="62">`;
  quantity61Element.innerHTML = `Quantity: <br><input type="number" id="quantity61" name="quantity61" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation61').appendChild(position61Element);
  document.querySelector('.quantityLocation61').appendChild(quantity61Element);
  document.querySelector('.position61Value').appendChild(position61Value);
  document.querySelector('.quantity61Value').appendChild(quantity61Value);
  let inputElement61 = position61Element.querySelector('input');
  position61Value.innerHTML = `${inputElement61.value}`;
});

position_62.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position62Element = document.createElement('div');
  let quantity62Element = document.createElement('div');
  let position62Value = document.createElement('div');
  let quantity62Value = document.createElement('div');
  position62Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder62" name="numbersOrder62" placeholder="Numbers order" value="63">`;
  quantity62Element.innerHTML = `Quantity: <br><input type="number" id="quantity62" name="quantity62" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation62').appendChild(position62Element);
  document.querySelector('.quantityLocation62').appendChild(quantity62Element);
  document.querySelector('.position62Value').appendChild(position62Value);
  document.querySelector('.quantity62Value').appendChild(quantity62Value);
  let inputElement62 = position62Element.querySelector('input');
  position62Value.innerHTML = `${inputElement62.value}`;
});

position_63.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position63Element = document.createElement('div');
  let quantity63Element = document.createElement('div');
  let position63Value = document.createElement('div');
  let quantity63Value = document.createElement('div');
  position63Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder63" name="numbersOrder63" placeholder="Numbers order" value="64">`;
  quantity63Element.innerHTML = `Quantity: <br><input type="number" id="quantity63" name="quantity63" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation63').appendChild(position63Element);
  document.querySelector('.quantityLocation63').appendChild(quantity63Element);
  document.querySelector('.position63Value').appendChild(position63Value);
  document.querySelector('.quantity63Value').appendChild(quantity63Value);
  let inputElement63 = position63Element.querySelector('input');
  position63Value.innerHTML = `${inputElement63.value}`;
});

position_64.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position64Element = document.createElement('div');
  let quantity64Element = document.createElement('div');
  let position64Value = document.createElement('div');
  let quantity64Value = document.createElement('div');
  position64Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder64" name="numbersOrder64" placeholder="Numbers order" value="65">`;
  quantity64Element.innerHTML = `Quantity: <br><input type="number" id="quantity64" name="quantity64" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation64').appendChild(position64Element);
  document.querySelector('.quantityLocation64').appendChild(quantity64Element);
  document.querySelector('.position64Value').appendChild(position64Value);
  document.querySelector('.quantity64Value').appendChild(quantity64Value);
  let inputElement64 = position64Element.querySelector('input');
  position64Value.innerHTML = `${inputElement64.value}`;
});

position_65.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position65Element = document.createElement('div');
  let quantity65Element = document.createElement('div');
  let position65Value = document.createElement('div');
  let quantity65Value = document.createElement('div');
  position65Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder65" name="numbersOrder65" placeholder="Numbers order" value="66">`;
  quantity65Element.innerHTML = `Quantity: <br><input type="number" id="quantity65" name="quantity65" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation65').appendChild(position65Element);
  document.querySelector('.quantityLocation65').appendChild(quantity65Element);
  document.querySelector('.position65Value').appendChild(position65Value);
  document.querySelector('.quantity65Value').appendChild(quantity65Value);
  let inputElement65 = position65Element.querySelector('input');
  position65Value.innerHTML = `${inputElement65.value}`;
});



position_66.addEventListener("click", async () => {
  contenerOrderInfo.style.display = "block";
  let position65Element = document.createElement('div');
  let quantity65Element = document.createElement('div');
  let position65Value = document.createElement('div');
  let quantity65Value = document.createElement('div');
  position65Element.innerHTML = `Numbers order: <br><input type="number" id="numbersOrder65" name="numbersOrder65" placeholder="Numbers order" value="67">`;
  quantity65Element.innerHTML = `Quantity: <br><input type="number" id="quantity65" name="quantity65" placeholder="Quantity" value="1">`;
  document.querySelector('.numbersOrderLocation65').appendChild(position65Element);
  document.querySelector('.quantityLocation65').appendChild(quantity65Element);
  document.querySelector('.position65Value').appendChild(position65Value);
  document.querySelector('.quantity65Value').appendChild(quantity65Value);
  let inputElement65 = position65Element.querySelector('input');
  position65Value.innerHTML = `${inputElement65.value}`;
});


const textStatus = document.querySelector('.textStatus');
document.querySelector('#ordersForm').addEventListener('submit', async function(e) {
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
      formData.append('position20Value', document.querySelector('#numbersOrder20').value);
      formData.append('quantity20Value', document.querySelector('#quantity20').value);

      formData.append('position21Value', document.querySelector('#numbersOrder21').value);
      formData.append('quantity21Value', document.querySelector('#quantity21').value);

      formData.append('position22Value', document.querySelector('#numbersOrder22').value);
      formData.append('quantity22Value', document.querySelector('#quantity22').value);


      formData.append('position23Value', document.querySelector('#numbersOrder23').value);
      formData.append('quantity23Value', document.querySelector('#quantity23').value);

      formData.append('position24Value', document.querySelector('#numbersOrder24').value);
      formData.append('quantity24Value', document.querySelector('#quantity24').value);

      formData.append('position25Value', document.querySelector('#numbersOrder25').value);
      formData.append('quantity25Value', document.querySelector('#quantity25').value);

      formData.append('position26Value', document.querySelector('#numbersOrder26').value);
      formData.append('quantity26Value', document.querySelector('#quantity26').value);

      formData.append('position27Value', document.querySelector('#numbersOrder27').value);
      formData.append('quantity27Value', document.querySelector('#quantity27').value);

      formData.append('position28Value', document.querySelector('#numbersOrder28').value);
      formData.append('quantity28Value', document.querySelector('#quantity28').value);

      formData.append('position29Value', document.querySelector('#numbersOrder29').value);
      formData.append('quantity29Value', document.querySelector('#quantity29').value);

      formData.append('position30Value', document.querySelector('#numbersOrder30').value);
      formData.append('quantity30Value', document.querySelector('#quantity30').value);

      formData.append('position31Value', document.querySelector('#numbersOrder31').value);
      formData.append('quantity31Value', document.querySelector('#quantity31').value);


      formData.append('position32Value', document.querySelector('#numbersOrder32').value);
      formData.append('quantity32Value', document.querySelector('#quantity32').value);


      formData.append('position33Value', document.querySelector('#numbersOrder33').value);
      formData.append('quantity33Value', document.querySelector('#quantity33').value);

      formData.append('position34Value', document.querySelector('#numbersOrder34').value);
      formData.append('quantity34Value', document.querySelector('#quantity34').value);
      formData.append('position35Value', document.querySelector('#numbersOrder35').value);
      formData.append('quantity35Value', document.querySelector('#quantity35').value);
      formData.append('position36Value', document.querySelector('#numbersOrder36').value);
      formData.append('quantity36Value', document.querySelector('#quantity36').value);
      formData.append('position37Value', document.querySelector('#numbersOrder37').value);
      formData.append('quantity37Value', document.querySelector('#quantity37').value);
      formData.append('position38Value', document.querySelector('#numbersOrder38').value);
      formData.append('quantity38Value', document.querySelector('#quantity38').value);
      formData.append('position39Value', document.querySelector('#numbersOrder39').value);
      formData.append('quantity39Value', document.querySelector('#quantity39').value);
      formData.append('position40Value', document.querySelector('#numbersOrder40').value);
      formData.append('quantity40Value', document.querySelector('#quantity40').value);
      formData.append('position41Value', document.querySelector('#numbersOrder41').value);
      formData.append('quantity41Value', document.querySelector('#quantity41').value);
      formData.append('position42Value', document.querySelector('#numbersOrder42').value);
      formData.append('quantity42Value', document.querySelector('#quantity42').value);
      formData.append('position43Value', document.querySelector('#numbersOrder43').value);
      formData.append('quantity43Value', document.querySelector('#quantity43').value);
      formData.append('position44Value', document.querySelector('#numbersOrder44').value);
      formData.append('quantity44Value', document.querySelector('#quantity44').value);
      formData.append('position45Value', document.querySelector('#numbersOrder45').value);
      formData.append('quantity45Value', document.querySelector('#quantity45').value);
      formData.append('position46Value', document.querySelector('#numbersOrder46').value);
      formData.append('quantity46Value', document.querySelector('#quantity46').value);
      formData.append('position47Value', document.querySelector('#numbersOrder47').value);
      formData.append('quantity47Value', document.querySelector('#quantity47').value);
      formData.append('position48Value', document.querySelector('#numbersOrder48').value);
      formData.append('quantity48Value', document.querySelector('#quantity48').value);
      formData.append('position49Value', document.querySelector('#numbersOrder49').value);
      formData.append('quantity49Value', document.querySelector('#quantity49').value);
      formData.append('position50Value', document.querySelector('#numbersOrder50').value);
      formData.append('quantity50Value', document.querySelector('#quantity50').value);
      formData.append('position51Value', document.querySelector('#numbersOrder51').value);
      formData.append('quantity51Value', document.querySelector('#quantity51').value);
      formData.append('position52Value', document.querySelector('#numbersOrder52').value);
      formData.append('quantity52Value', document.querySelector('#quantity52').value);
      formData.append('position53Value', document.querySelector('#numbersOrder53').value);
      formData.append('quantity53Value', document.querySelector('#quantity53').value);
      formData.append('position54Value', document.querySelector('#numbersOrder54').value);
      formData.append('quantity54Value', document.querySelector('#quantity54').value);
      formData.append('position55Value', document.querySelector('#numbersOrder55').value);
      formData.append('quantity55Value', document.querySelector('#quantity55').value);
      formData.append('position56Value', document.querySelector('#numbersOrder56').value);
      formData.append('quantity56Value', document.querySelector('#quantity56').value);
      formData.append('position57Value', document.querySelector('#numbersOrder57').value);
      formData.append('quantity57Value', document.querySelector('#quantity57').value);
      formData.append('position58Value', document.querySelector('#numbersOrder58').value);
      formData.append('quantity58Value', document.querySelector('#quantity58').value);
      formData.append('position59Value', document.querySelector('#numbersOrder59').value);
      formData.append('quantity59Value', document.querySelector('#quantity59').value);
      formData.append('position60Value', document.querySelector('#numbersOrder60').value);
      formData.append('quantity60Value', document.querySelector('#quantity60').value);
      formData.append('position61Value', document.querySelector('#numbersOrder61').value);
      formData.append('quantity61Value', document.querySelector('#quantity61').value);
      formData.append('position62Value', document.querySelector('#numbersOrder62').value);
      formData.append('quantity62Value', document.querySelector('#quantity62').value);
      formData.append('position63Value', document.querySelector('#numbersOrder63').value);
      formData.append('quantity63Value', document.querySelector('#quantity63').value);
      formData.append('position64Value', document.querySelector('#numbersOrder64').value);
      formData.append('quantity64Value', document.querySelector('#quantity64').value);
      formData.append('position65Value', document.querySelector('#numbersOrder65').value);
      formData.append('quantity65Value', document.querySelector('#quantity65').value);
      formData.append('position66Value', document.querySelector('#numbersOrder66').value);


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
              To: 'reservations@hollapolla.nl',
              From: 'reservations@hollapolla.nl',
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


                                                                                                     Numer zamówienia 21: ${document.querySelector('#numbersOrder20').value}<br><br>
                        Ilość 21:  ${document.querySelector('#quantity20').value}<br><br><br><br>

                                                                                                          Numer zamówienia 22: ${document.querySelector('#numbersOrder21').value}<br><br>
                        Ilość 22:  ${document.querySelector('#quantity21').value}<br><br><br><br>

                                                                                                          Numer zamówienia 23: ${document.querySelector('#numbersOrder22').value}<br><br>
                        Ilość 23:  ${document.querySelector('#quantity22').value}<br><br><br><br>


                                                                                                          Numer zamówienia 24: ${document.querySelector('#numbersOrder23').value}<br><br>
                        Ilość 24:  ${document.querySelector('#quantity23').value}<br><br><br><br>

                                                                                                                 Numer zamówienia 25: ${document.querySelector('#numbersOrder24').value}<br><br>
                        Ilość 25:  ${document.querySelector('#quantity24').value}<br><br><br><br>

                                                                                                                            Numer zamówienia 26: ${document.querySelector('#numbersOrder25').value}<br><br>
                        Ilość 26:  ${document.querySelector('#quantity25').value}<br><br><br><br>

                        
                                                                                                                            Numer zamówienia 27: ${document.querySelector('#numbersOrder26').value}<br><br>
                        Ilość 27:  ${document.querySelector('#quantity26').value}<br><br><br><br>
                   
                                                                                                                                                    Numer zamówienia 28: ${document.querySelector('#numbersOrder27').value}<br><br>
                        Ilość 28:  ${document.querySelector('#quantity27').value}<br><br><br><br>


                        Numer zamówienia 29: ${document.querySelector('#numbersOrder28').value}<br><br>
                        Ilość 29:  ${document.querySelector('#quantity28').value}<br><br><br><br>


                            Numer zamówienia 30: ${document.querySelector('#numbersOrder29').value}<br><br>
                        Ilość 30:  ${document.querySelector('#quantity29').value}<br><br><br><br>
                        
                            Numer zamówienia 31: ${document.querySelector('#numbersOrder30').value}<br><br>
                        Ilość 31:  ${document.querySelector('#quantity30').value}<br><br><br><br>

                             Numer zamówienia 32: ${document.querySelector('#numbersOrder31').value}<br><br>
                        Ilość 32:  ${document.querySelector('#quantity31').value}<br><br><br><br>

                            Numer zamówienia 33: ${document.querySelector('#numbersOrder32').value}<br><br>
                        Ilość 33:  ${document.querySelector('#quantity32').value}<br><br><br><br>

                       Numer zamówienia 34: ${document.querySelector('#numbersOrder33').value}<br><br>
Ilość 34:  ${document.querySelector('#quantity33').value}<br><br><br><br>
Numer zamówienia 35: ${document.querySelector('#numbersOrder34').value}<br><br>
Ilość 35:  ${document.querySelector('#quantity34').value}<br><br><br><br>
Numer zamówienia 36: ${document.querySelector('#numbersOrder35').value}<br><br>
Ilość 36:  ${document.querySelector('#quantity35').value}<br><br><br><br>
Numer zamówienia 37: ${document.querySelector('#numbersOrder36').value}<br><br>
Ilość 37:  ${document.querySelector('#quantity36').value}<br><br><br><br>
Numer zamówienia 38: ${document.querySelector('#numbersOrder37').value}<br><br>
Ilość 38:  ${document.querySelector('#quantity37').value}<br><br><br><br>
Numer zamówienia 39: ${document.querySelector('#numbersOrder38').value}<br><br>
Ilość 39:  ${document.querySelector('#quantity38').value}<br><br><br><br>
Numer zamówienia 40: ${document.querySelector('#numbersOrder39').value}<br><br>
Ilość 40:  ${document.querySelector('#quantity39').value}<br><br><br><br>
Numer zamówienia 41: ${document.querySelector('#numbersOrder40').value}<br><br>
Ilość 41:  ${document.querySelector('#quantity40').value}<br><br><br><br>
Numer zamówienia 42: ${document.querySelector('#numbersOrder41').value}<br><br>
Ilość 42:  ${document.querySelector('#quantity41').value}<br><br><br><br>
Numer zamówienia 43: ${document.querySelector('#numbersOrder42').value}<br><br>
Ilość 43:  ${document.querySelector('#quantity42').value}<br><br><br><br>
Numer zamówienia 44: ${document.querySelector('#numbersOrder43').value}<br><br>
Ilość 44:  ${document.querySelector('#quantity43').value}<br><br><br><br>
Numer zamówienia 45: ${document.querySelector('#numbersOrder44').value}<br><br>
Ilość 45:  ${document.querySelector('#quantity44').value}<br><br><br><br>
Numer zamówienia 46: ${document.querySelector('#numbersOrder45').value}<br><br>
Ilość 46:  ${document.querySelector('#quantity45').value}<br><br><br><br>
Numer zamówienia 47: ${document.querySelector('#numbersOrder46').value}<br><br>
Ilość 47:  ${document.querySelector('#quantity46').value}<br><br><br><br>
Numer zamówienia 48: ${document.querySelector('#numbersOrder47').value}<br><br>
Ilość 48:  ${document.querySelector('#quantity47').value}<br><br><br><br>
Numer zamówienia 49: ${document.querySelector('#numbersOrder48').value}<br><br>
Ilość 49:  ${document.querySelector('#quantity48').value}<br><br><br><br>
Numer zamówienia 50: ${document.querySelector('#numbersOrder49').value}<br><br>
Ilość 50:  ${document.querySelector('#quantity49').value}<br><br><br><br>
Numer zamówienia 51: ${document.querySelector('#numbersOrder50').value}<br><br>
Ilość 51:  ${document.querySelector('#quantity50').value}<br><br><br><br>
Numer zamówienia 52: ${document.querySelector('#numbersOrder51').value}<br><br>
Ilość 52:  ${document.querySelector('#quantity51').value}<br><br><br><br>
Numer zamówienia 53: ${document.querySelector('#numbersOrder52').value}<br><br>
Ilość 53:  ${document.querySelector('#quantity52').value}<br><br><br><br>
Numer zamówienia 54: ${document.querySelector('#numbersOrder53').value}<br><br>
Ilość 54:  ${document.querySelector('#quantity53').value}<br><br><br><br>
Numer zamówienia 55: ${document.querySelector('#numbersOrder54').value}<br><br>
Ilość 55:  ${document.querySelector('#quantity54').value}<br><br><br><br>
Numer zamówienia 56: ${document.querySelector('#numbersOrder55').value}<br><br>
Ilość 56:  ${document.querySelector('#quantity55').value}<br><br><br><br>
Numer zamówienia 57: ${document.querySelector('#numbersOrder56').value}<br><br>
Ilość 57:  ${document.querySelector('#quantity56').value}<br><br><br><br>
Numer zamówienia 58: ${document.querySelector('#numbersOrder57').value}<br><br>
Ilość 58:  ${document.querySelector('#quantity57').value}<br><br><br><br>
Numer zamówienia 59: ${document.querySelector('#numbersOrder58').value}<br><br>
Ilość 59:  ${document.querySelector('#quantity58').value}<br><br><br><br>
Numer zamówienia 60: ${document.querySelector('#numbersOrder59').value}<br><br>
Ilość 60:  ${document.querySelector('#quantity59').value}<br><br><br><br>
Numer zamówienia 61: ${document.querySelector('#numbersOrder60').value}<br><br>
Ilość 61:  ${document.querySelector('#quantity60').value}<br><br><br><br>
Numer zamówienia 62: ${document.querySelector('#numbersOrder61').value}<br><br>
Ilość 62:  ${document.querySelector('#quantity61').value}<br><br><br><br>
Numer zamówienia 63: ${document.querySelector('#numbersOrder62').value}<br><br>
Ilość 63:  ${document.querySelector('#quantity62').value}<br><br><br><br>
Numer zamówienia 64: ${document.querySelector('#numbersOrder63').value}<br><br>
Ilość 64:  ${document.querySelector('#quantity63').value}<br><br><br><br>
Numer zamówienia 65: ${document.querySelector('#numbersOrder64').value}<br><br>
Ilość 65:  ${document.querySelector('#quantity64').value}<br><br><br><br>
Numer zamówienia 66: ${document.querySelector('#numbersOrder65').value}<br><br>
Ilość 66:  ${document.querySelector('#quantity65').value}<br><br><br><br>

    Zgody: <br>
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
                  textStatus.innerHTML = '<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send your message via hollapolla66@gmail.com <br><br>';
                  textStatus.style.color = 'red';
                
              }
          } else if (data.includes('This date is already booked')) {
              textStatus.innerHTML = 'This date is already booked';
              textStatus.style.color = 'red';
          }
      } catch (error) {
          console.error('Error:', error);
          textStatus.innerHTML = 'An error occurred while sending the orders.';
          textStatus.style.color = 'red';
      }
  }
});





