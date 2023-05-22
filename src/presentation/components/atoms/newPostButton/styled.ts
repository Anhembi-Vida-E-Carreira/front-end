import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    position: fixed;
    right: 5rem;
    bottom: 10rem;
    z-index: 3;
    width: 7rem;
    height: 7rem;
    background-color: transparent;
    cursor: pointer;
    background-image: url('/addPostButton.svg');
    background-position: center;
    background-size: cover;
    border: none;
`