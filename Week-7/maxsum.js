var maxSubArray = function (nums) {
  maxsum = nums[0];
  currentsum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentsum = currentsum + nums[i];
    if (currentsum >= maxsum) {
      maxsum = currentsum;
    }
    if (currentsum < 0) {
      currentsum = 0;
    }
  }
  return maxsum;
};
