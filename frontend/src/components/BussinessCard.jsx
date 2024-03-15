function BussinessCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "40px",
      }}
    >
      <h1>{props.name}</h1>
      <div>{props.description}</div>
      <h2>Interests:</h2>
      {props.interests.map((t, index) => (
        <li key={index}>{t}</li>
      ))}
      <br />
      <button onClick={() => (window.location.href = props.social.twitter)}>
        Twitter
      </button>
      <button onClick={() => (window.location.href = props.social.linkedin)}>
        LinkedIn
      </button>
    </div>
  );
}

export default BussinessCard;
