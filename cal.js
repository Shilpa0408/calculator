let str="";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((but) =>{
    but.addEventListener('click',(i)=>{
        if(i.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(i.target.innerHTML == 'C')
        {
            str="";
            document.querySelector('input').value = str;
        }
        else if(i.target.innerHTML == 'del')
        {
            screenView.value = screenView.value.slice(0,-1);
        }
        else{
            console.log(i.target);
            str = str + i.target.innerHTML;
            document.querySelector('input').value =str;
        }
    })
})