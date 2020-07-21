import React, {useEffect, useState} from 'react'
import { Row, Col } from "react-bootstrap";
import axios from 'axios';

import "./SideVideo.css";

function SideVideo() {

    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setSideVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        

    }, [])

    const sideVideoItem = SideVideos.map(( video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

       return (
       <Row>
            <Col>
                <a href={`/video/${video._id}`}  style={{ color:'gray' }}>
                    <img style={{ width: "100%" }} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
                </a>
            </Col>

            <Col>
                <a href={`/video/${video._id}`} style={{ color:'gray' }}>
                    <span>{video.title}  </span><br />
                    <span>{video.writer.name}</span><br />
                    <span>{video.views} Views || </span>
                    <span>{minutes}:{seconds}</span>
                </a>
            </Col>
        </Row>
       )
    })

    return (
        <Col>
            {sideVideoItem}
        </Col>
        
       
    )
}

export default SideVideo