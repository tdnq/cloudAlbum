import React,{useState,useEffect} from "react";
import PhotoWall from "../components/PhotoWall/index.js";
import {useParams} from "react-router-dom";

export default function AlbumDetail(){
    let {album} = useParams();
    const [albumName,setAlbum]=useState(album);
    return(
        <PhotoWall album={albumName}></PhotoWall>
    )
}