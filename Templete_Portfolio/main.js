const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener("click",() => {
        nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')

// scrollreveals

ScrollReveal().reveal('.scroll',{
  duration:1000,
  origin:"top",
  distance:'100px',
  interval:200,
  reset:true,
  viewFactor:0.2
});
ScrollReveal().reveal('.about',{
  delay:300,
  duration:1000,
  origin:"left",
  distance:'800px',
  interval:200,
  reset:true,
  viewFactor:0.2
});
ScrollReveal().reveal('.servicer',{
  delay:500,
  duration:1000,
  origin:"right",
  distance:'800px',
  interval:250,
  reset:true,
  viewFactor:0.2
});
ScrollReveal().reveal('.menu',{
  delay:800,
  duration:400,
  origin:"bottom",
  distance:'0px',
  opacity:0,
  easing:'ease-in-out',
  reset:true,
  viewFactor:0.2
});

const toggle = document.getElementById("theme-button");
toggle.addEventListener("click",() => {
  document.body.classList.toggle('dark-mode')
})




