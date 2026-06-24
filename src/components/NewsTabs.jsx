import { useState } from 'react';
import { TABS, ARTICLES } from '../data';

function NewsArticle({ title, meta, body }) {
  return (
    <div className="rs-article">
      <div className="rs-article-thumb" />
      <div className="rs-article-info">
        <a href="#">{title}</a>
        <div className="rs-article-meta">{meta}</div>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default function NewsTabs() {
  const [active, setActive] = useState('Top Stories');

  return (
    <div className="rs-tabs">
      <div className="rs-tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={active === tab ? 'active' : ''}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="rs-live-banner">
        <span className="rs-live-dot" /> LIVE NOW — Senate Floor Session
      </div>
      {(ARTICLES[active] || []).map((a, i) => (
        <NewsArticle key={i} {...a} />
      ))}
    </div>
  );
}
