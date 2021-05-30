import React, { Component, useState, useEffect } from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import CourseService from "../services/user.service";


function CourseList() {

    const [state, setState] = useState({
        courses: []
    })

    useEffect(() => {
        getCourses();
    }, [])

    const getCourses = () => {
        // axios.get(API_URL_COURSES).then(res => this.setState({ courses: res.data }))
        CourseService.getCourses().then(res => setState({ courses: res.data }))
    };

    return (
        
        state.courses.map(course => 
            (
                // <BlogDetail blog_id={blog.blog_id}/>

                //onClick trigger retrieveBlogDetail() 
                <Link to={`/courses/${course.id}`}>
                {/* <Link to={`#`}> */}
                {/* // <Link to={`#`}> */}

                    <div className="blog-container">
                        <div className="blog-image">
                            <img src={course.thumbnail} width="400" height="230" alt="" />
                        </div>

                        <div className="blog-info text-left">
                            <div className="blog-info-topic-wrap">

                            </div>
                            <div className="blog-info-topic">
                                <h2>{course.title}</h2>
                            </div>
                            
                            {/* <p>{blog.description}</p> */}
                            <div className="blog-info-description">
                                <p>{course.description}</p>
                            </div>
                        </div>
                        <span>
                            
                        </span>
                        <div className="blog-splitter text-center">
                        </div>
                    </div>

                </Link>
                // <button onClick={blog => { this.setState({blog:blog})} } >


                // </button>
                    

            
            )
        )
    );
    
}
export default CourseList;