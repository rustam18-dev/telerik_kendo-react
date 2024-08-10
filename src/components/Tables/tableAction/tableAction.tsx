import {Button} from "@progress/kendo-react-buttons";
import {AlignStartVertical, CirclePlus, LayoutGrid, Pencil, RefreshCcw, Trash2} from "lucide-react";
import styles from './tableAction.module.scss'
import {useState} from "react";

type Props = {
  addGuarantor?: () => void
}

export const TableAction = ({addGuarantor}: Props) => {
  const [active, setActive] = useState<boolean>(true);

  return <>
    <div className='flex-justify-space-between'>
      <div className={styles.actions}>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <RefreshCcw size={12}/>
          <span>Обновить</span>
        </Button>
        <Button className='flex-center btn_small' fillMode={'flat'} onClick={addGuarantor}>
          <CirclePlus size={12}/>
          <span>Добавить поручителя</span>
        </Button>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <Pencil size={12}/>
          <span>Редактировать</span>
        </Button>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <Trash2 size={12}/>
          <span>Удалить</span>
        </Button>
      </div>
      <div className='flex-center'>
        <Button className={!active ? styles.active : styles.type_btn} onClick={() => setActive(false)}>
          <AlignStartVertical color={!active ? '#fff' : '#000'} size={12}/>
        </Button>
        <Button className={active ? styles.active : styles.type_btn} onClick={() => setActive(true)}>
          <LayoutGrid color={active ? '#fff' : '#000'} size={12} />
        </Button>
      </div>
    </div>
  </>
}