import { useEffect, useState } from "react";
import { getMovieCredits } from "services/api";
import { useLocation } from "react-router-dom";
import { Image, Item, List, Text } from "./Cast.styled";
import NoImg from 'images/no-image-actor.jpg';
import {imgUrl} from '../Home/Home';

const Cast = ()=>{
    const [cast,setCast]=useState(null);
    const location = useLocation();
    const movieId = location.state.id;

    useEffect(()=>{
        const fetchCredits = async()=>{
            try {
                const response = await getMovieCredits(movieId);
                setCast(response.cast)
            } catch (error) {
                console.log({error})
            }
        };
        fetchCredits()
    },[movieId])

    return(
        <List>
        {cast && cast.map(({original_name:name, id, profile_path: image})=>
        <Item key={id}>
            <Image src={image ? (imgUrl+image): NoImg} alt={name} />
            <Text>{name}</Text>
        </Item>
        )}
        </List>
    )
}

export default Cast;