import React from 'react'
import { ListCategories } from './components/ListCategories/ListCategories'
import { GlobalStyle } from './Styles/GlobalStyles'
import { ListPhotoCards } from './components/ListPhotoCards/ListPhotoCards'
import { Logo } from './components/Logo/Logo'
const App = () => {
    return (
        <>
            <Logo />
            <ListCategories />
            <ListPhotoCards></ListPhotoCards>
            <GlobalStyle />
        </>
    )
}

export default App