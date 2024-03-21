import React from 'react'
import './Courses.css'

const courses = () => {
  return (
    <div className='courses-container'>
      <h1 className='tag-courses'>Popular Courses</h1>
      <div className="courses-cards">
            <div className="card-1-courses">
                <div className="icon-courses">
                    *&*
                </div>
                <div className="name-courses">
                    Design
                </div>                                                        
            </div>
            <div className="card-1-courses">
                <div className="icon-courses">
                    *&*
                </div>
                <div className="name-courses">
                    Design
                </div>
            </div>
            <div className="card-1-courses">
                <div className="icon-courses">
                    *&*
                </div>
                <div className="name-courses">
                    Design
                </div>
            </div>
            {/* <div className="card-1-courses">
                <div className="icon-courses">
                    *&*
                </div>
                <div className="name-courses">
                    Design
                </div>
            </div> */}
            {/* <div className="card-1-courses">
                <div className="icon-courses">
                    *&*
                </div>
                <div className="name-courses">
                    Design
                </div>
            </div> */}
      </div>
    </div>
  )
}

export default courses
