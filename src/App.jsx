import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import BreakingTicker from './components/BreakingTicker';
import LivePlayer from './components/LivePlayer';
import BroadcastRow from './components/BroadcastRow';
import NewsTabs from './components/NewsTabs';
import Sidebar from './components/Sidebar';
import { MSPAN_THUMBS, HSPAN_THUMBS } from './data';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="rs-page">
      <Header searchVal={searchVal} onSearch={setSearchVal} />
      <Nav active={activeNav} onNav={setActiveNav} />
      <BreakingTicker />
      <div className="rs-content">
        <main className="rs-main">
          <LivePlayer />
          <BroadcastRow title="Latest M-SPAN Broadcasts..." thumbs={MSPAN_THUMBS} />
          <BroadcastRow title="Latest H-SPAN Broadcasts..." thumbs={HSPAN_THUMBS} />
          <NewsTabs />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
