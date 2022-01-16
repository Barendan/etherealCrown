import { Icon, Label, Menu, Table } from 'semantic-ui-react';

// Read Data into Table
// Each item has onclick edit / del
// onClick passed down from Parent

const TradeTable = ({data}, handleEdit, handleDel) => {
  const headerRow = ['ID', 'PAIR', 'BUYSELL', 'EXP. MOVE', 'EXP. TIME', 'CONF', 'INST', 'STATUS', 'CREATED', ''];

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
  
  // console.log('check date', data)

  return <>
    { data && <Table 
        // basic="very" 
        padded="very" 
        sortable 
        selectable
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={data}
      /> 
    }
  </>
}

export default TradeTable;