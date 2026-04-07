import React, { useState } from 'react';
import { Star, Heart, Minus, Plus, X } from 'lucide-react';
import './quick-view.css';

const QuickViewModal = ({ product, onClose, addToCart, addToWishlist }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('1KG');
  const [selectedMaterial, setSelectedMaterial] = useState('CANADA');

  if (!product) return null;

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill={i < count ? "#f5ab1e" : "none"} stroke={i < count ? "#f5ab1e" : "#ccc"} />
    ))
  );

  const thumbnails = [
    { id: 1, url: product.img },
    { id: 2, url: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117628_960_720.jpg' },
    { id: 3, url: 'https://cdn.pixabay.com/photo/2015/09/24/19/33/berries-956020_960_720.jpg' },
    { id: 4, url: 'https://cdn.pixabay.com/photo/2016/07/22/10/39/coconut-1534574_960_720.jpg' }
  ];

  const handleOverlayClick = (e) => {
    if (e.target.className === 'qv-overlay') {
      onClose();
    }
  };

  return (
    <div className="qv-overlay" onClick={handleOverlayClick}>
      <div className="qv-modal">
        <button className="qv-close" onClick={onClose}><X size={20} color="white" /></button>
        
        <div className="qv-content">
          {/* Left: Images */}
          <div className="qv-gallery">
            <div className="qv-main-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="qv-thumbnails">
              {thumbnails.map(thumb => (
                <div className={`qv-thumb ${thumb.url === product.img ? 'active' : ''}`} key={thumb.id}>
                  <img src={thumb.url} alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="qv-info pd-info">
            <h2 className="pd-title" style={{ fontSize: '22px' }}>{product.name}</h2>
            
            <div className="pd-rating-avail">
              <div className="pd-stars">
                {renderStars(product.stars || 0)}
                <span className="pd-review-count">{product.reviews || 0} reviews</span>
              </div>
              <div className="pd-availability">
                <strong>Availability:</strong> 
                <span className="avail-status">
                  <span className="avail-dot"></span> {product.availability || 11} in stock
                </span>
              </div>
            </div>

            <div className="pd-price-row">
              <span className="pd-current-price">€{product.currentPrice}</span>
              {product.oldPrice && <span className="pd-old-price">€{product.oldPrice}</span>}
              {product.discount && <span className="pd-discount-badge">{product.discount.includes('%') ? product.discount : `-${product.discount}`}</span>}
            </div>

            <p className="pd-short-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="pd-variants">
              <div className="pd-variant-group">
                <span className="pd-variant-label">Size: <span className="pd-variant-val">{selectedSize}</span></span>
                <div className="pd-variant-options">
                  <button className={`pd-var-btn ${selectedSize === '1KG' ? 'active' : ''}`} onClick={() => setSelectedSize('1KG')}>1KG</button>
                  <button className={`pd-var-btn ${selectedSize === '2KG' ? 'active' : ''}`} onClick={() => setSelectedSize('2KG')}>2KG</button>
                  <button className={`pd-var-btn ${selectedSize === '5KG' ? 'active' : ''}`} onClick={() => setSelectedSize('5KG')}>5KG</button>
                </div>
              </div>

              <div className="pd-variant-group">
                <span className="pd-variant-label">Material: <span className="pd-variant-val">{selectedMaterial}</span></span>
                <div className="pd-variant-options">
                  <button className={`pd-var-btn ${selectedMaterial === 'CANADA' ? 'active' : ''}`} onClick={() => setSelectedMaterial('CANADA')}>CANADA</button>
                  <button className={`pd-var-btn ${selectedMaterial === 'INDIA' ? 'active' : ''}`} onClick={() => setSelectedMaterial('INDIA')}>INDIA</button>
                  <button className={`pd-var-btn ${selectedMaterial === 'GERMANY' ? 'active' : ''}`} onClick={() => setSelectedMaterial('GERMANY')}>GERMANY</button>
                </div>
              </div>
            </div>

            <div className="pd-actions">
              <div className="pd-quantity">
                <span className="pd-variant-label" style={{marginRight: '15px'}}>Quantity:</span>
                <div className="pd-qty-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
                </div>
              </div>

              <div className="pd-btn-group">
                <button className="pd-btn-add" onClick={() => addToCart && addToCart(product, quantity, selectedSize)}>Add to cart</button>
                <button className="pd-btn-buy">Buy it now</button>
              </div>

              <button className="pd-btn-wishlist" onClick={() => addToWishlist && addToWishlist(product)}>
                <Heart size={16} /> Wishlist
              </button>
            </div>

            <div className="pd-meta" style={{ marginTop: '10px' }}>
              <div className="pd-meta-item">
                <strong>SKU:</strong> {product.sku || '123456'}
              </div>
              <div className="pd-meta-item pd-share">
                <strong>Share:</strong> 
                <div className="pd-share-icons">
                  <a href="#">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                  </a>
                  <a href="#">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
