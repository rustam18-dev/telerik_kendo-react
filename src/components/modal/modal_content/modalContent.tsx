import { ModalNav } from "../modal_nav/modalNav.tsx"
import { Tabs } from "../../ui/tabs/tabs.tsx"
import { TabStripTab } from "@progress/kendo-react-layout"
import { DisplayData } from "../../displayData/displayData.tsx"
import { useState } from "react"
import { IEmployee } from "../../../types/employee.types.ts"
import { DetailCreditClient } from "../../detailCreditClient/detailCreditClient.tsx"
import { AddGuarantor } from "../../addGuarantor/addGuarantor.tsx"
import { BasicInformation } from "../../basicInformationData/basicInformation.tsx"
import { PhotoAndDocument } from "../../photoAndDocumentData/photoAndDocument.tsx"
import { CommentsData } from "../../commentsData/comments.tsx"
import { InputData } from "../../inputData/inputData.tsx"
import { ChecklistData } from "../../checklistData/checklistData.tsx"
import { DepositData } from "../../depositData/depositData.tsx"
import { GuarantorData } from "../../guarantorData/guarantorData.tsx"
import { HistoryData } from "../../historyData/historyData.tsx"
import { KibData } from "../../kibData/kibData.tsx"
import { ScoringData } from "../../scoringData/scoringData.tsx"

type Props = {
  theme: "light" | "dark" | null
}

export const ModalContent = ({ theme }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(6)
  const [showAddGuarantor, setShowGuarantor] = useState<boolean>(false)
  const [showAddDeposit, setShowAddDeposit] = useState<boolean>(false)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  const handleSelectClient = (data: IEmployee) => {
    console.log(data)
  }

  return (
    <>
      {showAddGuarantor ? (
        <AddGuarantor
          toggleGuarantor={() => setShowGuarantor(!showAddGuarantor)}
        />
      ) : !showAddDeposit ? (
        <div className={"modal_content"}>
          <ModalNav theme={theme} />

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

          {selectedTab === 0 ? (
            <BasicInformation />
          ) : selectedTab === 1 ? (
            <PhotoAndDocument />
          ) : selectedTab === 2 ? (
            <CommentsData />
          ) : selectedTab === 3 ? (
            <InputData />
          ) : selectedTab === 4 ? (
            <ChecklistData />
          ) : selectedTab === 5 ? (
            <DisplayData client={handleSelectClient} />
          ) : selectedTab === 6 ? (
            <DepositData
              addDeposit={() => {
                setShowAddDeposit(!showAddDeposit)
              }}
            />
          ) : selectedTab === 7 ? (
            <GuarantorData
              addGuarantor={() => {
                setShowGuarantor(!showAddGuarantor)
              }}
            />
          ) : selectedTab === 8 ? (
            <HistoryData />
          ) : selectedTab === 9 ? (
            <KibData />
          ) : (
            <ScoringData />
          )}
        </div>
      ) : (
        <DetailCreditClient toggle={() => setShowAddDeposit(!showAddDeposit)} />
      )}
    </>
  )
}
