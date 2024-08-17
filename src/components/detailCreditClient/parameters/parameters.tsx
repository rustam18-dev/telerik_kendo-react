import styles from "./parameters.module.scss"
import {
  TextArea,
  TextAreaChangeEvent,
  TextBox,
  TextBoxChangeEvent,
} from "@progress/kendo-react-all"
import { useEffect, useState } from "react"

type Props = {
  onChange: (name: string, value: any) => void
  value: any
  selectedDeposit: string
}

export const Parameters = ({
  onChange,
  value = {},
  selectedDeposit,
}: Props) => {
  const [parent, setParent] = useState<string>("parameters")
  const [val, setVal] = useState<any>(value[parent] || {})

  const handleChange = (
    e: TextBoxChangeEvent | TextAreaChangeEvent,
    name: string,
  ) => {
    onChange(name, e.target.value)
  }

  useEffect(() => {
    setParent(
      selectedDeposit !== "00" ? `parameters_${selectedDeposit}` : "parameters",
    )
  }, [selectedDeposit])

  useEffect(() => {
    setVal(value[parent] || {})
  }, [parent, value])

  return (
    <div className={styles.parameters}>
      <span className={styles.parameter__title}>Параметры</span>
      <div className={styles.parameters__items}>
        <p className={styles.parameters__brand}>
          <span>Марка</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_brand}
            value={val.brand || ""}
            onChange={(e) => handleChange(e, `${parent}.brand`)}
          />
        </p>
        <p className={styles.parameters__model}>
          <span>Модель</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_model}
            value={val.model || ""}
            onChange={(e) => handleChange(e, `${parent}.model`)}
          />
        </p>
        <p className={styles.parameters__color}>
          <span>Цвет</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_color}
            value={val.color || ""}
            onChange={(e) => handleChange(e, `${parent}.color`)}
          />
        </p>
        <p className={styles.parameters__number_engine}>
          <span>№ двигатель</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_number_engine}
            value={val.number_engine || ""}
            onChange={(e) => handleChange(e, `${parent}.number_engine`)}
          />
        </p>
        <p className={styles.parameters__year_of_issue}>
          <span>Год выпуска</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_year_of_issue}
            value={val.year_of_issue || ""}
            onChange={(e) => handleChange(e, `${parent}.year_of_issue`)}
          />
        </p>
        <p className={styles.parameters__state_passport}>
          <span>Гос.номер</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_state_passport}
            value={val.state_passport || ""}
            onChange={(e) => handleChange(e, `${parent}.state_passport`)}
          />
        </p>
        <p className={styles.parameters__technical_passport}>
          <span>Тех.паспорт</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_technical_passport}
            value={val.technical_passport || ""}
            onChange={(e) => handleChange(e, `${parent}.technical_passport`)}
          />
        </p>
        <p className={styles.parameters__number_body}>
          <span>№ кузова</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_number_body}
            value={val.number_body || ""}
            onChange={(e) => handleChange(e, `${parent}.number_body`)}
          />
        </p>
        <p className={styles.parameters__register_place}>
          <span>Место регистрации</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_register_place}
            value={val.register_place || ""}
            onChange={(e) => handleChange(e, `${parent}.register_place`)}
          />
        </p>
        <p className={styles.parameters__owner}>
          <span>Владелец</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_owner}
            value={val.owner || ""}
            onChange={(e) => handleChange(e, `${parent}.owner`)}
          />
        </p>
        <p className={styles.parameters__type_body}>
          <span>Тип кузова</span>
          <TextBox
            placeholder={"-"}
            className={styles.input_type_body}
            value={val.type_body || ""}
            onChange={(e) => handleChange(e, `${parent}.type_body`)}
          />
        </p>
        <p className={styles.parameters__additionally}>
          <span>Дополнительно</span>
          <TextArea
            resizable={"none"}
            placeholder={"Введите данные"}
            className={styles.input_additionally}
            value={val.additionally || ""}
            onChange={(e) => handleChange(e, `${parent}.additionally`)}
          />
        </p>
      </div>
    </div>
  )
}
