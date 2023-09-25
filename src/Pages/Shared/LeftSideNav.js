import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categorys, setCateorys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCateorys(data))
    }, []);


    return (
        <div>
            <h2>News Categoris</h2>
            {
                categorys.map(category =>
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default LeftSideNav;