import React, { useState } from "react";
import { Col, Row } from "antd";
import AddNewAlbum from "../components/AddModal/index.js";
import SingleAlbum from "../components/SingleAlbum/index.js"
export default function Album() {
    const [albums, setAlbums] = useState([
        { name: "fa", count: 4 },
        { name: "fa", count: 4 },
        { name: "fa", count: 4 },
        { name: "fa", count: 4 },
        { name: "fa", count: 4 }
    ]);
    return (
        <Row type="flex" gutter={[8,16]} style={{marginTop:32}}>
            <Col lg={6} sm={8} xs={12}>
                <AddNewAlbum />
            </Col>
            {
                albums.map((item, index) => {
                    return <SingleAlbum name={item.name} count={item.count} key={index} />
                })
            }
        </Row>
    )
}