import { ModalNav } from "../modal_nav/modalNav.tsx"
import { Tabs } from "../../tabs/tabs.tsx"
import { TabStripTab } from "@progress/kendo-react-layout"
import { DisplayData } from "../../displayData/displayData.tsx"
import { useState } from "react"
import { IEmployee } from "../../../types/employee.types.ts"
import { DetailCreditClient } from "../../detailCreditClient/detailCreditClient.tsx"
import { AddGuarantor } from "../../addGuarantor/addGuarantor.tsx"

export const ModalContent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [client, setClient] = useState<IEmployee>({} as IEmployee)
  const [showAddGuarantor, setShowGuarantor] = useState<boolean>(false)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  const handleSelectClient = (data: IEmployee) => {
    setClient(data)
  }

  return (
    <>
      {showAddGuarantor ? (
        <AddGuarantor toggleGuarantor={() => setShowGuarantor(!showAddGuarantor)}/>
      ) : client.id === undefined ? (
        <div className={"modal_content"}>
          <ModalNav />

          <Tabs selected={selectedTab} onTabSelect={handleTabSelect}>
            <TabStripTab title="Основные сведения" />
            <TabStripTab title="Фото и документ" />
            <TabStripTab title="Комментарии" />
            <TabStripTab title="Ввод" />
            <TabStripTab title="Чек-лист" />
            <TabStripTab title="График погашения" />
            <TabStripTab title="Залог" />
            <TabStripTab title="Поручитель" />
            <TabStripTab title="История" />
            <TabStripTab title="КИБ" />
            <TabStripTab title="СКОРИНГ" />
          </Tabs>

          <DisplayData
            selectedTab={selectedTab}
            client={handleSelectClient}
            toTopAddGuarantor={() => setShowGuarantor(!showAddGuarantor)}
          />
        </div>
      ) : (
        <DetailCreditClient toggle={() => setClient({} as IEmployee)} />
      )}
    </>
  )
}
