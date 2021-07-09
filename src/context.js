import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// make sure to use https
const url = "https://rickandmortyapi.com/api/episode";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [info, setInfo] = useState([]);

  // const [chars, setChars] = useState([]);

  useEffect(() => {
    getEpisodes(url);
  }, []);

  const getEpisodes = async (url) => {
    let query = `${url}`;
    const res = await fetch(query);
    res
      .json()
      .then((res) => {
        setEpisodeList(res.results);
        setInfo(res.info);
        console.log(res.info);
        console.log(res.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchPage = (page) => {
    let query = `${url}/?page=${page}`;
    getEpisodes(query);
  };

  return (
    <AppContext.Provider value={{ info, episodeList, fetchPage }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
