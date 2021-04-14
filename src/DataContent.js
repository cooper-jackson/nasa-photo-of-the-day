import React from 'react';
import './DataContent.css'

const DataContent = props => {
    const { photo } = props

    return (
        <div className = 'data-content-container'>
            <ul>
                <li>
                    Title: {photo.title}
                </li>
                <li>
                    Date: {photo.date}
                </li>
                <li>
                    Explanation: {photo.explanation}
                </li>
                <li>
                    url: <a href={photo.url}>{photo.url}</a>
                </li>
                <li>
                    Copyright: {photo.copyright}
                </li>
            </ul>
        </div>
    )
}

export default DataContent