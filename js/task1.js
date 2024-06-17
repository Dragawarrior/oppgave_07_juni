const button = document.getElementById("button");
const output = document.getElementById("output");

function test(){
    const input = document.getElementById("age");
    console.log(input.value);
    const age = Number(input.value);
    if (age >= 67){
        return "You are a pensioner";
    } else if (age >= 20){
        return "You are a adult";
    } else if (age >= 13){
        return "You are a teenager";
    } else if (age < 13){
        return "You are a child";
    } else {
        return "Error? What did you do now?";
    }
};

button.addEventListener("click", test)