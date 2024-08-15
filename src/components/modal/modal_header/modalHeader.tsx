import styles from './modal_header.module.scss'
import {Button} from "@progress/kendo-react-buttons";
import {ChevronLeft, ChevronRight, HelpCircle, Minus} from "lucide-react";
import {X} from 'lucide-react'
import {useEffect, useState} from "react";

type Props = {
  title: string,
  toggleDialog?: () => void
  toTheme?: (data: 'dark' | 'light') => void
}

export const ModalHeader = ({title, toggleDialog, toTheme}: Props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const handleSwitchTheme = () => {
    if (!toTheme) return

    if (theme === 'light') {
      setTheme('dark')
      toTheme('dark')
    } else {
      setTheme('light')
      toTheme('light')
    }
  }

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.left_part}>
        <div className={`${styles.btn_arrow} ${theme === 'dark' ? styles.dark : ''}`}>
          <Button fillMode={'flat'}>
            <ChevronLeft className={`${styles.icon} ${theme === 'dark' ? styles.dark : ''}`} size={22}/>
          </Button>
          <Minus className={`${styles.rotate_icons} ${theme === 'dark' ? styles.dark : ''}`} size={16} color='#a7a7a7'/>
          <Button fillMode={'flat'}>
            <ChevronRight className={`${styles.icon} ${theme === 'dark' ? styles.dark : ''}`} size={22}/>
          </Button>
        </div>
        <div>
          <span className={`${styles.title} ${theme === 'dark' ? styles.dark : ''}`}>{title}</span>
        </div>
      </div>
      <div className={styles.right_part}>
        <Button fillMode={'solid'} className={`${styles.btn_help} ${theme === 'dark' ? styles.dark : ''}`}
                onClick={handleSwitchTheme}>
          <HelpCircle className={`${styles.icon} ${theme === 'dark' ? styles.dark : ''}`} size={20}/>
        </Button>
        <Button fillMode={'solid'} className={`${styles.btn_cancel} ${theme === 'dark' ? styles.dark : ''}`}>
          Отменить
        </Button>
        <Button fillMode={'solid'} className={`${styles.btn_save} ${theme === 'dark' ? styles.dark : ''}`}>
          Сохранить
        </Button>
      </div>

      <div className='close_modal' onClick={toggleDialog}>
        <div>
          <X color='white'/>
        </div>
      </div>
    </div>
  )
}