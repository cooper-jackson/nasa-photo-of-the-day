import React from 'react';
import './Photo.css'

function Photo(props){
    const { photo } = props

    return (
        <div className={'photo-border'}>
            <div className={'photoWrapper'}>
                <img alt='nasa-pic-of-the-day' className={'nasaPhoto'} src={photo.url}/>
            </div>
            <h6>{photo.title}, {photo.copyright}</h6>
        </div>
    )
}

export default Photo;