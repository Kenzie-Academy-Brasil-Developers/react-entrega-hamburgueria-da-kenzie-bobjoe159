import styled from "styled-components";

export const CardDiv = styled.div`
    padding-inline: 16px;
    margin-top: 20px;

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

    .cardContent {
        display: flex;
        justify-content: space-between;
        align-itens: center;
        padding: 20px 10px;
        margin-top: 10px;
        border-bottom: 2px solid #E0E0E0;
    }

    .cardContent > div {
        margin-top: 15px;
        margin-right: 80px;
        text-align: left;
    }

    .cardContent > div p {
        color: #828282;
        font-size: 12px;
        margin-top: 5px;
    }

    .cardContent > button {
        background: transparent;
        height: 100%;
        border: none;
        color: #BDBDBD;
        margin-top: 20px;
    }

    .totalValue {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .totalValue p {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #333333;
    }

    .totalValue span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #828282;
    }

    .removeAllButton {
        margin-inline: 16px;
        padding: 20.5px 113px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: #828282;
        margin-top: 20px;
    }
`