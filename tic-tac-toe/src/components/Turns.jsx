import Square from "./Square";

const Turns = ({ turn, TURNS }) => {
  return (
    <section className="turn">
      <div>
        <h2>Turno de: </h2>
      </div>
      <div className="box-container">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </div>
    </section>
  );
};

export default Turns;
