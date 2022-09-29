export function findLengthAppearMost(arr) {
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        console.log(map.has(arr[i].length))
        if(map.has(arr[i].length)) {
            map.set(arr[i].length, map.get(arr[i].length) + 1);
        } else {
            map.set(arr[i].length, 1);
        }
    }

    let max = 0;
    let valueMax;
    for(let [key, value] of map) {
        if(value > max) {
            max = value;
            valueMax = key;
        }
    }

    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === valueMax) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

export function sumTopTwo(arr) {
    arr = [...new Set(arr)];
    console.log(typeof arr[1]);
    arr = arr.filter(item => typeof item === 'number');
    arr = arr.sort((s1, s2) => s1 > s2 ? 1 : -1);
    console.log(arr);

    return arr[arr.length - 1] + arr[arr.length - 2] || 0;
}

console.log(findLengthAppearMost(['a', 'ab', 'abc', 'cd', 'def', 'gh', 'ge', 'abc']));

