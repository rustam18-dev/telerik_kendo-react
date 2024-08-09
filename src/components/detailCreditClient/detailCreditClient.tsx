import {Tabs} from "../tabs/tabs.tsx";
import {TabStripTab} from "@progress/kendo-react-layout";
import {useState} from "react";


export const DetailCreditClient = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  }
  return <>
    <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
      <TabStripTab title="Ввод залога"/>
      <TabStripTab title="Комментарии"/>
    </Tabs>
  </>
}