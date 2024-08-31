let array=[10,20,30,50,40];
console.log("arrary is: " + array);
//using quick sort
function quickSort(array, left, right) {
    var len = array.length, 
    pivot,
    partitionIndex;
 
    if(left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);
         
        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

 function partition(array, pivot, left, right){
    var pivotValue = array[pivot],
    partitionIndex = left;
 
    for(var i = left; i < right; i++) {
        if(array[i] < pivotValue){
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}
    
     function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log("The highest number in the array is: " + max);
let min=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]<min){
        min=array[i];
    }
}
console.log("The lowest number in the array is: " + min);
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log("The sum of all elements of the array is: " + sum);

let odd=0;
for(let i=0;i<array.length;i++){
    if(array[i]%2!==0){
        odd++;
    }
}
console.log("The number of odd numbers in the array is: " + odd);
console.log("sorted array: " + quickSort(array, 0, array.length - 1));
