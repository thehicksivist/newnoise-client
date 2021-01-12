import styled from 'styled-components';

export const StyledMenu = styled.ul`
    display: flex;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.85;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(-100%)'};

        a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: black;
            text-decoration: none;

            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        }
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 50%;
    }

    @media (min-width: 901px) {
        flex-direction: row;
        justify-content: space-around;
        align-self: center;
        padding: 10px 10px;
        transition: transform 0.5s;

        a {
            font-size: 1.5em;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: black;
            text-decoration: none;

            &:active {
                transform: scale(1.5);
                transition: transform 0.2s ease-out;
            }
        }
    }
`;
