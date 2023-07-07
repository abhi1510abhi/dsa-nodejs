

function sum_digits(n ,sum) {

    if(n <=0) return sum
    sum = sum + (n % 10);
    return sum_digits(parseInt(n / 10), sum)
    
}

let result = sum_digits(5, 0);
console.log(result);