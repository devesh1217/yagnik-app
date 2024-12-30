import { NextResponse } from "next/server";
import services from "../../../../../../model/services";
import connectDB from "@/lib/db";


export async function GET(req, { params }) {
    try {
        await connectDB()
        const data = await services.findOne({id: params.id},{image: 1, id: 1, title: 1})
        if(!data){
            return NextResponse.json({ success: true, notFound: true }, { status: 200 })
        }
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
