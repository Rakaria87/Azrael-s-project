const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 25;

stockinfo.innerText = `Available Stock = ${maxstock}` ;

quantityinput.addEventListener("input", function() {
    let value = parseInt(quantityinput.value);
    if (value < 1){
        quantityinput.value  = 1;
    }
    if (value > maxstock){
        quantityinput.value = maxstock;
        alert(`Sorry, we only have ${maxstock} items in stock`);
    }
})
document.getElementById("buyButton").addEventListener("click",function(){
    let selectedQuantity=parseInt(quantityinput.value);
    if (selectedQuantity>maxstock){
        alert(`Only ${maxstock} items available`);
    }else{
        alert(`You have purchased ${selectedQuantity} item(s).`);
    }
});
