function sum(...nums) {
  console.log(nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += parseFloat(nums[i]);
  }
  return sum;
};

function difference(...nums) {
	let difference = 0;
  for (let num in nums){
    if (num == 0){
      difference += parseFloat(nums[num]);
    }
    else{
      difference -= parseFloat(nums[num]);
    }
  }
  return difference;
};

function product(...nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++){
      product *= parseFloat(nums[i]);
    }
    return product;
};

function quotient(...nums){
    let quotient = nums[0];
    for (let i = 1; i < nums.length; i++){
        quotient /= parseFloat(nums[i]);
    }
    return quotient;
}

function operate(){
    results = parse(num);
    console.log(results);
    if(!results) return;
    const op = results[0];
    const first = results[1];
    const second = results[2];
    switch(op){
        case "+":
            return sum(first ,second);
            break;
        case "-":
            return difference(first ,second);
            break;
        case "x":
            return product(first ,second);
            break;
        case "/":
            return quotient(first ,second);
            break;
        default:
            return "ERROR";
            break;
    }
}

function parse(line){
    let op;
    let first;
    let second;
    for(let i = 0; i < line.length; i++){
        if((line.charAt(i) == " ") && !(line.charAt(i+1) == "=") && (line.charAt(i+2) == " ") && line.charAt(i+3)){
            op = line.charAt(i+1);
            first = line.slice(0,i);
            second = line.slice(i+3);
            const result = [op, first, second];
            return result;
        }
    }
    return false;
}

function updateDisplay(){
    const display = document.querySelector('.display');
    display.textContent = num;
}

let num = "";
let done = false;

buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const att = button.getAttribute('id');
        let nums = ["zero","one","two","three","four","five","six","seven","eight","nine","dot"];
        let ops = ["add","subtract","multiply","divide","+","-","x","/"];
        let spec = ["equal", "delete", "clear"];
        if(nums.includes(att)){
            if(done){
                num = "";
                done = false;
            }
            num += button.textContent;
        }
        else if((ops.includes(att)) && !(ops.includes(num.charAt(num.length-2)))){
            if (done) done = false;
            if (!(num.includes("+") || num.includes("-") || num.includes("x") || num.includes ("/"))){
                num += ` ${button.textContent} `
            }
        }
        else if(spec.includes(att)){
            switch(att){
                case "equal":
                    let val = operate();
                    if(val != "ERROR"){
                        num = `${val}`;
                        done = true;
                    }
                    break;
                case "delete":
                    if((num.charAt(num.length-1) == " ") && (num.charAt(num.length-3) == " ")){
                        num = num.slice(0,-3);
                    }
                    else{
                        num = num.slice(0, -1);
                    }
                    break;
                case "clear":
                    num = "";
                    break;
            }
        }
        else{
            console.log("Error");
        }
        updateDisplay();
    })
})