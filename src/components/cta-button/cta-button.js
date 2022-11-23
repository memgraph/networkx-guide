import React from "react";
import styles from "./cta-button.module.css";

export default function CtaButton(props) {
    const { title, url } = props;

    return (
        <div className={styles.ctaBox}>
            <a href={url} className={styles.ctaButton} style={styles}>{title}</a>
        </div>
    );
}
