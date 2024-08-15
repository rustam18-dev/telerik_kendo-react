import { Dialog } from '@progress/kendo-react-dialogs'
import { Button } from '@progress/kendo-react-buttons'
import { useEffect, useState } from 'react'
import { ModalHeader } from './components/modal/modal_header/modalHeader.tsx'
import { Plus } from 'lucide-react'
import './App.scss'
import { ModalContent } from './components/modal/modal_content/modalContent.tsx'
import { Resizable, ResizableProps } from 're-resizable'

type DialogSize = {
  width: string
  height: string
}

const App = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [dialogSize, setDialogSize] = useState<DialogSize>({ width: '55vw', height: '100vh' })
  const [toTheme, setToTheme] = useState<'dark' | 'light' | null>(null)
  const toggleDialog = () => {
    setVisible(!visible)
  }

  const handleResize: ResizableProps['onResize'] = (_e, _direction, ref) => {
    setDialogSize({
      width: ref.style.width,
      height: ref.style.height,
    })
  }

  useEffect(() => {
    const dialog = document.querySelector('body > div.k-dialog-wrapper.modal_canvas > div.k-window.k-dialog') as HTMLDivElement
    dialog.setAttribute('style', `width: ${dialogSize.width}`)
  }, [dialogSize])

  return (
    <div>
      <Button type="button" onClick={toggleDialog} id="open-dialog">
        Open Dialog
      </Button>
      {visible && (
        <Resizable
          size={dialogSize}
          onResize={handleResize}
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
          handleWrapperStyle={{
            pointerEvents: 'auto',
          }}
        >
          <Dialog
            title={<ModalHeader title={'Иванов Руслан Михайлович'} toggleDialog={toggleDialog} toTheme={(theme) => setToTheme(theme)}/>}
            onClose={toggleDialog}
            closeIcon={false}
            className={'modal_canvas'}
          >
            <ModalContent theme={toTheme}/>

            <div className={'create_task'}>
              <Button className={'btn_global_create'}>
                <Plus color="white" />
                <span>Создать задачу</span>
              </Button>
            </div>
          </Dialog>
        </Resizable>
      )}
    </div>
  )
}

export default App
