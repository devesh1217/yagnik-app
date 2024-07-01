import { NextResponse } from "next/server";
import services from "../../../../model/services";
import connectDB from "@/app/lib/db";

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()
        console.log(body)
        const service = new services({
            name: body.name,
            description: body.description
        })
        console.log(body.name,body.description,service)
        const data = await service.save()
        console.log("inside api", data)
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        await connectDB()
        const data = await services.find()
        console.log("inside api", data)
        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch(err){
        console.log(err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
