let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active') ;
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});


//sign up

function submitForm() {
  // Add your JavaScript logic here, e.g., form validation or sending data to a server
  alert('Form submitted!'); // Replace with your logic
}



//sign in
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
      alert("Please enter both email and password");
      return false;
  }

  return true;
}


//contact us
function submitForm() {
  var formData = new FormData(document.getElementById('contactForm'));

  fetch('process_contact.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
