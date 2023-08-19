document.getElementById('depositeBtn').addEventListener('click', function () {
  const depositeAmount = getInputformParse("depositeFormAmount");
  console.log(depositeAmount);
  //    console.log(depositeAmount);
  const previousDeposite = elementByID('depositeTotalAmount');
  //    console.log(previousDeposite);
  const totalDeposite = depositeAmount + previousDeposite;
  // setElemetValue('depositeTotalAmount', totalDeposite);
  if (isNaN(totalDeposite)){  
    alert("Invalid Desposite Amount");  
  }else{
       const totalBlance = elementByID('totalBalance');
   const newBlance = totalBlance + totalDeposite;
    
  if (isNaN(newBlance)){
    alert('Invalid Input');
  }else {
    setElemetValue('depositeTotalAmount', totalDeposite);
    setElemetValue('totalBalance', newBlance);
  }
  } 
  //  const totalBlance = elementByID('totalBalance');
  //  const newBlance = totalBlance + totalDeposite;
  //  setElemetValue('totalBalance', newBlance);
   // console.log(newBlance);



});

