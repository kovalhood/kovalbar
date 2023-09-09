import s from './Header.module.scss';
import Container from 'components/Container/Container';

export const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <p>KovalBar</p>
            </Container>
        </header>
        
    );
};