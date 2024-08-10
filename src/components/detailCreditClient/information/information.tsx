import styles from "./information.module.scss";
import {Switch, TextArea, TextBox} from "@progress/kendo-react-all";


export const Information = () => {

  return <>
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
  </>
}