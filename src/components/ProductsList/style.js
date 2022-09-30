import styled from "styled-components";

export const ProductsList = styled.div`
    display: flex;
    min-height: 340px;
    margin-top: 29px;
    gap: 20px;
    overflow-x: auto;

    @media (min-width: 768px) {
        overflow-y: auto;
        max-height: 500px;
        flex-wrap: wrap;
    }
`