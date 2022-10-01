import styled from "styled-components";

export const CartLi = styled.li`

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

    .cardContent > button:hover {
        cursor: pointer;
    }
    
`