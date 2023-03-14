import style from './Count.module.css';

export const Count = (props) => (
    <div className={style.count}>
            <button className={style.count__minus}>-</button>
            <p className={style.count__amount}>{props.count}</p>
            <button className={style.count__plus}>+</button>
    </div>
)