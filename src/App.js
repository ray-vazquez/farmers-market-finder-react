import axios from "axios";
import { useState } from "react";
import Markets from "./components/Markets";
import UserInputZip from "./components/UserInputZip";

function App() {
  const [inputZip, setInputZip] = useState("");
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState();

  const [marketDetails, setMarketDetails] = useState({});

  /**
   * https://github.com/axios/axios
   */
  const getMarkets = (e) => {
    e.preventDefault();

    axios
      .get(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch",
        {
          params: { zip: inputZip },
        }
      )
      .then((data) => setMarkets(...markets, data.data.results));
  };

  const getMarketById = (id) => {
    console.log(id);
    setSelectedMarket(
      markets.map((market) =>
        Object.values(market).map(
          (i) => i.id === id && console.log(i.id)
        )
      )
    );
    console.log(selectedMarket);
  };

  const getMarketDtls = () => {
    axios
      .get(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail",
        { params: { id: selectedMarket } }
      )
      .then((data) =>
        setMarketDetails([marketDetails, data.data.marketdetails])
      )
      .then((data) => console.log(data));
  };

  return (
    <div className="container">
      <UserInputZip
        getMarkets={getMarkets}
        handleInputZip={(e) => setInputZip(e.target.value)}
        inputZip={inputZip}
      />

      <Markets markets={markets} onclick={getMarketById} />
    </div>
  );
}

export default App;
