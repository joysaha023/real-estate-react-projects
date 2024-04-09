import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const useEstateData = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            setEstates(data)
        }
        fetchData()
    }, [])
    
    return {estates};
};

export default useEstateData;