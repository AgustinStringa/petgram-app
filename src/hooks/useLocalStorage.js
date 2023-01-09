import { useState } from "react"
export const useLocalStorage = (key, initialValue) => {
    const [likesp, setLikesp] = useState(initialValue);

    const getLikesp = () => {
        try {
            const state = window.localStorage.getItem("likes");
            const state_object = JSON.parse(state);
            setLikesp(state_object[key][1])
            if (state_object[key][0] == true) {
                return true
            }
            return false
        } catch (error) {
            return false
        }
    }

    const [liked, setLiked] = useState(getLikesp);

    const likePhoto = (evt) => {
        setLiked(!liked);
        evt.preventDefault();
        try {
            const state = window.localStorage.getItem("likes");
            const state_object = JSON.parse(state);
            const newLikes = !liked ? likesp + 1 : likesp - 1
            window.localStorage.setItem("likes", JSON.stringify({
                ...state_object,
                [key]: [!liked, newLikes],
            }));
            setLikesp(newLikes);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        likesp,
        likePhoto,
        liked
    }
}
