import { Icon, Label, Menu, Table } from 'semantic-ui-react';

// Read Data into Table
// Each item has onclick edit / del
// onClick passed down from Parent

const TradeTable = (data, handleEdit, handleDel) => {
  const headerRow = ['ID', 'PAIR', 'BUYSELL', 'EXP. MOVE', 'EXP. TIME', 'CONF', 'INST', 'STATUS', 'DATE', ''];

  const renderBodyRow = ({ id, pair, buysell, emove, etime, conf, inst, status, date}, i) => ({
    key: id || `row-${i}`,
    // warning: !!(status && status.match('Requires Action')),
    cells: [
      id || 'No id specified',
      pair,
      buysell === true ? 'Buy' : 'Sell',
      emove,
      etime,
      conf,
      inst === true ? 'Yes' : 'No',
      status === true ? 'Done' : 'Pending',
      date,
    ],
  });
  
  return <>
    { data && <Table 
        // basic="very" 
        padded="very" 
        sortable 
        selectable
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={data.tradeData}
      /> 
    }
  </>
}

export default TradeTable;