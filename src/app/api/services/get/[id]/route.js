import { NextResponse } from "next/server";
import services from "../../../../../../model/services";
import connectDB from "@/app/lib/db";


export async function GET(req, { params }) {
    try {
        await connectDB()
        const data = await services.find({id: params.id},{image: 1, id: 1, title: 1})
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
