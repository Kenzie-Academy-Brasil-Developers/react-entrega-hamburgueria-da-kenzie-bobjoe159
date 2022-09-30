import styled from 'styled-components';

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-inline: 10px;
    max-width: 1200px;
    margin: 0 auto;

    img {
        margin: auto;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #FFFFFF;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        padding: 10px 15px;
        margin-top: 15px;
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


    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;

        img {
            margin: 0;
            margin-top: 20px;
            height: 100%;
        }

        div {
            margin-top: 0px;
            width: 370px;
        }

    }
`