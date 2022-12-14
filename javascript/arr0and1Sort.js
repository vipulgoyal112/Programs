// Input - [0,1,1,0,0]
// Output - [0, 0, 0, 1, 1]

// Iterate my array - count for 0, place first 0 in array as by count and rest are 1

function byCount0() {    
    let arr = [0,1,1,0,0];
    let len = arr.length;
    let zeroCount = 0;
    for (let i=0; i < len; i++) {
        if (arr[i] == 0) {
            zeroCount++;
        }
    }
    for (let i=0; i < len; i++) {
        if (zeroCount > 0) {
            zeroCount--;
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
    }
    console.log("function calling !!!", arr);
}
//byCount0();
// O(2n)


// Input  - [0,1,0,0,1]
function useTwoIndexes() {
    let arr = [0,1,0,0,1];
    for (let i=0,j=arr.length-1; i < j;) {
        if (arr[i] == 0) {
            i++;
        }
        if (arr[j] == 1) {
            j--;
        }
        if (arr[i] > arr[j]) {
            arr[i] = 0;
            arr[j] = 1;
            i++;
            j--;
        }
    }
    console.log("function calling !!!", arr);
}

useTwoIndexes();
// O(n)


