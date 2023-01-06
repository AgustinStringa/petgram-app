import React, { useState, useEffect } from 'react'
import db from '../../api/db.json'

export const useListCategories = (state) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        // const res = await fetch('../../../api/db.json');
        // const data = await res.json();
        // console.log(data)
        // console.log('data')
        setLoading(true);
        setTimeout(() => {
            setCategories(db.categories);
            setLoading(false);
        }, '2000');
    }
    useEffect(() => {
        getCategories();
    }, [categories]);

    return {
        categories,
        loading
    }
}