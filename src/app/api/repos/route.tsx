
import { NextRequest, NextResponse } from "next/server";

// GET: http://localhost:8000/api/repos
export async function GET(request: NextRequest){
    return NextResponse.json('repos route', {})
}