document.getElementById('login-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPasswrod = document.getElementById('user-password').value;
    if(userEmail == 'sample10@gmail.com' && userPasswrod == 'sample'){
        window.location.href = 'banking.html';
    }
    else{
        console.log("Sorry! Your eamil or password is incorrect. Please try agin with valid information");
    }
})