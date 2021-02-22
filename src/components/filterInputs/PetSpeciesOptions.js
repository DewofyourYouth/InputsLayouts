import { useState } from "react";

export default function PetSpeciesOptions(props) {
    const [optionState, setOptionState] = useState("");
    const handleChange = (species) => {
        setOptionState(species);
        props.handleUpdate({ species });
    };

    const petSpeciesOptions = [
        "cat",
        "pangolin",
        "rabbit",
        "monkey",
        "dragon",
        "dog",
        "lizard",
        "snake",
        "gerbil",
        "parrot",
        "mouse",
        "human",
        "falcon",
        "mongoose",
        "honey badger",
        "goose",
        "rat",
        "chinchilla"
    ];
    return (
        <select
            name={"species"}
            value={optionState}
            onChange={(e) => {
                handleChange(e.target.value);
            }}
        >
            <option value={""}>Choose a species</option>
            {petSpeciesOptions.sort().map((species, i) => (
                <option key={i} value={species}>
                    {species}
                </option>
            ))}
        </select>
    );
}
