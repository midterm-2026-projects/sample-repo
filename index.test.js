import {expect, test} from "vitest";
import {add} from "./index.js";

test("Should add numbers in an array", ()=>{
    const numbers = [1,2,3,4,5];
    const result = add(numbers);

    expect(result).toBe(15);
})