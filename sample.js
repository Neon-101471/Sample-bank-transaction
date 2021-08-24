document.getElementById('login-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPasswrod = document.getElementById('user-password').value;
    if(userEmail == 'simple@gmail.com' && userPasswrod == 'simple'){
        window.location.href = 'banking.html';
    }
    else{
        console.log("Sorry! Your eamil or password is incorrect. Please try agin with valid information");
    }
})