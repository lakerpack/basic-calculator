function sum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
};

function difference(...nums) {
	let difference = 0;
  for (let num in nums){
    if (num == 0){
      difference += nums[num];
    }
    else{
      difference -= nums[num];
    }
  }
  return difference;
};

function product(...nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++){
      product *= nums[i];
    }
    return product;
};

function quotient(...nums){
    let quotient = nums[0];
    for (let i = 1; i < nums.length; i++){
        quotient /= nums[i];
    }
    return quotient;
}

function operate(op, ...nums){
    switch(op){
        case add:
            return sum(...nums);
            break;
        case subtract:
            return difference(...nums);
            break;
        case multiply:
            return product(...nums);
            break;
        case divide:
            return quotient(...nums);
            break;
        default:
            return "ERROR";
            break;
    }
}

buttons = document.querySelectorAll("button");
buttons.foreach(button => {
    button.addEventListener('click', () => {
        att = button.getAttribute('id');
        switch(att){
            case "zero":
                break;
            case "one":
                break;
            case "two":
                break;
            case "three":
                break;
            case "four":
                break;
            case "five":
                break;
            case "six":
                break;
            case "seven":
                break;
            case "eight":
                break;
            case "nine":
                break;
            case "dot":
                break;
            case "equal":
                break;
            case "delete":
                break;
            case "clear":
                break;
        }
    })
})