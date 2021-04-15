import React from 'react';
import styled from "styled-components"
import '../App.css'



function Photo(props){
    const { photo } = props

    const PhotoIMG = styled.img`

        box-shadow: 0px .3em 1em rgba(0, 0, 0, 0.4);
        margin: .6em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const PhotoWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    `;

    const PhotoComment = styled.h6`
        margin: 0 auto 10px auto;

    `;
    return (
        <PhotoWrapper className={"photoWrapper"}>
            <PhotoIMG alt='nasa-pic-of-the-day' src={photo.url}/>
            <PhotoComment margin="4px"> {photo.copyright ? `${photo.title}, ${photo.copyright}` : `${photo.title}`}</PhotoComment>
        </PhotoWrapper>
    )
}

export default Photo;