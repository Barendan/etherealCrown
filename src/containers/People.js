import PeopleList from '../components/peopleList';
import PeopleForm from '../components/peopleForm';
import PeoplePane from '../components/peoplePane';


const People = () => {


  return (
    <div style={{ display: 'flex', margin: 20}}>
    <PeopleList />
    <PeoplePane />
    </div>

  )
}

export default People;