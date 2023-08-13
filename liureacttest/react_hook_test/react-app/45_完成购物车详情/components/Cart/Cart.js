import React from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails';

const Cart = () => {

    const ctx = React.useContext(CartContext);

    // 添加一个状态，用于控制购物车详情的显示与隐藏
    const [showCartDetails, setShowCartDetails] = React.useState(false);

    // 点击购物车图标，显示购物车详情
    const toggleDetailsHandler = () => {
        //如果购物车中没有商品，就不显示购物车详情
        if (ctx.totalAmount === 0) return;
        // 显示与不显示进行切换
        setShowCartDetails(preState => !preState);
    };

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>

            {/* 引入购物车详情 */}
            {showCartDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg} alt="购物车" />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
