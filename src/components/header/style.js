import styled from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 10px;
    border: 0px;
    border-radius: 4px 0px 0px 4px;
    width: 70%;
    &::placeholder{
        color: #C0C0C0;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: 0px;
    width: 30%;
    background-color: #0079FC;
    border-radius: 0px 4px 4px 0px;
    color: #fff;
`;