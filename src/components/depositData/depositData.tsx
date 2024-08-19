import { Checkbox } from "@progress/kendo-react-all"
import { Button } from "@progress/kendo-react-buttons"
import {
  AlignJustify,
  CirclePlus,
  LayoutGrid,
  RefreshCcw,
  Trash2,
} from "lucide-react"
import stylesAction from "../displayData/displayAction/displayAction.module.scss"
import { useState } from "react"
import { IDeposit } from "../../types/deposit.types.ts"
import { LayoutGridDeposit } from "./layoutGridDeposit.tsx"

type Props = {
  addDeposit: () => void
  setDeposit: (data: IDeposit) => void
}

export const DepositData = ({ addDeposit, setDeposit }: Props) => {
  const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)
  const [checkedDeposit, setCheckedDeposit] = useState<IDeposit[]>([])
  const [deposits, setDeposits] = useState<IDeposit[]>(
    JSON.parse(localStorage.getItem("deposits") ?? "[]"),
  )

  const handleSelectDepositData = (data: IDeposit) => {
    setDeposit(data)
  }

  const handleCheckedDepositData = (data: IDeposit[]) => {
    setCheckedDeposit(data)
  }

  const handleSelectCheckbox = (e: any) => {
    setValueCheckbox(e?.value)
  }

  const handleDeleteDeposit = (items: IDeposit[]) => {
    if (!confirm("Действительно хотите удалить?")) return

    let newData: IDeposit[] = []

    items.forEach((item) => {
      if (item.selected) {
        newData = deposits.filter((dep) => item.id !== dep.id)
      }
    })

    localStorage.setItem("deposits", JSON.stringify(newData))
    setDeposits(newData)
  }
  return (
    <>
      <div className={stylesAction.actions}>
        <div className={stylesAction.actions__block}>
          <Checkbox
            className={stylesAction.actions_checkbox}
            onChange={handleSelectCheckbox}
          />
          <Button className="flex-center btn_small" fillMode={"flat"}>
            <RefreshCcw size={12} />
            <span>Обновить</span>
          </Button>
          <Button
            className="flex-center btn_small"
            fillMode={"flat"}
            onClick={addDeposit}
          >
            <CirclePlus size={12} />
            <span>Новый залог</span>
          </Button>
          <Button
            className="flex-center btn_small"
            fillMode={"flat"}
            onClick={() => handleDeleteDeposit(checkedDeposit)}
          >
            <Trash2 size={12} />
            <span>Удалить</span>
          </Button>
        </div>

        <div className="flex-center">
          <Button className={stylesAction.active}>
            <AlignJustify size={12} color={"#fff"} />
          </Button>
          <Button className={stylesAction.type_btn}>
            <LayoutGrid size={12} color={"#000"} />
          </Button>
        </div>
      </div>

      <LayoutGridDeposit
        selectDeposit={handleSelectDepositData}
        checkDeposit={handleCheckedDepositData}
        deposits={deposits}
        toChangeCheckbox={valueCheckbox}
      />
    </>
  )
}
