export default function LivePlayer({ isLive = false, streamUrl = '' }) {
  return (
    <div className="rs-player">
      <div className="rs-player-header">
        <span className="rs-live-dot" /> LIVE NOW
      </div>
      <div className="rs-player-box">
        {isLive && streamUrl ? (
          <iframe
            src={streamUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Live broadcast"
          />
        ) : (
          <div className="rs-player-placeholder">
            <p>this box only appears if<br />we're live</p>
            <small>No live broadcast at this time</small>
          </div>
        )}
      </div>
    </div>
  );
}
