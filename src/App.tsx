import {Dialog} from '@progress/kendo-react-dialogs';
import {Button} from '@progress/kendo-react-buttons';
import {useState} from "react";
import {ModalHeader} from "./components/modal/modal_header/modalHeader.tsx";
import {Plus} from "lucide-react";
import './App.scss'
import {ModalContent} from "./components/modal/modal_content/modalContent.tsx";

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleDialog = () => {
    setVisible(!visible)
  }

  return <div>
    <Button type="button" onClick={toggleDialog} id="open-dialog">Open Dialog</Button>

    {visible &&
      <Dialog title={<ModalHeader title={'Иванов Руслан Михайлович'} toggleDialog={toggleDialog}/>}
              onClose={toggleDialog} closeIcon={false} className={'modal_canvas'}>

        <ModalContent />

        <div className={'create_task'}>
          <Button className={'btn_global_create'}>
            <Plus color='white'/>
            <span>Создать задачу</span>
          </Button>
        </div>

      </Dialog>
    }
  </div>
}
export default App;