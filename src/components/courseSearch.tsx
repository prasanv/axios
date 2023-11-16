import axios from 'axios';
import React, { useState } from 'react'

const CourseSearch = ({ searchResults }: any) => {
  const [title, setTitle] = useState('');

  const fetchCourses = async (value:string) => {
    try {
      const res = await axios.request({
          url: `http://localhost:8000/api/courses/search?title=${value}`,
          method: "get"
      })
       searchResults(res.data);
    } catch (err) {
        console.error(err);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchCourses(title);
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type="text" 
            className='search-input' 
            name="searchField" 
            placeholder='Search Courses...'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            id="searchField_1" />
        <button className="search-button">Search</button>
      </form>
    </div>
  )
}

export default CourseSearch
