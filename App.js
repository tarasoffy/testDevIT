import React, { useEffect } from "react";
import { RootNavigator } from "./src/navigation";
// import Database from "./database";

import {createTables} from "./src/db/database";


export default function App() {

  useEffect(() => {
    createTables()
  },[])

  return (
    <RootNavigator />
  );
}
