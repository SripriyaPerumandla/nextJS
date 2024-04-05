import { connectionSrt } from "@/lib/db";
import {Product} from '@/lib/model/product';
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

export async function GET(){
    let data=[];
    try{
        await mongoose.connect(connectionSrt);
        data=await Product.find()
        console.log(data);
    }catch(error){
        data={success:false}
    }
    return NextResponse.json({result:data, success:true})
}
export async function POST(request){
    const payload=await request.json()
    await mongoose.connect(connectionSrt);
    // let product = new Product({
    //     name:'iPhone',
    //     price:'50000',
    //     color:'white',
    //     company:'Apple',
    //     category:'mobile'
    // })
    let product=new Product(payload);//Creates a new product object using data from payload
    const result=await product.save();//Saves the new product to the database and waits for the save operation to complete.
    return NextResponse.json({result,success:true})
}