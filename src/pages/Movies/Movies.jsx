import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";
import { Container, Card, Img, TextContainer, Link, Text } from "../Home/Home.styled";
import { Wrapper,Input,Button, Header } from "./Movies.styled";
import NoPoster from 'images/no-image-main.png';
import {imgUrl} from '../Home/Home';

const Movies = ()=>{
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    useEffect(()=>{
        if(query===""){
            return
        };
        
        const fetchMovies = async()=>{
            try {
                const movies =  await searchMovies(query);
                setMovies(movies.results);
            } catch (error) {
              console.log({error})
            }
        };
        fetchMovies();
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.input.value });
        form.reset();
    };

    return <main>
            <Wrapper onSubmit={handleSubmit}>
                <Header>Let's search movies</Header>
                <Input type="text" name="input"/>
                <Button type="submit" name='button'>Search</Button>
            </Wrapper>

            <Container>
                {movies && movies.map(movie=><Card key={movie.id}>
                <Link to={`${movie.id}`} state={{from:location}}>
                <Img src={movie.poster_path ? (imgUrl+movie.poster_path) : NoPoster} alt={movie.original_title} />
                  <TextContainer><Text>{movie.original_title}</Text></TextContainer>
                    </Link>
                </Card>)}
            </Container>
        </main>
};

export default Movies;