import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { FaEye } from 'react-icons/fa6';

const NewsSummeryCard = ({ news }) => {

    const { _id, title, total_view, author, details, image_url, rating } = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image src={author?.img} style={{ height: "60px" }} className='me-2' roundedCircle />
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>

                </div>
                <div>
                    <FaBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ?
                        <>{details.slice(0, 250) + "..."} <Link to={`/news/${news._id}`}>Read More</Link></>
                        :
                        <>{details}</>
                    }
                </Card.Text>
                <Link to={`/news/${_id}`} ><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div> <FaStar className="text-warning" /> {rating?.number} </div>
                <div> <FaEye /> {total_view}</div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;