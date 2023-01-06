import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
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
export const PhotoCard = ({ id, categoryId, src = DEFAULT_IMAGE, userId, likes = 0 }) => {
    return (
        <article>
            <CardContainer href={`/detail/${id}`}>


                <div>
                    <img src={src} alt='petgram foto' />
                </div>
                <div>
                    <i></i>
                    <ButtonLike>
                        <AiOutlineHeart size={'32px'} /> <span>{`${likes} ${likes > 1 ? 'likes' : 'like'}`}</span>
                    </ButtonLike>
                </div>
            </CardContainer>
        </article>
    )
}
