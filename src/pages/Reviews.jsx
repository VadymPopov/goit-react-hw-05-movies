import { getMovieReview } from "services/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Item, Text, Title } from "./Reviews.styled";

const Reviews = ()=>{
    const [reviews, setReviews]=useState(null);
    const location = useLocation();
    const movieId = location.state.id;

    useEffect(()=>{
        if(!movieId){
            return
        };

        const fetchReviews = async()=>{
            try {
                const response = await getMovieReview(movieId);
                setReviews(response.results)
            } catch (error) {
                console.log(error)
            }
        };

        fetchReviews();
    },[movieId]);

    return(
        <ul>
            {reviews && reviews.length > 0 ? (reviews.map(({author,content})=><Item key={author}>
                <Title>Author: {author}</Title>
                <Text>{content}</Text>
            </Item>)):(<p>We don't have any reviews for this movie.</p>)}
        </ul>
    );
}

export default Reviews;