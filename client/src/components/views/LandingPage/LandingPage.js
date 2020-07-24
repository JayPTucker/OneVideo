import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import moment from 'moment';

function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/watch/getVideos')
        .then(response => {
            if(response.data.success) {
                setVideos(response.data.videos)
            } else {
                alert('Failed to GET videos')
            }
        })
    }, [])

    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col key={video._id}>
                <a href={`/watch/${video._id}`}>
                    <img style={{ width: '20%' }} alt="thumbnail" src={`https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/${video.thumbnail}`} />
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

export default LandingPage
