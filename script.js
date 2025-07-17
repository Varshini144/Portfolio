document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message');
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = 'red';
      return;
    }
    
    message.textContent = 'Thank you for your message!';
    message.style.color = 'green';
    this.reset();
  });