export default function PetReportBody({petName, species, age}) {
  return (
    <main>
      <h2>{petName && petName.toUpperCase()} {species && petName ? <span>the friendly {species.toUpperCase()}</span> : ""}</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{petName ?? ""}</td>
          </tr>
          <tr>
            <td>Species:</td>
            <td>{species ?? ""}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{age ?? ""}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
