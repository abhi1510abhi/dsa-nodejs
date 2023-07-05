function palindrome(str, l, r) {
    if (l >= r) {
        console.log("true")
        return;
    }

    if (str[l] == str[r]) {
        palindrome(str, ++l, --r);
    } else {
        console.log("false")
        return;
    } 
}

let s = "aaaa"
palindrome(s, 0, s.length-1);