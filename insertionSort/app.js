function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
        console.log(`\n${i}.adim: ${arr}`);
    }
    console.log("\n");
    return arr;
}
  insertionSort([7,3,5,8,2,9,4,15,6])
// insertionSort([22, 27, 16, 2, 18, 6])