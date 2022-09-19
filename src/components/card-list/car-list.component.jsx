import Card from "../card/card.component";

import "./card-list.style.scss";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
