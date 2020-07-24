import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import moment from 'moment';
import axios from 'axios';

function SubscriptionPage() {

    const [Videos, setVideos] = useState([])

    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post('/api/video/getSubscriptionVideos', variable)
            .then(response => {
                if(response.data.success) {
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to load Subscriptions')
                }
            })
    }, [])

    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col key={video._id}>
                <a href={`/watch/${video._id}`}>
                    <img style={{ width: '20%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                    <span style={{ marginLeft: '3rem' }}> Views: {video.views} </span> ||
                    <span> {minutes}:{seconds}</span>
                        
                    <div
                        avatar={
                            <div src={video.writer.image} />
                        }
                    />
                    <span>{video.title}<br/></span>
                    <span>{video.writer.name}</span>
                    
                    - <span> {moment(video.createdAt).format("MMM Do YYYY")} </span>
                </a>
        </Col>
    })

    return (
        <Row className="text-center justify-content-center">
            {renderCards}
        </Row>
    )
}

export default SubscriptionPage