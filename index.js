let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
 const professions = [
    { name: "Graphic Designer", description: "I am a creative Graphic Designer passionate about creating visually stunning designs that captivate audiences and convey messages effectively." },
    { name: "Android Developer", description: "I am a dedicated Android developer proficient in building innovative mobile applications that provide seamless user experiences and solve real-world problems." },
    { name: "Software Engineer", description: "I am a self-motivated software engineer equipped with skills to come up with solutions to problems arising in the technology world and also designing new ideas. My expertise in technology fields is due to the interest to know what is trending in the technology world and also working on simple and challenging projects." }
  ];
  let professionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeProfession() {
    const professionElement = document.getElementById("profession");
    const descriptionElement = document.getElementById("profession-description");
    const currentProfession = professions[professionIndex];

    if (!isDeleting && charIndex < currentProfession.name.length) {
      professionElement.textContent += currentProfession.name.charAt(charIndex);
      descriptionElement.textContent = currentProfession.description; // Display description while typing
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      professionElement.textContent = currentProfession.name.substring(0, charIndex - 1);
      descriptionElement.textContent = currentProfession.description; // Display description while deleting
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        professionIndex = (professionIndex + 1) % professions.length;
      }
    }

    setTimeout(typeProfession, 200); // Constant typing speed
  }

  typeProfession(); 
