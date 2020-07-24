import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { List, Avatar } from 'antd';
import Subscriber from './Sections/Subscriber';

import SideVideo from './Sections/SideVideo';

import "./DetailVideoPage.css";

import axios from 'axios';

function DetailVideoPage(props) {

    const videoID = props.match.params.videoID
    const [Video, setVideo] = useState([])

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
                    {/* VIDEO AUTHOR: */}
                    


                
                    {/* <List.Item
                        actions={[ <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={Video.writer && Video.writer.image} />}
                            title={Video.title}
                            description={Video.description}
                        />

                    </List.Item> */}
    

                </Col>
    
                <Col md={3}>
                    <SideVideo />
                    <p>test</p>
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