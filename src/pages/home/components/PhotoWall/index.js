import React from "react";
import { Upload, Icon, Modal,message} from 'antd';
import AlbumHeader from "../AlbumHeader/index.js";
import servicesApi from "../../../../services/api.js";
import request from "../../../../utils/request.js";
import styles from "./index.module.scss";
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export default class PhotoWall extends React.Component {
    state = {
        album:this.props.album,
        previewVisible: false,
        previewImage: '',
        fileList: [
        ],
    };
    componentDidMount(){
        let that=this;
        request(servicesApi.photoApi+`?album=${this.state.album}`,"GET").then(function(res){
            res.forEach((item,index)=>{
                res[index].url=servicesApi.host+"/"+res[index].url;
                res[index].status="done";
                res[index].uid=res[index]._id;
            });
            that.setState({
                fileList:res
            })
        });
    }
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    
    handleChange = ({ fileList,file,event}) => {
        if(file){
            message.success("上传成功，等待审核");
        }
    }
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const data={album:this.state.album,count:this.state.fileList.length+1}
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <React.Fragment>
                <AlbumHeader name={this.state.album} count={this.state.fileList.length}/>

            <div className={styles.photos}>

                <div className="clearfix">
                    <Upload
                        method="POST"
                        action={servicesApi.photoApi}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        withCredentials={true}
                        name="photo"
                        data={data}
                    >
                        {fileList.length >= 16 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
            </div>
            </React.Fragment>
        );
    }
}