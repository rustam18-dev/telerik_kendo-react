import styles from "./inputNewGuarantor.module.scss";
import {Button} from "@progress/kendo-react-buttons";
import {TextBox} from "@progress/kendo-react-all";

export const InputNewGuarantor = () => {
  return (
    <>
      <div className={styles.input_new_guarantor}>
        <span className={styles.input_new_guarantor__title}>
          Ввод нового пользователя
        </span>
        <div className={styles.input_new_guarantor__block}>
          <div className={styles.input_new_guarantor__text}>Ввод новых сведений</div>
          <div className={styles.input_new_guarantor__btn_module}>
            <Button className={styles.btn_module_client}>Создать в модуле - клиенты</Button>
          </div>
          <div className={styles.input_new_guarantor__id_client}>
            <span>ID клиента</span>
            <TextBox placeholder={'-'} className={styles.input_id_client}/>
          </div>
          <div className={styles.input_new_guarantor__btn_edit}>
            <Button className={styles.btn_edit}>Редактировать</Button>
          </div>
          <div className={styles.input_new_guarantor__lastname}>
            <span>Фамилия</span>
            <TextBox placeholder={'Абдуев'} className={styles.input_lastname}/>
          </div>
          <div className={styles.input_new_guarantor__name}>
            <span>Имя</span>
            <TextBox placeholder={'Ализаур'} className={styles.input_name}/>
          </div>
          <div className={styles.input_new_guarantor__patronymic}>
            <span>Отчество</span>
            <TextBox placeholder={'Абдуназарович'} className={styles.input_patronymic}/>
          </div>
          <div className={styles.input_new_guarantor__sum}>
            <span>Сумма</span>
            <TextBox placeholder={'Введите сумму'} className={styles.input_sum}/>
          </div>
        </div>
      </div>
    </>
  );
};
