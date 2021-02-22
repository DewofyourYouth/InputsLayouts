import { useState } from "react";
import ReportLayout from "../ReportLayout";
import MakeLowercaseList from "../components/MakeLowercaseList";
export default function Page1() {
  const [filterStates, setFilterStates] = useState({});
  const [name, setName] = useState("a name shall appear here");
  const getName = (name) => setName(name);
  const updateFilterState = (state) =>
    setFilterStates({ ...state, ...filterStates });
  return (
    <ReportLayout
      title="Lowercase List"
      setName={getName}
      comp={<MakeLowercaseList myStr={name} />}
      filterCB={updateFilterState}
    />
  );
}
