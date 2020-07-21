import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import moment from 'moment';

function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
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

        return <div>
            <div style={{ position: 'relative'}}>
                    <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                    <div className=" duration">
                        <span>{minutes} : {seconds}</span>
                    </div>

                </div>
                <div
                    avatar={
                        <div src={video.writer.image} />
                    }
                    title={video.title}
                />
                <span>{video.writer.name}</span>
                <span style={{ marginLeft: '3rem' }}> Views: {video.views} </span>
                - <span> {moment(video.createdAt).format("MMM Do YYYY")} </span>
        </div>
    })

    return (
        <Row className="text-center justify-content-center">
            {renderCards}
        </Row>
    )
}

export default LandingPage
