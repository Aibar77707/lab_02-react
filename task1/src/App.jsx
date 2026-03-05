import React from "react";
import FragmentLayout from "./FragmentLayout";
import ItemList from "./ItemList";
import CombinedFragment from "./CombinedFragment";

function App() {
  return (
    <>
      <FragmentLayout />
      <ItemList />
      <CombinedFragment />
    </>
  );
}

export default App;