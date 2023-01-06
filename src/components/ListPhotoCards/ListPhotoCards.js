import React from 'react'
import db from '../../../api/db.json'
import { PhotoCard } from '../PhotoCard/PhotoCard'

export const ListPhotoCards = () => {
    return (
        <>
            {db.photos.map((el) => <PhotoCard key={el.id} id={el.id} src={el.src} categoryId={el.categoryId} userId={el.userId} likes={el.likes} />)}
        </>
    )
}

