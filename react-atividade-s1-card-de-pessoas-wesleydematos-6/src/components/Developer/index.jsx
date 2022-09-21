import "./style.css";
const Developer = ({ name, age, country }) => {
  return (
    <div className="card">
      <h1>DEV: {name}</h1>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
};

export default Developer;
