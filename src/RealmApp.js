import { useState, useEffect } from 'react';
import * as Realm from 'realm-web';

const app = new Realm.App({id: "application-0-kqdjx"})

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData () {
      const user = await app.logIn(Realm.Credentials.anonymous())
      const client = await app.currentUser.mongoClient('mongodb-atlas')
      
      const userCol = await client.db('formless').collection('users');
      const incD = await userCol.findOne({"name": "john"})
      
      console.log('start', incD);  
      // setRestaurants((await rests.find()).slice(0, 10))
      // setItems((await userCol.find()).slice(0, 3))
      setLoading(false)
    }
    
    if (loading) {
      getData();
    }
  }, [loading])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How many trades do you need to make if you 
          <br/>started with $1000 and made 10% on each trade?
        </p>
        {/* <TodoApp /> */}
        You would have made: 
        <i style={{"color": "lightgreen"}}>
          73 Trades and ${ Math.floor(cP(1000,73)) }
        </i>
      </header>
    </div>
  );
}

export default App;