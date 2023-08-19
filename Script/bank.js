// alert('Connected')


document.getElementById('loginBtn').addEventListener('click', function(){
    const emailInput = getInputValue('emailInput');
    console.log(emailInput);
    const passwordInput = getInputValue('passwordInput');
    // console.log(passwordInput);
    // if(emailInput =='mypersonalbank@anuvab.com' && passwordInput =='anuvab'){
    //     // window.location.href = 'dashboarad.html';
    //     window.open('dashboarad.html', '_blank');
    // } 
    // else{
    //     alert('Invalid Username or Password');
    // }
    if(emailInput != '' && passwordInput != ''){
        window.open('dashboarad.html', '_blank');
    }else{
        alert('Invalid Email or Passward');
    }
})




