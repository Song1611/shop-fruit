import React from 'react';
import { Search, Calendar, MessageSquare, ArrowRight, Mail, ChevronRight } from 'lucide-react';
import './news.css';

const NewsPage = () => {
  const recentPosts = [
    {
      date: '13 Th05, 2023',
      title: 'Luôn tươi ngon và khỏe mạnh mỗi ngày...',
      img: 'https://cdn.pixabay.com/photo/2016/09/21/20/45/bell-peppers-1685731_960_720.jpg'
    },
    {
      date: '13 Th05, 2023',
      title: 'Hỗn hợp thuần chay đặc biệt thơm ngon',
      img: 'https://cdn.pixabay.com/photo/2017/05/23/22/33/almonds-2338833_960_720.jpg'
    },
    {
      date: '13 Th05, 2023',
      title: 'Cách thái hành lá và bày biện salad...',
      img: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg'
    }
  ];

  const categories = [
    'Trái cây tươi',
    'Rượu vang hữu cơ',
    'Nước ép tự nhiên',
    'Bơ & Sữa',
    'Thực phẩm tươi sống'
  ];

  const tags = ['BỮA TỐI', 'BÁCH HÓA', 'THỦ CÔNG', 'HỮU CƠ', 'MỲ Ý'];

  const posts = [
    {
      id: 1,
      date: '13 Th05, 2023',
      comments: 1,
      title: 'Luôn luôn tươi mới, luôn luôn khỏe mạnh',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...',
      img: 'https://cdn.pixabay.com/photo/2016/09/21/20/45/bell-peppers-1685731_960_720.jpg'
    },
    {
      id: 2,
      date: '13 Th05, 2023',
      comments: 0,
      title: 'Hỗn hợp chay đặc biệt với công thức bí truyền',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...',
      img: 'https://cdn.pixabay.com/photo/2017/05/23/22/33/almonds-2338833_960_720.jpg'
    },
    {
      id: 3,
      date: '13 Th05, 2023',
      comments: 18,
      title: 'Cách tỉa hành lý và trang trí đĩa salad rực rỡ',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...',
      img: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg'
    },
    {
      id: 4,
      date: '13 Th05, 2023',
      comments: 1,
      title: 'Cải thiện sức khỏe và làn da từ thực phẩm hữu cơ',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...',
      img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_960_720.jpg'
    }
  ];

  return (
    <div className="container news-layout">
      {/* Left Sidebar */}
      <aside className="news-sidebar">
        
        {/* Search */}
        <div className="widget search-widget">
          <input type="text" placeholder="Tìm kiếm" />
          <button><Search size={18} /></button>
        </div>

        {/* Recent Posts */}
        <div className="widget">
          <h3 className="widget-title">Bài đăng gần đây</h3>
          <div className="recent-posts-list">
            {recentPosts.map((post, idx) => (
              <div className="recent-post" key={idx}>
                <img src={post.img} alt={post.title} />
                <div>
                  <div className="recent-date">{post.date}</div>
                  <a href="#" className="recent-title">{post.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="widget widget-categories">
          <h3 className="widget-title">Danh mục</h3>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>
                <a href="#">{cat}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="widget">
          <h3 className="widget-title">Thẻ</h3>
          <div className="tags-cloud">
            {tags.map((tag, idx) => (
              <a href="#" className="tag" key={idx}>{tag}</a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="widget newsletter-widget">
          <h3 className="widget-title" style={{marginBottom: '10px'}}>Bản tin</h3>
          <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
            <input type="email" placeholder="email@example.com" style={{border: 'none', outline: 'none', flex: 1, fontSize: '14px', paddingRight: '10px'}} />
            <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#555'}}><Mail size={18} /></button>
          </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="news-main">
        <div className="news-grid-layout">
          {posts.map(post => (
            <article className="news-article" key={post.id}>
              <img src={post.img} alt={post.title} className="article-img" />
              
              <div className="article-meta">
                <span><Calendar size={16} strokeWidth={2.5}/> {post.date}</span>
                <span><MessageSquare size={16} strokeWidth={2.5}/> {post.comments} Bình luận</span>
              </div>
              
              <a href="#" className="article-title">{post.title}</a>
              <p className="article-excerpt">{post.excerpt}</p>
              
              <a href="#" className="read-more">Đọc thêm <ArrowRight size={16} strokeWidth={2.5}/></a>
            </article>
          ))}
        </div>
        
        <div className="pagination" style={{ marginTop: '50px', marginBottom: '20px' }}>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn next"><ChevronRight size={16} /></button>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
