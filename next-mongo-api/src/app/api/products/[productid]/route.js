import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {Product} from '@/lib/model/product';

export async function PUT(request,content){
    const productId=content.params.productid;//productid is the name of the folder that receives params
    const filter={_id:productId};
    const payload=await request.json();
    console.log(payload);
    await mongoose.connect(connectionSrt);
    // Find a product using 'Product.findOneAndUpdate' with the 'filter' and update it with 'payload'
    const result=await Product.findOneAndUpdate(filter,payload);
    return NextResponse.json({result,success:true})
}

export async function GET(request,content){
    const productId=content.params.productid;
    const record={_id:productId};
    await mongoose.connect(connectionSrt);
    const result=await Product.findById(record);
    return NextResponse.json({result,success:true})
}

export async function DELETE(request,content){
    const productId=content.params.productid;
    const record={_id:productId};
    await mongoose.connect(connectionSrt);
    const result=await Product.deleteOne(record);
    return NextResponse.json({result,success:true})
}