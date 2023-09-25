import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();
    const { title, author, details, image_url, category_id } = news;

    return (
        <Card style={{ width: '100' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">More news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;