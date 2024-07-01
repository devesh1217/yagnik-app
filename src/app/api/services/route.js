import { NextResponse } from "next/server";
import services from "../../../../model/services";
import connectDB from "@/app/lib/db";


export async function GET(req) {
    try {
        await connectDB()
        const data = await services.find()
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
