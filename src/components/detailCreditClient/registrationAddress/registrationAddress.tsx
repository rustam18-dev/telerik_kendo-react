import styles from "./registrationAddress.module.scss"
import {
  DropDownList,
  DropDownListChangeEvent,
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

export const RegistrationAddress = ({
  onChange,
  value = {},
  selectedDeposit,
}: Props) => {
  const [parent, setParent] = useState<string>("registration_address")
  const [val, setVal] = useState<any>(value[parent] || {})

  const handleChange = (
    e: TextBoxChangeEvent | DropDownListChangeEvent,
    name: string,
  ) => {
    onChange(name, e.target.value)
  }

  useEffect(() => {
    setParent(
      selectedDeposit !== "00"
        ? `registration_address_${selectedDeposit}`
        : "registration_address",
    )
  }, [selectedDeposit])

  useEffect(() => {
    setVal(value[parent] || {})
  }, [parent, value])

  return (
    <div className={styles.registration_address}>
      <span className={styles.registration_address__title}>
        Адрес регистрации
      </span>
      <div className={styles.registration_address__items}>
        <p className={styles.registration_address__country}>
          <span>Страна</span>
          <DropDownList
            defaultValue={"Республика Таджикистан"}
            className={styles.input_country}
            data={["Республика Таджикистан", "Другой вариант"]} // замените данные на реальные
            value={val.country || "Республика Таджикистан"}
            onChange={(e) => handleChange(e, `${parent}.country`)}
          />
        </p>
        <p className={styles.registration_address__region}>
          <span>Область / Регион</span>
          <DropDownList
            defaultValue={"Согдийская область"}
            className={styles.input_region}
            data={["Согдийская область", "Другой вариант"]} // замените данные на реальные
            value={val.region || "Согдийская область"}
            onChange={(e) => handleChange(e, `${parent}.region`)}
          />
        </p>
        <p className={styles.registration_address__village}>
          <span>Село</span>
          <DropDownList
            defaultValue={"-"}
            className={styles.input_village}
            data={["-", "Другой вариант"]} // замените данные на реальные
            value={val.village || "-"}
            onChange={(e) => handleChange(e, `${parent}.village`)}
          />
        </p>
        <p className={styles.registration_address__street}>
          <span>Улица</span>
          <TextBox
            placeholder={"И.Сомони"}
            className={styles.input_street}
            value={val.street || ""}
            onChange={(e) => handleChange(e, `${parent}.street`)}
          />
        </p>
        <p className={styles.registration_address__quarter}>
          <span>Квартал</span>
          <TextBox
            placeholder={"Центральный"}
            className={styles.input_quarter}
            value={val.quarter || ""}
            onChange={(e) => handleChange(e, `${parent}.quarter`)}
          />
        </p>
        <div className={styles.registration_address__block_house}>
          <p className={styles.registration_address__house}>
            <span>Дом</span>
            <TextBox
              placeholder={"120"}
              className={styles.input_house}
              value={val.house || ""}
              onChange={(e) => handleChange(e, `${parent}.house`)}
            />
          </p>
          <p className={styles.registration_address_apartment}>
            <span>Кв</span>
            <TextBox
              placeholder={"20"}
              className={styles.input_apartment}
              value={val.apartment || ""}
              onChange={(e) => handleChange(e, `${parent}.apartment`)}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
