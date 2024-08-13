import styles from "./bankClients.module.scss";
import { Button } from "@progress/kendo-react-buttons";
import { TextBox } from "@progress/kendo-react-all";

export const BankClients = () => {
  return (
    <>
      <div className={styles.bank_clients}>
        <span className={styles.bank_clients__title}>
          Поручитель из клиентов банка
        </span>
        <div className={styles.bank_clients__block}>
          <div className={styles.bank_clients__text}>
            <span>
              Недавно просматриваемые карточки поручителей клиентов банка
            </span>
          </div>
          <div className={styles.bank_clients__module}>
            <Button
              fillMode={"flat"}
              className={styles.bank_clients__btn_module}
            >
              Выбрать в модуле - клиенты
            </Button>
          </div>
          <div className={styles.bank_clients__search}>
            <TextBox placeholder={"Поиск"} className={styles.input_search} style={{textAlign: 'center'}} />
          </div>
        </div>
      </div>
    </>
  );
};
