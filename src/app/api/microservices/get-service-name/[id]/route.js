import { NextResponse } from "next/server";
import services from "../../../../../../model/services";
import connectDB from "@/app/lib/db";


export async function GET(req, {params}) {
    try {
        const {id} = params;
        await connectDB()
        const data = await services.findOne({id: id},{title:1, _id:0});
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}