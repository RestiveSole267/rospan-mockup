import { useRef } from 'react';

export default function BroadcastRow({ title, thumbs }) {
  const gridRef = useRef(null);
  const scroll = () => gridRef.current?.scrollBy({ left: 155, behavior: 'smooth' });

  return (
    <div className="rs-broadcast">
      <h3>{title}</h3>
      <div className="rs-broadcast-row">
        <div className="rs-thumb-grid" ref={gridRef}>
          {thumbs.map((label, i) => (
            <div className="rs-thumb" key={i}>
              <div className="rs-thumb-overlay">▶</div>
              <div className="rs-thumb-label">{label}</div>
            </div>
          ))}
        </div>
        <button className="rs-arrow" onClick={scroll} aria-label="Scroll right">
          &#9654;
        </button>
      </div>
    </div>
  );
}
