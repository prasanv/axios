
import { NextRequest, NextResponse } from "next/server";

// GET: http://localhost:8000/api/hello
export async function GET(request: NextRequest){
    return NextResponse.json({name: 'prasan', currentDate: new Date()});
}