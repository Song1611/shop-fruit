import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Headphones, Star, Eye, Truck, RefreshCw, ShieldCheck, Mail, ChevronDown, AlignJustify, Quote, ChevronLeft, ChevronRight, BarChart2, ChevronsUp, ChevronsLeft, ChevronsRight, Calendar, MessageSquare, ArrowRight, MapPin, Phone, Send } from 'lucide-react';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('SẢN PHẨM NỔI BẬT');

  const miniProducts = [
    { name: 'Đu đủ hữu cơ 100%', price: '20,00', stars: 0, img: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/papaya-1659751_960_720.jpg' },
    { name: 'Nước cam tự nhiên', price: '55,00', stars: 0, img: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-juice-1995079_960_720.jpg' }
  ];

  const trendingMini = [
    { name: 'Cà chua hữu cơ', price: '55,00', stars: 0, img: 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg' },
    { name: 'Chuối vàng 100%', price: '22,00', oldPrice: '44,00', stars: 0, img: 'https://cdn.pixabay.com/photo/2014/12/21/23/58/bananas-576443_960_720.png' },
    { name: 'Cam non tươi', price: '8,00', oldPrice: '15,00', stars: 5, img: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_960_720.jpg' }
  ];

  const news = [
    { title: 'Gia vị hỗn hợp hữu cơ tươi & mềm', date: '13 Th05, 2023', comments: 0, img: 'https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...' },
    { title: 'Thương hiệu trái cây hữu cơ & cắm trại', date: '13 Th05, 2023', comments: 0, img: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...' },
    { title: 'Sức khoẻ dồi dào từ thực phẩm hoàn toàn tự nhiên', date: '13 Th05, 2023', comments: 0, img: 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...' }
  ];

  const products = [
    { name: 'Táo hữu cơ tươi (5kg)', currentPrice: '14,00', oldPrice: '20,00', discount: '30%', img: 'https://cdn.pixabay.com/photo/2018/12/28/19/04/red-apple-3899388_960_720.jpg', stars: 5, reviews: 1 },
    { name: 'Cam Ai Cập loại 1', currentPrice: '30,00', oldPrice: '44,00', discount: '32%', img: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117628_960_720.jpg', stars: 4, reviews: 2 },
    { name: 'Dưa lưới thơm ngon', currentPrice: '33,00', img: 'https://cdn.pixabay.com/photo/2020/05/26/18/45/melon-5224345_960_720.jpg', stars: 5, reviews: 1 },
    { name: 'Vẹm xanh (500g)', currentPrice: '33,00', oldPrice: '55,00', discount: '40%', img: 'https://cdn.pixabay.com/photo/2016/05/17/16/47/mussels-1398504_960_720.jpg', stars: 0, reviews: 0 }
  ];

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} size={12} fill={i < count ? "#ffb800" : "none"} stroke={i < count ? "#ffb800" : "#ccc"} />
    ))
  );

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <p><span>Miễn phí vận chuyển</span> cho tất cả đơn hàng</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-content">
          <a href="#" className="logo">
            <span className="logo-icon">🌿</span>Vegist
          </a>
          
          <div className="search-bar">
             <input type="text" placeholder="Tìm kiếm sản phẩm..." />
             <button className="search-btn"><Search size={18} /></button>
          </div>

          <div className="header-icons">
            <div className="icon-item">
              <User size={26} strokeWidth={1.5} />
              <div className="icon-text">
                <p>TÀI KHOẢN</p>
                <span>Đăng ký | Đăng nhập</span>
              </div>
            </div>
            <div className="icon-item">
              <Heart size={26} strokeWidth={1.5} />
              <span className="badge">0</span>
            </div>
            <div className="icon-item">
              <ShoppingBag size={26} strokeWidth={1.5} />
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="browse-cat">
            <AlignJustify size={20} />
            DANH MỤC SẢN PHẨM
          </div>
          <ul className="nav-links">
            <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Trang chủ <ChevronDown size={14} /></a></li>
            <li className="has-mega-menu">
              <a href="#" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Mua sắm <ChevronDown size={14} /></a>
              <div className="mega-menu">
                <div className="mega-col">
                  <h4>Thực phẩm tươi</h4>
                  <ul>
                    <li><a href="#">Trái cây & Hạt</a></li>
                    <li><a href="#">Đồ ăn vặt</a></li>
                    <li><a href="#">Sản phẩm không sữa</a></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <h4>Trái cây hỗn hợp</h4>
                  <ul>
                    <li><a href="#">Cam tươi</a></li>
                    <li><a href="#">Bơ tươi</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Bộ sưu tập <ChevronDown size={14} /></a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Trang <ChevronDown size={14} /></a></li>
            <li>
              <a href="#">Mua Vegist</a>
              <span className="hot-badge">NÓNG</span>
            </li>
          </ul>
          <div className="header-icons" style={{paddingRight: '15px'}}>
            <Headphones size={28} />
             <div className="icon-text">
               <span style={{color: '#aaa'}}>Hotline:</span>
               <p>0123 456 789</p>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner Slider */}
      <section className="hero-slider container">
        <div className="hero-slide">
           <button className="slider-btn prev"><ChevronsLeft size={20}/></button>
           
           <div className="hero-content">
             <span className="hero-subtitle">Thực phẩm tươi mới</span>
             <h1 className="hero-title">Combo siêu thị rau củ<br/>chỉ từ <span>99k</span></h1>
             <button className="btn-primary">Mua ngay</button>
           </div>
           
           <div className="hero-image">
             <img src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg" alt="Groceries" style={{ mixBlendMode: 'darken' }} />
           </div>

           <button className="slider-btn next"><ChevronsRight size={20}/></button>
           
           <div className="slider-dots">
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot active"></div>
           </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="container features-grid">
          <div className="feat-item">
            <Truck className="feat-icon" size={36} strokeWidth={1.5} />
            <div className="feat-info">
              <h4>Giao hàng miễn phí</h4>
              <p>Mọi đơn hàng đều được free</p>
            </div>
          </div>
          <div className="feat-item">
            <RefreshCw className="feat-icon" size={36} strokeWidth={1.5} />
            <div className="feat-info">
              <h4>Đổi trả & hoàn tiền</h4>
              <p>Cam kết hoàn tiền đáng tin</p>
            </div>
          </div>
          <div className="feat-item">
            <Headphones className="feat-icon" size={36} strokeWidth={1.5} />
            <div className="feat-info">
              <h4>Hỗ trợ chất lượng</h4>
              <p>Luôn trực tuyến 24/7</p>
            </div>
          </div>
          <div className="feat-item">
            <Mail className="feat-icon" size={36} strokeWidth={1.5} />
            <div className="feat-info">
              <h4>Đăng ký nhận tin</h4>
              <p>Giảm 20% khi đăng ký</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="promo-banners container">
        <div className="promo-grid">
          <div className="promo-card vertical" style={{backgroundColor: '#faeaea'}}>
            <div className="promo-content">
              <span className="promo-sub">Thực phẩm tươi</span>
              <h3 className="promo-title">Bộ sưu tập trái cây</h3>
              <button className="btn-primary" style={{marginTop: '15px'}}>Mua ngay</button>
            </div>
            <img src="https://cdn.pixabay.com/photo/2015/05/20/19/33/pineapple-775694_960_720.jpg" alt="Fruit" className="bg" style={{bottom: 0}} />
          </div>
          <div className="promo-card" style={{backgroundColor: '#f1f5eb'}}>
            <div className="promo-content">
              <span className="promo-sub">Trái cây mùa đông</span>
              <h3 className="promo-title">Cam tươi ngon và<br/>Giảm giá 25%</h3>
              <a href="#" className="btn-text" style={{marginTop: '15px'}}>Mua ngay <ChevronRight size={14}/></a>
            </div>
            <img src="https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117628_960_720.jpg" alt="Orange" className="bg" />
          </div>
          <div className="promo-card" style={{backgroundColor: '#f0eff2'}}>
            <div className="promo-content">
              <span className="promo-sub">Sản phẩm từ Ấn Độ</span>
              <h3 className="promo-title">Đồ uống hữu cơ tươi<br/>Giảm giá 30%</h3>
              <a href="#" className="btn-text" style={{marginTop: '15px'}}>Mua ngay <ChevronRight size={14}/></a>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg" alt="Drink" className="bg" />
          </div>
        </div>
      </section>

      {/* Main Layout 2 Columns */}
      <div className="container main-layout">
        
        {/* Left Sidebar */}
        <aside className="sidebar">
          {/* Special Product */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Sản phẩm đặc biệt</h3>
            {miniProducts.map((p, idx) => (
              <div className="mini-product" key={idx}>
                <img src={p.img} alt={p.name} />
                <div className="mini-prod-info">
                  <h5>{p.name}</h5>
                  <div className="mini-price">€{p.price}</div>
                  <div className="rating">
                    {renderStars(p.stars)}
                    <span style={{color: '#999', marginLeft: '5px'}}>Chưa có review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Reviews */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Đánh giá khách hàng</h3>
            <div className="review-card">
              <div className="quote-box">
                <Quote size={24} />
              </div>
              <h4>"Linh hoạt"</h4>
              <p>Tôi yêu theme này. Rất mượt mà, dễ sử dụng và tùy biến cực tốt. Nó giúp cửa hàng của tôi đẹp hẳn ra.</p>
              <span className="review-author">Bởi disarak</span>
              <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>

          {/* Side Banner */}
          <div className="sidebar-section">
            <div className="promo-card vertical" style={{backgroundColor: '#e6f0fa'}}>
              <div className="promo-content">
                <span className="promo-sub">Tinh khiết tự nhiên</span>
                <h3 className="promo-title">Lợi ích của<br/>rau củ quả</h3>
                <button className="btn-primary" style={{marginTop: '15px'}}>Mua ngay</button>
              </div>
              <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg" alt="Salad" className="bg" style={{bottom: 0}} />
            </div>
          </div>

          {/* Trending Mini */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Sản phẩm thịnh hành</h3>
            {trendingMini.map((p, idx) => (
              <div className="mini-product" key={idx}>
                <img src={p.img} alt={p.name} />
                <div className="mini-prod-info">
                  <h5>{p.name}</h5>
                  <div className="mini-price">€{p.price}</div>
                  <div className="rating">
                    {renderStars(p.stars)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Banner */}
          <div className="sidebar-banner">
             <img src="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg" alt="Veg banner" className="bg" />
             <div className="content">
                <h3 style={{fontSize: '22px'}}>Giảm <span style={{fontSize: '32px'}}>50%</span><br/>SIÊU ƯU ĐÃI</h3>
                <p>CHỈ DÀNH CHO RAU CỦ</p>
             </div>
          </div>

          {/* Sidebar Badges */}
          <div className="sidebar-badges">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/USDA_organic_seal.svg/1024px-USDA_organic_seal.svg.png" alt="Badge 1" style={{filter: 'hue-rotate(60deg) saturate(1.5)'}} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vegan_friendly_icon.png/640px-Vegan_friendly_icon.png" alt="Badge 2" style={{filter: 'hue-rotate(-40deg) saturate(2)'}} />
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="main-content">
          
          <div className="section-header">
            <h2>Sản phẩm của chúng tôi</h2>
          </div>
          <div className="tab-list">
            {['SẢN PHẨM NỔI BẬT', 'BÁN CHẠY NHẤT', 'SẢN PHẨM MỚI'].map(t => (
              <div key={t} className={`tab-item ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
                {t}
              </div>
            ))}
          </div>

          <div className="product-grid">
            <div className="carousel-btn left"><ChevronLeft size={20}/></div>
            <div className="carousel-btn right"><ChevronRight size={20}/></div>
            
            {products.slice(0,3).map((p, idx) => (
               <div className="product-card" key={idx}>
                 <div className="product-image-container">
                   {p.discount && <span className="discount-badge">-{p.discount}</span>}
                   <img src={p.img} alt={p.name} />
                   
                   <div className="product-actions">
                     <button className="action-btn"><Heart size={18} /></button>
                     <button className="action-btn"><ShoppingBag size={18} /></button>
                     <button className="action-btn"><Eye size={18} /></button>
                     <button className="action-btn"><BarChart2 size={18} /></button>
                   </div>
                 </div>
                 <div className="product-info">
                   <a href="#" className="product-title">{p.name}</a>
                   <div className="price-container">
                     <span className="price-current">€{p.currentPrice}</span>
                     {p.oldPrice && <span className="price-old">€{p.oldPrice}</span>}
                   </div>
                   <div className="rating">
                     {renderStars(p.stars)}
                     <span style={{color: '#999', marginLeft: '5px', fontSize: '12px'}}>{p.reviews === 0 ? 'No reviews' : `${p.reviews} review`}</span>
                   </div>
                 </div>
               </div>
            ))}
          </div>

          {/* Wide Banner */}
          <div className="wide-banner">
             <div className="wide-banner-content">
               <span className="wide-banner-sub">ƯU ĐÃI KHÁCH HÀNG MỚI</span>
               <h2 className="wide-banner-title">Rau củ nấu chín và sốt<br/>cực kỳ hấp dẫn</h2>
               <button className="btn-primary">Mua ngay</button>
             </div>
          </div>

          {/* Deal block */}
          <div className="deal-row">
            <div className="deal-main">
              <img src="https://cdn.pixabay.com/photo/2015/09/24/19/33/berries-956020_960_720.jpg" alt="Blueberry" />
              <div className="deal-info">
                <span className="promo-sub">Số lượng có hạn</span>
                <h3 className="promo-title">Ưu đãi trong ngày</h3>
                <h5 className="product-title" style={{marginTop: '20px'}}>Việt quất tươi</h5>
                <div className="price-container">
                  <span className="price-current">€35,00</span>
                  <span className="price-old">€51,00</span>
                </div>
                <div className="countdown-boxes">
                  <div className="countdown-box"><span className="count-num">8759</span><span className="count-txt">Ngày</span></div>
                  <div className="countdown-box"><span className="count-num">08</span><span className="count-txt">Giờ</span></div>
                  <div className="countdown-box"><span className="count-num">43</span><span className="count-txt">Phút</span></div>
                  <div className="countdown-box"><span className="count-num">02</span><span className="count-txt">Giây</span></div>
                </div>
                <button className="btn-primary" style={{background: 'white', color: 'var(--text-dark)', border: '1px solid var(--border-color)'}}>Thêm vào giỏ</button>
              </div>
            </div>
            
            <div className="deal-side">
               <div className="content">
                 <span className="promo-sub">Rau củ mùa đông</span>
                 <h4 style={{fontSize: '18px', fontWeight: 800, margin: '5px 0 15px'}}>VEGAN $49.99</h4>
                 <button className="btn-primary">Mua ngay</button>
               </div>
               <img src="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg" alt="Veg" className="bg" />
            </div>
          </div>

          {/* Trending Products Grid */}
          <div className="section-header">
            <h2>Sản phẩm thịnh hành</h2>
          </div>
          <div className="product-grid">
            <div className="carousel-btn left"><ChevronLeft size={20}/></div>
            <div className="carousel-btn right"><ChevronRight size={20}/></div>
            
            {products.slice().reverse().slice(0,3).map((p, idx) => (
               <div className="product-card" key={idx}>
                 <div className="product-image-container">
                   {p.discount && <span className="discount-badge">-{p.discount}</span>}
                   <img src={p.img} alt={p.name} />
                   <div className="product-actions">
                     <button className="action-btn"><Heart size={18} /></button>
                     <button className="action-btn"><ShoppingBag size={18} /></button>
                     <button className="action-btn"><Eye size={18} /></button>
                   </div>
                 </div>
                 <div className="product-info">
                   <a href="#" className="product-title">{p.name}</a>
                   <div className="price-container">
                     <span className="price-current">€{p.currentPrice}</span>
                     {p.oldPrice && <span className="price-old">€{p.oldPrice}</span>}
                   </div>
                 </div>
               </div>
            ))}
          </div>

          {/* Recent News */}
          <div className="section-header" style={{marginTop: '60px'}}>
            <h2>Tin tức gần đây</h2>
          </div>
          
          <div className="news-grid">
            {news.map((n, idx) => (
              <div className="news-card" key={idx}>
                <a href="#" className="news-image">
                  <img src={n.img} alt={n.title} />
                </a>
                <div className="news-meta">
                  <div><Calendar size={13} strokeWidth={2.5}/> {n.date}</div>
                  <div><MessageSquare size={13} strokeWidth={2.5}/> {n.comments} Bình luận</div>
                </div>
                <a href="#" className="news-title">{n.title}</a>
                <p className="news-excerpt">{n.excerpt}</p>
                <a href="#" className="btn-link">Đọc thêm <ArrowRight size={14} strokeWidth={2.5}/></a>
              </div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <button className="btn-primary">Xem tất cả tin tức</button>
          </div>

        </main>
      </div>

      {/* Footer Element */}
      <footer className="footer">
        <div className="container footer-grid">
           <div className="footer-col" style={{paddingRight: '20px'}}>
             <a href="#" className="footer-logo">
               <span className="logo-icon">🌿</span>Vegist
             </a>
             <h4 style={{marginBottom: '15px'}}>Địa điểm</h4>
             <div className="footer-contact">
               <MapPin size={18} />
               <div>38 block street arean licard<br/>hamonia road sydney, australia</div>
             </div>
             <div className="footer-contact">
               <Phone size={18} />
               <div>
                 +014-33333-8888-6868<br/>
                 support@demo.com
               </div>
             </div>
           </div>

           <div className="footer-col">
             <h4>Dịch vụ</h4>
             <ul className="footer-links">
               <li><a href="#">Về Vegist</a></li>
               <li><a href="#">Câu hỏi thường gặp</a></li>
               <li><a href="#">Liên hệ</a></li>
               <li><a href="#">Tin tức</a></li>
               <li><a href="#">Vị trí cửa hàng</a></li>
             </ul>
           </div>

           <div className="footer-col">
             <h4>Quyền riêng tư</h4>
             <ul className="footer-links">
               <li><a href="#">Chính sách thanh toán</a></li>
               <li><a href="#">Chính sách bảo mật</a></li>
               <li><a href="#">Chính sách đổi trả</a></li>
               <li><a href="#">Chính sách vận chuyển</a></li>
               <li><a href="#">Điều khoản sử dụng</a></li>
             </ul>
           </div>

           <div className="footer-col">
             <h4>Tài khoản</h4>
             <ul className="footer-links">
               <li><a href="#">Tài khoản của tôi</a></li>
               <li><a href="#">Giỏ hàng</a></li>
               <li><a href="#">Lịch sử đơn hàng</a></li>
               <li><a href="#">Danh mục yêu thích</a></li>
               <li><a href="#">Địa chỉ</a></li>
             </ul>
           </div>

           <div className="footer-col">
             <h4>Nhận ưu đãi mới nhất</h4>
             <div className="footer-newsletter">
               <p>Và nhận coupon $20 cho lần mua hàng tiếp theo</p>
               <div className="newsletter-form">
                 <input type="email" placeholder="Nhập email của bạn" />
                 <button><Send size={18} /></button>
               </div>
               <div className="social-icons">
                 <a href="#"><MessageSquare size={16} /></a>
                 <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                 <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                 <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                 <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
               </div>
             </div>
           </div>
        </div>
      </footer>

      <div className="scroll-top"><ChevronsUp size={20} /></div>
    </>
  );
};

export default App;
