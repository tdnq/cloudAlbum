import React from "react";
import styles from "./index.module.scss";
import { Button } from "antd";
export default class ReviewSingle extends React.Component {
    render() {
        return (
            <div className={styles.singleWrapper}>
                <div className={styles.content}>
                    <img src={this.props.url} title="待审核" alt="待审核图片" />
                </div>
                <div className={styles.footer}>
                    <span className={styles.allow}>
                        <Button type="danger">不通过</Button>
                    </span>
                    <span className={styles.reject}>
                        <Button type="primary"
                            onClick={()=>{this.props.handleAllow(this.props.index,this.props.id)}}>通过
                         </Button>
                    </span>
                </div>
            </div>
        )
    }
}
ReviewSingle.defaultProps = {
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}