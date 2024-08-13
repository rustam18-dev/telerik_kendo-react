import {Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import {useEffect, useState} from "react";
import {IEmployee} from "../../../types/employee.types.ts";
import {GridRowDoubleClickEvent, GridSelectionChangeEvent} from "@progress/kendo-react-all";
import {BudgetCell, CountryCell, PersonCell,} from '../../../custom-cells.tsx';


const DATA_ITEM_KEY = 'id';
const SELECTED_FIELD = 'selected';

type Props = {
  client: (employee: IEmployee) => void,
  employees: IEmployee[],
  toChangeCheckbox: boolean
}

export const ColumnMenu = () => {
  return <>

  </>
}

export const LayoutGrid = ({client, employees, toChangeCheckbox}: Props) => {
  const [data, setData] = useState<IEmployee[]>(employees)
  const handleDoubleClick = (event: GridRowDoubleClickEvent) => {
    client(event.dataItem)
  }

  useEffect(() => {
    setData(employees)
  }, [employees])


  const onSelectionChange = (e: GridSelectionChangeEvent) => {
    const newData = data.map((item: IEmployee) => {
      if (item.id === e.dataItem.id) {
         if (!item.selected) {
           item.selected = true
         } else {
           delete item.selected
         }
      }

      return item
    })

    setData(newData)
  }

  useEffect(() => {
    let newData: IEmployee[] = []
    
    if (toChangeCheckbox) {
      newData = data.map((item: IEmployee) => {
        return {
          ...item,
          selected: true
        }
      })
    } else {
      newData = data.map((item: IEmployee) => {
        return {
          ...item,
          selected: false
        }
      })
    }
    
    setData(newData)
    
  }, [toChangeCheckbox]);

  return <>
    <Grid
      style={{height: '500px'}}
      data={data}
      sortable={true}
      expandField="expanded"
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      onRowDoubleClick={handleDoubleClick}
      onSelectionChange={onSelectionChange}
      size={'small'}
    >
      <Column
        filterable={false}
        field={SELECTED_FIELD}
        width={50}
      />

      <Column>
        <Column
          field="full_name"
          title={'ФИО'}
          columnMenu={ColumnMenu}
          cells={{
            data: PersonCell,
          }}
          width="250px"
        />
        <Column
          columnMenu={ColumnMenu}
          field="job_title"
          title="Место работы"
          width="220px"
        />
        <Column
          columnMenu={ColumnMenu}
          field="country"
          title="Страна"
          cells={{
            data: CountryCell,
          }}
          width="100px"
        />
        <Column
          columnMenu={ColumnMenu}
          field="is_online"
          title="Статус"
          filter="text"
          cells={{
            data: BudgetCell,
          }}
          width="100px"
        />
      </Column>
    </Grid>
  </>
}