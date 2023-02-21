import style from './Header.module.css';
import logo from '../../img/logo.svg';
import classNames from 'classnames';
import { Container } from '../Container/Container';

export const Header = () => {
    return (
        <header className={style.header}>
            <Container className={style.header__container}>
                <img className={style.header__logo} src={logo} alt="Logo YourMeal" />
    
            <div className={style.header__wrapper}>
            <h1 className={style.header__title}>
              <span>Only the juiciest</span>
              <span className={style.header__red}>veggie burgers!</span>
            </h1>
    
            <p className={style.header__appeal}>Free shipping from 25€</p>
            </div>
        </Container>
      </header>
    )
}