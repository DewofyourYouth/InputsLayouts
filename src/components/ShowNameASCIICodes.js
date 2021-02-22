export default function ShowNameASCIICodes({ name, petName, species }) {
    // This is where I would fetch some data for the reports
    // based on whatever props I recieved
    return (
        <main>
            <h3>
                Hello <small>(from ShowNameASCIICodes)</small>{" "}
                <span style={{ color: "tomato" }}>{name}</span>!
            </h3>
            <h5>ASCII Codes</h5>
            <p>
                {name
                    .split("")
                    .filter((x) => x !== " ")
                    .map((x, i) => (
                        <span key={i}>
              {x}: {x.charCodeAt(0)},&nbsp;
            </span>
                    ))}
            </p>
            {petName && species && (
                <OptionalPetSection petName={petName} species={species} />
            )}
        </main>
    );
}

function OptionalPetSection(props) {
    return (
        <div>
            <hr />
            <h2>Optional Pet Section:</h2>
            <h5>
                The pet is {props.petName} the {props.species}
            </h5>
        </div>
    );
}
