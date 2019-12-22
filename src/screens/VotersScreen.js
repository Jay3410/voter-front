import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import VotersTable from "../components/VotersTable";
import axios from "../utils/axios";

const Voters = () => {
  const [filter, setFilter] = useState("");
  const [votersArray, setVoters] = useState([]);

  useEffect(() => {
    axios
      .get("/voters")
      .then(({ data }) => {
        setVoters(data.voters);
      })
      .catch(console.log);
  }, []);

  const filterdVoters = votersArray.filter(voter => {
    if (!filter) {
      return true;
    }
    return voter.name.includes(filter) || voter.address.includes(filter);
  });
  const changeFilterState = e => setFilter(e.target.value);
  return (
    <>
      <Navbar filter={filter} changeFilterState={changeFilterState} />
      <VotersTable voters={filterdVoters} />
    </>
  );
};
export default Voters;
