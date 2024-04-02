let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header navbar a');
window.onscroll = () =>{
   sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop - 150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset&& top<offset+height){
       navlinks.forEach(links=>{
        links.classlist.remove('active');
        document.querySelector('header navbar a[href*='+id+']').classList.add('active');

         });
    }
   });
  let header=document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY >100);
};   
document.addEventListener("DOMContentLoaded", function() {
   const sections = document.querySelectorAll("section");
   
   sections.forEach(section => {
       section.addEventListener("click", () => {
           // Move elements from left to right on section click
           section.querySelector(".home-content, .services-container, .portfolio-container, .contact").style.transform = "translateX(0)";
           
           // Reset other sections
           sections.forEach(otherSection => {
               if (otherSection !== section) {
                   otherSection.querySelector(".home-content, .services-container, .portfolio-container, .contact").style.transform = "translateX(-100%)";
               }
           });
       });
   });
});
