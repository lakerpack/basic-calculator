const sum = function(...nums) {
  let sum = 0;
  for (let i = 0; i < nums[0].length; i++){
    sum += (nums[0])[i];
  }
  return sum;
};
