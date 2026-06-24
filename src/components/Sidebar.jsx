import { SCHEDULE, POPULAR, QUICK_LINKS } from '../data';

export default function Sidebar() {
  return (
    <aside className="rs-sidebar">

      {/* TODAY'S SCHEDULE */}
      <div className="rs-widget">
        <div className="rs-widget-header">&#9654; Today's Schedule</div>
        <div className="rs-widget-body">
          {SCHEDULE.map(({ time, show }) => (
            <div className="rs-schedule-row" key={time}>
              <span className="rs-schedule-time">{time}</span>
              <span className="rs-schedule-show">{show}</span>
            </div>
          ))}
        </div>
        <a className="rs-full-schedule" href="#">Full schedule »</a>
      </div>

      {/* POPULAR THIS WEEK */}
      <div className="rs-widget">
        <div className="rs-widget-header">&#9654; Popular This Week</div>
        <div className="rs-widget-body">
          <ol className="rs-popular-list">
            {POPULAR.map((item, i) => (
              <li key={i}><a href="#">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="rs-widget">
        <div className="rs-widget-header">&#9654; Quick Links</div>
        <div className="rs-widget-body">
          <ul className="rs-quick-links">
            {QUICK_LINKS.map(({ label, url }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <span className="rs-ql-arrow">▶</span>{label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </aside>
  );
}
