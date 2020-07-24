import React, {useEffect, useState} from 'react'
import { Row, Col } from "react-bootstrap";
import axios from 'axios';

import "./SideVideo.css";

function SideVideo() {

    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/watch/getVideos')
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
       <Row key={video._id} style={{ padding:'20px' }}>
            <Col>
                <a href={`/watch/${video._id}`}  style={{ color:'gray' }}>
                    <img style={{ width: "100%" }} src={`https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/${video.thumbnail}`} alt="thumbnail" />
                </a>
            </Col>

            <Col>
                <a href={`/watch/${video._id}`} style={{ color:'gray' }}>
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
        <div>
            {sideVideoItem}
        </div>
        
       
    )
}

export default SideVideo