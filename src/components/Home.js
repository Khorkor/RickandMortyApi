import React from "react";
import EpisodesList from "./EpisodesList";
import Page from "./page";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-5xl text-center mb-5">
        <strong>Rick and Morty</strong>
      </p>
      <div className="align-middle center ">
        <Page></Page>
      </div>
      <EpisodesList></EpisodesList>
      <div className="align-middle center">
        <Page></Page>
      </div>
    </div>
  );
};

export default Home;
