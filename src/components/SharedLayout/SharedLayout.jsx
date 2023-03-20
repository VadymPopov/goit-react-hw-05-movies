import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { GlobalStyle } from "components/GlobalStyles";
import Loader from "components/Loader/Loader";


export const Layout = () => {
    return (
      <Container>
        <GlobalStyle/>
        <Header>
          <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>
     )
};

