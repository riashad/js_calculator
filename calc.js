// let display = document.getElementById('calc-display');
// let buttons = Array.from(document.getElementsByClassName('calc-btn'));
// console.log(display);
// console.log(buttons);


let string = "";
let buttons = document.getElementsByClassName('calc-btn');
let display = document.getElementById('calc-input');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'AC':
                string = "";
                display.value = string;
                break;
            case '⌫':
                if(display.value !== ""){
                    display.value = display.value.slice(0,  -1);
                }else{
                    display.value = 0;
                }
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                }catch {
                    display.value = 'Not Allowed!';
                }
                break;
            default:
                document.querySelector('input').value += e.target.innerText
        }
    });
});