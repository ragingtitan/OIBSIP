document.addEventListener('DOMContentLoaded',()=>{
    const home=document.getElementById('home');
    const about=document.getElementById('about');
    const services=document.getElementById('services');
    const contact=document.getElementById('contact');
    const feedback=document.getElementById('feedback');
    const skill=document.getElementById('skill');
    const experience=document.getElementById('experience');
    const education=document.getElementById('education');
    const text=document.getElementById('text');
    /*Populating skillset section*/ 
    skill.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>HTML, CSS, JavaScript, Responsive Design, node.js, Express.js, React.js, Python, JAVA and MySQL.</p>';
    });
    experience.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>I am currently doing an internship at OASIS Infobyte.</p>';
    });

    education.addEventListener('click',()=>{
        text.classList.toggle('toggle');
        text.innerHTML='<p>Currently doing BTech from Heritage Institute of Technology, Kolkata.</p>';
    });
//Tying words
const words = ["Hey, there!","Welcome!","I am Anish Das.","Follow me on","Facebook","Instagram","LinkedIn","and Github.","Contact me below.", "Thank you.","Have a nice day!"];
let index = 0;
let wordIndex = 0;
let intervalId;

function typingText() {
    const target = document.getElementById("type");
    const currentWord = words[wordIndex];
    const currentWordLength = currentWord.length;

    if (index < currentWordLength) {
        target.textContent += currentWord.charAt(index);
        index++;
        setTimeout(typingText, 50);
    } else {
        setTimeout(() => {
            intervalId = setInterval(removeText, 20);
        }, 1500);
    }
}

// To remove text after typing
function removeText() {
    const target = document.getElementById("type");
    const currentWord = words[wordIndex];
    const currentWordLength = currentWord.length;

    if (index > 0) {
        target.textContent = currentWord.substring(0, index - 1);
        index--;
    } else {
        clearInterval(intervalId);
        wordIndex = (wordIndex + 1) % words.length;
        index = 0;
        setTimeout(typingText, 1000);
    }
}

// Add a delay before typing the first sentence
setTimeout(typingText, 3000);

//Scroll to top
const target2=document.getElementById("go-up");
target2.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
//hiding scroll at top
target2.style.display = 'none';
document.addEventListener('scroll',()=>{
    if (window.scrollY == 0) {
        target2.style.display = 'none';
    } else {
        target2.style.display = 'block';
    }
    });
//Scroll to the sections.
//scroll to home
const aboutme=document.querySelector(".body");
about.addEventListener('click',()=>{
    aboutme.scrollIntoView({ behavior: 'smooth' });
});
const servicesgo=document.querySelector(".services");
services.addEventListener('click',()=>{
    servicesgo.scrollIntoView({ behavior: 'smooth' });
});
const projectgo=document.querySelector(".project");
project.addEventListener('click',()=>{
    projectgo.scrollIntoView({ behavior: 'smooth' });
});
const contactgo=document.querySelector(".contact");
contact.addEventListener('click',()=>{
    contactgo.scrollIntoView({ behavior: 'smooth' });
});

//See more button added functionality
const seemore=document.getElementById("seemore-btn");
const target=document.querySelector(".project-wrapper2");
seemore.addEventListener('click',()=>{
    target.classList.toggle("toggle");
    if(seemore.textContent=='See less')
    {
        seemore.textContent='See more';
        projectgo.scrollIntoView({ behavior: 'smooth' });
    }
    else{
        seemore.textContent='See less';
        target.scrollIntoView({ behavior: 'smooth' });
        
    }
});

});
