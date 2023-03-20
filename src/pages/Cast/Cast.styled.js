import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  
`;

export const Item = styled.li`
    display: flex;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const Image = styled.img`
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
    align-self: flex-start;
    height: 120px;
    width: 90px;
    margin-bottom: 3px;
`;

export const Text = styled.p`
    font-size: 10px;

`;