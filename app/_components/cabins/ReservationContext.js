'use client';

/**
 * @description
 * this can only be used if its a client component.
 * and cannot be used in serve side rendering.
 */

import { createContext, useState, useContext } from 'react';
const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
}

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  function resetRange() {
    setRange(initialState);
  }

  return (
    <ReservationContext.Provider value={{range, setRange, resetRange}}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}

export { ReservationProvider, useReservation };