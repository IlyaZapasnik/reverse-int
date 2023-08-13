function reverse (n) {
    if (n == 0) {
        return n;
    } else if (n < 0) {
        let a = Math.abs(n);
        return -(Array.from(String(a)).reverse().join(''));
    }
    if (n != NaN) {
        return +(Array.from(String(n)).reverse().join(''));
    }
}

console.log(reverse(-123));

