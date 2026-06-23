import {describe, it, expect } from "vitest";
import { register } from "../services/userService";

describe('user service', () =>{
    it('should throw an error if email is empty', () => {
        const user = {email: '', password: 'Str0ng_P4ssw0rd'};
        const result = () => register(user);

        expect(result).toThrow(/Email is required/i)
    })
})