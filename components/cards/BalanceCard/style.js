import styled from 'styled-components';

export const BalanceCardComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.div`
    padding: 0 15px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    text-transform: uppercase;
    padding: 0 15px;
    align-self: flex-end;
    font-family: gothamLight, Verdana, Geneva, Tahoma, sans-serif;
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
`;

export const Value = styled.div`
    font-size: 1.7rem;
    padding: 0 15px;
`;

export const Symbol = styled.div`
    font-size: 0.9rem;
`;
