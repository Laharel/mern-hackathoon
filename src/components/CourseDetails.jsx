import React, { Component } from "react";
import '../App.css';
import Sticky from 'react-stickynode';
import MetaTags from 'react-meta-tags';
import Sections from "./Sections";
import ShareLinks from "../components/ShareLinks";
import AuthService from "../services/auth.service";
import {withRouter, RouteComponentProps} from "react-router";
import { useState, useEffect } from "react";
import CourseService from "../services/user.service";
import { API_URL_COURSES ,  } from "../constants";
import axios from "axios";
import {useParams} from 'react-router-dom'



function CourseDetails(props) {

    const params = useParams();

    const [state, setState] = useState({
        course: {},
        sections: [],
        lessons: {}
    })

    useEffect(() => {
        getCourseDetails(params);
    }, [])

    const getCourseDetails = (params) => {
        // axios.get(API_URL_COURSES).then(res => this.setState({ courses: res.data }))
        const course_id = `${params.courseId}`;
        const api_url = `${API_URL_COURSES}`;
        axios.get(api_url+course_id).then(res => setState({ course: res.data, sections: res.data.sections, lessons: res.data.lessons }));

        // CourseService.getCourseDetails(course_id).then(res => setState({ course: res.data }))
    };
    return (

        <div className="article-wrap">
            <head>
                <MetaTags>
                    <title>{state.course.title}</title>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, target-densityDpi=device-dpi" />
                </MetaTags>
            </head>
            <div className="article-left">
            <ShareLinks/>
            </div>
            <div className="article-mid">
                <header className="article-entry">
                    <div className="entry-top">
                    </div>
                    <div className="article-title">
                        <h2>{state.course.title}</h2>
                    </div>
                </header>
                <div className="article-image">
                    <img src={state.course.thumbnail} width="100%" alt="" />
                </div>
                {/* <div className="article-content">
                </div> */}
                {/* <div className="author-bio"></div> */}
                <div className="comments-wrapper">
                    <h4>Description:</h4>
                    <p> {state.course.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quam sit nobis saepe, natus, hic aperiam doloremque, sapiente totam ab voluptatem laboriosam. 
                    Sint ad quasi, adipisci corrupti eveniet assumenda nesciunt officiis explicabo nemo officia 
                    corporis exercitationem quia voluptas repudiandae libero fuga laboriosam molestias ipsum laudantium? 
                    Quo temporibus pariatur accusamus totam cupiditate nobis, autem hic animi molestiae sit voluptatum 
                    perferendis debitis magni nulla omnis tempora accusantium porro dolores quas dolorum voluptatem 
                    obcaecati illo voluptas. Laborum, ut. Rem nulla possimus quis nisi tempora veritatis alias incidunt 
                    voluptas at exercitationem, placeat excepturi sed quia nesciunt reiciendis ea voluptate ipsum necessitatibus 
                    perferendis eos aliquam. Pariatur?</p>
                    <h4>Sections:</h4>
                    <Sections 
                        sections={state.sections} 
                    />
                </div>
            </div>
            {/* <div className="article-right">
                <Sticky top={90} bottomBoundary={0}>
                </Sticky>
                <Sticky top={100} bottomBoundary={150}>
                    <div className="about-article-cover">
                    </div>
                </Sticky>
            </div> */}
        
        </div>
        
        
        
                
    );
    
}
export default withRouter(CourseDetails);
