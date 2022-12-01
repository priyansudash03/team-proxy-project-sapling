let valueDisplay = document.querySelectorAll(".num");
let interval = 50000;

valueDisplay.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
           
            if(startValue <(endValue-2000)){
                startValue += 1000;
                valueDisplay.textContent = startValue;
            }
           else if(startValue <(endValue-300)){
                startValue += 100;
                valueDisplay.textContent = startValue;   
            }
            else{
                startValue += 1;
                valueDisplay.textContent = startValue;
            }
            if(startValue == endValue){
                clearInterval(counter);
            }
       
        },duration);
});0