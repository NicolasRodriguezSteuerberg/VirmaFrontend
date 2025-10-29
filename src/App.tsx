import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchPage from './pages/Watch';
import SeriePage from './pages/Serie';
import WatchEpisodePage from './pages/WatchEpisodePage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/watch/movie/:id' element={<WatchPage/>}/>
          <Route path='/serie/:id' element={<SeriePage/>}/>
          <Route path='/watch/serie/:episodeId' element={<WatchEpisodePage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
