'use client';

import axios from "axios";
import React, { useEffect, useState} from "react";
import Loading from 'src/app/loading'
import CoursesComponent from "../components/courses";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const res = await axios.request({
          url: "http://localhost:8000/api/courses",
          method: "get"
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

  console.log(loading, courses);

  if(loading){
    return (<Loading></Loading>);
  }
    return <div>
      <CoursesComponent courses={courses}/>
    </div>
  }