import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
const url = `https://rickandmortyapi.com/api/episode`;

const CharUrl = `https://rickandmortyapi.com/api/character`;

const SingleEpisode = () => {
  const { id } = useParams();
  const params = useParams();
  const [singleEpisode, setSingleEpisode] = useState({});
  const [charNames, setCharNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    console.log("from single page params", params);
    async function getSingleEpisode() {
      try {
        // const res = await fetch(url);
        // const data = await res.json();
        const res = await axios.get(url + "/" + id);
        console.log(res);
        let chars = [];
        setCharNames(Array(res.data.characters.length));
        setLoading(true);
        for await (const character of res.data.characters) {
          const res = await axios.get(character);
          const { name } = res.data;
          chars.push(name);
        }
        setCharNames(chars);
        setLoading(false);
        setSingleEpisode(res.data);

        // console.log("from single page data", data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleEpisode();
  }, [id]);
  {
    return (
      <div className="flex justify-center mt-20">
        <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
          <div className="px-6 py-4">
            <ul>
              <li>
                <div className="font-bold text-blue-700 text-xl mb-2">
                  {singleEpisode.name}
                </div>
              </li>
              <li>
                <strong className="font-bold text-blue-700 text-xl mb-2">
                  Episode:{" "}
                </strong>
                {singleEpisode.episode}{" "}
              </li>
              <li>
                <strong className="font-bold text-blue-700 text-xl mb-2">
                  Episode Airdate:
                </strong>{" "}
                {singleEpisode.air_date}
              </li>

              <li>
                <strong className="font-bold text-blue-700 text-xl mb-2">
                  Some of the characters in this Episode:
                </strong>
                {loading ? (
                  <p>
                    <span className="flex h-3 w-3">
                      <span className="animate-pulse relative inline-flex rounded-full h-3 w-3 ">
                        <span className="text-lg">Loading...</span>
                      </span>
                    </span>
                  </p>
                ) : (
                  singleEpisode.characters &&
                  singleEpisode.characters.slice(0, 10).map((char, i) => {
                    return (
                      <ul>
                        <li>
                          <Link
                            to={`/character/` + char.split("character/")[1]}
                            className="hover:text-blue-400"
                            key={i}
                          >
                            {charNames[i]}
                          </Link>
                        </li>
                      </ul>
                    );
                  })
                )}
              </li>
            </ul>
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

export default SingleEpisode;
