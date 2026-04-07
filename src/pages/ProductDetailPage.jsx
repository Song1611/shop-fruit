import React, { useState } from 'react';
import { Star, Heart, Truck, DollarSign, Award, Minus, Plus, ShoppingBag, Eye, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import './product-detail.css';

const ProductDetailPage = ({ product, navigateToCategory, addToCart, addToWishlist }) => {
  const [activeTab, setActiveTab] = useState('DESCRIPTION');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('2KG');
  const [selectedMaterial, setSelectedMaterial] = useState('INDIA');
  const [selectedForm, setSelectedForm] = useState('FRESH');

  // fallback if no product is passed
  const p = product || {
    name: 'Fresh apple (5kg)',
    currentPrice: '14,00',
    oldPrice: '20,00',
    discount: '30%',
    img: 'https://cdn.pixabay.com/photo/2018/12/28/19/04/red-apple-3899388_960_720.jpg',
    stars: 5,
    reviews: 1,
    availability: 17,
    sku: '123456'
  };

  const thumbnails = [
    { id: 1, url: 'https://cdn.pixabay.com/photo/2018/12/28/19/04/red-apple-3899388_960_720.jpg' },
    { id: 2, url: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/papaya-1659751_960_720.jpg' },
    { id: 3, url: 'https://cdn.pixabay.com/photo/2020/05/26/18/45/melon-5224345_960_720.jpg' },
    { id: 4, url: 'https://cdn.pixabay.com/photo/2016/07/22/09/59/guava-1534487_960_720.jpg' }
  ];

  const relatedProducts = [
    { name: 'Fresh litchi 100% organic', currentPrice: '8,00', oldPrice: '15,00', discount: '47%', img: 'https://cdn.pixabay.com/photo/2018/06/12/15/06/lychee-3470760_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Fresh dried almod (50g)', currentPrice: '31,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2017/05/23/22/33/almonds-2338833_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Fresh green orange', currentPrice: '8,00', oldPrice: '15,00', discount: '47%', img: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_960_720.jpg', stars: 5, reviews: 1 },
    { name: 'Sp. red fresh guava', currentPrice: '30,00', oldPrice: '44,00', discount: '32%', img: 'https://cdn.pixabay.com/photo/2016/07/22/09/59/guava-1534487_960_720.jpg', stars: 5, reviews: 2 }
  ];

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill={i < count ? "#f5ab1e" : "none"} stroke={i < count ? "#f5ab1e" : "#ccc"} />
    ))
  );

  return (
    <div className="product-detail-page">
      <div className="container">
        
        {/* Main 3 Column Layout */}
        <div className="pd-main-layout">
          
          {/* Column 1: Image Gallery */}
          <div className="pd-image-gallery">
            <div className="pd-main-image">
               <img src={p.img} alt={p.name} />
            </div>
            <div className="pd-thumbnails">
               {thumbnails.map(thumb => (
                 <div className={`pd-thumb ${thumb.url === p.img ? 'active' : ''}`} key={thumb.id}>
                   <img src={thumb.url} alt="thumbnail" />
                 </div>
               ))}
            </div>
          </div>

          {/* Column 2: Product Info */}
          <div className="pd-info">
            <h1 className="pd-title">{p.name}</h1>
            
            <div className="pd-rating-avail">
              <div className="pd-stars">
                {renderStars(p.stars)}
                <span className="pd-review-count">{p.reviews} review{p.reviews !== 1 ? 's' : ''}</span>
              </div>
              <div className="pd-availability">
                <strong>Availability:</strong> 
                <span className="avail-status">
                  <span className="avail-dot"></span> {p.availability || 17} in stock
                </span>
              </div>
            </div>

            <div className="pd-price-row">
              <span className="pd-current-price">€{p.currentPrice}</span>
              {p.oldPrice && <span className="pd-old-price">€{p.oldPrice}</span>}
              {p.discount && <span className="pd-discount-badge">{p.discount.includes('%') ? p.discount : `-${p.discount}`}</span>}
            </div>

            <p className="pd-short-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="pd-countdown">
              <span className="pd-countdown-label">Hurry up! Sale ends in:</span>
              <span className="pd-countdown-timer">8758 : 14 : 43 : 43</span>
            </div>

            <div className="pd-variants">
              <div className="pd-variant-group">
                <span className="pd-variant-label">Size: <span className="pd-variant-val">{selectedSize}</span></span>
                <div className="pd-variant-options">
                  <button className={`pd-var-btn ${selectedSize === '2KG' ? 'active' : ''}`} onClick={() => setSelectedSize('2KG')}>2KG</button>
                  <button className={`pd-var-btn ${selectedSize === '3KG' ? 'active' : ''}`} onClick={() => setSelectedSize('3KG')}>3KG</button>
                </div>
              </div>

              <div className="pd-variant-group">
                <span className="pd-variant-label">Material: <span className="pd-variant-val">{selectedMaterial}</span></span>
                <div className="pd-variant-options">
                  <button className={`pd-var-btn ${selectedMaterial === 'INDIA' ? 'active' : ''}`} onClick={() => setSelectedMaterial('INDIA')}>INDIA</button>
                  <button className={`pd-var-btn ${selectedMaterial === 'CANADA' ? 'active' : ''}`} onClick={() => setSelectedMaterial('CANADA')}>CANADA</button>
                </div>
              </div>

              <div className="pd-variant-group">
                <span className="pd-variant-label">Food product form: <span className="pd-variant-val">{selectedForm}</span></span>
                <div className="pd-variant-options">
                  <button className={`pd-var-btn ${selectedForm === 'FRESH' ? 'active' : ''}`} onClick={() => setSelectedForm('FRESH')}>FRESH</button>
                  <button className={`pd-var-btn ${selectedForm === 'FROZEN' ? 'active' : ''}`} onClick={() => setSelectedForm('FROZEN')}>FROZEN</button>
                  <button className={`pd-var-btn ${selectedForm === 'GROUND' ? 'active' : ''}`} onClick={() => setSelectedForm('GROUND')}>GROUND</button>
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
                <button className="pd-btn-add" onClick={() => addToCart && addToCart(p, quantity, selectedSize)}>Add to cart</button>
                <button className="pd-btn-buy">Buy it now</button>
              </div>

              <button className="pd-btn-wishlist" onClick={() => addToWishlist && addToWishlist(p)}>
                <Heart size={16} /> Wishlist
              </button>
            </div>

            <div className="pd-meta">
              <div className="pd-meta-item">
                <strong>SKU:</strong> {p.sku || '123456'}
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
              <div className="pd-meta-item pd-payments">
                 <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" />
                 <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="Paypal" />
                 <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" />
                 <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="Amex" />
                 <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="Maestro" />
              </div>
            </div>

          </div>

          {/* Column 3: Service Cards */}
          <div className="pd-services">
            <div className="pd-service-card">
              <div className="pd-service-icon"><Truck size={28} /></div>
              <h4>DELIVERY INFO</h4>
              <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
            </div>
            <div className="pd-service-card">
              <div className="pd-service-icon" style={{color: 'var(--primary-green)'}}><DollarSign size={28} /></div>
              <h4>30 DAYS RETURNS</h4>
              <p>Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee.</p>
            </div>
            <div className="pd-service-card">
              <div className="pd-service-icon"><Award size={28} /></div>
              <h4>10 YEAR WARRANTY</h4>
              <p>Quality comes first and our products are designed to last.</p>
            </div>
          </div>

        </div>

        {/* Tabs Section */}
        <div className="pd-tabs-section">
          <div className="pd-tabs-header">
            {['DESCRIPTION', 'ADDITIONAL INFORMATION', 'REVIEWS'].map(tab => (
              <button 
                key={tab} 
                className={`pd-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="pd-tabs-content">
            {activeTab === 'DESCRIPTION' && (
              <div className="pd-desc-content">
                <h3 className="pd-desc-title">More Detail</h3>
                <ul className="pd-desc-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum is simply dummy text.</li>
                  <li>type here your detail one by one li more add</li>
                  <li>has been the industry's standard dummy text ever since. Lorem Ips</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                </ul>

                <h3 className="pd-desc-title mt-4">Key Specification</h3>
                <ul className="pd-desc-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum is simply dummy text.</li>
                  <li>type here your detail one by one li more add</li>
                  <li>has been the industry's standard dummy text ever since. Lorem Ips</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                </ul>
              </div>
            )}
            {activeTab === 'ADDITIONAL INFORMATION' && (
              <div className="pd-desc-content">
                <p>Additional information goes here.</p>
              </div>
            )}
            {activeTab === 'REVIEWS' && (
              <div className="pd-desc-content">
                <p>Customer reviews go here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="pd-related-section">
          <h2 className="pd-related-title">Related product</h2>
          <div className="product-grid pd-related-grid">
            {relatedProducts.map((rp, idx) => (
              <div className="product-card" key={idx}>
                <div className="product-image-container">
                  {rp.discount && <span className="discount-badge">{rp.discount.includes('%') ? `-${rp.discount}` : rp.discount}</span>}
                  <img src={rp.img} alt={rp.name} />
                  <div className="product-actions">
                    <button className="action-btn" onClick={() => addToWishlist && addToWishlist(rp)}><Heart size={18} /></button>
                    <button className="action-btn"><ShoppingBag size={18} /></button>
                    <button className="action-btn"><Eye size={18} /></button>
                  </div>
                </div>
                <div className="product-info">
                  <a href="#" className="product-title">{rp.name}</a>
                  <div className="price-container">
                    <span className="price-current">€{rp.currentPrice}</span>
                    {rp.oldPrice && <span className="price-old">€{rp.oldPrice}</span>}
                  </div>
                  <div className="rating">
                    {renderStars(rp.stars)}
                    <span style={{ color: '#999', marginLeft: '5px', fontSize: '12px' }}>
                      {rp.reviews === 0 ? 'No reviews' : `${rp.reviews} review${rp.reviews > 1 ? 's' : ''}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
