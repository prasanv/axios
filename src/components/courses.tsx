import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import 'src/app/global.css'

const fetchCourses = async () => {
    try {
        const res = await axios.request({
            url: "http://localhost:8000/api/courses",
            method: "get"
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

const Courses = async () => {
    const courses = await fetchCourses();
  return (
    <div className='courses'>
      {courses.map((course: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; level: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; link: string | UrlObject }) => 
      (<div key={course.id} className='card'>
        <h2>{course.title}</h2>
        <small>Level: {course.level}</small>
        <p>{course.description}</p>
        <Link href={course.link} target='_blank' className='btn'>
        Go To Course
        </Link>
      </div>))}
    </div>
  )
}

export default Courses;