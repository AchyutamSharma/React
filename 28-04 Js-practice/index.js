

// Anonymous fucntion -> When you need to call one time then use anonymous func.

(function(){ 
    console.log("Hello, This is Inside the anonymous function.")
})();
( function(){
    a = 10, b = 20, 
    c = a + b; 
    console.log(c)
})();

// String concatination 
const teamName = "Rock";
const userName = "Akshutam";
const output = `Hello Mr. ${userName} your Team is ${teamName}.`;
console.log(output);


function canyouDrink(userAge, ageLimit = 18){
    console.log(`Your Eligibility for drink age ${ageLimit}, your age = ${userAge}`);
     userAge >= ageLimit ? "You are eligiable." : "You are not eligiable" ;

}
const userInput = prompt("Enter your Age.....");
canyouDrink(userInput);

