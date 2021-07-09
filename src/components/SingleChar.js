import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";

const CharUrl = `https://rickandmortyapi.com/api/character`;

const SingleChar = () => {
  const { id } = useParams();
  const params = useParams();
  const [singleC, setSingleC] = useState({});

  //   const [singleEpisode, setSingleEpisode] = useState({});
  //   const [charNames, setCharNames] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // console.log("from single page params", params);
    async function getSingleChar() {
      try {
        // const res = await fetch(url);
        // const data = await res.json();
        const res = await axios.get(CharUrl + "/" + id);
        console.log("from single char", res);

        setSingleC(res.data);
        console.log("from single char", res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleChar();
  }, [id]);
  {
    return (
      <div className="flex justify-center mt-20">
        <div
          className="max-w-md mx-auto bg-white 
         shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={singleC.image}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-700 font-semibold">
                {singleC.name}
              </div>

              <p className="mt-2 text-gray-500">
                <ul>
                  <li>Status: {singleC.status}</li>
                  <li>Species: {singleC.species}</li>
                  <li>Gender: {singleC.gender}</li>
                  <li>Origin: {singleC.origin && singleC.origin.name}</li>
                  <li>Location: {singleC.location && singleC.location.name}</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-blue-700 rounded hover:text-blue-400 m-auto"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleChar;
