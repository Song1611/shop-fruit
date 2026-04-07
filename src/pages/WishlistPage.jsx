import React from 'react';
import { Star, ShoppingBag, Eye, X } from 'lucide-react';
import './wishlist.css';

const WishlistPage = ({ wishlistItems, removeFromWishlist, addToCart, openQuickView }) => {
  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} size={12} fill={i < count ? "#f5ab1e" : "none"} stroke={i < count ? "#f5ab1e" : "#ccc"} />
    ))
  );

  return (
    <div className="wishlist-page">
      <div className="container">
        <h2 className="wishlist-title">Wishlist product</h2>
        
        {wishlistItems && wishlistItems.length > 0 ? (
          <div className="wishlist-grid">
            {wishlistItems.map((item, idx) => (
              <div className="wishlist-card" key={idx}>
                <div className="wishlist-img-wrapper">
                  <img src={item.img} alt={item.name} />
                  <div className="product-actions" style={{ marginBottom: '10px' }}>
                    <button className="action-btn" onClick={() => removeFromWishlist && removeFromWishlist(item)}><X size={18} /></button>
                    <button className="action-btn" onClick={() => addToCart && addToCart(item)}><ShoppingBag size={18} /></button>
                    <button className="action-btn" onClick={(e) => openQuickView && openQuickView(e, item)}><Eye size={18} /></button>
                  </div>
                </div>
                <div className="wishlist-info">
                  <h3 className="wishlist-product-name">{item.name}</h3>
                  <div className="wishlist-price">
                    €{item.currentPrice}
                  </div>
                  <div className="wishlist-rating">
                    {renderStars(item.stars !== undefined ? item.stars : 5)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-wishlist">
            <p>Your wishlist is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
