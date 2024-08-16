import { Tabs } from "../ui/tabs/tabs.tsx"
import { TabStripTab } from "@progress/kendo-react-layout"
import { FormEvent, useRef, useState } from "react"
import styles from "./detailCreditClient.module.scss"
import { Button } from "@progress/kendo-react-buttons"
import { Information } from "./information/information.tsx"
import { Area } from "./area/area.tsx"
import { RegistrationAddress } from "./registrationAddress/registrationAddress.tsx"
import { Parameters } from "./parameters/parameters.tsx"
import { deposits, IDeposit } from "../../assets/data/deposits.ts"
import { useScroll } from "../../hooks/useScroll"
import { BodyType } from "../../types/submitDeposit.types.ts"

type Props = {
  toggle: () => void
}

export const DetailCreditClient = ({ toggle }: Props) => {
  const itemsRef = useRef<HTMLDivElement | null>(null)
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [selectedDeposit, setSelectedDeposit] = useState<string>("00")

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useScroll(itemsRef)

  const getItemClasses = (itemNumber: string) => {
    return `${styles.type_credit__item} ${selectedDeposit === itemNumber ? styles.type_credit__item_active : ""}`
  }

  const [formData, setFormData] = useState({
    area_02: {
      all_square: "",
      living_area: "",
      land: "",
      documents: "",
      additionally: "",
    },
    area_05: {
      all_square: "",
      living_area: "",
      land: "",
      documents: "",
      additionally: "",
    },
    parameters_05: {
      brand: "",
      model: "",
      color: "",
      number_engine: "",
      year_of_issue: "",
      state_passport: "",
      technical_passport: "",
      number_body: "",
      register_place: "",
      owner: "",
      type_body: "",
      additionally: "",
    },
    registration_address: {
      country: "",
      region: "",
      village: "",
      street: "",
      quarter: "",
      house: "",
      apartment: "",
    },
    registration_address_02: {
      country: "",
      region: "",
      village: "",
      street: "",
      quarter: "",
      house: "",
      apartment: "",
    },
    registration_address_03: {
      country: "",
      region: "",
      village: "",
      street: "",
      quarter: "",
      house: "",
      apartment: "",
    },
    information: {
      collateral: "",
      market: "",
      description: "",
      pledger: "",
      owner: "",
    },
    information_00: {
      collateral: "",
      market: "",
      description: "",
      pledger: "",
      owner: "",
    },
    information_03: {
      collateral: "",
      market: "",
      description: "",
      pledger: "",
      owner: "",
    },
    information_04: {
      collateral: "",
      market: "",
      description: "",
      pledger: "",
      owner: "",
    },
    information_01: {
      collateral: "",
      market: "",
      description: "",
      pledger: "",
      owner: "",
    },
  })

  const handleInputChange = (
    name: string,
    value: string | number | readonly string[] | undefined,
  ) => {
    const [parent, child] = name.split(".")

    setFormData((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent as keyof typeof prevState],
        [child]: value,
      },
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement> | undefined) => {
    e?.preventDefault()

    const body: BodyType = {} as BodyType
    body.type_deposit = selectedDeposit

    if (selectedDeposit === "05") {
      body.area = formData.area_05
      body.parameters = formData.parameters_05
    }

    if (selectedDeposit === "04") {
      body.information = formData.information_04
    }

    if (selectedDeposit === "03") {
      body.registration_address = formData.registration_address_03
      body.information = formData.information_03
    }

    if (selectedDeposit === "02") {
      body.area = formData.area_02
      body.registration_address = formData.registration_address_02
    }

    if (selectedDeposit === "01") {
      body.information = formData.information_01
    }

    if (selectedDeposit === "00") {
      body.information = formData.information
      body.registration_address = formData.registration_address
    }

    const deposits = JSON.parse(localStorage.getItem("deposits") || "[]")
    deposits.push(body)

    localStorage.setItem("deposits", JSON.stringify(deposits))
  }

  return (
    <>
      <div className={styles.content_block}>
        <div>
          <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
            <TabStripTab title="Ввод залога" />
            <TabStripTab title="Комментарии" />
            <TabStripTab title="Документы" />
          </Tabs>

          <div className={styles.type_credit}>
            <span className={styles.type_credit__title}>Вид залога</span>
            <div
              ref={itemsRef}
              className={`${selectedDeposit === "00" ? styles.type_credit__items_default : styles.type_credit__items}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {deposits.map((_item: IDeposit) => (
                <div
                  className={getItemClasses(_item.number)}
                  key={_item.id}
                  onClick={() => setSelectedDeposit(_item.number)}
                >
                  <span className={styles.type_credit__item_number}>
                    {_item.number}
                  </span>
                  <span className={styles.type_credit__item_name}>
                    {_item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <form action="#">
            {selectedDeposit === "05" ? (
              <>
                <Area
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
                <Parameters
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
              </>
            ) : selectedDeposit === "02" ? (
              <>
                <Area
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
                <RegistrationAddress
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
              </>
            ) : selectedDeposit === "03" ? (
              <>
                <RegistrationAddress
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
                <Information
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
              </>
            ) : selectedDeposit === "04" ? (
              <Information
                onChange={handleInputChange}
                value={formData}
                selectedDeposit={selectedDeposit}
              />
            ) : selectedDeposit === "00" ? (
              <>
                <Information
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
                <RegistrationAddress
                  onChange={handleInputChange}
                  value={formData}
                  selectedDeposit={selectedDeposit}
                />
              </>
            ) : selectedDeposit === "01" ? (
              <Information
                onChange={handleInputChange}
                value={formData}
                selectedDeposit={selectedDeposit}
              />
            ) : (
              <>Залог</>
            )}
          </form>
        </div>
        <div className={styles.btn_footer}>
          <Button
            className={styles.btn_cancel}
            fillMode={"flat"}
            onClick={() => toggle()}
          >
            Отменить
          </Button>
          <Button
            className={styles.btn_add}
            fillMode={"flat"}
            onClick={handleSubmit}
          >
            Добавить
          </Button>
        </div>

        {selectedDeposit === "00" && <div className={styles.background}></div>}
      </div>
    </>
  )
}
