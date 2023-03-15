import style from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useSelector } from 'react-redux';



export const Navigation = () => {

    const {category} = useSelector(state => {state.category}) 
    console.log('category: ', category); 
    
    return (
        
        <nav className={style.navigation}>
            <Container className={style.container}>
                <div className=""></div>
                <ul className={style.list}>
                    <li className={style.item}> 
                        <button
                            className={classNames(style.button, style.button_burger, style.button_active)}>Burgers</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_snack)}>Snacks</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_hot_dog)}>Hot-dogs</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_combo)}>Combo</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_shawarma)}>Falafels</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_pizza)}>Pizza</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_wok)}>Wok</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_dessert)}>Desserts</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button, style.button_sauce)}>Sauce</button>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}