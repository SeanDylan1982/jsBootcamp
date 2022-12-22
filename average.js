let arr1 = [1,2,3];

function avg(arr1) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
  }
  return total/arr1.length;
}
avg(arr1);
console.log(avg(arr1));