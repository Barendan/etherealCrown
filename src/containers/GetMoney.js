import logo from '../logo.svg';

const GetMoney = () => {
  // If I start with $1000
  // Each trade, I gain 50% on my money.
  // How many trades will it take to get to 1mill?
  const start = 750;
  const trades = 0;
  
  const daMill = (s, t) => {
    const target = 1000000;
    const pcent = .5;
  
    if (s >= target) return t;
    else {
      s = s + (s * pcent)
      t++
      console.log('After trade number:', t, "---Total: $", s)
    }
    return daMill(~~(s),t)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How many trades do you need to make to reach 1 million, if you 
          <br/>started with ${start} and made 50% on each trade?
        </p>
        You only need to make: 
        <b style={{"color": "lightgreen", "fontSize":26}}>
          { daMill(start, trades) } trades
        </b>
      </header>
  </div>
  )
}

export default GetMoney;