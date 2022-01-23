import { Container, Header, Divider } from 'semantic-ui-react';

const BlogPost = ({post}) => <>
  <Container text>
    <Header as='h1'>{post.title}</Header>
    <span>{post.created}</span>
    <Divider hidden />

    <p>{post && post.content}</p>

    {console.log('wats posty', post.content)}

  </Container>
</>

  // <Header as='h2'>Craziest Post!</Header>
  // <p>
  //   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
  //   ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
  //   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
  //   ultricies nec, pellentesque eu, pretium quis, sem.
  // </p>
  // <p>
  //   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
  //   ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
  //   magnis dis parturient montes, nascetur ridiculus mus. 
  // </p>

  // <Divider hidden />

export default BlogPost;