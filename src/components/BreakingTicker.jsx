import { BREAKING_ITEMS } from '../data';

export default function BreakingTicker() {
  // Duplicate items for seamless loop
  const items = [...BREAKING_ITEMS, ...BREAKING_ITEMS];

  return (
    <div className="rs-breaking">
      <div className="rs-breaking-label">BREAKING</div>
      <div className="rs-ticker-wrap">
        <div className="rs-ticker">
          {items.map((item, i) => (
            <span key={i}>
              {item}
              <span className="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
