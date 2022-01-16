import { useState, useEffect, useCallback } from 'react';
import { Container, Header, Divider, Button, Modal, Icon, Form, Input, Select, Message } from 'semantic-ui-react';
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import {db} from '../firebase';
// import { addDoc, collection } from "firebase/firestore";


import BlogPost from '../components/blogPost';

const samplePosts = [
  {
    id: 1,
    public: true,
    title: 'First Post',
    content: 'first post lots of content in here oh shit',
    date: '1/10/2022',
  },
  {
    id: 1,
    public: true,
    title: 'First Post',
    content: 'first post lots of content in here oh shit',
    date: '1/10/2022',
  },
  {
    id: 1,
    public: true,
    title: 'First Post',
    content: 'first post lots of content in here oh shit',
    date: '1/10/2022',
  }
];

const defaultFields = {
  public: true,
  title: '',
  content: '',
}

// Takes in data from database
// Uses component to render each post
// Add button only shows if admin logged in flag
// Add button triggers modal with form to open
// Submit button updates database and then state

const Blog = () => {
  const [ allPosts, setAllPosts] = useState([]);
  const [ sField, setSField ] = useState(defaultFields);
  const [ error, setError ] = useState(false);
  const [ open, setOpen ] = useState(false);

  const updateSField = useCallback((key, value) => {
    setSField(sField => {
      return {
        ...sField,
        [key]: value,
      };
    });
  }, []);
  
  const handleSubmit = async() => {
    // You should really Validate the fields first
    if (sField.pair.length > 0) {
        await addDoc(collection(db, "blogposts"), {
          ...sField,
          created: new Date()
      })
      .then(() => console.log('successfully entered'))
      .catch(err => console.error("error dun happen",err))
      setError(false);
    }
    else {
      setError(true);
    }
    
    setOpen(false)
    setSField(defaultFields);
  }

  useEffect(() => {
    const q = query(collection(db, 'blogposts'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAllPosts(querySnapshot.docs.map(doc => {
        let item = doc.data();
        item.created = toDateTime(item.created.seconds);
        return item
      }))
    })

    return () => unsubscribe();
  },[])

  function toDateTime(secs) {
    let t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  // console.log('all the posty', allPosts.length)

  return (
    <div style={{ padding: "20px"}}>
      <Header as='h1' style={{fontSize: '42px'}}>Blog Page</Header>

      {
        allPosts.length > 0 ? allPosts.map((post) => {
          return <BlogPost post={post} />
        }) : "There are currently no posts."
      }

      <Modal
        // basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={ <Button color="green" size="massive" className="newpost-btn">+ New Post</Button> }
      >
        <Header icon>
          <Icon name='archive' />
          {/* Archive Old Messages */}
        </Header>

        <Modal.Content>
            
          <Form 
            size="big"
            onSubmit={handleSubmit}
            error={error}
          >
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name="pair"
              label='Currency Pair:'
              placeholder='BTC-USDT'
              value={sField.pair}
              onChange={(e,data) => updateSField("pair", data.value)}
            />
          </Form.Group>


          <Form.Group widths="5">
            <Form.Checkbox 
              toggle 
              label="Sup or Res?"
              checked={sField.supres}
              onClick={() => updateSField("supres",  !sField.supres)}
            />
            <Form.Checkbox 
              toggle 
              label="Instinct"
              checked={sField.inst}
              onClick={() => updateSField("inst",  !sField.inst)}
            />
            
          </Form.Group>
          {/* {error} */}
          <Message
            error
            header='Error Occurred'
            content="You forgot to fill out a field."
          />
          <Form.Field control={Button}>Add Trade</Form.Field>
          </Form>


        </Modal.Content>
        
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>

      </Modal>

    </div>
  )
}

export default Blog;
