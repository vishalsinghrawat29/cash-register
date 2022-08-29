const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const cashGivenLabel = document.querySelector("#cash-Given-label");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];
hideCashGiven()
nextButton.addEventListener("click", function showCashGivenField(){
    showCashGiven();
});
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value ){
            const amountToBeReturned  = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("The cash provided should at least be equal to the bill amount");
        }
    }else{
        showMessage("Invalid Bill Amount");   
    }
});


function showMessage(msg){
    message.style.display = "block";
    message.innerHTML = msg;
}
function hideMessage(){
    message.style.display = "none";
}
function hideCashGiven(){
    cashGiven.style.display = "none";
    cashGivenLabel.style.display = "none";
}
function showCashGiven(){
    cashGiven.style.display = "block";
    cashGivenLabel.style.display = "block";
}

function calculateChange(amountToBeReturned){
    for(let i =0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned /availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}