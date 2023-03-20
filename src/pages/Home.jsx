import { useEffect, useState, useCallback } from "react";
import { fetchTrendingMovies } from "services/api";
import { Container, Card, Img, TextContainer, Link, Text, List, Header } from "./Home.styled";
import { Buttons } from "components/Buttons/Buttons";
import NoPoster from 'images/no-image-main.png';

export const imgUrl = 'https://image.tmdb.org/t/p/w500';

const Home = ()=>{
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);

  const handlePageChange = useCallback(
    page => {
      setPage(page);
    },
    [setPage]
  );

    useEffect(()=>{
        const fetchTrending = async()=>{
            try {
                const {results} =  await fetchTrendingMovies(page);
                setTrending(results);
            } catch (error) {
              console.log({error})
            }
        };
      
        fetchTrending();
    }, [page])

    return (
         <main>
           <Header>Trending Today</Header>
           <Container>
            <List>
            {trending.map(({title, id, poster_path })=><Card key={id}>
             <Link to={`movies/${id}`}>
               <Img src={poster_path ? (imgUrl+poster_path) : (NoPoster)} alt={title} />
               <TextContainer><Text>{title}</Text></TextContainer>
               </Link>
            </Card>)}
            </List>
            <Buttons
               page={page}
               totalPages={trending.total_pages}
               handlePageChange={handlePageChange}
             />
           </Container>
         </main>
    );
};


export default Home;