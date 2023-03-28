import { BrowserRouter } from 'react-router-dom';

import { Terminal } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-stone-900 h-screen sm:px-4 px-2 sm:py-4 py-2">
        <Terminal />
      </div>
    </BrowserRouter>
  );
};

export default App;
