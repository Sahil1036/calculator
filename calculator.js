let btn=document.querySelectorAll("button");
let input=document.querySelector(".display input");
let arr=Array.from(btn);
let output;
let string="";
    arr.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            string=e.target.innerHTML;
            if(string=="="){
                try{
                    output=eval(input.value);
                    output=Math.round(output*10000)/10000;
                    if(!output){
                        alert("Please insert input for calculation");
                        output="";
                    }
                }
                catch(error){
                    alert("Please insert right input for calculation");
                    output="";  
                }
                input.value="";
                string=output;
                }
                if(string=="AC"){
                    string="";
                    input.value=""; 
                }
                if(string=="DE"){
                    string=input.value.slice(0,-1);
                    input.value=""; 
                }

            
            input.value+=string;
        })
    })
    