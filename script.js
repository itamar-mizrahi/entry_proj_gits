let k = document.getElementById("title");
k.style.color="blue";
window.localStorage.setItem('user', k.style.color);
k.style.color="red";

let display= () =>
    {
      console.log(window.localStorage.getItem('user'));    
      k.innerHTML=window.localStorage.getItem('user');
    }
display(); 
 