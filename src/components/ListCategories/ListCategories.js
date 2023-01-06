import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Category } from '../Category/Category'
import db from '../../../api/db.json'
const List = styled.ul`
    display: flex;
    padding: 35px;
    background-color: gray;
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

const ArrowContainer = styled.div`
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
`
export const ListCategories = () => {

    const scroll = (evt) => {
        evt.preventDefault();
        document.querySelector('#listCategories').scrollBy(75, 0);
    };

    const getCategories = async () => {
        // const res = await fetch('../../../api/db.json');
        // const data = await res.json();
        // console.log(data)
        // console.log('data')
    }

    return (
        <ListContainer >
            <List id="listCategories">
                {db.categories.map((el) => <Category key={el.id} cover={el.cover} path={el.path} emoji={el.emoji} />)}
            </List>
            <ArrowContainer onClick={scroll}>
                <div>
                    <Arrow viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z">
                    </path></g></Arrow>
                </div>
            </ArrowContainer>
        </ListContainer>
    )
}

