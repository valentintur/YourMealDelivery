import style from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
              <div className={style.container}>
                  <img className={style.logo} src={logo} alt="Logo YourMeal" />
                  <div className={style.wrapper}>
                    <h1 className={style.title}>
                      <span>Only the juiciest</span>
                      <span className={style.red}>veggie burgers!</span>
                    </h1>
                    <p className={style.appeal}>Free shipping from 25€</p>
                  </div>
            </div>
        </Container>
      </header>
    )
}