import styles from './modal_header.module.scss'
import {Button} from "@progress/kendo-react-buttons";
import {ChevronLeft, ChevronRight, HelpCircle, Minus} from "lucide-react";
import {X} from 'lucide-react'

type Props = {
  title: string,
  toggleDialog?: () => void
}

export const ModalHeader = ({title, toggleDialog}: Props) => {

  return <>
    <div className={styles.header}>
      <div className={styles.left_part}>
        <div className={styles.btn_arrow}>
          <Button fillMode={'flat'}>
            <ChevronLeft className={styles.icon} size={16}/>
          </Button>
          <Minus className={styles.rotate_icons} size={16} color={'#a7a7a7'}/>
          <Button fillMode={'flat'}>
            <ChevronRight className={styles.icon} size={16}/>
          </Button>
        </div>
        <div>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
      <div className={styles.right_part}>
        <Button fillMode={'solid'} className={styles.btn_help}>
          <HelpCircle className={styles.icon} size={20}/>
        </Button>
        <Button fillMode={'solid'} className={styles.btn_cancel}>
          Отменить
        </Button>
        <Button fillMode={'solid'} className={styles.btn_save}>
          Сохранить
        </Button>
      </div>

      <div className='close_modal' onClick={toggleDialog}>
        <div>
          <X color={'white'}/>
        </div>
      </div>
    </div>
  </>
}