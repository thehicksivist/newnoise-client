import styled from 'styled-components';

export const StyledBurger = styled.button`
    position: absolute;
    top: 1rem;
    left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0 0 0 10px;
    z-index: 10;

    @media (min-width: 901px) {
        display: none;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: black;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;
