import React, { useState, useEffect } from 'react';
import { Star, Heart, ShoppingBag, Eye, Grid, List, ChevronDown, ChevronRight } from 'lucide-react';
import './category.css';

const CategoryPage = ({ initialCategory, navigateToProduct, openQuickView, addToCart, addToWishlist }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 67]);

  const initialCategoryList = [
    { name: 'Trái cây tươi', count: 15 },
    { name: 'Rau củ tươi', count: 25 },
    { name: 'Trái cây khô hữu cơ', count: 12 },
    { name: 'Gia vị hữu cơ', count: 8 },
    { name: 'Nước ép hữu cơ', count: 6 },
    { name: 'Trái cây mùa hè', count: 18 },
    { name: 'Bánh mỳ & Ngũ cốc', count: 22 },
    { name: 'Bơ & Sữa', count: 14 },
    { name: 'Rượu vang hữu cơ', count: 7 },
  ];

  const [categories, setCategories] = useState(
    initialCategoryList.map(c => ({
      ...c,
      checked: c.name === initialCategory
    }))
  );

  useEffect(() => {
    if (initialCategory) {
      setCategories(prev => prev.map(c => ({ ...c, checked: c.name === initialCategory })));
    }
  }, [initialCategory]);

  const toggleCategory = (idx) => {
    const newCats = [...categories];
    newCats[idx].checked = !newCats[idx].checked;
    setCategories(newCats);
  };

  const sizes = [
    { name: '1kg', count: 19 },
    { name: '2kg', count: 19 },
    { name: '3kg', count: 3 },
    { name: '5kg', count: 19 },
    { name: '7kg', count: 1 },
    { name: '10kg', count: 3 },
    { name: '1ltr', count: 1 },
  ];

  const materials = [
    { name: 'Đà Lạt', count: 12 },
    { name: 'Sơn La', count: 1 },
    { name: 'Tiền Giang', count: 11 },
    { name: 'Bến Tre', count: 1 },
    { name: 'Nhập khẩu', count: 12 },
  ];

  const products = [
    { name: 'Cà chua hữu cơ', currentPrice: '55,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Ổi đỏ Đài Loan tươi', currentPrice: '30,00', oldPrice: '44,00', discount: '32%', img: 'https://cdn.pixabay.com/photo/2016/07/22/09/59/guava-1534487_960_720.jpg', stars: 5, reviews: 2 },
    { name: 'Cá hồi Đại Tây Dương', currentPrice: '61,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg', stars: 5, reviews: 1 },
    { name: 'Dừa hữu cơ nguyên trái', currentPrice: '35,00', oldPrice: '44,00', discount: '20%', img: 'https://cdn.pixabay.com/photo/2016/07/22/10/39/coconut-1534574_960_720.jpg', stars: 4, reviews: 2 },
    { name: 'Nước cam tự nhiên', currentPrice: '66,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-juice-1995079_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Đu đủ hữu cơ tốt cho sức khỏe', currentPrice: '20,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/papaya-1659751_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Chuối vàng 100% hữu cơ', currentPrice: '22,00', oldPrice: '44,00', discount: '50%', img: 'https://cdn.pixabay.com/photo/2014/12/21/23/58/bananas-576443_960_720.png', stars: 0, reviews: 0 },
    { name: 'Vẹm biển tươi sống', currentPrice: '18,00', oldPrice: '44,00', discount: '59%', img: 'https://cdn.pixabay.com/photo/2016/05/17/16/47/mussels-1398504_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Quýt đường tươi hữu cơ', currentPrice: '44,00', oldPrice: '65,00', discount: '32%', img: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Dưa lưới tươi tắn (2kg)', currentPrice: '33,00', oldPrice: null, discount: null, img: 'https://cdn.pixabay.com/photo/2020/05/26/18/45/melon-5224345_960_720.jpg', stars: 5, reviews: 1 },
    { name: 'Vẹm xanh xuất khẩu (500g)', currentPrice: '33,00', oldPrice: '55,00', discount: '40%', img: 'https://cdn.pixabay.com/photo/2016/05/17/16/47/mussels-1398504_960_720.jpg', stars: 0, reviews: 0 },
    { name: 'Vải thiều tươi 100% hữu cơ', currentPrice: '8,00', oldPrice: '15,00', discount: '47%', img: 'https://cdn.pixabay.com/photo/2018/06/12/15/06/lychee-3470760_960_720.jpg', stars: 0, reviews: 0 },
  ];

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} size={12} fill={i < count ? "#f5ab1e" : "none"} stroke={i < count ? "#f5ab1e" : "#ccc"} />
    ))
  );

  return (
    <div className="container category-layout">
      {/* Left Sidebar Filters */}
      <aside className="category-sidebar">
        
        {/* Categories Box */}
        <div className="filter-box">
          <h3 className="filter-title">Danh mục sản phẩm</h3>
          <ul className="filter-list">
            {categories.map((c, i) => (
              <li key={i}>
                <label className="checkbox-label" style={{ cursor: 'pointer' }}>
                  <input type="checkbox" checked={c.checked || false} onChange={() => toggleCategory(i)} />
                  <span className="checkmark"></span>
                  <span className="label-text">{c.name}</span>
                </label>
                <span className="count">({c.count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter Summary */}
        <div className="filter-box">
          <h3 className="filter-title">Bộ lọc</h3>
          <p className="filter-subtitle">22 sản phẩm</p>
        </div>

        {/* Price Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Giá trị</h3>
            <button className="reset-btn">Đặt lại</button>
          </div>
          <p className="filter-subtitle">Mức giá cao nhất là €67,00</p>
          <div className="price-slider">
            <div className="slider-track"></div>
            <div className="slider-thumb left"></div>
            <div className="slider-thumb right"></div>
          </div>
          <div className="price-inputs">
            <div>
               <label>Từ</label>
               <div className="input-group">
                 <span className="currency">€</span>
                 <input type="number" value={priceRange[0]} readOnly />
               </div>
            </div>
            <span>-</span>
            <div>
               <label>Đến</label>
               <div className="input-group">
                 <span className="currency">€</span>
                 <input type="number" value={priceRange[1]} readOnly />
               </div>
            </div>
          </div>
        </div>

        {/* Size Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Khối lượng</h3>
            <button className="reset-btn">Đặt lại</button>
          </div>
          <p className="filter-subtitle">0 mục đã chọn</p>
          <ul className="filter-list scrollable">
            {sizes.map((s, i) => (
              <li key={i}>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">{s.name}</span>
                </label>
                <span className="count">({s.count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Material Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Xuất xứ</h3>
            <button className="reset-btn">Đặt lại</button>
          </div>
          <p className="filter-subtitle">0 mục đã chọn</p>
          <ul className="filter-list">
            {materials.map((m, i) => (
              <li key={i}>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="label-text">{m.name}</span>
                </label>
                <span className="count">({m.count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Thương hiệu</h3>
            <button className="reset-btn">Đặt lại</button>
          </div>
          <p className="filter-subtitle">0 mục đã chọn</p>
          <ul className="filter-list">
            <li>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Vegist Organic</span>
              </label>
              <span className="count">(22)</span>
            </li>
          </ul>
        </div>

        {/* Product Type Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Loại sản phẩm</h3>
          </div>
          <p className="filter-subtitle">0 mục đã chọn <button className="reset-btn" style={{float: 'right'}}>Đặt lại</button></p>
          <ul className="filter-list">
            <li>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Rau củ tự nhiên</span>
              </label>
              <span className="count">(1)</span>
            </li>
          </ul>
        </div>

        {/* Availability Box */}
        <div className="filter-box">
          <div className="filter-title-row">
            <h3 className="filter-title">Tình trạng</h3>
          </div>
          <p className="filter-subtitle">0 mục đã chọn <button className="reset-btn" style={{float: 'right'}}>Đặt lại</button></p>
          <ul className="filter-list">
            <li>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Còn hàng</span>
              </label>
              <span className="count">(22)</span>
            </li>
            <li>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Hết hàng</span>
              </label>
              <span className="count">(1)</span>
            </li>
          </ul>
        </div>

        {/* Sidebar Banner */}
        <div className="sidebar-promo">
          <img src="https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg" alt="Health Food" />
          <div className="promo-text">
            <span>100% HỮU CƠ</span>
            <h3>Thực phẩm dinh dưỡng</h3>
          </div>
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="category-main">
        
        {/* Category Banner */}
        <div className="category-banner">
          <img src="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg" alt="Banner" className="bg" />
          <div className="banner-content">
            <span className="banner-sub">THỰC PHẨM HỮU CƠ ƯU ĐÃI LỚN 35%</span>
            <h2 className="banner-title">Rau củ & Trái cây tươi<br/>nguồn gốc hữu cơ</h2>
          </div>
        </div>

        {/* Toolbar */}
        <div className="category-toolbar">
          <div className="view-modes">
            <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
              <Grid size={20} />
            </button>
            <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
              <List size={20} />
            </button>
          </div>
          <div className="sort-by">
            <span>Sắp xếp theo:</span>
            <div className="sort-dropdown">
              Theo bảng chữ cái, Z-A <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className={`product-grid category-grid ${viewMode}`}>
          {products.map((p, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-image-container">
                {p.discount && <span className="discount-badge">-{p.discount}</span>}
                <img src={p.img} alt={p.name} style={{ cursor: 'pointer' }} onClick={(e) => navigateToProduct && navigateToProduct(e, p)} />

                <div className="product-actions">
                  <button className="action-btn" onClick={() => addToWishlist && addToWishlist(p)}><Heart size={18} /></button>
                  <button className="action-btn" onClick={(e) => openQuickView && openQuickView(e, p)}><ShoppingBag size={18} /></button>
                  <button className="action-btn" onClick={(e) => openQuickView && openQuickView(e, p)}><Eye size={18} /></button>
                </div>
              </div>
              <div className="product-info">
                <a href="#" className="product-title" onClick={(e) => navigateToProduct && navigateToProduct(e, p)}>{p.name}</a>
                <div className="price-container">
                  <span className="price-current">€{p.currentPrice}</span>
                  {p.oldPrice && <span className="price-old">€{p.oldPrice}</span>}
                </div>
                <div className="rating">
                  {renderStars(p.stars)}
                  <span style={{ color: '#999', marginLeft: '5px', fontSize: '12px' }}>{p.reviews === 0 ? 'Chưa có đánh giá' : `${p.reviews} đánh giá`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn next"><ChevronRight size={16} /></button>
        </div>

      </main>
    </div>
  );
};

export default CategoryPage;
