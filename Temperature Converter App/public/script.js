document.addEventListener('DOMContentLoaded', ()=>{
    let convertBtn=document.getElementById('convertBtn');
    let temperature = document.getElementById('temperature');
    convertBtn.addEventListener('click',()=>{
        
        let tempValue = parseFloat(temperature.value);
        let output = document.getElementById('converted-temp');
         // Parse as float
         if(tempValue==='' || isNaN(tempValue)==true)
         {
            alert("Please enter valid value!")
             output.value="";
             return false;
         }
        let option = document.getElementById('option').value;
        
        
        if(option == "celcius")
        {
            let fahrenheit = (9*tempValue/5)+32;
            output.innerHTML = fahrenheit.toFixed(2)+'F';
        } 
        if(option == "farenheit")
        {
            let Celsius = (5/9)*(tempValue-32);
            output.innerHTML = Celsius.toFixed(2)+'\u00B0'+'C';
        }
        
    })
    /*Popup*/
    const jacket=document.querySelector(".jacket");
    const crossmark=document.querySelector(".cross");
    const ok=document.querySelector(".ok-btns");
    const close=document.querySelector(".close-btns");
    const main=document.getElementById("main-popup");
    crossmark.addEventListener('click',()=>{
        main.classList.add("hide-modal");
        jacket.style.filter = "none";
    });
    ok.addEventListener('click',()=>{
        main.classList.add("hide-modal");
        jacket.style.filter = "none";
    });
    close.addEventListener('click',()=>{
     main.classList.add("hide-modal");
     jacket.style.filter = "none";
    });
});
