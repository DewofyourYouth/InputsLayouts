export default function PetNameInput(props) {
    return (
        <>
            <label>Pet name: </label>
            <input
                value={props.filterState?.petName ?? ""}
                onChange={(e) => props.handleUpdate({petName: e.target.value})}
            />
        </>
    );
}
