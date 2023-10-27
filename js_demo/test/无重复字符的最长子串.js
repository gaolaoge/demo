var lengthOfLongestSubstring = (str) => {
    debugger
    let max = 0
    const temp = new Set()
    for (let i = 0; i < str.length; i++) {
        let j = i
        while (j < str.length) {
            if (!temp.has(str[j])) {
                temp.add(str[j])
                if (j + 1 === str.length) {
                    max = Math.max(max, temp.size)
                    temp.clear()
                    break
                }
            } else {
                max = Math.max(max, temp.size)
                temp.clear()
                break
            }
            j++
        }
    }
    return max
}

console.log(lengthOfLongestSubstring('asjrgapa'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('abcabcbb'))