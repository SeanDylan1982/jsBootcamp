const reviewed = [4.5,5.0,3.44,2.8,3.5,4.0,3.5];
const max = Math.max(...reviewed);
const min = Math.min(...reviewed);
const sum = reviewed.reduce((sum, r) => sum + r);
const avg = sum/reviewed.length;
const stats = {min,max,sum,avg};
console.log(stats);

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum/arr.length;
  const stats = {min,max,sum,avg};
  console.log(stats);
  return {
    max,
    min,
    sum,
    avg
  }
}
const reviews = [4.5,5.0,3.44,2.8,3.5,4.0,3.5];

const statsTwo = getStats(reviews)
console.log(statsTwo);

