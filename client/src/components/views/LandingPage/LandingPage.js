import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Title } = Typography
const { Meta } = Card;

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

        return <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative'}}>
                    <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                    <div className=" duration">
                        <span>{minutes} : {seconds}</span>
                    </div>

                </div>
                <Meta
                    avatar={
                        <Avatar src={video.writer.image} />
                    }
                    title={video.title}
                />
                <span>{video.writer.name}</span>
                <span style={{ marginLeft: '3rem' }}> Views: {video.views} </span>
                - <span> {moment(video.createdAt).format("MMM Do YYYY")} </span>
        </Col>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <Title level={2} > Recommended </Title>
            <hr />

            <Row>
                {renderCards}
            </Row>
            

        </div>
    )
}

export default LandingPage
