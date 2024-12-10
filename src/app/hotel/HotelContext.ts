import React, { createContext, useContext } from "react";
import { Hotel } from "./data";

export const HotelContext = createContext<Hotel | null>(null);

export const useHotel = () => useContext(HotelContext);

export const HotelProvider = ({
  children,
  hotel,
}: {
  children: React.ReactNode;
  hotel: Hotel;
}) => {
  return (
    <HotelContext.Provider value={hotel}>
      {children}
    </HotelContext.Provider>
  );
};
