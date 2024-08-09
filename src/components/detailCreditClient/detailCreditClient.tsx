import {Tabs} from "../tabs/tabs.tsx"
import {TabStripTab} from "@progress/kendo-react-layout"
import {MouseEvent, useRef, useState} from "react"
import styles from './detailCreditClient.module.scss'
import {DropDownList, Switch, TextArea, TextBox} from "@progress/kendo-react-all";
import {Button} from "@progress/kendo-react-buttons";

type Props = {
  toggle: () => void
}

export const DetailCreditClient = ({toggle}: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const itemsRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <>
      <div className={styles.content_block}>
        <div>
          <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
            <TabStripTab title="Ввод залога" />
            <TabStripTab title="Комментарии" />
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
              {new Array(20).fill(2).map((_, index) => (
                <div className={styles.type_credit__item} key={index}>
                  <span className={styles.type_credit__item_number}>{index + 1}</span>
                  <span className={styles.type_credit__item_name}>Автомашина (Банк {index + 1})</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.information}>
            <span className={styles.information__title}>Информация</span>
            <div className={styles.information__form}>
              <div className={styles.information__form_top}>
                <div className={styles.information__block_input}>
                  <p className={styles.information__form_top_collateral}>
                    <span>Залоговая стоимость</span>
                    <TextBox placeholder='Введите стоимость' className={styles.input_collateral}/>
                  </p>
                  <p className={styles.information__form_top_market}>
                    <span>Рыночная стоимость</span>
                    <TextBox placeholder='Введите стоимость' className={styles.input_market}/>
                  </p>
                </div>
                <p className={styles.information__form_top_pledger}>
                  <span>Залогодатель</span>
                  <Switch offLabel={'Нет'} onLabel={'Да'}/>
                </p>
              </div>
              <div className={styles.information__form_bottom}>
                <p className={styles.information__form_bottom_description}>
                  <span>Описание</span>
                  <TextArea resizable={'none'} placeholder='Введите описание' className={styles.textarea_description}/>
                </p>
                <p className={styles.information__form_bottom_owner}>
                  Является собственностью
                  <Switch offLabel={'Нет'} onLabel={'Да'}/>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.area}>
            <span className={styles.area__title}>Площадь</span>
            <div className={styles.area__top_block}>
              <p className={styles.area__all_area}>
                <span>Общая площадь (м&sup2;)</span>
                <TextBox placeholder='-' className={styles.input_all_area}/>
              </p>
              <p className={styles.area__living_area}>
                <span>Жил. площадь (м&sup2;)</span>
                <TextBox placeholder='-' className={styles.input_living_area}/>
              </p>
              <p className={styles.area__land}>
                <span>Земельный участок (м&sup2;)</span>
                <TextBox placeholder='-' className={styles.input_land}/>
              </p>
              <p className={styles.area__documents}>
                <span>Документы</span>
                <DropDownList className={styles.input_documents} data={['Договор', 'Договор2']}/>
              </p>
            </div>
            <div className={styles.area__bottom_block}>
              <p className={styles.area__additionally}>
                <span>Дополнительно</span>
                <TextArea resizable={'none'} placeholder='Введите данные' className={styles.textarea_additionally}/>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btn_footer}>
          <Button className={styles.btn_cancel} fillMode={'flat'} onClick={() => toggle()}>Отменить</Button>
          <Button className={styles.btn_add} fillMode={'flat'} onClick={() => toggle()}>Добавить</Button>
        </div>
      </div>
    </>
  )
}
