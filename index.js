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