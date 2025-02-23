/*let cardTutil = "Elzero"
let cardDscr = "Elzero Web school"
let cardSban = "25/10"


let webPag = `
<div class="card">
    <div class = "ptg">

       <h1>${cardTutil}</h1>
       <p>${cardDscr}</p>
       <span>${cardSban}</span>
    <div/>
</div>`
document.write(`${webPag}
${webPag}
${webPag}
${webPag}`)


let a = 1_00 ;
let d = 2_00.5 ;
let b = 1e2 ;
let c = 2.4 ;


  console.log(Math.min(a, d , b , c) , Math.trunc(c))
   
  console.log(a*b)
  console.log(Math.trunc(c))
  console.log(Math.ceil(c))
  console.log(Math.floor(c))
  console.log(Math.round(c)) 
  console.log(parseFloat(d) /Math.ceil (c))
  

  let a = "Elzero Wob School"

  console.log(a.toUpperCase().charAt(2),a.slice(3 , 6).toLocaleLowerCase())
  console.log(a.charAt(13).repeat(8).toUpperCase())
  console.log(a.slice(0, 6).split())
  console.log(a. slice(0,6),a.slice(10))
  console.log(a.slice(0,2).toLocaleLowerCase(),a.slice(2 ).toUpperCase())


let  x = 80;
 
 x < 10 ? console.log(10) : x >= 10 && x <= 40 ? console.log("10 to 40") : x > 40 ? console.log("> 40") : console.log("uuknown");

let st = "Elzero Web School"

if (typeof st ===typeof "56")
{
  console.log("Good")
}

if (typeof st ===typeof "number")
{
  console.log("Good")
}

if (st.charAt(7).toLocaleLowerCase() ==="w")
{
  console.log("Good")
}

if (st !=="string")
{
  console.log("Good")
}

if (st.slice(0 , 6).repeat(2)=== "ElzeroElzero")
{
  console.log("Good")
}



let job = "IT";
let salary = 0;


switch (job)
{
  case "Manager":
  salary = 8000
  console.log(salary);
  break;
  
  case ("IT" || "Support"):
  salary = 6000
  console.log(salary);
  break;
  case ("Developer" || "Designer"):
  salary = 7000
  console.log(salary);
  break;
  default:
    salary = 4000
    console.log(salary)
}

let holidays = 3;
let money = 0;

if(holidays === 0)
{
  money = 5000;
}
else if(holidays === (1 || 2))
{
  money = 3000;
}
else if(holidays === 3)
{
  money = 2000;
}
else if(holidays === 4)
{
  money = 1000;
}
else if(holidays === 5)
{
  money = 0;
}
else
{
  
  money = 0;
}
console.log(money)



let zero = 0;

let counter = 3;


let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

// my.pop();
 //my.pop();
//console.log(my.reverse())
//my.shift();
//console.log(my.slice( counter).splice(zero, "Elham" , "Mazero" , counter).concat("Elham" , "Mazero"))

my.shift();
console.log(my.slice( counter).splice(zero, "Elham" , "Mazero" , counter).concat("ro").join())
*/
""
let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];
let myEmploy = ["Amgad" , "Samah" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia"];
let myI = 3;


document.write(`<div>Hane ${myI} Admins</div>`);

for (let i = 0; i < myI; i++) {
    document.write(`<div>`)
    document.write(`<div>The Admin For ${i+1} Is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team Memders:<h3/>`)
    for (let j =0; j < myEmploy.length; j++)
    {
      if(myAdmins[i].startsWith()===myEmploy[i].startsWith())
        document.write(`<h5>${j+1} ${myEmploy[j]}</h5>`)
    
  }   
    document.write(`</div>`)
}
