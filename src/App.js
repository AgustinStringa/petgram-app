import React from 'react'
import { ListCategories } from './components/ListCategories/ListCategories'
import { GlobalStyle } from './GlobalStyles'
import db from '../api/db.json'
import { ListPhotoCards } from './components/ListPhotoCards/ListPhotoCards'

const App = () => {
    return (
        <>
            <h1>Petgram</h1>
            <ListCategories />
            <ListPhotoCards></ListPhotoCards>
            <GlobalStyle />
        </>
    )
}

export default App