import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const Card = styled.li`
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 18px;
    width: 100%;
    max-width: 200px;
    margin: 0.5em;
    border-radius: 10px;
    display: inline-block;
    text-decoration: none;
    color: black;
    &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
  }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

    export const Img = styled.img`
    padding: 0px;
    margin: 0px;
    height: 260px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

    export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin: 0px;
    text-decoration: none;
`;

export const Text = styled.p`
    font-size: 10px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
`;

export const Header = styled.h1`
    color: orangered;
    margin: 1rem 0px;
    display: block;
`;



