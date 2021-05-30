import React, { Component } from 'react'
import { API_URL_LESSONS } from "../constants";
import axios from "axios";
import { Player } from "video-react";
import ShareLinks from './ShareLinks';

export class GetLesson extends Component {
    state = {
        lesson: {},
        name: null,
        description: null,
        file: null,
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        // saved in constants/index
        const api_url = `${API_URL_LESSONS}`;
        const lesson_id = `${params.lessonId}`;
        axios.get(api_url+lesson_id).then(res => this.setState({ lesson: res.data, name: res.data.name, description: res.data.description, file: res.data.file }));


    }
    render() {
        return (
            <div className="article-wrap">
                <div className="article-left">
                    <ShareLinks/>
                </div>
                <div className="article-mid">
                    <h4> {this.state.lesson.name} </h4>
                    <div className="player">
                    <Player
                        playsInline
                        src={this.state.file}
                        fluid={false}
                        width={720}
                        height={470}
                    />
                    </div>

                    <h5>Description:</h5>
                    <p> {this.state.lesson.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Provident est quibusdam tempora eveniet minus ab totam consequuntur corporis vitae fugit soluta 
                    impedit id culpa, beatae fuga inventore dolorem reprehenderit similique laborum quidem ea corrupt
                    i praesentium sequi facere. Quaerat, necessitatibus, vero omnis perferendis assumenda asperiores c
                    onsequuntur in itaque ipsum unde laboriosam. </p>
                </div>
            </div>
        )
    }
}

export default GetLesson
