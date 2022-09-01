document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    if (email === 'admin@nokibhr.com' && password === 'admin') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid User')
    }
})