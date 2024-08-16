import styles from "./area.module.scss"
import {
  DropDownList,
  DropDownListChangeEvent,
  TextArea,
  TextAreaChangeEvent,
  TextBox,
  TextBoxChangeEvent,
} from "@progress/kendo-react-all"
import { useEffect, useState } from "react"

type Props = {
  onChange: (
    name: string,
    value: string | readonly string[] | number | undefined,
  ) => void
  value?: any
  selectedDeposit: string
}

export const Area = ({ onChange, value, selectedDeposit }: Props) => {
  const [parent, setParent] = useState<string>("area")
  const handleChange = (
    e: TextBoxChangeEvent | TextAreaChangeEvent | DropDownListChangeEvent,
    name: string,
  ) => {
    onChange(name, e.target.value)
  }

  useEffect(() => {
    if (selectedDeposit !== "00") {
      setParent("area_" + selectedDeposit)
    }
  }, [selectedDeposit])

  return (
    <>
      <div className={styles.area}>
        <span className={styles.area__title}>Площадь</span>
        <div className={styles.area__top_block}>
          <p className={styles.area__all_area}>
            <span>Общая площадь (м&sup2;)</span>
            <TextBox
              placeholder="-"
              className={styles.input_all_area}
              value={value.all_square}
              onChange={(e) => handleChange(e, `${parent}.all_square`)}
            />
          </p>
          <p className={styles.area__living_area}>
            <span>Жил. площадь (м&sup2;)</span>
            <TextBox
              placeholder="-"
              className={styles.input_living_area}
              value={value.living_area}
              onChange={(e) => handleChange(e, `${parent}.living_area`)}
            />
          </p>
          <p className={styles.area__land}>
            <span>Земельный участок (м&sup2;)</span>
            <TextBox
              placeholder="-"
              className={styles.input_land}
              value={value.land}
              onChange={(e) => handleChange(e, `${parent}.land`)}
            />
          </p>
          <p className={styles.area__documents}>
            <span>Документы</span>
            <DropDownList
              className={styles.input_documents}
              data={["Договор", "Договор2"]}
              value={value.documents}
              onChange={(e) => handleChange(e, `${parent}.documents`)}
            />
          </p>
        </div>
        <div className={styles.area__bottom_block}>
          <p className={styles.area__additionally}>
            <span>Дополнительно</span>
            <TextArea
              resizable={"none"}
              placeholder="Введите данные"
              className={styles.textarea_additionally}
              value={value.additionally}
              onChange={(e) => handleChange(e, `${parent}.additionally`)}
            />
          </p>
        </div>
      </div>
    </>
  )
}
