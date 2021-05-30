import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export default class SectionToggle extends Component {
    state = {
        on: false,
        lessons: [],
        section: {}
    }

    componentDidMount() {
        this.setState({ lessons: this.props.lessons })
        this.setState({ section: this.props.section })
    }

    toggle = () =>{
        this.setState({
            on: !this.state.on
        })
        return false
    }
    render() {
        var section = this.state.section
        return (
            <div className="section-toggle">
                <button onClick={this.toggle}>
                <h5>{section.name} </h5> 
                </button>
                {/* <a onClick={this.toggle} href="#">
                    <h4>{section.name} </h4> 
                </a> */}
                <ul>
                    {/* {lessons.map(lesson =>(
                        <li>
                        {lesson.name}
                        </li>
                    ))} */}
                    {this.state.on && this.state.lessons.map(lesson =>(
                        <Link to={`/lessons/${lesson.id}`}>
                            <li>{lesson.name} </li>

                        </Link>
                    ))}
                
                    
                </ul>

            </div>
        )
    }
}
