import {ModalNav} from "../modal_nav/modalNav.tsx";
import {Tabs} from "../../tabs/tabs.tsx";
import {TabStripTab} from "@progress/kendo-react-layout";
import {Table} from "../../Tables/table/table.tsx";
import {useState} from "react";

export const ModalContent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [creditClient, setCreditClient] = useState({})

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  }

  return <>
    <div className={'modal_content'}>
      <ModalNav/>
      <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
        <TabStripTab title="Основные сведения"/>
        <TabStripTab title="Фото и документ"/>
        <TabStripTab title="Комментарии"/>
        <TabStripTab title="Ввод"/>
        <TabStripTab title="Чек-лист"/>
        <TabStripTab title="График погашения"/>
        <TabStripTab title="Залог"/>
        <TabStripTab title="Поручитель"/>
        <TabStripTab title="История"/>
        <TabStripTab title="КИБ"/>
        <TabStripTab title="СКОРИНГ"/>
      </Tabs>

      <Table selectedTab={selectedTab} />
    </div>
  </>
}