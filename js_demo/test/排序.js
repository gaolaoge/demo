function trans(arr, orignIndex, targetIndex) {
    if (orignIndex === targetIndex) {
        return
    }
    arr[orignIndex] = arr[orignIndex] + arr[targetIndex]
    arr[targetIndex] = arr[orignIndex] - arr[targetIndex]
    arr[orignIndex] = arr[orignIndex] - arr[targetIndex]
}

/**
 * 选择排序
*/

function selectionSort(arr) {
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        trans(arr, i, minIndex)
    }
    return arr;
}

// console.log(selectionSort([3, 2, 1, 5, 4, 7, 6, 8, 0, 9]))

/**
 * 冒泡排序
*/

function bubbleSort(arr) {
    let index = 0;
    while (index < arr.length) {
        for (let i = 0; i < arr.length - index; i++) {
            if (arr[i] > arr[i + 1]) {
                trans(arr, i, i + 1)
            }
        }
        index++;
    }
    return arr;
}

// console.log(bubbleSort([3, 2, 1, 5, 4, 7, 6, 8, 0, 9]))

/**
 * 插入排序
*/

function insertionSort(arr) {
    let j = 0
    for (let i = 1; i < arr.length; i++) {
        j = i;
        while (j > 0) {
            if (arr[j - 1] > arr[j]) {
                trans(arr, j - 1, j)
            } else {
                break
            }
            j--;
        }
    }
    return arr;
}

// console.log(insertionSort([3, 2, 1, 5, 4, 7, 6, 8, 0, 9]))

/**
 * 归并排序
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length || j < right.length) {
        if (i < left.length && (j >= right.length || left[i] < right[j])) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result;
}

// console.log(mergeSort([3, 2, 1, 5, 4, 7, 6, 8, 0, 9]))

/**
 * 快速排序
*/

function queckSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const baseIndex = Math.floor(arr.length / 2);
    const base = arr[baseIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== baseIndex) {
            if (arr[i] < base) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    }
    return [...queckSort(left), base, ...queckSort(right)]
}

console.log(queckSort([3, 2, 1, 5, 4, 7, 6, 8, 0, 9]))