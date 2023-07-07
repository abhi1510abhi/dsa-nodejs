
function possible_sequence(str, i, current) {
    
    if (i == str.length) {
        console.log(current);
        return;
    }
    possible_sequence(str, i + 1, current) // dont include
    possible_sequence(str, i + 1, current+ str[i]) // include

}

possible_sequence("abc", 0, "");