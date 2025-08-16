import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext deve ser usado dentro de um MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }) => {
  const [clickCounts, setClickCounts] = useState({});
  const [focusedRail, setFocusedRail] = useState(0);
  const [focusedMovie, setFocusedMovie] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Carregar dados salvos do localStorage
  useEffect(() => {
    const savedClickCounts = localStorage.getItem('telaflix_click_counts');
    const savedFocusedRail = localStorage.getItem('telaflix_focused_rail');
    const savedFocusedMovie = localStorage.getItem('telaflix_focused_movie');
    
    if (savedClickCounts) {
      setClickCounts(JSON.parse(savedClickCounts));
    }
    if (savedFocusedRail) {
      setFocusedRail(parseInt(savedFocusedRail));
    }
    if (savedFocusedMovie) {
      setFocusedMovie(parseInt(savedFocusedMovie));
    }
  }, []);

  // Salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem('telaflix_click_counts', JSON.stringify(clickCounts));
  }, [clickCounts]);

  useEffect(() => {
    localStorage.setItem('telaflix_focused_rail', focusedRail.toString());
  }, [focusedRail]);

  useEffect(() => {
    localStorage.setItem('telaflix_focused_movie', focusedMovie.toString());
  }, [focusedMovie]);

  const incrementClickCount = (movieId) => {
    setClickCounts(prev => ({
      ...prev,
      [movieId]: (prev[movieId] || 0) + 1
    }));
  };

  const getClickCount = (movieId) => {
    return clickCounts[movieId] || 0;
  };

  const value = {
    clickCounts,
    incrementClickCount,
    getClickCount,
    focusedRail,
    setFocusedRail,
    focusedMovie,
    setFocusedMovie,
    selectedMovie,
    setSelectedMovie
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
