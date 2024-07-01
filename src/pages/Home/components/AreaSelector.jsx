import React, { useEffect } from "react";
import { useStore } from "../../../app/providers/StoreProvider";
import Select from "../../../shared/ui/Select";

const AreaSelector = () => {
  const { selectedCity, setAreas, setSelectedArea } = useStore();

  useEffect(() => {
    if (selectedCity) {
      setSelectedArea(selectedCity?.areas[0]);
    }
  }, [selectedCity, setAreas]);

  return (
    <Select
      options={selectedCity ? selectedCity?.areas.map((area) => area.name) : []}
      onChange={(e) => setSelectedArea(e.target.value)}
      placeholder="Choose parking area"
    />
  );
};

export default AreaSelector;
