import React, { useState,useEffect } from "react";
import { Col, Row } from "antd";
import AddNewAlbum from "../components/AddModal/index.js";
import SingleAlbum from "../components/SingleAlbum/index.js"
import servicesApi from "../../../services/api.js";
import request from "../../../utils/request.js";
import "./index.css"
export default function Album() {
    const [albums, setAlbums] = useState([
    ]);
    useEffect(()=>{
        request(servicesApi.albumApi,"GET").then(res=>{
            setAlbums(res)
        });
    },[albums.length])
    return (
    <div className="albumWrapper">
        <Row type="flex" gutter={[8,16]} style={{marginTop:32}} className="albumBg">
            <Col lg={6} sm={8} xs={12}>
                <AddNewAlbum handleAdd={setAlbums} albums={albums}/>
            </Col>
            {
                albums.map((item, index) => {
                    return <SingleAlbum name={item.name} count={item.count} key={index} />
                })
            }
        </Row>

    </div>
    )
}