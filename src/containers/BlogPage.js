import { useState, useEffect } from 'react';
import BlogPost from '../components/blogPost';
import { Container, Header, Divider, Button, Modal, Icon } from 'semantic-ui-react';

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

// Takes in data from database
// Uses component to render each post
// Add button only shows if admin logged in flag
// Add button triggers modal with form to open
// Submit button updates database and then state

const Blog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header as='h1'>Blog Page</Header>

      <Container text>
        <Header as='h2'>Craziest Post!</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus.
        </p>
      </Container>
      
      <Divider hidden />
      <Divider hidden />

      <Container text>
        <Header as='h2'>Craziest Post!</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus.
        </p>
      </Container>

      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={ <Button color="green" size="massive" className="newpost-btn">+ New Post</Button> }
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>

        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
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

    </>
  )
}

export default Blog;
