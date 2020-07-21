import React, { useEffect, useState } from 'react';
import { List, Avatar } from 'antd';

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
        <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
            <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>

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
    )
}

export default DetailVideoPage;