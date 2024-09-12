import { Types } from "mongoose";

export type TUser ={
name: string;
phone:string;
address: string;
postCode: number;
district:string;
}
 export type TOrder={
    user: TUser;
    products: Types.ObjectId[];
}