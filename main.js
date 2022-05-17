// ALL VARIABLES

let lemon = document.getElementById('lemon');
let orange = document.getElementById('orange');
let lime = document.getElementById('lime');
let kiwi = document.getElementById('kiwi');
let pineapple = document.getElementById('pineapple');
let mango = document.getElementById('mango');

let standard_delivery = document.getElementById('standard-delivery');
let next_day_delivery = document.getElementById('next-day-delivery');
let nominated_day_delivery = document.getElementById('nominated-day-delivery');

let standard = 3.99;
let next_day = 5.99;
let nominated_day = 4.99;

let subtotal = document.getElementById('subtotal');
let summary = document.getElementById('summary')
let lemon_price = +localStorage.getItem('lemon-pric');
let lime_price = +localStorage.getItem('lime-pric');
let orange_price = +localStorage.getItem('orange-pric');
let pineapple_price = +localStorage.getItem('pineapple-pric');
let mango_price = +localStorage.getItem('mango-pric');
let kiwi_price = +localStorage.getItem('kiwi-pric');



let lemon_quantity = document.getElementById("lemon-quantity");
let orange_quantity = document.getElementById("orange-quantity");
let lime_quantity = document.getElementById("lime-quantity");
let kiwi_quantity = document.getElementById("kiwi-quantity");
let pineapple_quantity = document.getElementById("pineapple-quantity");
let mango_quantity = document.getElementById("mango-quantity");


let lemon_count = +localStorage.getItem("lemon-qty");
let orange_count = +localStorage.getItem("orange-qty");
let lime_count = +localStorage.getItem("lime-qty");
let kiwi_count = +localStorage.getItem("kiwi-qty");
let pineapple_count = +localStorage.getItem("pineapple-qty");
let mango_count = +localStorage.getItem("mango-qty");

let total_value = +localStorage.getItem("total");



let shopping_bag = [];

let total_v = total_value.toFixed(1) + "0";


let order_summary_lemon = lemon_count;
let order_summary_lime = lime_count;
let order_summary_orange = orange_count;
let order_summary_kiwi = kiwi_count;
let order_summary_pineapple = pineapple_count;
let order_summary_mango = mango_count;

// =============================================================================


//let add = "<a class='btn red' >Remove</a>"

// FOR PRODUCT HTML, CHECKS QTY AT THE START
if(lemon_quantity && orange_quantity && lime_quantity && kiwi_quantity && pineapple_quantity && mango_quantity){

lemon_quantity.innerHTML += lemon_count + " Qty / £" +  lemon_price + "0"; 
orange_quantity.innerHTML += orange_count + " Qty / £" +  orange_price + "0"; 
lime_quantity.innerHTML += lime_count + " Qty / £" +  lime_price + "0"; 
kiwi_quantity.innerHTML += kiwi_count + " Qty / £" +  kiwi_price + "0"; 
pineapple_quantity.innerHTML += pineapple_count + " Qty / £" +  pineapple_price + "0"; 
mango_quantity.innerHTML += mango_count + " Qty / £" +  mango_price + "0"; 
check_mango();
check_orange();
check_pineapple();
check_lime();
check_lemon();
check_kiwi();
} else{
    console.log("wrong")
}


// =============================================================================

// FOR CHECKOUT HTML
if (subtotal){
    subtotal.innerHTML += "£" + total_v;
    summary.innerHTML += order_summary_lemon + " x Lemon <br>"
    summary.innerHTML += order_summary_lime  + " x Lime <br>"
    summary.innerHTML += order_summary_orange + " x Orange <br>"
    summary.innerHTML += order_summary_kiwi  + " x Kiwi <br>"
    summary.innerHTML += order_summary_pineapple + " x Pineapple <br>"
    summary.innerHTML += order_summary_mango  + " x Mango <br>"
} else{
    console.log("wrong")
}

// =============================================================================

//CHECKS IF QTY = 0, IF TRUE REMOVE "REMOVE" BUTTON, ELSE SHOW
function check_lime(){
    if(lime_count <= 0){
        document.getElementsByClassName("lime-red")[0].style.display = "none";
    }
   else if(lime_count >= 1){
    document.getElementsByClassName("lime-red")[0].style.display = "inline-block";
   }
}

function check_lemon(){
    if(lemon_count <= 0){
        document.getElementsByClassName("lemon-red")[0].style.display = "none";
    }
   else if(lemon_count >= 1){
    document.getElementsByClassName("lemon-red")[0].style.display = "inline-block";
   }
}
function check_orange(){
    if(orange_count <= 0){
        document.getElementsByClassName("orange-red")[0].style.display = "none";
    }
   else if(orange_count >= 1){
    document.getElementsByClassName("orange-red")[0].style.display = "inline-block";
   }
}
function check_kiwi(){
    if(kiwi_count <= 0){
        document.getElementsByClassName("kiwi-red")[0].style.display = "none";
    }
   else if(kiwi_count >= 1){
    document.getElementsByClassName("kiwi-red")[0].style.display = "inline-block";
   }
}
function check_pineapple(){
    if(pineapple_count <= 0){
        document.getElementsByClassName("pineapple-red")[0].style.display = "none";
    }
   else if(pineapple_count >= 1){
    document.getElementsByClassName("pineapple-red")[0].style.display = "inline-block";
   }
}

function check_mango(){
    if(mango_count <= 0){
        document.getElementsByClassName("mango-red")[0].style.display = "none";
    }
   else if(mango_count >= 1){
    document.getElementsByClassName("mango-red")[0].style.display = "inline-block";
   }
}

// =============================================================================


// REMOVES AND STORES DATA OF PRODUCTS SELECTED

function remove(clicked_id){
    const product_id = clicked_id;

    switch(product_id){
        case lemon.id:
            lemon_count -=1;
            localStorage.setItem("lemon_click", lemon_count)
            lemon_price -= 0.30;
            total_value -= 0.30;
            localStorage.setItem('lemon-qty', lemon_count)
            localStorage.setItem("lemon-pric", lemon_price.toFixed(1))
            localStorage.setItem('total', total_value);
            lemon_quantity.innerText = lemon_count + " Qty / £" + lemon_price.toFixed(1) + "0";
            check_lemon();
            break;
        case orange.id:
                orange_count -= 1;
                localStorage.setItem("orange_click", orange_count)
                orange_price -= 0.35;
                total_value -= 0.35;
                localStorage.setItem('total', total_value);
                localStorage.setItem('orange-qty', orange_count)
                localStorage.setItem("orange-pric", orange_price.toFixed(1))
                orange_quantity.innerText = orange_count + " Qty / £" + orange_price.toFixed(1) + "0";
                check_orange();
                break;
        case lime.id:
           
                lime_count -= 1;
                localStorage.setItem("lime_click", lime_count)
                lime_price -= 0.20;
                total_value -= 0.20;
                localStorage.setItem('total', total_value);
                localStorage.setItem('lime-qty', lime_count)
                localStorage.setItem("lime-pric", lime_price.toFixed(1))
                lime_quantity.innerText = lime_count + " Qty / £" + lime_price.toFixed(1) + "0";
                check_lime();
                break;
        case kiwi.id:
                kiwi_count -= 1;
                localStorage.setItem("kiwi_click", kiwi_count)
                kiwi_price -= 0.30;
                total_value -= 0.30;
                localStorage.setItem('total', total_value);
                localStorage.setItem('kiwi-qty', kiwi_count)
                localStorage.setItem("kiwi-pric", kiwi_price.toFixed(1))
                kiwi_quantity.innerText = kiwi_count + " Qty / £" + kiwi_price.toFixed(1) + "0";
                check_kiwi();
                break;
        case pineapple.id:
                pineapple_count -= 1;
                localStorage.setItem("pineapple_click", pineapple_count)
                pineapple_price -= 0.50;
                total_value -= 0.50;
                localStorage.setItem('total', total_value);
                localStorage.setItem('pineapple-qty', pineapple_count)
                localStorage.setItem("pineapple-pric", pineapple_price.toFixed(1))
                pineapple_quantity.innerText = pineapple_count + " Qty / £" + pineapple_price.toFixed(1) + "0";
                check_pineapple();
                break;
        case mango.id:
                mango_count -= 1;
                localStorage.setItem("mango_click", mango_count)
                mango_price -= 0.40;
                total_value -= 0.40;
                localStorage.setItem('total', total_value);
                localStorage.setItem('mango-qty', mango_count)
                localStorage.setItem("mango-pric", mango_price.toFixed(1))
                mango_quantity.innerText = mango_count + " Qty / £" + mango_price.toFixed(1) + "0";
                check_mango();
                break;
            default:
                alert("Wrong");
    
    
       }
    
     
    }


// =============================================================================



// ADDS, STORES DATA OF PRODUCTS SELECTED    

function checkout(clicked_id){
   const product_id = clicked_id;
   

   switch(product_id){
       case lemon.id:
           shopping_bag.push("Lemon");
           lemon_count += 1;
           localStorage.setItem("lemon_click", lemon_count)
           lemon_price += 0.30;
           total_value += 0.30;
           localStorage.setItem('total', total_value);
           console.log(lemon_price);
           document.getElementById("lemon-quantity").innerText = lemon_count + " Qty / £" + lemon_price.toFixed(1) + "0";
           localStorage.setItem("lemon-qty", lemon_count);
           localStorage.setItem("lemon-pric", lemon_price.toFixed(1))
           check_lemon();
           break;
        case orange.id:
            shopping_bag.push("Orange");
            orange_count += 1;
            localStorage.setItem("orange_click", orange_count)
            orange_price += 0.35;
            total_value += 0.35;
            localStorage.setItem('total', total_value);
            document.getElementById("orange-quantity").innerText = orange_count + " Qty / £" + orange_price.toFixed(1) + "0";
            localStorage.setItem("orange-qty", orange_count);
            localStorage.setItem("orange-pric", orange_price.toFixed(1))
            check_orange();
            break;
        case lime.id:

            lime_count += 1;
            localStorage.setItem("lime_click", lime_count)
            lime_price += 0.20;
            total_value += 0.20;
            localStorage.setItem('total', total_value);
           lime_quantity.innerText = lime_count + " Qty / £" + lime_price.toFixed(1) + "0";
            localStorage.setItem("lime-qty", lime_count);
            localStorage.setItem("lime-pric", lime_price.toFixed(1))
            check_lime();
            break;
        case kiwi.id:
            shopping_bag.push("Kiwi");
            kiwi_count += 1;
            localStorage.setItem("kiwi_click", kiwi_count)
            kiwi_price += 0.30;
            total_value += 0.30;
            localStorage.setItem('total', total_value);
            document.getElementById("kiwi-quantity").innerText = kiwi_count + " Qty / £" + kiwi_price.toFixed(1) + "0";
            localStorage.setItem("kiwi-qty", kiwi_count);
            localStorage.setItem("kiwi-pric", kiwi_price.toFixed(1))
            check_kiwi();
            break;
        case pineapple.id:
            shopping_bag.push("Pineapple");
            pineapple_count += 1;
            localStorage.setItem("pineapple_click", pineapple_count)
            pineapple_price += 0.50;
            total_value += 0.50;
            localStorage.setItem('total', total_value);
            document.getElementById("pineapple-quantity").innerText = pineapple_count + " Qty / £" + pineapple_price.toFixed(1) + "0";
            localStorage.setItem("pineapple-qty", pineapple_count);
            localStorage.setItem("pineapple-pric", pineapple_price.toFixed(1))
            check_pineapple();
            break;
        case mango.id:
            shopping_bag.push("Mango");
            mango_count += 1;
            localStorage.setItem("mango_click", mango_count)
            mango_price += 0.40;
            total_value += 0.40;
            localStorage.setItem('total', total_value);
            document.getElementById("mango-quantity").innerText = mango_count + " Qty / £" + mango_price.toFixed(1) + "0";
            localStorage.setItem("mango-qty", mango_count);
            localStorage.setItem("mango-pric", mango_price.toFixed(1))
            check_mango();
            break;
        default:
            alert("Wrong");


   }

   

}

// =============================================================================

// SETS DELIVERY PRICE AND PASSES TO CALCULATE FUNCTION

function delivery(delivery_id){
    switch(delivery_id){
        case standard_delivery.id:
            document.getElementById("delivery").innerHTML = "£3.99";
            calculate(standard)
            break;
        case next_day_delivery.id:
            document.getElementById("delivery").innerHTML = "£5.99";
            calculate(next_day)
            break;
        case nominated_day_delivery.id:
            document.getElementById("delivery").innerHTML = "£4.99";
            calculate(nominated_day)
            break;
        default:
            alert("Error")

    } 
}

// =============================================================================


// CALCULATES DELIVERY PRICE + SUBTOTAL

function calculate(delivery_type){
    let total = +delivery_type + +total_v
    document.getElementById("total").innerHTML = "£" + total;
}

// =============================================================================


// RESETS ALL VARIABLES
function reset(){
    localStorage.setItem('lemon-qty', 0)
    localStorage.setItem("lemon-pric", 0)
    localStorage.setItem('orange-qty', 0)
    localStorage.setItem("orange-pric", 0)
    localStorage.setItem('lime-qty', 0)
    localStorage.setItem("lime-pric", 0)
    localStorage.setItem('kiwi-qty', 0)
    localStorage.setItem("kiwi-pric", 0)
    localStorage.setItem('pineapple-qty', 0)
    localStorage.setItem("pineapple-pric", 0)
    localStorage.setItem('mango-qty', 0)
    localStorage.setItem("mango-pric", 0)
    localStorage.setItem('total', 0);
}

// =============================================================================
