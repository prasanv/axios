
import { NextRequest, NextResponse } from "next/server";
import contents from './data.json';

// GET: http://localhost:8000/api/contents
export async function GET(request: NextRequest){
    return NextResponse.json(contents);
}