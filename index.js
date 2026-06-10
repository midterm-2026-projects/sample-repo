export function add(numbers) {
    let sum = 0;

    for(const num of numbers){
        sum += num;
    }

    return sum;
}

export function divide(a, b){
    if(a === 0 || b === 0){
        return "Cannot divide by zero";
    }

    return a/b;
}