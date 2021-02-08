// first ticket increase
const firstClassIncrease = document.getElementById('firstClass-increase');
var firstCounterNumber=0;
firstClassIncrease.addEventListener('click', function(){
    counterNumberHandle('first', true); 

})

// first ticket decrease 

const firstClassDecrease = document.getElementById('firstClass-decrease');
var firstCounterNumber=0;
firstClassDecrease.addEventListener('click', function(){
    counterNumberHandle('first', false);
    
})

//increase economy
const economyIncrease = document.getElementById('economy-increase')
economyIncrease.addEventListener('click', function(){
    counterNumberHandle('economy', true);
})

//decrease economy
const economyDecrease = document.getElementById('economy-decrease')
economyDecrease.addEventListener('click', function(){
    counterNumberHandle('economy', false);
})

function counterNumberHandle(ticket, isIncrease){
    const firstCounter= document.getElementById(ticket + '-counter');
    var firstCounterNumber=0;
    if(firstCounter.value==="")
    {
        firstCounterNumber=0;
    }
    else
    {
        firstCounterNumber = parseFloat(firstCounter.value);
    }
    
    let totalNumber = firstCounterNumber;
    if(isIncrease==true){
        totalNumber = firstCounterNumber + 1
    }
    if(isIncrease==false && totalNumber>0){
        totalNumber = firstCounterNumber - 1
    }
    firstCounter.value = totalNumber;

    const ticketPrice = document.getElementById(ticket + '-price');
    let increasePrice = ticketPrice;
    if (ticket == 'first') {
        increasePrice = totalNumber * 150;
    }
    if (ticket =='economy') {
        increasePrice = totalNumber * 100;
    }
    ticketPrice.innerText = increasePrice;
    calculationHandle();
}
//calculation
function calculationHandle() {
    const firstClassTicketPrice = getInputPrice('first');
    const economyTicketPrice = getInputPrice('economy');
    const total = firstClassTicketPrice + economyTicketPrice;
    document.getElementById('total-price').innerText = total;
    const tax = Math.round(total * .1);
    document.getElementById('total-tax').innerText = tax;
    const grandTotal = total + tax;
    document.getElementById('final-price').innerText = grandTotal; 
}

function getInputPrice(ticket) {
    const ticketPrice = document.getElementById(ticket + '-price');
    const ticketPriceNumber = parseFloat(ticketPrice.innerText);
    return ticketPriceNumber;
}