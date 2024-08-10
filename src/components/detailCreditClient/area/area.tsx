import styles from "./area.module.scss";
import {DropDownList, TextArea, TextBox} from "@progress/kendo-react-all";


export const Area = () => {

  return <>
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
  </>
}