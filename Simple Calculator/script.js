let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value =string;
    }
     else if(e.target.innerHTML == 'AC'){
      string = "";
      document.querySelector('input').value =string;
    }
       else if(e.target.innerHTML == 'pi'){
      string = "3.1415";
      document.querySelector('input').value =string;
    }
          else if(e.target.innerHTML == 'G'){
      string = "6.67*10^-11";
      document.querySelector('input').value =string;
    }
             else if(e.target.innerHTML == 'DEL'){
      string = " ";
      document.querySelector('input').value = string;
    }
    else{
      console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value =string;
    }
  })
})