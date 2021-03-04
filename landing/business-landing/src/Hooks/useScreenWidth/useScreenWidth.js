import {useEffect, useState} from "react";

const useScreenWidth = () => {
    const [width, setSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth]);

        window.addEventListener('resize', handleResize);
    }, []);
    return width;
};

export default useScreenWidth;