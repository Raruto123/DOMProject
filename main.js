// var deleteItemsButtons = document.getElementsByClassName("delete_quantity");
// var quantityInput = document.getElementsByClassName("quantity")
// for(var i = 0; i < deleteItemsButtons.length; i++) {
//     var button = deleteItemsButtons[i];
//     button.addEventListener("click", function(event){
//         console.log("clicked");
//         quantityInput.value = 0;
//     })
// }

//La logique des 3 boutons delete
var deleteItemsButtons1 = document.getElementsByClassName("delete_quantity")[0];
var quantityInput1 = document.getElementsByClassName("quantity")[0];
deleteItemsButtons1.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput1.value = 0;
    updateCartTotal();
})

var deleteItemsButtons2 = document.getElementsByClassName("delete_quantity")[1];
var quantityInput2 = document.getElementsByClassName("quantity")[1];
deleteItemsButtons2.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput2.value = 0;
    updateCartTotal();
})

var deleteItemsButtons3 = document.getElementsByClassName("delete_quantity")[2];
var quantityInput3 = document.getElementsByClassName("quantity")[2];
deleteItemsButtons3.addEventListener("click", function(event){
    console.log(quantityInput3.value);
    quantityInput3.value = 0;
    updateCartTotal();
})

//La logique des 3 boutons +
var plusButton1 = document.getElementsByClassName("plus_button")[0];
plusButton1.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput1.value++;
    updateCartTotal();
})

var plusButton2 = document.getElementsByClassName("plus_button")[1];
plusButton2.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput2.value++;
    updateCartTotal();
})

var plusButton3 = document.getElementsByClassName("plus_button")[2];
plusButton3.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput3.value++;
    updateCartTotal();
})

// La logique des 3 boutons -
var minusButton1 = document.getElementsByClassName("minus_button")[0];
minusButton1.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput1.value--;
    if (quantityInput1.value <=0){
        quantityInput1.value = 0;
    }
    updateCartTotal();
})

var minusButton2 = document.getElementsByClassName("minus_button")[1];
minusButton2.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput2.value--;
    if (quantityInput2.value <=0){
        quantityInput2.value = 0;
    }
    updateCartTotal();
})

var minusButton3 = document.getElementsByClassName("minus_button")[2];
minusButton3.addEventListener("click", function(event){
    console.log("clicked");
    quantityInput3.value--;
    if (quantityInput3.value <=0){
        quantityInput3.value = 0;
    }
    updateCartTotal();
})

// Prendre uniquement des valeurs positives au niveau des quantités
var quantityNumber1 = document.getElementsByClassName("quantity")[0];
quantityNumber1.addEventListener("change", function(event){
    if (isNaN(quantityNumber1.value) || quantityNumber1.value <= 0){
        quantityNumber1.value = 0;
    }
    updateCartTotal();
})


var quantityNumber2 = document.getElementsByClassName("quantity")[1];
quantityNumber2.addEventListener("change", function(event){
    if (isNaN(quantityNumber2.value) || quantityNumber2.value <= 0){
        quantityNumber2.value = 0;
    }
    updateCartTotal();
})


var quantityNumber3 = document.getElementsByClassName("quantity")[2];
quantityNumber3.addEventListener("change", function(event){
    if (isNaN(quantityNumber3.value) || quantityNumber3.value <= 0){
        quantityNumber3.value = 0;
    }
    updateCartTotal();
    // console.log(heart1.style.backgroundColor = "red")
    // makeTheHeartRed();
})



// for(var i = 0; i < cartItems.length; i++){
//     var cartItem = cartItems[i];
//     var deleteItemButton = cartItem.getElementsByClassName("delete_quantity")[0];
//     deleteItemButton.addEventListener("click", function(){
//         var quantityElement = cartItem.getElementsByClassName("quantity")[0].value;
//         var quantity = quantityElement.value;
//         console.log(quantity);
//     })
// }


// function makeTheHeartRed(){
//     var hearts = document.getElementsByClassName("heart");
//     for(var i = 0; i < hearts.length; i++){
//         var heart = hearts[i];
//         heart.addEventListener("click", function(event){
//             heart.style.backgroundColor =;
//         })
//     }
// }
//     //         if (heart.classList.contains("heart_animate")){
//     //             heart.classList.remove("heart_animate");
//     //             heart.classList.toggle("heart_animate_backwards");
//     //         } else if (heart.classList.contains("heart_animate_backwards")) {
//     //             heart.classList.remove("heart_animate_backwards");
//     //             heart.classList.toggle("heart_animate");
//     //         } else{
//     //             heart.classList.toggle("heart_animate")
//     //         }
//     //     })
//     // }
//     // console.log(heart.classList.toggle("heart_animate"))
//     }
// }

// Rendre le coeur rouge une fois appuyé 
var heart1 = document.getElementsByClassName("heart")[0];
var isRed1 = false;
var isRed2 = false;
var isRed3 = false;
heart1.addEventListener("click", function(event){
    if (!isRed1){
        heart1.style.backgroundColor = "red";
        isRed1 = true;
    } else {
        heart1.style.backgroundColor="";
        isRed1 = false;
    }
})

var heart2 = document.getElementsByClassName("heart")[1];
heart2.addEventListener("click", function(event){
    if (!isRed2){
        heart2.style.backgroundColor = "red";
        isRed2 = true;
    } else {
        heart2.style.backgroundColor="";
        isRed2 = false;
    }
})

var heart3 = document.getElementsByClassName("heart")[2];
heart3.addEventListener("click", function(event){
    if (!isRed3){
        heart3.style.backgroundColor = "red";
        isRed3 = true;
    } else {
        heart3.style.backgroundColor="";
        isRed3 = false;
    }
})

// La logique pour le total des points
function updateCartTotal(){
    var cartContainer = document.getElementsByClassName("inside_the_cart")[0];
    var cartItems = cartContainer.getElementsByClassName("items");
    console.log("cartItems : ", cartItems);
    var total = 0;
    for (var i = 0; i < cartItems.length; i++){
        var cartItem = cartItems[i];
        var priceElement = cartItem.getElementsByClassName("price")[0];
        var quantityElement = cartItem.getElementsByClassName("quantity")[0];
        var price = parseInt(priceElement.innerHTML.replace("$", ""));
        var quantity = quantityElement.value;
        total += (quantity * price);
    }
    document.getElementsByClassName("totals")[0].innerHTML = "$" + total;
    // console.log(document.getElementsByClassName("totals")[0].value = total)
    // console.log(quantity)
}