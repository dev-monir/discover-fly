// first ticket increase
const firstClassIncrease = document.getElementById('firstClass-increase');
var firstCounterNumber = 0;
firstClassIncrease.addEventListener('click', function () {
    counterNumberHandle('first', true);

})

// first ticket decrease 

const firstClassDecrease = document.getElementById('firstClass-decrease');
var firstCounterNumber = 0;
firstClassDecrease.addEventListener('click', function () {
    counterNumberHandle('first', false);

})

//increase economy
const economyIncrease = document.getElementById('economy-increase')
economyIncrease.addEventListener('click', function () {
    counterNumberHandle('economy', true);
})

//decrease economy
const economyDecrease = document.getElementById('economy-decrease')
economyDecrease.addEventListener('click', function () {
    counterNumberHandle('economy', false);
})
/*let firstCount = 0;
let economyCount = 0;*/
let firstValue = 0
let economyValue = 0;
let finalTotal=0;
function counterNumberHandle(ticket, isIncrease) {
    const firstCounter = document.getElementById(ticket + '-counter');
    if (isIncrease == true) {
        if (ticket === "first") {
            firstValue++;
            //firstCount = firstValue;
            firstCounter.value = firstValue;

        }

        else {
            economyValue++;
            
            firstCounter.value = economyValue;
        }
        
    }
    else {
        if (ticket === "first" && firstValue > 0) {
            firstValue--;
            
            firstCounter.value = firstValue;

        }

        else if (ticket === "economy" && economyValue > 0) {
            economyValue--;
           
            firstCounter.value = economyValue;
        }
        
    }
    let totalPrice = firstValue * 150 + economyValue * 100;
    let tax = (totalPrice*10)/100;
    finalTotal=totalPrice+tax;
    document.getElementById("total-price").innerText = totalPrice
    document.getElementById("total-tax").innerText =tax;
    document.getElementById("final-price").innerText = finalTotal;
}
function bookClick(){
    alert("Total Number of Tickets\nFirst Class="+firstValue+"\nEconomy Class="+economyValue+"\nTotal Cost="+finalTotal)
}


