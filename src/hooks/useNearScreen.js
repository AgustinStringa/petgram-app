import { useEffect, useState, useRef } from "react";
export const useNearScreen = () => {
    const ref = useRef(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];
            if (isIntersecting) {
                setShow(true);
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    }, [ref, show])
    return {
        show, ref
    }
}