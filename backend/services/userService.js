import { insertUser } from "../models/userModel";

export const register = (user) =>{
    if(!user.email){
        throw new Error('Email is required');
    }

    const result = insertUser(user);

    return 'Registration successful'
}
