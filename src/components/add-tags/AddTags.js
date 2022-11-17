import React, { useState } from "react";
function Tags(props) {
  const [inputTag, setInputTag] = useState("");

  const handleChange = (e) => {
    setInputTag(e.target.value);
    e.preventDefault();
  };

  const AddTags = (e) => {
    if (inputTag.trim().length !== 0) {
      props.getTags(inputTag);
    }
    e.preventDefault();
    setInputTag("");
  };

  return (
    <div className="input-button-tag">
      <input
        className="input-tag"
        type="text"
        name="tags"
        value={inputTag}
        onChange={handleChange}
      />
      <button className="button-tag" type="submit" onClick={AddTags}>
        add
      </button>
    </div>
  );
}

export default Tags;
