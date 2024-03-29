import {OrderGoods} from '../OrderGoods/OrderGoogs';
import style from './Order.module.css';


const orderList = ['Cheese', 'Fries', 'Vege Hot-dog'];


export const Order = () => {
 
    return (
        <div className={style.order}>
            <section className={style.wrapper}>
                <div className={style.header} tabIndex="0" role="button">
                    <h2 className={style.title}>Cart</h2>

                    <span className={style.count}>4</span>
                </div>

                <div className={style.wrap_list}>
                    <ul className={style.list}>
                        {orderList.map( (item, i) => <OrderGoods key={i} item={item} />)}
                    </ul>

                    <div className={style.total}>
                        <p>Итого</p>
                        <p>
                            <span className={style.amount}>1279</span>
                            <span className="currency">₽</span>
                        </p>
                    </div>

                    <button className={style.submit}>Checkout</button>

                    <div className={style.apeal}>
                        <p className={style.text}>Free delivery</p>
                        <button className={style.close}>Свернуть</button>
                    </div>
                </div>
            </section>
        </div>
    )
}