
import { NextRequest, NextResponse } from "next/server";
import courses from '../data.json';

// API: http://localhost:8000/api/courses/search
export async function GET(request: NextRequest){
    // Method 1 using URL web API
    // const { searchParams } = new URL(request.nextUrl);
    
    // Method 2 Directly from request url
    const searchParams = request.nextUrl.searchParams;

    const searchValue = searchParams.get('title');
    console.log(searchValue?.toLowerCase());
    const filteredCourse = courses.filter((course) => {
        return course.title.toLowerCase().includes(searchValue?.toLowerCase()!)
    });
    if(filteredCourse.length < 1){
    }
    return NextResponse.json(filteredCourse);
}


// The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
// const baseUrl = "https://developer.mozilla.org/";
// let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'
// new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'