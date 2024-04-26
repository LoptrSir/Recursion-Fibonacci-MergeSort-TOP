//TOP lesson on Recursion
//Merge Sort

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
    console.log("MS <+ 1:", list);
  } else {
    let breakupArray = list.length / 2;
    console.log("breakup:", breakupArray, "list:", list);
    let leftArray = list.slice(0, breakupArray);
    let rightArray = list.slice(breakupArray);
    console.log("leftArray:", leftArray, "rightArray:", rightArray);
    leftArray = mergeSort(leftArray);
    console.log("MS leftArray:", leftArray, "right:", rightArray);
    rightArray = mergeSort(rightArray);
    console.log("MS rightArray:", rightArray, "left:", leftArray);
    return merge(leftArray, rightArray);
  }
}

function merge(left, right) {
  console.log("merge l/r:", left, right);
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
      console.log("merge l<:","li:",leftIndex,"ri:",rightIndex,"MergedArray:",mergedArray);
    } else {mergedArray.push(right[rightIndex]);
    rightIndex++;
    console.log("merge r<:","li:",leftIndex,"ri:",rightIndex,"MergedArray:",mergedArray);
    }
}
    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
      console.log("leftIndex remainder:",leftIndex,"MergedArray:", mergedArray);
    }
    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
      console.log("rightIndexRemainder:",rightIndex,"MergedArray:", mergedArray);
    }
    console.log("mergedArray:", mergedArray);
    return mergedArray;
 }

let listA = [3, 2, 1, 13, 8, 5, 0, 1, -1];
// let listA = [3, 2, 13, 1, 9];
//console.log("listA:", mergeSort(listA));
let listB = [105, 79, 100, 110];
console.log('listA:', mergeSort(listA), 'listB:', mergeSort(listB));

