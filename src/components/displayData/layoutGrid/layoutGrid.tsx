import {Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import {useEffect, useState} from "react";
import {IEmployee} from "../../../types/employee.types.ts";
import {GridRowDoubleClickEvent} from "@progress/kendo-react-all";
import {BudgetCell, CountryCell, PersonCell,} from '../../../custom-cells.tsx';

import {employees} from '../../../employees.ts';

const DATA_ITEM_KEY = 'id';
const SELECTED_FIELD = 'selected';

type Props = {
  selectedTab: number,
  client: (employee: IEmployee) => void,
}
export const LayoutGrid = ({selectedTab, client}: Props) => {

  const [data, setData] = useState<IEmployee[]>(employees)
  const handleDoubleClick = (event: GridRowDoubleClickEvent) => {
    client(event.dataItem)
  }

  useEffect(() => {
    setData(employees.slice(0, selectedTab + 10))
  }, [selectedTab])

  return <>
    <Grid
      style={{height: '500px'}}
      data={data}
      sortable={true}
      expandField="expanded"
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      onRowDoubleClick={handleDoubleClick}
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
          title="Contact Name"
          cells={{
            data: PersonCell,
          }}
          width="250px"
        />
        <Column
          field="job_title"
          title="Job Title"
          width="220px"
        />
        <Column
          field="country"
          title="Country"
          cells={{
            data: CountryCell,
          }}
          width="100px"
        />
        <Column
          field="is_online"
          title="Status"
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