import React from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'

export default function COMPONENT_NAME({ className, ...props }) {
    const css = classnames(className, styles.component)
    return (
        <div className={css}>
            Component
        </div>
    )
}