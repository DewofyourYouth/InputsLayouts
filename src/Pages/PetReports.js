import { useState } from "react";
import ReportLayout from "../ReportLayout";
import PetReportBody from "../components/PetReportBody";
export default function PetReport() {
    const [filterStates, setFilterStates] = useState({});
    const updateFilterState = (state) => {
        setFilterStates({ ...filterStates, ...state });
    };
    return (
        <ReportLayout
            title="Pet Report"
            comp={
                <PetReportBody
                    petName={filterStates?.petName}
                    species={filterStates?.species}
                    age={filterStates?.age}
                />
            }
            filterState={filterStates}
            petFilterNames={["petName", "species", 'age']}
            filterCB={updateFilterState}
        />
    );
}
