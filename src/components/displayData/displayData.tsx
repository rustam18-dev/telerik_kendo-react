import {TableAction} from "./displayAction/tableAction.tsx";
import {useState} from "react";
import {LayoutGrid} from "./layoutGrid/layoutGrid.tsx";
import {IEmployee} from "../../types/employee.types.ts";
import {Graph} from "./graph/graph.tsx";

type Props = {
  toTopAddGuarantor: () => void,
  selectedTab: number,
  client: (employee: IEmployee) => void,
}
export const DisplayData = ({toTopAddGuarantor, client, selectedTab}: Props) => {
  const [isLayoutGrid, setIsLayoutGrid] = useState<boolean>(true)

  return (
    <div>
      <TableAction
        addGuarantor={toTopAddGuarantor}
        isLayoutGrid={(data: boolean) => setIsLayoutGrid(data)}
      />

      {isLayoutGrid ? (
        <LayoutGrid
          client={(data: IEmployee) => client(data)}
          selectedTab={selectedTab}

        />
      ) : (
        <Graph/>
      )}
    </div>
  );
};
