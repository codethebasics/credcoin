import { BalanceCardStyle } from './style';

export default function BalanceCard({ children, background, color }) {
    return (
        <BalanceCardStyle background={background} color={color}>
            {children}
        </BalanceCardStyle>
    );
}
