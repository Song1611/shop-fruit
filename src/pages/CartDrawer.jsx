import React from 'react';
import { X, Trash2 } from 'lucide-react';
import './cart-drawer.css';

const CartDrawer = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // parse price from string like "20,00" to float 20.00
      const price = parseFloat(item.currentPrice.replace(',', '.'));
      return total + (price * item.quantity);
    }, 0).toFixed(2).replace('.', ',');
  };

  return (
    <>
      {/* Backdrop */}
      <div className={`cart-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      
      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>GIỎ HÀNG CỦA BẠN</h3>
          <button className="close-cart-btn" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
              <button className="btn-primary" onClick={onClose} style={{marginTop: '15px'}}>TIẾP TỤC MUA SẮM</button>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.cartId}>
                  <img src={item.img} alt={item.name} className="cart-img" />
                  <div className="cart-item-info">
                    <a href="#" className="cart-item-title">{item.name}</a>
                    {item.size && <span className="cart-item-variant">Size: {item.size}</span>}
                    <div className="cart-item-price-row">
                      <span className="cart-item-qty">{item.quantity} x </span>
                      <span className="cart-item-price">€{item.currentPrice}</span>
                    </div>
                  </div>
                  <button className="cart-remove-btn" onClick={() => removeFromCart(item.cartId)}>
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>TỔNG TIỀN:</span>
              <span className="subtotal-price">€{calculateTotal()}</span>
            </div>
            <div className="cart-actions">
              <button className="btn-view-cart">XEM GIỎ HÀNG</button>
              <button className="btn-checkout">THANH TOÁN</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
