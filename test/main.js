function mod(m, n) {
    let num = m - n;
    while(num >= n) {
        num = num - n;
        console.log(num);
    }

    return num;
}

console.log(mod(100, 18));