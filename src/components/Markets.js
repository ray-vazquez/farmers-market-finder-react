import Market from "./Market";
function Markets({ markets, onclick }) {
  return (
    <>
      {markets.map((market) =>
        market.map((m) => (
          <Market
            name={m.marketname}
            key={m.id}
            market={m}z
            onclick={onclick}
          />
        ))
      )}
    </>
  );
}
export default Markets;
