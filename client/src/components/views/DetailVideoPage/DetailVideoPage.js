import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { List, Avatar } from 'antd';

import SideVideo from './SideVideo/SideVideo';

import "./DetailVideoPage.css";

import axios from 'axios';

function DetailVideoPage(props) {

    const videoID = props.match.params.videoID
    const [Video, setVideo] = useState([])

    const videoVariable = {
        videoID: videoID
    }

    useEffect(() => {
        axios.post('/api/video/getVideo', videoVariable)
        .then(response => {
            if(response.data.success) {
                setVideo(response.data.video)
            } else {
                alert('Failed to get Video Info')
            }
        })
    }, [])

    return (
        <Row>
            <Col md={9}>
                <div className="postPage" style={{ width: '100%' }}>
                <video style={{ width: '100%' }} src={`https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/uploads%5C1595494342909_2020-07-09+18-23-25.mp4`} controls></video>
                {/* <video src="https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/uploads%5C1595494342909_2020-07-09+18-23-25.mp4" width="1020" height="580"></video> */}


                <List.Item
                    actions={[]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={Video.writer && Video.writer.image} />}
                        title={<a href="https://ant.design">{Video.title}</a>}
                        description={Video.description}
                    />
                    <div></div>
                </List.Item>

                </div>
            </Col>

            <Col md={3}>
                <SideVideo />
            </Col>
        </Row>
        
    )
}

export default DetailVideoPage;