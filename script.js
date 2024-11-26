const divEl = document.querySelector("div");
const btnEl = document.querySelectorAll("button");

divEl.addEventListener("click",(e)=>{

    if (e.target.id ==='button1'){
     console.log('button1 clicked');
    }
    
    else if (e.target.id ==='button2'){
        console.log('button2 clicked');
       }

       else if (e.target.id ==='button3'){
        console.log('button3 clicked');
       }

    

});