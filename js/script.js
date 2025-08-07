const API_BASE = 'http://localhost:5000/api';

function register() {
    const name = document.getElementById('authName').value;
    const username = document.getElementById('authUsername').value;
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, username })
    }).then(res => res.json()).then(data => {
        if (data.success) {
            window.location.href = 'login.html';
            alert('Registration successful! Please login.');
        } else {
            alert(data.message || 'Registration failed');
        }
    });
}

function login() {
    const username = document.getElementById('authUsername').value;
    const password = document.getElementById('authPassword').value;
    fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(data => {
        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'index.html';
        } else {
            alert(data.message || 'Login failed');
        }
    });
}