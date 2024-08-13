import {Checkbox} from "@progress/kendo-react-all";
import {Button} from "@progress/kendo-react-buttons";
import {AlignJustify, CirclePlus, LayoutGrid, RefreshCcw, Trash2} from "lucide-react";
import stylesAction from '../displayData/displayAction/displayAction.module.scss'
import {LayoutGrid as LayoutGridData} from '../displayData/layoutGrid/layoutGrid.tsx'
import {IEmployee} from "../../types/employee.types.ts";
import {employees} from "../../employees.ts";

export const InputData = () => {

  const handleSelectClient = (data: IEmployee) => {
    console.log(data)
  }
  return <>
    <div className={stylesAction.actions}>

      <div className={stylesAction.actions__block}>
        <Checkbox className={stylesAction.actions_checkbox}/>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <RefreshCcw size={12}/>
          <span>Обновить</span>
        </Button>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <CirclePlus size={12}/>
          <span>Добавить</span>
        </Button>
        <Button className='flex-center btn_small' fillMode={'flat'}>
          <Trash2 size={12}/>
          <span>Удалить</span>
        </Button>
      </div>

      <div className='flex-center'>
        <Button className={stylesAction.active}>
          <AlignJustify size={12} color={'#fff'}/>
        </Button>
        <Button className={stylesAction.type_btn}>
          <LayoutGrid size={12} color={'#000'}/>
        </Button>
      </div>
    </div>

    <LayoutGridData client={handleSelectClient} employees={employees.slice(40, 50)}/>
  </>
}