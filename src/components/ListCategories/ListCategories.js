import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Category } from '../Category/Category'
import db from '../../../api/db.json'
import { fadeIn } from '../../Styles/Animations'
const List = styled.ul`
    display: flex;
    padding: 28px 36px;
    background-color: #f9f9f9;
    gap: 16px;
    overflow: scroll;
    width: 100%;

    
    &::-webkit-scrollbar {
    display: none;
  }

`

const Arrow = styled.svg`
    transform: rotate(90deg);
    width: 20px;
    height: 20px;
`

const ArrowContainerRight = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    height: 100%;
    
    & > div {
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 8px;
    }
`
const ListContainer = styled.div`
    position: relative;
    &.fixed {
        ${fadeIn({ time: '0.2s' })}
        position: fixed;
        max-width: 450px;
        transform: scale(0.7);
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        border:none;
    }

    &.fixed > ul {
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        border-radius: 30px;

    }
`
const ArrowContainerLeft = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    height: 100%;
    
    & > div {
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 8px;
    }

    &  svg {
        transform: rotate(-90deg);
    }
`
export const ListCategories = () => {

    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false);
    useEffect(() => {
        getCategories();
    }, [categories]);

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);

    }, [showFixed]);
    const scroll = (evt, top, left) => {
        evt.preventDefault();
        document.querySelector('#listCategories').scrollBy({
            top: top,
            left: left,
            behavior: 'smooth',
        });
        document.querySelector('#listCategoriesFixed').scrollBy({
            top: top,
            left: left,
            behavior: 'smooth',
        });

    };

    const getCategories = async () => {
        // const res = await fetch('../../../api/db.json');
        // const data = await res.json();
        // console.log(data)
        // console.log('data')
        setTimeout(() => {
            setCategories(db.categories);
        }, '2000');
    }


    const ReturnList = (fixed) =>
        <ListContainer className={fixed ? 'fixed' : ''}>
            <List id={fixed ? "listCategoriesFixed" : "listCategories"} >
                {categories.map((el) => <Category key={el.id} cover={el.cover} path={el.path} emoji={el.emoji} />)}
            </List>
            <ArrowContainerRight onClick={(evt) => scroll(evt, 0, 100)}>
                <div>
                    <Arrow viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z">
                    </path></g></Arrow>
                </div>
            </ArrowContainerRight>

            <ArrowContainerLeft onClick={(evt) => scroll(evt, 0, -100)}>
                <div>
                    <Arrow viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z">
                    </path></g></Arrow>
                </div>
            </ArrowContainerLeft>
        </ListContainer>


    return (
        <>
            {ReturnList()}
            {showFixed && ReturnList(true)}
        </>
    )
}

