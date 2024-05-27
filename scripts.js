document.addEventListener('DOMContentLoaded', () => {
    const chatButtons = document.querySelectorAll('.chat-button');
    const inputBox = document.querySelector('.input-box input');
    
    chatButtons.forEach(button => {
        button.addEventListener('click', () => {
            inputBox.value = button.innerText;
            setTimeout(() => {
                const redirectUrl = button.getAttribute('data-redirect');
                window.location.href = redirectUrl;
            }, 500);  // delay for user to see the message
        });
    });
});

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
}

function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Implement your login logic here
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        hideLoginForm();
    } else {
        alert('Invalid credentials, please try again.');
    }
}
