import styles from "./registrationAddress.module.scss";
import {DropDownList, TextBox} from "@progress/kendo-react-all";


export const RegistrationAddress = () => {
  return <>
    <div className={styles.registration_address}>
      <span className={styles.registration_address__title}>Адрес регистрации</span>
      <div className={styles.registration_address__items}>
        <p className={styles.registration_address__country}>
          <span>Страна</span>
          <DropDownList value={'Республика Таджикистан'} className={styles.input_country}
                        data={['Договор', 'Договор2']}/>
        </p>
        <p className={styles.registration_address__region}>
          <span>Область / Регион</span>
          <DropDownList value={'Согдийская область'} className={styles.input_region} data={['Договор', 'Договор2']}/>
        </p>
        <p className={styles.registration_address__village}>
          <span>Село</span>
          <DropDownList value={'-'} className={styles.input_village} data={['Договор', 'Договор2']}/>
        </p>
        <p className={styles.registration_address__street}>
          <span>Улица</span>
          <TextBox placeholder={'И.Сомони'} className={styles.input_street}/>
        </p>
        <p className={styles.registration_address__quarter}>
          <span>Квартал</span>
          <TextBox placeholder={'Центральный'} className={styles.input_quarter}/>
        </p>
        <div className={styles.registration_address__block_house}>
          <p className={styles.registration_address__house}>
            <span>Дом</span>
            <TextBox placeholder={'120'} className={styles.input_house}/>
          </p>
          <p className={styles.registration_address_apartment}>
            <span>Кв</span>
            <TextBox placeholder={'20'} className={styles.input_apartment}/>
          </p>
        </div>
      </div>
    </div>
  </>
}