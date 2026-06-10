export function add(numbers) {
    let sum = 0;

    for(const num of numbers){
        sum += num;
    }

    return sum;
}