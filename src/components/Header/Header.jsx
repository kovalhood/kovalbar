import s from './Header.module.scss';
import Container from 'components/Container/Container';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

export const Header = () => {
    return (
        <header className={s.header}>
            <Container>
              <div className={s.logoWrapper}>
                <div className={s.logoIconWrapper}>
                  <LogoIcon/>
                </div>
                <p className={s.logoText}>al<span className={s.logoAccent}>Bar</span></p>
              </div>
            </Container>
        </header>

    );
};
