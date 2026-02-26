import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ColoredNotes = () => {
  const [Input, setInput] = useState("");
  const [Color, setColor] = useState("#000000");
  const [Notes, setNotes] = useState([]);

  function AddNote() {
    const obj = { id: Date.now(), input: Input, BGColor: Color };
    setNotes([...Notes, obj]);
    setInput("");
  }
  function DeleteNote(IdToDelete) {
    setNotes(
      Notes.filter((obj) => {
        return obj.id !== IdToDelete;
      }),
    );
  }
  return (
    <>
      <div className="wrapper">
        <h2>
          Keep Your Notes Here <FaHandPointRight style={{ color: "black" }} />
        </h2>
        <textarea
          placeholder="Write A Note Here"
          onChange={(e) => setInput(e.target.value)}
          value={Input}
        ></textarea>
        <h3>
          Select Your Color Of Choice{" "}
          <FaHandPointDown style={{ color: "red", fontSize: "25px" }} />
        </h3>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={Color}
        />
        <button onClick={AddNote}>Add Note</button>
      </div>
      <div className="container">
        {Notes.map((obj) => {
          return (
            <div
              key={obj.id}
              style={{
                backgroundColor: obj.BGColor,
                width: "200px",
                height: "200px",
              }}
            >
              {obj.input}
              <span>
                <ImCross onClick={() => DeleteNote(obj.id)} />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColoredNotes;
