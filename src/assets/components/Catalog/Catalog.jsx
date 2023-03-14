import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import {Container} from "../Container/Container"
import {Order} from "../Order/Order"
import style from './Catalog.module.css';

const goodList = [
    {title: 'Tofu Bomb'},
    {title: 'Super Cheese'},
    {title: 'Satisfying'},
    {title: 'Italian'},
    {title: 'Classic'},
    {title: 'Рeavy Рit'},
];

export const Catalog = () => {


    return (
        <section className={style.catalog}>
            <Container>
                <div className={style.container}>
                    <Order />

                    <div className={style.wrapper}>
                        <h2 className={style.title}>Бургеры</h2>

                        <div className={style.wrap_list}>
                            <ul className={style.list}>
                                {goodList.map(item => (
                                    <li className={style.item}>
                                        <CatalogProduct title={item.title} />
                                    </li>
                                ))}

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}