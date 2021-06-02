import React,{useState} from "react";
import JSONDATA from "./mockData.json";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={(e)=>setSearchTerm(e.target.value)} />
      {JSONDATA.map((val,key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}<span>{key}</span></p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
