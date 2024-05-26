
let show = document.querySelector("#submit");
let heading = document.querySelector(".heading");

show.addEventListener("click", () =>{
    let web = document.querySelector("#web").value;
    let math = document.querySelector("#math").value;
    let computer = document.querySelector("#computer").value;
    let physics = document.querySelector("#physics").value;
   let grade = "";
    

    let totalMarks = parseFloat(web) + parseFloat(math) + parseFloat(computer) + parseFloat(physics);
    let precentage = `${(totalMarks/400) *100}`;
    if(precentage >= 80 && precentage <= 100){
        grade = "A+";
    }else if(precentage >= 70 && precentage <=79){
        grade = "A";
    }else if(precentage >= 60 && precentage <= 69){
        grade = "A-";
    }else if(precentage >= 50 && precentage <= 59){
        grade = "B";
    }else if(precentage >=40 && precentage <=49){
        grade = "C";
    }else if(precentage >=33 && precentage <= 39){
        grade = "D";
    }else if(precentage >= 0 && precentage <=32){
        grade = "F"
    }
    if(web === "" || math === "" || computer === "" || physics === ""){
        alert("Before enter values then click showmyresult");
        return false;
    }

    if( precentage >= 33){
        heading.innerHTML = `Out of 400 your total is ${totalMarks} and percentage is ${precentage}%. Your grade is ${grade} <br> You are pass !!`
    }
    
    if( 32 >= web || 32 >= math || 32 >= computer || 32 >= physics){
        grade = "F";
        heading.innerHTML = `Out of 400 your total is ${totalMarks} and percentage is ${precentage}%. Your grade is ${grade} <br> You are fail `;
    }
   
   
   

   
    
   

})

