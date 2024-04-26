//TOP lesson on Recursion
//Merge Sort

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
   } else {
    let breakupArray = list.length / 2;
    let leftArray = list.slice(0, breakupArray);
    let rightArray = list.slice(breakupArray);
    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);
    return merge(leftArray, rightArray);
  }
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {mergedArray.push(right[rightIndex]);
    rightIndex++;
    }
}
    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
    return mergedArray;
 }

let listA = [3, 2, 1, 13, 8, 5, 0, 1, -1];
let listB = [105, 79, 100, 110];
console.log('listA:', mergeSort(listA), 'listB:', mergeSort(listB));

