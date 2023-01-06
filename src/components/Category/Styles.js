import styled from "styled-components";

export const AnchorCategory = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    align-items: center;


    & > img {
        border-radius: 50%;
        border: 2px solid #ddd;
        box-shadow: 0 10px 14px rgba(0,0,0,0.2);
        object-fit: cover;
        height: 75px;
        width: 75px;
        margin-bottom: 12px;
    }
`
