function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }

  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert("Registration successful!");
  window.location.href = "index.html";
}


function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const stored = JSON.parse(localStorage.getItem('user'));

  if (stored && username === stored.username && password === stored.password) {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "secure.html";
  } else {
    alert("Invalid credentials!");
  }
}


function checkAuth() {
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    alert("Unauthorized! Please log in.");
    window.location.href = "index.html";
  }
}


function logout() {
  sessionStorage.removeItem("isLoggedIn");
  alert("You have been logged out.");
  window.location.href = "index.html";
}


document.addEventListener("DOMContentLoaded",()=>{ 
function animation(){
  let tl = gsap.timeline();

  const letters = document.querySelectorAll(".mask div h1");
  const mask = document.querySelector(".mask");
  const card = document.querySelector("section");

  gsap.set(letters,{y:"100%"});
  gsap.set(card,{clipPath:"inset(50% 0 100% 0)"});
  gsap.set("section .overlay",{y:"100%"});

  tl.to(letters,{
    y:0,
    ease: "expoScale(0.5,7,none)",
    duration:.5,
    stagger:.09,
  })

  tl.to(mask,{
    clipPath:"circle(0% at center)",
    delay:.1,
    duration:.8,
    ease:"expoScale(0.5,7,none)",
  })

  tl.to(card,{
    clipPath:"inset(0% 0% 0% 0%)",
    ease: "expoScale(0.5,7,none)",
    duration:1.2,
  })

  tl.to("section .overlay",{
    y:0,
    ease:"expoScale(0.5,7,none)",
    duration:.5,
    delay:.1,
  })
}

animation();
});