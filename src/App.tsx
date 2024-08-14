import {Dialog} from '@progress/kendo-react-dialogs';
import {Button} from '@progress/kendo-react-buttons';
import {useState} from "react";
import {ModalHeader} from "./components/modal/modal_header/modalHeader.tsx";
import {Plus} from "lucide-react";
import './App.scss';
import {ModalContent} from "./components/modal/modal_content/modalContent.tsx";
import {Resizable} from "re-resizable";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [dialogSize, setDialogSize] = useState({width: "55vw", height: '100vh'});

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const handleResize = (e, direction, ref, d) => {
    setDialogSize({
      width: ref.style.width,
      height: ref.style.height,
    });
  };

  return (
    <div>
      <Button type="button" onClick={toggleDialog} id="open-dialog">
        Open Dialog
        {dialogSize.width}
      </Button>
      {visible && (
        <Resizable
          size={dialogSize}
          onResizeStop={handleResize}
          className={'resizable_modal'}
          enable={{
            top: false,
            right: false,
            bottom: false,
            left: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <Dialog
            title={<ModalHeader title={'Иванов Руслан Михайлович'} toggleDialog={toggleDialog}/>}
            onClose={toggleDialog}
            closeIcon={false}
            className={'modal_canvas'}
            style={{width: dialogSize.width}}
          >
            <ModalContent/>

            <div className={'create_task'}>
              <Button className={'btn_global_create'}>
                <Plus color='white'/>
                <span>Создать задачу</span>
              </Button>
            </div>
          </Dialog>
        </Resizable>
      )}
    </div>
  );
};

export default App;
