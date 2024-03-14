document.addEventListener('DOMContentLoaded', () => {
    let faq1Content = document.querySelector('.faq1-content');
    let faq2Content = document.querySelector('.faq2-content');
    let faq3Content = document.querySelector('.faq3-content');
    let faq4Content = document.querySelector('.faq4-content');
    let faq5Content = document.querySelector('.faq5-content');
    let faq6Content = document.querySelector('.faq6-content');
    let faq1 = document.querySelector('.faq1');
    let faq2 = document.querySelector('.faq2');
    let faq3 = document.querySelector('.faq3');
    let faq4 = document.querySelector('.faq4');
    let faq5 = document.querySelector('.faq5');
    let faq6 = document.querySelector('.faq6');
    let svg1 = document.getElementById('svg1');
    let svg2 = document.getElementById('svg2');
    let svg3 = document.getElementById('svg3');
    let svg4 = document.getElementById('svg4');
    let svg5 = document.getElementById('svg5');
    let svg6 = document.getElementById('svg6');
    faq1.addEventListener('click', () => {
        faq1Content.classList.toggle('hide');
        svg1.classList.toggle('rotate');
    });
    faq2.addEventListener('click', () => {
        faq2Content.classList.toggle('hide');
        svg2.classList.toggle('rotate');
    });
    faq3.addEventListener('click', () => {
        faq3Content.classList.toggle('hide');
        svg3.classList.toggle('rotate');
    });
    faq4.addEventListener('click', () => {
        faq4Content.classList.toggle('hide');
        svg4.classList.toggle('rotate');
    });
    faq5.addEventListener('click', () => {
        faq5Content.classList.toggle('hide');
        svg5.classList.toggle('rotate');
    });
    faq6.addEventListener('click', () => {
        faq6Content.classList.toggle('hide');
        svg6.classList.toggle('rotate');
    });
    const emailInput1 = document.getElementsByClassName('email-input')[0];
    const placeholder1 = document.getElementsByClassName('placeholder')[0];
    const emailInput2 = document.getElementsByClassName('email-input')[1];
    const placeholder2 = document.getElementsByClassName('placeholder')[1];
    const erroremail = document.getElementById('erroremail');
    const erroremail2=document.getElementById('erroremail2')
    const errorMark=document.querySelector('error-mark');
    emailInput1.addEventListener('focus', () => {
        placeholder1.style.top = '13px';
        placeholder1.style.fontSize = '12px';
        placeholder1.placeholder = "";
    });

    emailInput1.addEventListener('blur', () => {
        if (!emailInput1.value) {
            placeholder1.style.top = '50%';
            placeholder1.style.fontSize = '';
        }
    });
    emailInput2.addEventListener('focus', () => {
        placeholder2.style.top = '13px';
        placeholder2.style.fontSize = '12px';
        placeholder2.placeholder = "";
    });

    emailInput2.addEventListener('blur', () => {
        if (!emailInput2.value) {
            placeholder2.style.top = '50%';
            placeholder2.style.fontSize = '';
        }

        //email validator
        

    });
    function isValidEmail(email) {
        let c1 = 0, c2 = 0, ch, index1, index2;
        for (let i = 0; i < email.length; i++) {
            ch = email.charAt(i);
            if (ch == '@') {
                index1 = i
                c1 = c1 + 1;
            }
            if (ch == '.') {
                index2 = i;
                c2 = c2 + 1;
            }
        }
        //console.log(c1,c2);
        //console.log(index1,index2)
        if (c1 != 1 || c2 != 1 || index2 < index1) {
            return false;
        }
        else {
            return true;
        }
    }

    // Example usage


    function checkEmail1() {
        let Email=emailInput1.value;
        let email = Email.toLowerCase();
        let k = isValidEmail(email);
        if (email == '') {
            emailInput1.style.borderColor = "red"; // Change border color
            emailInput1.style.borderWidth = "2px"; // Change border width
            emailInput1.style.borderStyle = "solid";
            erroremail.innerHTML = "";
            erroremail.innerHTML = "Email is required."; 
        }
        else if (!isNaN(Number(email))) {
            emailInput1.style.borderColor = "red"; // Change border color
            emailInput1.style.borderWidth = "2px"; // Change border width
            emailInput1.style.borderStyle = "solid";
            erroremail.innerHTML = "";
            erroremail.innerHTML = "Email cannot be a number!"; 
        }
        else if (email.length > 320) {
            emailInput1.style.borderColor = "red"; // Change border color
            emailInput1.style.borderWidth = "2px"; // Change border width
            emailInput1.style.borderStyle = "solid";
            erroremail.innerHTML = "";
            erroremail.innerHTML = "Email is too long!"; 
        }
        else if (k == false) {
            emailInput1.style.borderColor = "red"; // Change border color
            emailInput1.style.borderWidth = "2px"; // Change border width
            emailInput1.style.borderStyle = "solid";
            erroremail.innerHTML = "";
            erroremail.innerHTML = "Please enter a valid email address.";          
        }
        else {
            emailInput1.style.borderColor = "#1eed1e"; // Change border color
            emailInput1.style.borderWidth = "2px"; // Change border width
            emailInput1.style.borderStyle = "solid"; // Change border style
            erroremail.innerHTML = "";
            errorMark.style.display="none"   
        }
    }
    function checkEmail2() {
        let Email=emailInput2.value;
        let email = Email.toLowerCase();
        let k = isValidEmail(email);
        if (email == '') {
            erroremail2.innerHTML = "";
            erroremail2.innerHTML = "Email is required."; 
        }
        else if (!isNaN(Number(email))) {
            erroremail2.innerHTML = "";
            erroremail2.innerHTML = "Email cannot be a number!"; 
        }
        else if (email.length > 320) {
            erroremail2.innerHTML = "";
            erroremail2.innerHTML = "Email is too long!"; 
        }
        else if (k == false) {
            erroremail2.innerHTML = "";
            erroremail2.innerHTML = "Please enter a valid email address.";          
        }
        else {
            emailInput2.style.borderColor = "green";
            emailInput2.style.borderWidth='2px'
            erroremail2.innerHTML = "";
            errorMark.style.display="none"   
        }
    }
    //let email1 = document.getElementById('input-1');
    emailInput1.addEventListener('input', () => {
        console.log(emailInput1.value)
        checkEmail1(emailInput1.value);
    });
    emailInput2.addEventListener('input', () => {
        console.log(emailInput2.value)
        checkEmail2(emailInput2.value);
    })
});