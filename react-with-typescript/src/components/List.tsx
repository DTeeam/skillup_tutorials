import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ turtles }) => {
  const renderList = (): JSX.Element[] => {
    return turtles.map((turtle) => {
      return (
        <li className="List">
          <div className="List-Header">
            <img className="List-img" src={turtle.url} />
            <h2>{turtle.name}</h2>
          </div>
          <p>{turtle.age} years old</p>
          <p className="List-note">{turtle.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
