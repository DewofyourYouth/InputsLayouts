import { useState } from "react";
import ReportLayout from "../ReportLayout";
import ShowNameASCIICodes from "../components/ShowNameASCIICodes";
export default function ASCIIReport() {
  const [filterStates, setFilterStates] = useState({});
  const [name, setName] = useState("Name Here");
  const getName = (name) => setName(name);
  const updateFilterState = (state) => {
    setFilterStates({ ...filterStates, ...state });
  };
  return (
    <ReportLayout
      title="ASCII Report"
      setName={getName}
      comp={
        <ShowNameASCIICodes
          name={name}
          petName={filterStates?.petName}
          species={filterStates?.species}
        />
      }
      filterState={filterStates}
      petFilterNames={["petName", "species"]}
      filterCB={updateFilterState}
    />
  );
}
