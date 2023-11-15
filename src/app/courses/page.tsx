import React from 'react'
import CoursesComponent from "../../components/courses";

const Courses = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <CoursesComponent></CoursesComponent>
    </>
  )
}

export default Courses
