import React from "react";
import {Link} from "react-router-dom";
import styles from "./NotFound.module.css";
import Sad from "../../../../media/icons/smilesad.png";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
                <h1>4<img src={Sad} alt=""/>4</h1>
                <p>That page cannot be found</p>
                <button><Link to="/">Back home</Link></button>
        </div>
    );
};

export default NotFound;