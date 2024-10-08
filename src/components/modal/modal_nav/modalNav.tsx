import styles from './modal_nav.module.scss'
import {Button} from "@progress/kendo-react-buttons";
import {CircleCheck, Trash2, X} from "lucide-react";


type Props = {
  theme: 'light' | 'dark' | null
}
export const ModalNav = ({theme}: Props) => {

  return <>
    <div className={styles.nav}>
      <div className={styles.statuses}>
        <div className={styles.catalog}>
          <span>Каталог:</span>
          <span className={styles.property}>Рассмотрение</span>
        </div>
        <div className={styles.status}>
          <span>Статус:</span>
          <span className={styles.property}>Заявка</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button fillMode={'solid'} className={styles.btn_delete}>
          <Trash2 className={styles.trash_icon} size={16}/>
          <span className={theme === 'dark' ? styles.dark : ''}>Корзина</span>
        </Button>
        <Button fillMode={'solid'} className={styles.btn_refusal}>
          <X color='#c52e9c' size={20}/>
          <span className={theme === 'dark' ? styles.dark : ''}>Отказ</span>
        </Button>
        <Button fillMode={'solid'} className={styles.btn_save}>
          <CircleCheck color='#fff'/>
          <span>Комитет</span>
        </Button>
      </div>
    </div>
  </>
}