import React from "react";
import styles from "./index.module.scss";
import { Col } from "antd";
import { Link } from "react-router-dom";
export default class SingleAlbum extends React.PureComponent {

    render() {
        return (
            <Col lg={6} sm={8} xs={12}>
                    <Link to="/albumDetail">
                    <div className={styles.singleAlbum}>
                        <p className={styles.footer}>
                            <span className={styles.name}>{this.props.name}</span>
                            <span className={styles.count}>{this.props.count}张</span>
                        </p>
                    </div>
                    
                    </Link>
            </Col>
        )
    }
}
SingleAlbum.defaultProps = {
    name: "name",
    count: 0
}