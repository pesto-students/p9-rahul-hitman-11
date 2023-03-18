function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = nums.length - 1;
  while (one <= two) {
    if (nums[one] == 0) {
      swap(nums, one, zero);
      zero++;
      one++;
    } else if (nums[one] == 2) {
      swap(nums, one, two);
      two--;
    } else {
      one++;
    }
  }

  return nums;
};
