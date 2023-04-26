import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  turtles: Props['turtles'];
  setTurtles: React.Dispatch<React.SetStateAction<Props['turtles']>>;
}

const AddToList: React.FC<IProps> = ({ setTurtles, turtles }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return;

    setTurtles([
      ...turtles,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Turtle"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add a turtle
      </button>
    </div>
  );
};

export default AddToList;
