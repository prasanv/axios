
import { NextRequest, NextResponse } from "next/server";
import courses from '../data.json';

// API: http://localhost:8000/api/courses/search
export async function GET(request: NextRequest){
    // Method 1 using URL web API https://developer.mozilla.org/en-US/docs/Web/API
    // Example 1
    // const { searchParams } = new URL(request.nextUrl);

    // Example 2
    // const myHeader = new Headers(request.headers);
    // console.log(myHeader);
    // myHeader.delete('user-agent')
    // console.log(myHeader);
    
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

// Web API's https://developer.mozilla.org/en-US/docs/Web/API
// The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
// const baseUrl = "https://developer.mozilla.org/";
// let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'
// new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

