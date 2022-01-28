import React from 'react';
import _ from 'lodash';
import { Header, Table, Image } from 'semantic-ui-react'

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.sortableData.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.sortableData, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

const PeopleList = ({data}) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    sortableData: tableData,
    direction: null,
  })
  const { column, sortableData, direction } = state;

  return (
    <div className="peo-list">
      <Table sortable selectable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ fontSize: '1.7rem'}}
              sorted={column === 'name' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >
              Person List
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {data.map(({firstName, lastName, career, gender}, i) => (
            <Table.Row key={i}>
              
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={ gender === 'female' ? '/fem1.png' : '/male1.png'} rounded size='mini' />
                  <Header.Content>
                  {firstName} {lastName}
                  <Header.Subheader>{career}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            
            </Table.Row>
          ))}


        </Table.Body>
      </Table>
    </div>
  )
}

export default PeopleList;