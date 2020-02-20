import styled from "styled-components";

export const TransparentBtn = styled.button`
    height: 30px;
    width: 30px;
    color: #fff;
    background-color: rgba(255,255,255,0.1);
    border: none;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    margin-left: 5px;
    cursor: pointer;
    font-size: 15px;
    &:hover {
        background-color: rgba(255,255,255,0.2)
    }
`;

