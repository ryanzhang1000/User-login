//User Login

//Event Listeners
document.getElementById('login').addEventListener('click', loginbtn)

//Event Functions
function loginbtn() {
    //Input fields 
    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    //Process
    if (name == '123') {
        document.getElementById('forgot').innerHTML = 'Correct';
    } else {
        document.getElementById('forgot').innerHTML = 'Username or password is incorrect';
    }

    if (password == '1234') {
        document.getElementById('forgot').innerHTML = 'Correct';
    } else {
        document.getElementById('forgot').innerHTML = 'Username or password is incorrect';
    }
}




