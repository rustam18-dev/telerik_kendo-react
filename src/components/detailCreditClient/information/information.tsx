import styles from "./information.module.scss"
import {
  Switch,
  TextArea,
  TextAreaChangeEvent,
  TextBox,
  TextBoxChangeEvent,
} from "@progress/kendo-react-all"
import { useEffect, useState } from "react"

type Props = {
  onChange: (
    name: string,
    // value: string | readonly string[] | number | undefined,
    value: string,
  ) => void
  value?: any
  selectedDeposit: string
}

export const Information = ({
  onChange,
  value = {},
  selectedDeposit,
}: Props) => {
  const [parent, setParent] = useState<string>("information")
  const [val, setVal] = useState<any>(value[parent] || {})

  const handleChange = (e: TextBoxChangeEvent, name: string) => {
    onChange(name, e.syntheticEvent.target.value)
  }

  const handleChangeTextArea = (e: TextAreaChangeEvent, name: string) => {
    console.log("handleChangeTextArea ", typeof e.target.value)
    onChange(name, e.target.value as string)
  }

  useEffect(() => {
    setParent(
      selectedDeposit !== "00"
        ? `information_${selectedDeposit}`
        : "information",
    )
  }, [selectedDeposit])

  useEffect(() => {
    setVal(value[parent] || {})
  }, [parent, value])

  return (
    <div className={styles.information}>
      <span className={styles.information__title}>Информация</span>
      <div className={styles.information__form}>
        <div className={styles.information__form_top}>
          <div className={styles.information__block_input}>
            <p className={styles.information__form_top_collateral}>
              <span>Залоговая стоимость</span>
              <TextBox
                placeholder="Введите стоимость"
                className={styles.input_collateral}
                value={val.collateral || ""}
                onChange={(e) => handleChange(e, `${parent}.collateral`)}
              />
            </p>
            <p className={styles.information__form_top_market}>
              <span>Рыночная стоимость</span>
              <TextBox
                placeholder="Введите стоимость"
                className={styles.input_market}
                value={val.market || ""}
                onChange={(e) => handleChange(e, `${parent}.market`)}
              />
            </p>
          </div>
          <p className={styles.information__form_top_pledger}>
            <span>Залогодатель</span>
            <Switch offLabel={"Нет"} onLabel={"Да"} />
          </p>
        </div>
        <div className={styles.information__form_bottom}>
          <p className={styles.information__form_bottom_description}>
            <span>Описание</span>
            <TextArea
              resizable={"none"}
              placeholder="Введите описание"
              className={styles.textarea_description}
              value={val.description || ""}
              onChange={(e) => handleChangeTextArea(e, `${parent}.description`)}
            />
          </p>
          <p className={styles.information__form_bottom_owner}>
            Является собственностью
            <Switch offLabel={"Нет"} onLabel={"Да"} />
          </p>
        </div>
      </div>
    </div>
  )
}
