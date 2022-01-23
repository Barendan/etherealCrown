import { Icon, Label, Menu, Table } from 'semantic-ui-react';

// Read Data into Table
// Each item has onclick edit / del
// onClick passed down from Parent

const TradeTable = ({data}, handleEdit, handleDel) => {
  const headerRow = ['ID', 'PAIR', 'BUYSELL', 'EXP. MOVE', 'EXP. TIME', 'CONF', 'INST', 'STATUS', 'CREATED'];

  const renderBodyRow = ({ id, pair, buysell, emove, etime, conf, inst, status, created}, i) => ({
    key: id || `row-${i}`,
    // warning: !!(status && status.match('Requires Action')),
    cells: [
      id.split('').splice(0,4) || 'No id specified',
      pair,
      buysell === true ? 'Buy' : 'Sell',
      emove,
      etime,
      conf,
      inst === true ? 'Yes' : 'No',
      status === true ? 'Done' : 'Pending',
      created.toString(),
    ],
  });
  
  return <>
    
    { data && 
      <div class="container">
        <table>
          <thead>
            <tr>
              { headerRow.map((item) => <th>{item}</th>) }
            </tr>
          </thead>
          <tbody>
            { data.map((trade) => {
              return (
                <tr>
                  <td>{trade.id.split('').splice(0,4)}</td>
                  <td>{trade.pair}</td>
                  <td style={{color: !!trade.buysell ? 'lightgreen' : 'red' }}>
                    {trade.buysell === true ? 'Buy' : 'Sell'}
                  </td>
                  <td>{trade.emove}</td>
                  <td>{trade.etime}</td>
                  <td>{trade.conf}</td>
                  <td>{trade.inst === true ? 'Yes' : 'No'}</td>
                  <td>{trade.status === true ? 'Done' : 'Pending'}</td>
                  <td>{trade.created.toString().split(' ').splice(1,4).join(' ')}</td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    }
    
    {/* Semantic UI table */}
    {/* { data && <Table 
        // basic="very" 
        padded="very" 
        sortable 
        selectable
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={data}
      /> 
    } */}
  </>
}

export default TradeTable;