import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/NewsSummeryCard';

const Category = () => {

    const categoryNews = useLoaderData();

    return (
        <div>
            {
                categoryNews.map(news =>
                    <NewsSummeryCard
                        key={news._id}
                        news={news}>
                    </NewsSummeryCard>
                )
            }
        </div>
    );
};

export default Category;