import styles from "./addGuarantor.module.scss";
import { BankClients } from "./bankClients/bankClients.tsx";
import { InputNewGuarantor } from "./inputNewGuarantor/inputNewGuarantor.tsx";
import {Registration} from "./registration/registration.tsx";
import {Button} from "@progress/kendo-react-buttons"

type Props = {
  toggleGuarantor: () => void
}

export const AddGuarantor = ({toggleGuarantor}: Props) => {
  return (
    <>
      <div className={styles.guarantor}>
       <div>
         <BankClients/>
         <InputNewGuarantor/>
         <Registration/>
       </div>

        <div className={styles.btn_block}>
          <Button className={styles.btn_cancel} fillMode={'flat'} onClick={toggleGuarantor}>Отменить</Button>
          <Button className={styles.btn_submit} fillMode={'flat'} onClick={toggleGuarantor}>Добавить</Button>
        </div>
      </div>
    </>
  );
};
