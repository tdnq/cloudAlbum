import React, { useState, useEffect } from "react";
import servicesApi from "../../../services/api.js";
import request from "../../../utils/request.js";
import ReviewSingle from "../components/ReviewSingle/index.js";
import {message} from "antd";
export default function ReviewPhoto() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        request(servicesApi.adminReviewPhotoApi, "GET").then(res => {
            res.forEach((item,index)=>{
                res[index].url=servicesApi.host+"/"+res[index].url;
                res[index].uid=res[index]._id;
            });
            setPhotos(res);
        });
    }, [photos.length])
    const handleAllow = (index,id) => {
        request(servicesApi.adminReviewPhotoApi,"POST",{
            _id:id
        }).then(function(res){
            if(res.ok===1){
                message.success("审核成功");
                photos.splice(index, 1);
                setPhotos(Array.from(photos));

            }
        })
    }
    return (
        <React.Fragment>
            {
                photos.map((item, index) => {
                    return <ReviewSingle
                        index={index}
                        handleAllow={handleAllow}
                        id={item.uid}
                        key={item.uid}
                        url={item.url} />
                })
            }

        </React.Fragment>
    )
}