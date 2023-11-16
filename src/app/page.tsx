'use client';

import axios from "axios";
import React, { useEffect, useState} from "react";
import Loading from 'src/app/loading'
import CourseSearch from "src/components/courseSearch";
import CoursesComponent from "../components/courses";

// Import Note: `loading.tsx` is applicable only to the server components, 
// that's why you don't see the font styling noy getting applied.

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const res = await axios.request({
          url: "http://localhost:8000/api/courses",
          method: "get",
          headers:{
            Accept: 'application/json'
          }
      })
       setCourses(res.data);
       setLoading(false);
    } catch (err) {
        console.error(err);
    }
  }

  useEffect(() => {
    fetchCourses();
  },[])

  const updateSearchResults = (results: React.SetStateAction<never[]>) => {
    setCourses(results);
  };

  if(loading){
    return (<Loading></Loading>);
  }
    return (
    <div>
      <CourseSearch searchResults={updateSearchResults}></CourseSearch>
      <CoursesComponent courses={courses}/>
    </div>)
  }