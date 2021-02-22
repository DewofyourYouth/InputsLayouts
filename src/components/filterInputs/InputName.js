export default function InputName(props) {

    return (
        <div>
            <label>Name: </label>
            <input
                value={props.name}
                onChange={(e) => {
                    props.handleNameInput(e.target.value);
                }}
            />
        </div>
    );
}
