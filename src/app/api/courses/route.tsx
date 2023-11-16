
import { NextRequest, NextResponse } from "next/server";
import courses from './data.json';

// GET: http://localhost:8000/api/courses
export async function GET(request: NextRequest){
    return NextResponse.json(courses);
}

// POST: http://localhost:8000/api/courses
export async function POST(request: NextRequest){
    console.log(request);
    const { title, description, link, level } = await request.json();
    
    courses.push({ id: Math.round(Math.random()*10000)
        , title, description, link, level });
    return NextResponse.json(courses);
}


// Sample Body Data for Post request
// {
//     "title": "ReactNative for Dev",
//     "description": "Sharpen your skills by building unique & fun mini mobile projects.",
//     "link": "https://github.com/prasanv/reactNative",
//     "level": "Beginner"
// }