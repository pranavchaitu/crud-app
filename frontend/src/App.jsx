import { useEffect, useState } from "react";
import BussinessCard from "./components/BussinessCard";
import axios from "axios";

function App() {
  const [data, setData] = useState([
    {
      name: "Pranav",
      description: "A lawyer",
      interests: ["DSA", "Open Sourse", "web dev"],
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-repuri-342878259/",
        twitter: "https://x.com/pranavchaitu",
      },
    },
  ]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get('');
  //     setData(res.data);
  //   }
  //   fetchData();
  // },[])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "space-around",
      }}
    >
      {data.map((d, index) => (
        <BussinessCard key={index} {...d} />
      ))}
    </div>
  );
}

export default App;
