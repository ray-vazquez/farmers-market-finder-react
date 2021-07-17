function Market({ market, onclick }) {
  return (
    <div className="market" onClick={() => onclick(market.id)}>
      <h3>{market.marketname}</h3>
      <p>{market.id}</p>
    </div>
  );
}

export default Market;
