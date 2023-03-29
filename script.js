const btn = document.querySelector('.login-btn')
const btns = document.querySelector('.btn2')
const login = document.getElementById('log-in-btn')
const open = document.getElementById('enter')




btn.addEventListener('click', unlock)
btns.addEventListener('click', unlock)
open.addEventListener('click', visit )


function visit(){
    window.location.href = 'https://mgo6.github.io/LOveCalculator/'
}


function unlock() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("open");

    var popup = document.getElementById("popup");
    popup.classList.toggle("open");
 }

 function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  

  document.getElementById("log-in-btn").onclick = function(){
    var guest = ["mangal", "Mangal", "sonai", "Sonai"];
    var pass = [ "Mangal", "Sonai"];
    
    var user = document.getElementById("userName").value;
    var password = document.getElementById("myInput").value;
    // console.log("hello",user);
    if (guest.includes( user) && pass.includes(password)) {
  console.log("hello sir")

  function unlocked() {
    var popup2 = document.getElementById("popup2");
    popup2.classList.toggle("access");

  }

unlocked();

//   window.location.href = 'https://www.google.com/'
} 
else{console.log("SORRY")

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
     

    notif.innerHTML =  ` <strong id="x">☠</strong><br><strong>» ACCESS DENIED !! «</strong>  `

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 1500)
}
createNotification();


}
}
  
  
//typinggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

var typed = new Typed('#element', {
  strings: ['HELLO ','~ W E L C O M E ~'],
  typeSpeed: 150,
            loop: false,
            backDelay: 900,
            backSpeed: 130,
});
  var ntyped = new Typed('#element2', {
  strings: [ '*PLEASE CLICK ON <span id="in">"LOG IN"</span> BUTTON TO ACCESS THE  MAIN PAGE ! *'],
  typeSpeed: 100,
            loop: false,
            startDelay:2600,
            backDelay: 900,
            backSpeed: 130,
});
  