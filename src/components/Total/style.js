import styled from "styled-components";

export const TotalDiv = styled.div`
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
        padding: 20.5px 123px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: #828282;
        margin-top: 20px;
        cursor: pointer;
    }
`