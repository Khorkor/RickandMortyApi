import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Episodes = ({ id, name, episode, air_date, url }) => {
  {
    return (
      <div className="flex justify-center">
        <Link to={`/episode/${id}`} key={id}>
          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
            <div className="px-6 py-4">
              <ul>
                <li>
                  <div className="font-bold text-blue-700 text-xl mb-2">
                    {name}
                  </div>
                </li>
                <li>
                  <strong>Episode: </strong>
                  {episode}
                </li>
                <li>
                  <strong>Episode Airdate: </strong>
                  {air_date}
                </li>
                <li>
                  <strong>Episode Url: </strong>
                  {url}
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default Episodes;
