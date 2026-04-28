import { Home } from './pages/Home';

// Single-page site: every section scrolls. No router needed.
// (If you ever want a separate route again, wrap <Home /> in a HashRouter
//  and add <Route> elements — react-router is still installed.)

export default function App() {
  return <Home />;
}
