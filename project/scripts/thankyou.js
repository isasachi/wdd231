const params = new URLSearchParams(window.location.search);
document.getElementById('user-name').textContent = params.get('name') || 'N/A';
document.getElementById('user-email').textContent = params.get('email') || 'N/A';
document.getElementById('user-message').textContent = params.get('message') || 'N/A';