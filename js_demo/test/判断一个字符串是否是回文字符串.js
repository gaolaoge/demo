function isPalindrome(str) {
    if (str.length === 0) {
        return true
    }
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }

    return true
}


console.log(isPalindrome('toyota'))
console.log(isPalindrome('madam'))
