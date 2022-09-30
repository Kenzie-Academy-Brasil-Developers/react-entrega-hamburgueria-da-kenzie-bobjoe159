import styled from "styled-components";

export const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    min-width: 250px;

    div {
        padding: 26px 21px;
    }

    figure {
        margin: auto;
    }

    div > h2 {
        color: #333333;
        font-size: 18px;
        margin-top: 10px;
    }

    div > p {
        font-size: 12px;
        line-height: 16px;
        color: #828282;
        margin-top: 14px;
    }

    div > span {
        display: block;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #27AE60;
        margin-top: 14px;
    }

    div > button {
        display: block;
        color: #FFFFFF;
        background-color: #27AE60;
        padding: 11.5px 20px;
        border: none;
        border-radius: 8px;
        margin-top: 14px;
        cursor: pointer;
    }
`