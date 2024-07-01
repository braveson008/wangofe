import React, { useEffect } from "react";
import { useStore } from "../../../app/providers/StoreProvider";
import { fetchCities } from "../../../shared/api/parkingApi";
import Select from "../../../shared/ui/Select";

const CitySelector = () => {
  const { cities, setCities, setSelectedCity } = useStore();

  useEffect(() => {
    const loadCities = async () => {
      const data = await fetchCities();
      setCities(data);
      setSelectedCity(data[0]);
    };
    loadCities();
  }, [setCities]);
  return (
    <Select
      options={cities ? cities?.map((city) => city.name) : []}
      onChange={(e) =>
        setSelectedCity(cities.find((city) => city.name === e.target.value))
      }
      placeholder="Choose city"
    />
  );
};

export default CitySelector;
