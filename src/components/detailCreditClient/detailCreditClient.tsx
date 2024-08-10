import {Tabs} from "../tabs/tabs.tsx"
import {TabStripTab} from "@progress/kendo-react-layout"
import {MouseEvent, useRef, useState} from "react"
import styles from './detailCreditClient.module.scss'
import {Button} from "@progress/kendo-react-buttons";
import {Information} from "./information/information.tsx";
import {Area} from "./area/area.tsx";
import {RegistrationAddress} from "./registrationAddress/registrationAddress.tsx";
import {Parameters} from "./parameters/parameters.tsx";

type Props = {
  toggle: () => void
}

interface IDeposit {
  id: number,
  number: string,
  title: string
}

const deposits: IDeposit[] = [
  {
    id: 1,
    number: '01',
    title: 'Амволи Камматбахо'
  },
  {
    id: 2,
    number: '02',
    title: 'Амволи гайриманкул'
  },
  {
    id: 3,
    number: '03',
    title: 'Амволи хона'
  },
  {
    id: 4,
    number: '04',
    title: 'Автомашина (ихтиёрдори)'
  },
  {
    id: 5,
    number: '05',
    title: 'Автомашина (Банк)'
  },
]

export const DetailCreditClient = ({toggle}: Props) => {
  const itemsRef = useRef<HTMLDivElement | null>(null)

  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [selectedDeposit, setSelectedDeposit] = useState<number | string>('01')

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemsRef.current) return

    setIsMouseDown(true)
    setStartX(e.pageX - itemsRef.current.offsetLeft)
    setScrollLeft(itemsRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !itemsRef.current) return

    e.preventDefault()
    const x = e.pageX - itemsRef.current.offsetLeft
    const walk = (x - startX) * 1.3
    itemsRef.current.scrollLeft = scrollLeft - walk
  }

  const getItemClasses = (itemNumber: string) => {
    return `${styles.type_credit__item} ${
      selectedDeposit === itemNumber ? styles.type_credit__item_active : ''
    }`;
  };

  return (
    <>
      <div className={styles.content_block}>
        <div>
          <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
            <TabStripTab title="Ввод залога"/>
            <TabStripTab title="Комментарии"/>
            <TabStripTab title="Документы"/>
          </Tabs>

          <div className={styles.type_credit}>
            <span className={styles.type_credit__title}>Вид залога</span>
            <div
              ref={itemsRef}
              className={styles.type_credit__items}
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
                  <span className={styles.type_credit__item_number}>{_item.number}</span>
                  <span className={styles.type_credit__item_name}>{_item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedDeposit === '05' ? (
            <>
              <Area/>
              <Parameters/>
            </>
          ) : selectedDeposit === '02' ? (
            <>
              <Area/>
              <RegistrationAddress/>
            </>
          ) : selectedDeposit === '03' ? (
            <>
              <RegistrationAddress/>
              <Information/>
            </>
          ) : (
            <>
              <Information/>
              <RegistrationAddress/>
            </>
          )}

        </div>
        <div className={styles.btn_footer}>
          <Button className={styles.btn_cancel} fillMode={'flat'} onClick={() => toggle()}>Отменить</Button>
          <Button className={styles.btn_add} fillMode={'flat'} onClick={() => toggle()}>Добавить</Button>
        </div>
      </div>
    </>
  )
}
