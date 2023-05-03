
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value.toLowerCase();
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var totalBill = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            totalBill += 2.75;
        }
        else if (billItem === "sms"){
            totalBill += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = totalBill.toFixed(2);
    billTotal.innerHTML = roundedBillTotal;

// remove existing classes from billTotal element
billTotal.classList.remove("warning");
billTotal.classList.remove("danger");

// add new classes to billTotal element
if (totalBill > 20){
    billTotal.classList.add("warning");
}
if (totalBill >= 30){
    billTotal.classList.add("danger");
}

// check if total bill has decreased and remove classes accordingly
if (totalBill <= previousTotalBill && previousTotalBill > 20){
    billTotal.classList.remove("danger");
}
if (totalBill <= previousTotalBill && previousTotalBill > 0 && previousTotalBill < 30){
    billTotal.classList.remove("warning");
}

// store the current total bill for the next iteration
previousTotalBill = totalBill;
};
    


calculateBtn.addEventListener('click', calculateBtnClicked)