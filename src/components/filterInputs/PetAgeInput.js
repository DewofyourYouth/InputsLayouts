export default function PetNameInput(props) {
  return (
    <>
      <label>Pet age: </label>
      <input
          type="number"
        value={props.filterState?.age ?? 0}
        onChange={(e) => props.handleUpdate({ age: e.target.value })}
      />
    </>
  );
}
