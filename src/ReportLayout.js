import { useState } from "react";
import ReportTitle from "./components/ReportTitle";
import MainComp from "./components/MainComp";
import InputName from "./components/filterInputs/InputName";
import PetInputs from "./components/PetInputs";
import "./styles.css";

export default function ReportLayout(props) {
  const [name, setName] = useState("");
  const handleNameInput = (value) => {
    setName(value);
    props.setName(value);
  };
  function handleStateChange(obj) {
    props.filterCB(obj);
  }
  return (
    <div id="report">
      <header>
        <ReportTitle title={props.title} />
      </header>
      <main>
        {props.petFilterNames && (
          <PetInputs
            petFilterNames={props.petFilterNames}
            filterState={props.filterState}
            handleUpdate={handleStateChange}
          />
        )}
          {props.setName && <InputName name={name} handleNameInput={handleNameInput}/>}
        <MainComp comp={props.comp} petName={props.filterState?.petName} />
      </main>
    </div>
  );
}
