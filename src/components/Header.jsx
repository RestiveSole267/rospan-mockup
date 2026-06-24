import moment from 'moment';

export default function Header({ searchVal, onSearch }) {
  const date = moment().format('dddd, MMMM D, YYYY');

  return (
    <>
      <div className="rs-header">
        <div>
          <div className="rs-logo-brand">RO-SPAN</div>
          <div className="rs-logo-tag">Easy Access to Government Matters</div>
        </div>
        <div className="rs-search">
          <input
            type="text"
            placeholder="Search RO-SPAN..."
            value={searchVal}
            onChange={e => onSearch(e.target.value)}
            aria-label="Search RO-SPAN"
          />
          <button type="button">GO!</button>
        </div>
      </div>
      <div className="rs-meta">
        {date}&nbsp;&nbsp;|&nbsp;&nbsp;Visitor #: <strong>1,847,302</strong>
      </div>
    </>
  );
}
