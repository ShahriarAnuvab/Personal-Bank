document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawForm = getInputformParse("withdrawFormAmount");
  // console.log(withdrawForm);
  const withdrawAmount = elementByID("withdrawAmount");
  // console.log(withdrawAmount);
  const totalWithdraw = withdrawForm + withdrawAmount;
  // console.log(totalWithdraw);
  // setElemetValue('withdrawAmount', totalWithdraw);
  if (isNaN(totalWithdraw)) {
    alert("Name can't be blank");
  } else {
    const totalBlance = elementByID("totalBalance");
    const newBlance = totalBlance - totalWithdraw;
    console.log(newBlance);
    

    setElemetValue("withdrawAmount", totalWithdraw);
    if (isNaN(newBlance)) {
        alert("ErronewBlancer calculating new balance.");  
    } else if (newBlance < 0) {
        alert("Insufficient balance.");
    } else {
        setElemetValue('withdrawAmount', totalWithdraw);
        setElemetValue('totalBalance', newBlance);

       
    }
  }
  // const totalBlance = elementByID("totalBalance");
  // const newBlance = totalBlance - totalWithdraw;
  // setElemetValue("totalBalance", newBlance);
});
