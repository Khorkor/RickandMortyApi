import React from "react";
import Episodes from "./Episodes";
import { useGlobalContext } from "../context";

const EpisodesList = () => {
  const { episodeList } = useGlobalContext();
  return (
    <div className="container mx-auto">
      {episodeList.map((episode, id) => {
        return <Episodes key={id} {...episode} />;
      })}
    </div>
  );
};

export default EpisodesList;
