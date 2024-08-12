import {Button} from "@progress/kendo-react-buttons";
import {AlignStartVertical, CirclePlus, LayoutGrid, Pencil, RefreshCcw, Trash2} from "lucide-react";
import styles from './tableAction.module.scss'
import {useState} from "react";
import {Checkbox} from "@progress/kendo-react-all";

type Props = {
  addGuarantor?: () => void
  isLayoutGrid: (data: boolean) => void
}

export const TableAction = ({addGuarantor, isLayoutGrid}: Props) => {
  const [active, setActive] = useState<boolean>(true);

  return <>
    <div className={styles.actions}>
      <div className={styles.actions__block}>
        <Checkbox className={styles.actions_checkbox}/>
        {active ? (
          <>
            <Button className='flex-center btn_small' fillMode={'flat'}>
              <RefreshCcw size={12}/>
              <span>Обновить</span>
            </Button>
            <Button className='flex-center btn_small' fillMode={'flat'} onClick={addGuarantor}>
              <CirclePlus size={12}/>
              <span>Добавить поручителя</span>
            </Button>
            <Button className='flex-center btn_small' fillMode={'flat'}>
              <Trash2 size={12}/>
              <span>Удалить</span>
            </Button>
          </>
        ) : (
          <Button className='flex-center btn_small' fillMode={'flat'}>
            <Pencil size={12}/>
            <span>Редактировать</span>
          </Button>
        )}

      </div>
      <div className='flex-center'>
        <Button className={!active ? styles.active : styles.type_btn} onClick={() => {
          setActive(false)
          isLayoutGrid(false)
        }}>
          <AlignStartVertical color={!active ? '#fff' : '#000'} size={12}/>
        </Button>
        <Button className={active ? styles.active : styles.type_btn} onClick={() => {
          setActive(true)
          isLayoutGrid(true)
        }}>
          <LayoutGrid color={active ? '#fff' : '#000'} size={12}/>
        </Button>
      </div>
    </div>
  </>
}