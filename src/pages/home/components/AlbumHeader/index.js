import React from "react";
import styles from "./index.module.scss";
export default class AlbumHeader extends React.Component {
    render() {
        return (
            <div className={styles.albumHeader}>
                <p>
                    <span>{this.props.name}</span>
                    <span>{this.props.count}张</span>
                    </p>
            </div>
        )
    }
}
AlbumHeader.defaultProps={
    name:"hello",
    count: 0
}