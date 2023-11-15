
import { NextRequest, NextResponse } from "next/server";
import courses from './data.json';

// API: http://localhost:8000/api/courses
export async function GET(request: NextRequest){
    return NextResponse.json(courses);
}