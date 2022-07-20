function sum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums[0].length; i++){
    sum += (nums[0])[i];
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
    for (let i = 0; i < nums[0].length; i++){
      product *= (nums[0])[i];
    }
    return product;
};
