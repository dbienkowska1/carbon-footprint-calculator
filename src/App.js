import React from "react";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Header from "./components/Header/Header";
import "./App.css";
import { CategoryProvider } from "./components/Contexts/CategoryContext";
import { DataProvider } from "./components/Contexts/DataContext";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <CategoryProvider>
      <DataProvider>
        <>
          <Header />
          <div className="content-container">
            <CategoryContainer />
            <div className="input-output">
              <Form />
            </div>
          </div>
        </>
      </DataProvider>
    </CategoryProvider>
  );
};

export default App;
