import { useState, useEffect } from 'react';
import TradeForm from '../components/tradeForm';
import TradeTable from '../components/tradeTable';
import { Container, Header, Divider, Button, Modal, Icon } from 'semantic-ui-react';


const tradeData = [
  { 
    id: 1,
    pair: 'SOS-USDT',
    buysell: true, 
    emove: 10, // percentage 
    etime: 3, // hours
    conf: 8, // confidence level 1-10
    instinct: false,
    pending: false,
    supres: false,
    success: true,
    amove: 15,
    atime: 5,
    reversed: true,
    date: "12/16/2021"
  },
  { 
    id: 2,
    pair: 'EOS-USDT',
    buysell: true, 
    emove: 20, // percentage 
    etime: 6, // hours
    conf: 6, // confidence level 1-10
    instinct: false,
    pending: true,
    supres: false,
    success: true,
    amove: 10,
    atime: 16,
    reversed: false,
    date: "12/20/2021"
  },
  { 
    id: 3,
    pair: 'ADA-USDT',
    buysell: false, 
    emove: 20, // percentage 
    etime: 12, // hours
    conf: 6, // confidence level 1-10
    instinct: false,
    pending: true,
    supres: false,
    success: true,
    amove: 12,
    atime: 10,
    reversed: false,
    date: "12/25/2021"
  },
  { 
    id: 4,
    pair: 'BTC-USDT',
    buysell: true, 
    emove: 10, // percentage 
    etime: 24, // hours
    conf: 7, // confidence level 1-10
    instinct: true,
    pending: false,
    supres: false,
    success: true,
    amove: 4,
    atime: 2,
    reversed: true,
    date: "12/27/2021"
  },
  { 
    id: 5,
    pair: 'ETH-USDT',
    buysell: false, 
    emove: 14, // percentage 
    etime: 2, // hours
    conf: 6, // confidence level 1-10
    instinct: true,
    pending: false,
    supres: true,
    success: true,
    amove: 10,
    atime: 6,
    reversed: false,
    date: "12/30/2021"
  }
]

const TradeStop = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container >
      <div style={{ padding: "20px"}}>
        <Header as="h1" style={{fontSize: '42px'}}>TradeStop</Header>
        <Divider section />

        <TradeTable data={tradeData} />

        <Modal
          // basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='tiny'
          trigger={ <Button color="green" size="massive" className="newpost-btn">+ New Post</Button> }
        >
          <Header icon>
            <Icon name='archive' />
            {/* Archive Old Messages */}
          </Header>

          <Modal.Content>
            <TradeForm />
            {/* <p>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p> */}
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
    </Container>
  )
}

export default TradeStop;