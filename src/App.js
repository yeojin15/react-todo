import './styles/variables.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './TodoReducer';
import Intro from './components/Intro';
import Main from './components/Main';

function App() {

  return (
    <TodoProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
