import { Grid, GridColumn as Column } from "@progress/kendo-react-grid"
import { useEffect, useState } from "react"
import {
  GridRowDoubleClickEvent,
  GridSelectionChangeEvent,
} from "@progress/kendo-react-all"
import { IDeposit } from "../../types/deposit.types.ts"

const DATA_ITEM_KEY = "id"
const SELECTED_FIELD = "selected"

type Props = {
  selectDeposit: (data: IDeposit) => void
  deposits: IDeposit[]
  toChangeCheckbox?: boolean
}

export const ColumnMenu = () => {
  return <></>
}

export const LayoutGridDeposit = ({
  selectDeposit,
  deposits,
  toChangeCheckbox,
}: Props) => {
  const [data, setData] = useState<IDeposit[]>(deposits)
  const handleDoubleClick = (event: GridRowDoubleClickEvent) => {
    selectDeposit(event.dataItem)
  }

  useEffect(() => {
    setData(deposits)
  }, [deposits])

  const onSelectionChange = (e: GridSelectionChangeEvent) => {
    const newData = data.map((item: IDeposit) => {
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
    let newData: IDeposit[] = []

    if (toChangeCheckbox) {
      newData = data.map((item: IDeposit) => {
        return {
          ...item,
          selected: true,
        }
      })
    } else {
      newData = data.map((item: IDeposit) => {
        return {
          ...item,
          selected: false,
        }
      })
    }

    setData(newData)
  }, [toChangeCheckbox])

  return (
    <>
      <Grid
        style={{ height: "500px" }}
        data={data}
        sortable={true}
        expandField="expanded"
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        onRowDoubleClick={handleDoubleClick}
        onSelectionChange={onSelectionChange}
        size={"small"}
      >
        <Column
          filterable={true}
          field={SELECTED_FIELD}
          width={50}
          title={"12"}
        />
        <Column
          field="type_deposit"
          title={"Тип"}
          columnMenu={ColumnMenu}
          width="150px"
        />
        <Column
          field="area.all_square"
          title={"Площадь"}
          columnMenu={ColumnMenu}
          width="150px"
        />
        <Column
          field="information.collateral"
          title={"Информация"}
          columnMenu={ColumnMenu}
          width="150px"
        />
        <Column
          field="parameters.brand"
          title={"Параметр"}
          columnMenu={ColumnMenu}
          width="150px"
        />
        <Column
          field="registration_address.country"
          title={"Адрес"}
          columnMenu={ColumnMenu}
          width="150px"
        />
      </Grid>
    </>
  )
}
