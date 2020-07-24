import React from 'react'
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import { Comment, Avatar } from 'antd';


function SingleComment(props) {

    const actions = [
        <span onClick>Reply to Comment </span>
    ]

    return (
        <div>
            <Comment
            actions={actions}
            author={props.comment.writer.name}
            avatar={
                <Avatar 
                src={props.comment.writer.image} 
                alt="image" 
                />
            }
            content={
                <p>
                    {props.comment.content}
                </p>
            }            
            ></Comment>
        </div>
    )
}

export default SingleComment