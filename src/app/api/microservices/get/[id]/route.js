import { NextResponse } from "next/server";
import microservices from "../../../../../../model/microservices";
import connectDB from "@/lib/db";


export async function GET(req, { params }) {
    try {
        const { id } = params;
        await connectDB()
        const data = await microservices.find({ id: id });
        if(data.length === 0){
            return NextResponse.json({ success: true, notFound: true }, { status: 200 })
        }
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
