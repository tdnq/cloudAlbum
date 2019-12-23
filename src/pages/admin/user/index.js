import React,{useState,useEffect} from "react";
import { Table, Divider, Tag } from 'antd';
import servicesApi from "../../../services/api.js";
import request from "../../../utils/request.js";
const columns = [
  {
    title: 'Name',
    dataIndex: 'username',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'email',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'openId',
    dataIndex: 'guest',
    render: tags => (
      <span>
        <Tag color={"green"}>
              普通用户
            </Tag>
      </span>
    ),
  },

];


export default function AdminUser(){
    const [userData,setUserData] = useState([]);
    useEffect(function(){
        request(servicesApi.getUser,"GET").then((res)=>{
            setUserData(res);
        })
    },[userData.length])

    return <Table columns={columns} dataSource={[].concat(userData)} />;
} 