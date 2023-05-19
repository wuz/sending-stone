const Stat = ({ name, value }) => {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span className="statName">{name}</span>
    </div>
  );
};

export default Stat;
