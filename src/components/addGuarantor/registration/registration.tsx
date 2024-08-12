import styles from './registration.module.scss'
import {DatePicker, DropDownList, TextBox} from "@progress/kendo-react-all";

export const Registration = () => {
  return <>
    <div className={styles.registration}>
      <span className={styles.registration__title}>Регистрация</span>
      <div className={styles.registration__block}>
        <div className={styles.registration__address1}>
          <span>Адрес</span>
          <TextBox placeholder={'ГБАО г.Хорог ку. Н.Атобек 666'} className={styles.input_address1}/>
        </div>
        <div className={styles.registration__phone1}>
          <span>Телефон 1</span>
          <TextBox placeholder={'()-___-__-__'} className={styles.input_phone1}/>
        </div>
        <div className={styles.registration__phone2}>
          <span>Телефон 2</span>
          <TextBox placeholder={'()-___-__-__'} className={styles.input_phone2}/>
        </div>
        <div className={styles.registration__series}>
          <span>Серия</span>
          <TextBox placeholder={'А'} className={styles.input_series}/>
        </div>
        <div className={styles.registration__number}>
          <span>№</span>
          <TextBox placeholder={'2006898'} className={styles.input_number}/>
        </div>
        <div className={styles.registration__address2}>
          <span>Адрес</span>
          <TextBox placeholder={'ГБАО г.Хорог ку. Н.Атобек 666'} className={styles.input_address2}/>
        </div>
        <div className={styles.registration__extradited}>
          <span>Кем выдан</span>
          <DropDownList defaultValue={'Шахри Хоруг'} data={['Шахри Хоруг', 'Шахри Хучанд']}
                        className={styles.input_extradited}/>
        </div>
        <div className={styles.registration__date_of_issue}>
          <span>Дата выдачи</span>
          <DatePicker placeholder={'Введите сумму'} className={styles.input_date_of_issue}/>
        </div>
        <div className={styles.registration__INN}>
          <span>ИНН</span>
          <TextBox placeholder={'705466999'} className={styles.input_INN}/>
        </div>
        <div className={styles.registration__place_of_work}>
          <span>Место работы</span>
          <DropDownList defaultValue={'-'} data={['Шахри Хоруг', 'Шахри Хучанд']}
                        className={styles.input_place_of_work}/>
        </div>
      </div>
    </div>
  </>
}