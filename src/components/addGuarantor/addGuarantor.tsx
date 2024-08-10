import styles from "./addGuarantor.module.scss";
import { BankClients } from "./bankClients/bankClients.tsx";
import { InputNewGuarantor } from "./inputNewGuarantor/inputNewGuarantor.tsx";
import {Registration} from "./registration/registration.tsx";

export const AddGuarantor = () => {
  return (
    <>
      <div className={styles.guarantor}>
        <BankClients />
        <InputNewGuarantor />
        <Registration />
      </div>
    </>
  );
};
