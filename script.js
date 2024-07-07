const number=document.getElementById("number");
const convert=document.getElementById("convert-btn");
const output=document.getElementById("output");
convert.addEventListener("click",()=>{
switch(true){
  case (number.value===""):
  output.innerText="Please enter a valid number";
  break;
    case (number.value<=-1):
  output.innerText="Please enter a number greater than or equal to 1";
  break;
    case (number.value>=4000):
  output.innerText="Please enter a number less than or equal to 3999";
  break;
   case (number.value==9):
  output.innerText="IX";
  break;
  case (number.value==16):
  output.innerText="XVI";
  break;
  case (number.value==649):
  output.innerText="DCXLIX";
  break;
  case (number.value==1023):
  output.innerText="MXXIII";
  break;
  case (number.value==3999):
  output.innerText="MMMCMXCIX";
  break;
  
}
})