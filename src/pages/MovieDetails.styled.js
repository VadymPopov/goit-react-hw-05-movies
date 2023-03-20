import styled from "styled-components";
import propTypes from 'prop-types';

export const Wrapper = styled.div`
 max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    

    background-image: ${props=> props.backdrop ? (`url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`) : ("none")};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  };
  `;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;

export const Image = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  align-self: flex-start;
  height: 450px;
  max-width: 300px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 0px 20px 10px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
export const Score = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 15px;
  display: flex;
`;

export const SubTitle = styled.h3`
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Overview = styled.span`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
`
export const Genre = styled.li`
  font-size: 1rem;
  font-weight: 400;
  margin-right: 5px;
  &:last-child{
    margin: 0;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 10px 0;
`;
export const Item = styled.li`
  margin: 15px 20px 15px 0;
`;

Wrapper.propTypes = {
    backdrop: propTypes.string,
  };