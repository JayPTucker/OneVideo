import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { List, Avatar } from 'antd';

import Subscriber from './Sections/Subscriber';
import SideVideo from './Sections/SideVideo';
import Comments from './Sections/Comments';

import "./DetailVideoPage.css";

import axios from 'axios';

function DetailVideoPage(props) {

    const videoID = props.match.params.videoID
    const [Video, setVideo] = useState([])
    const [CommentLists, setCommentLists] = useState([])

    const videoVariable = {
        videoID: videoID
    }

    useEffect(() => {
        axios.post('/api/watch/getVideo', videoVariable)
        .then(response => {
            if(response.data.success) {
                setVideo(response.data.video)
            } else {
                alert('Failed to get Video Info')
            }
        })
    }, [])

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }


 
    if(Video.writer) {
        return (
            <Row>
                <Col md={9} key={Video.title}>

                    <video style={{ width: '100%' }} src={`https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/${Video.filePath}`} controls></video>
                    <Row>
                        <Col>
                            <Avatar src={Video.writer && Video.writer.image} />
                            <p><b>{Video.writer.name}</b></p>
                            <p>{Video.title}</p>
                            <p>{Video.description}</p>
                        </Col>

                        <Col>
                            <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />
                        </Col>
                    </Row>

                    <Row>
                        <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} />
                    </Row>

                </Col>
    
                <Col md={3}>
                    <SideVideo />
                </Col>
            </Row>
            
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

    
}

export default DetailVideoPage;