import React, { useEffect, useState } from "react";
import { useStore } from "../../../app/providers/StoreProvider";
import {
  endParking,
  getParkingHistory,
  startParking,
} from "../../../shared/api/parkingApi";
import Button from "../../../shared/ui/Button";

const StartParkingButton = () => {
  const { selectedCity, selectedArea, user } = useStore();

  const [selectedParkingId, setSelectedParkingId] = useState(null);
  const [parkingStarted, setParkingStarted] = useState(false);

  const handleGetClientHistory = async () => {
    const history = await getParkingHistory(user?.clientId);
    const activeParking = history?.parkings.find(
      (parking) => parking?.status === "ongoing"
    );

    console.log("activeParking?._id", activeParking?._id);
    setSelectedParkingId(activeParking?._id);
    setParkingStarted(!!activeParking);
  };

  useEffect(() => {
    handleGetClientHistory();
  }, []);

  const handleStartParking = async () => {
    const userId = user?.clientId; // Replace with actual user ID

    if (!userId || !selectedCity || !setParkingStarted) {
    }

    try {
      const parking = await startParking(
        userId,
        selectedCity?.name,
        selectedArea?.name
      );
      setSelectedParkingId(parking?._id);
      alert("Parking started successfully");
      setParkingStarted(true);
    } catch (err) {
      alert(err);
    }
  };

  const handleEndParking = async () => {
    try {
      const fee = await endParking(selectedParkingId);

      alert(`Parking ended successfully, FEE: ${fee?.fee * 100}`);
      setParkingStarted(false);
    } catch (err) {
      alert(err?.message);
    }
  };

  return (
    <Button
      disabled={!selectedCity || !selectedArea || !user?.clientId}
      onClick={(e) => {
        e.preventDefault();
        parkingStarted ? handleEndParking() : handleStartParking();
      }}
    >
      {parkingStarted ? "End Parking" : "Start Parking"}
    </Button>
  );
};

export default StartParkingButton;
