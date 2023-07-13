import React, { useEffect, createContext, useState } from "react";
import { RootNavigator } from "./src/navigation";
import {createTables} from "./src/db/database";

export const Context = createContext();

export default function App() {

  const [uriPhoto, setUriPhoto] = useState();

  const updateData = (newData) => {
    setUriPhoto(newData);
  };

  useEffect(() => {
    createTables()
  },[])

  return (
    <Context.Provider value={{ uriPhoto, updateData }}>
      <RootNavigator />
    </Context.Provider>
    
  );
}
