import styled from 'styled-components';

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
    background: #F5F5F5;
    margin-top: 16px;
    padding-inline: 16px;

    img {
        margin: auto;
    }

    div {
        display: flex;
        justify-content: space-between;
        background-color: #FFFFFF;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        padding: 10px 15px; 
        margin-top: 14px;
    }

    div > input {
        background-color: transparent;
        outline: none;
        border: none;
    }

    div > button {
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        padding: 11.5px 20px;
        color: #FFFFFF;
    }

`