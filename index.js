const calbtn=document.getElementById("btn");//selecting the button

const birthdateEl=document.getElementById("birthdaydate");//selecting the date input field

const resultEl=document.getElementById("result");//selecting the result field

function calculateAge(){
    const birthdate=birthdateEl.value;//getting the values from thee input field
    if(birthdate===""){
        alert("Please select a date");
        return;
    }
    else{
        let age=getAge(birthdate);// calling the function to find the age
        if(age<0){
            alert("please select a valid date");
            return;//if age is less than 0 then aler the user to select a valid date
        }
        resultEl.innerText=`your age id ${age} years old`;//dispalying the result in the result field
    }
}

function getAge(birthdate){
    const currentdate=new Date();//getting the current date
    const birthdaydate=new Date(birthdate);//getting the from the input field as string




    let age=currentdate.getFullYear()-birthdaydate.getFullYear();//getting the age  diffrence betweeem the curent date and the birthday date 2025-2005=20

    let month=currentdate.getMonth()-birthdaydate.getMonth();//getting the month difference betwween the current date and birthday date 3-2=1 0-jan to 11-dec

    if(month<0||(month===0 && currentdate.getDate()<birthdaydate.getDate()))//if  month less then 0 or month is 0 and current date is less than birthday date then age will be decremented by 1
        {
            age--;
    }
    return age;//returning the age
}

calbtn.addEventListener("click",calculateAge);//adding event listener to the button