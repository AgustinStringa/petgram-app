import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { fadeIn } from '../../Styles/Animations';
import { parse } from 'uuid';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const CardContainer = styled.a`
    width: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
    /* border: 2px solid #bbb; */
    box-shadow: 0 10px 14px rgba(0,0,0,0.2);
    border-radius: 20px;

    & > div:first-child > img {
        border-radius: 20px;
        object-fit: cover;
        width: 100%;
        ${fadeIn({ time: '1.5s', type: 'ease-in-out' })} 
    }

    & > div:last-child{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 16px;
    }
`
const ButtonLike = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;

    &:hover > svg {
        color: red;
    }
`

const Article = styled.article`
min-height: 200px;
`
export const PhotoCard = ({ id, categoryId, src = DEFAULT_IMAGE, userId, likes = 0 }) => {
    const { show, ref } = useNearScreen();
    const { likesp, likePhoto, liked } = useLocalStorage(id, likes);

    return (

        <Article ref={ref}>
            {show && <CardContainer href={`/detail/${id}`}>
                <div>
                    <img src={src} alt='petgram foto' />
                </div>
                <div>
                    <i></i>
                    <ButtonLike onClick={(evt) => likePhoto(evt)}>
                        {liked ? <AiFillHeart size={'32px'} color={"red"} /> : <AiOutlineHeart size={'32px'} />}
                        <span>{`${likesp} ${likesp > 1 ? 'likes' : 'like'}`}</span>
                    </ButtonLike>
                </div>
            </CardContainer>}

        </Article>

    )
}
