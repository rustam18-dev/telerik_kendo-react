import {Button} from "@progress/kendo-react-buttons";
import {AlignStartVertical, LayoutGrid, Pencil} from "lucide-react";
import styles from './displayAction.module.scss'
import {Checkbox} from "@progress/kendo-react-all";

type Props = {
  isLayoutGrid: boolean
  setIsLayoutGrid: (data: boolean) => void
}

export const DisplayAction = ({setIsLayoutGrid, isLayoutGrid}: Props) => {
  return <>
    <div className={styles.actions}>
      <div className={styles.actions__block}>
        <Checkbox className={styles.actions_checkbox}/>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <Pencil size={12}/>
          <span>Редактировать</span>
        </Button>
      </div>
      <div className='flex-center'>
        <Button className={!isLayoutGrid ? styles.active : styles.type_btn} onClick={() => {
          setIsLayoutGrid(false)
        }}>
          <AlignStartVertical color={!isLayoutGrid ? '#fff' : '#000'} size={12}/>
        </Button>
        <Button className={isLayoutGrid ? styles.active : styles.type_btn} onClick={() => {
          setIsLayoutGrid(true)
        }}>
          <LayoutGrid color={isLayoutGrid ? '#fff' : '#000'} size={12}/>
        </Button>
      </div>
    </div>
  </>
}