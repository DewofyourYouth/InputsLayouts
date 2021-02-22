import PetNameInput from "./filterInputs/PetNameInput";
import PetSpeciesOptions from "./filterInputs/PetSpeciesOptions";
import PetAgeInput from "./filterInputs/PetAgeInput";

export default function PetInputs({ petFilterNames, ...props }) {
  return (
    <div id="pet-inputs">
      <h3>Pet Inputs</h3>
      <p>
        {petFilterNames.includes("petName") && <PetNameInput {...props} />} &nbsp;
        {petFilterNames.includes("species") && <PetSpeciesOptions {...props} />} &nbsp;
        {petFilterNames.includes("age") && <PetAgeInput {...props} />}
      </p>
    </div>
  );
}
