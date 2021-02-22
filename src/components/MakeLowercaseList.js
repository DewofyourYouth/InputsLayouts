export default function MakeLowerCaseList({ myStr }) {
  // This is where I would fetch some data for the reports
  // based on whatever props I recieved
  return (
    <main>
      <h2>Yo! This is the Make Lowercase List Report!</h2>
      <h3>
        Hello <span style={{ color: "tomato" }}>{myStr.toLowerCase()}</span>!
      </h3>
      <ul>
        {myStr
          .split("")
          .filter((x) => x !== " ")
          .map((x, i) => (
            <li key={i}>{x.toLowerCase()}</li>
          ))}
      </ul>
    </main>
  );
}
