import styles from "./parameters.module.scss";
import {TextArea, TextBox} from "@progress/kendo-react-all";


export const Parameters = () => {
  return <>
    <div className={styles.parameters}>
      <span className={styles.parameter__title}>Параметры</span>
      <div className={styles.parameters__items}>
        <p className={styles.parameters__brand}>
          <span>Марка</span>
          <TextBox placeholder={'-'} className={styles.input_brand}/>
        </p>
        <p className={styles.parameters__model}>
          <span>Модель</span>
          <TextBox placeholder={'-'} className={styles.input_model}/>
        </p>
        <p className={styles.parameters__color}>
          <span>Цвет</span>
          <TextBox placeholder={'-'} className={styles.input_color}/>
        </p>
        <p className={styles.parameters__number_engine}>
          <span>№ двигатель</span>
          <TextBox placeholder={'-'} className={styles.input_number_engine}/>
        </p>
        <p className={styles.parameters__year_of_issue}>
          <span>Год выпуска</span>
          <TextBox placeholder={'-'} className={styles.input_year_of_issue}/>
        </p>
        <p className={styles.parameters__state_passport}>
          <span>Гос.номер</span>
          <TextBox placeholder={'-'} className={styles.input_state_passport}/>
        </p>
        <p className={styles.parameters__technical_passport}>
          <span>Тех.паспорт</span>
          <TextBox placeholder={'-'} className={styles.input_technical_passport}/>
        </p>
        <p className={styles.parameters__number_body}>
          <span>№ кузова</span>
          <TextBox placeholder={'-'} className={styles.input_number_body}/>
        </p>
        <p className={styles.parameters__register_place}>
          <span>Место регистрации</span>
          <TextBox placeholder={'-'} className={styles.input_register_place}/>
        </p>
        <p className={styles.parameters__owner}>
          <span>Владелец</span>
          <TextBox placeholder={'-'} className={styles.input_owner}/>
        </p>
        <p className={styles.parameters__type_body}>
          <span>Тип кузова</span>
          <TextBox placeholder={'-'} className={styles.input_type_body}/>
        </p>
        <p className={styles.parameters__additionally}>
          <span>Дополнительно</span>
          <TextArea resizable={'none'} placeholder={'Введите данные'} className={styles.input_additionally}/>
        </p>
      </div>
    </div>
  </>
}