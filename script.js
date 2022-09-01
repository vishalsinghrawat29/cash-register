const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashGivenSection = document.querySelector('.section-cash-given');
const outputSection = document.querySelector(".output-section");
const availableNotes = [2000,500,100,20,10,5,1];
hideCashGivenAndOutput()
nextButton.addEventListener("click", function showCashGivenField(){
    showCashGiven();
});
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(Number(billAmount.value) > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned  = cashGiven.value - billAmount.value;
            outputSection.style.display = 'block'
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
function hideCashGivenAndOutput(){
    cashGivenSection.style.display = "none";
    outputSection.style.display = "none";
}
function showCashGiven(){
    if (billAmount.value > 0){
        cashGivenSection.style.display = 'block'
        message.innerText = ""   
    } else {
        showMessage("Invalid value") // calling a showMessage function
        cashGivenSection.style.display = 'none'   
        outputSection.style.display = 'none'     
      }

}

function calculateChange(amountToBeReturned){
    for(let i =0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned /availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}