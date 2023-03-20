import { useRef, useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { Suspense } from "react";
import { Card, Image, InfoContainer, Score, Title, Wrapper, SubTitle, Overview, Genres, Genre, ButtonsList, Item } from "./MovieDetails.styled";
import { Button } from "../Movies/Movies.styled"; 
import NoPoster from 'images/no-image-main.png';
import {imgUrl} from '../Home/Home';
import Loader from "components/Loader/Loader";

const MovieDetails = ()=>{
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/");
    const {movieId} = useParams();
    const [details, setDetails] = useState(null)

    useEffect(()=>{
        const fetchDetails = async()=>{
            try {
                const response =  await getMovieDetails(movieId);
                setDetails(response);
            } catch (error) {
              console.log({error})
            }
        };
      
        fetchDetails();
    }, [movieId]);

    return <>
    {!details ? (<p style={{
        fontSize: 24,
        fontWeight: 700
    }}>Movie isn't found</p>) : (
        <Wrapper backdrop={details.backdrop_path}>
            <Link to={backLinkLocationRef.current}><Button>&#8249; Go back</Button></Link>
            <Card>
                <Image src={details.poster_path ? (imgUrl+details.poster_path) : NoPoster} alt={details.title} />
                <InfoContainer>
                    <Title>{details.title} ({(details.release_date).slice(0,4)})</Title>
                    <Score>User Score: {`${details.vote_average*10}`.slice(0,2)}%</Score>
                    <SubTitle>Overview</SubTitle>
                    <Overview>{details.overview}</Overview>
                    <SubTitle>Genres</SubTitle>
                    <Genres>
                    {details.genres.map(({id,name})=><Genre key={id}>{name}</Genre>)}
                    </Genres>
                </InfoContainer>
            </Card>

            <ButtonsList>
                <Item>
                    <Link to="cast" state={{id:movieId}}><Button>Cast</Button></Link>
                </Item>
                <Item>
                    <Link to="reviews" state={{id:movieId}}><Button>Reviews</Button></Link>
                </Item>
            </ButtonsList>
            
        <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Wrapper>
    ) }
    </>
};


export default MovieDetails;