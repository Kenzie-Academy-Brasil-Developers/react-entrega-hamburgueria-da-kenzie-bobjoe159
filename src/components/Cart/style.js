import styled from "styled-components";

export const CardDiv = styled.div`
    padding-inline: 16px;
    margin-top: 20px;

    ul {
        max-height: 300px;
        overflow-x: auto;
    }

    h2 {
        background: #27AE60;
        border-radius: 5px 5px 0px 0px;
        width: 100%;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 16px;
        padding: 15px 100px 15px 20px;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;
        text-align: center;
        max-width: 380px;
        overflow-y: auto;
    }

    section > h3 {
        margin-top: 56px;
    }

    section > p {
        margin-top: 30px;
        color: #828282;
        font-size: 14px;
    }

    section img {
        width: 70px;
        height: 70px;
    }
`