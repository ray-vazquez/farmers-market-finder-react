const UserInputZip = ({ getMarkets, inputZip, handleInputZip }) => {
  return (
    <form onSubmit={getMarkets}>
      <div className="form-control"></div>
      <label htmlFor="userInputZip">Enter Zip: </label>
      <input
        id="userInputZip"
        type="text"
        maxLength="5"
        value={inputZip}
        onChange={handleInputZip}
      />
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default UserInputZip;
