import {Button} from "@progress/kendo-react-buttons";
import {AlignStartVertical, LayoutGrid, Pencil} from "lucide-react";
import styles from './displayAction.module.scss'
import {useState} from "react";
import {Checkbox} from "@progress/kendo-react-all";

type Props = {
  isLayoutGrid: (data: boolean) => void
}

export const DisplayAction = ({isLayoutGrid}: Props) => {
  const [active, setActive] = useState<boolean>(true);

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