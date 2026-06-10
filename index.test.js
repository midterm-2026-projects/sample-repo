import {expect, test} from "vitest";
import {add, divide} from "./index.js";

test("Should add numbers in an array", ()=>{
    const numbers = [1,2,3,4,5];
    const result = add(numbers);

    expect(result).toBe(15);
})

test("Should divide two numbers", () =>{
    const a = 10;
    const b = 0;
    const result = divide(a, b);

    expect(result).toBe("Cannot divide by zero");
})