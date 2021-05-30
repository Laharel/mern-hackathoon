import React, { Component } from 'react'
import '../App.css';
import SectionToggle from './SectionToggle';

const Sections= ({sections}) =>{
    // state = {
    //     sections : {},
    //     on: false,
    //     section_id: null,
    // }

    // render() {
    // let temp_sections = [{...sections}]
    var temp_sections = [...sections]
    // temp_sections = sections

    return (
        temp_sections.map((section) =>
            (
        
                <div>
                    <div className="comment-wrapper text-center">
                        <div className="comment-left mr-auto">
                        </div>
                        <div className="comment-right text-left mr-auto">
                            <div className="comment-header">
                                <div className="comment-creator">
                                    {/* <a onClick={() => this.toggle('{section.id}')} href="#section-name">
                                        <h4>{section.name} </h4> 
                                    </a> */}
                                    <SectionToggle
                                    //pass the retrieved blog  
                                    //and its commentsto BlogDetail
                                    lessons={section.lessons}
                                    section={section}
                                    />
                                </div>
                            </div>

                            {/* <div className="" id="section-name">
                                {(this.state.on && ) && <h3>Lessons:</h3> }
                                <ul>
                                    {(this.state.on &&) && section.lessons.map(lesson => (
                                        <a href="">
                                        <li> {lesson.name} </li>
                                        </a>
                                    ))}
                                </ul>                                
                            </div> */}
                        

                        </div>
                    </div>
                    <div className="comment-spliiter"></div>

                </div>
                

    
            )
        )

    )
    // }
}

export default Sections
