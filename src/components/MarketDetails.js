function MarketDetails({ marketDetails }) {
  return (
    <div>
      {console.log(marketDetails.map((m) => m))}
      {/* 
        {Address}
        {GoogleLink}
        {Products}
        {Schedule}
     */}
    </div>
  );
}

export default MarketDetails;
/**
 *
 * example response
 *
 {"marketdetails":{"Address":"9300 Civic Center Dr, Beverly Hills , California, 90210","GoogleLink":"http:\/\/maps.google.com\/?q=34.073685%2C%20-118.398746%20(%22Beverly+Hills+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and\/or body care products; Trees, shrubs","Schedule":"01\/01\/2020 to 12\/31\/2020 Sun: 9:00 AM-1:00 PM;<br> <br> <br> "}}
 */
