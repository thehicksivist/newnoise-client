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
    }

    @media (min-width: 901px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-self: center;
        padding: 10px 10px;
        transform: none;
    }
    )

    NavLink {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;
