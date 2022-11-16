import React, { useState, useEffect } from "react";
import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import dummynotes from "../../dummyNotes.json"
import Notes from "../notes/Notes"

function Search() {
  // const { items } = props
  //const dummynotestag = dymmynotes
  const [items, setItems] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems();
  }, []);



  return (
    <>
      <div className="search-wrapper">
        <button className="search-button">
          <SearchOutlinedIcon style={{ fontSize: 26 }} />
        </button>
        <input value={search}
          className="search-input" type="text" placeholder="Search..." onChange={(event) => { setSearch(event.target.value) }} />
      </div>
      <div>
        <h3>All Notes</h3>

        {
          dummynotes.filter((val) => {
            if (search == "") {
              return val;
            } else if (val.toLowerCase().includes(search.toLowerCase())) {

              return val;
            }
          },)
            .map((val, index) => {
              console.log(val)
              return (<Notes key={index} value={val} id={val.id} tag={val.tags} />
              )
            })
        }
      </div>
    </>
  );
}

export default Search;
