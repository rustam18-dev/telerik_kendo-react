import {DisplayAction} from "./displayAction/displayAction.tsx";
import {useState} from "react";
import {LayoutGrid} from "./layoutGrid/layoutGrid.tsx";
import {IEmployee} from "../../types/employee.types.ts";
import {Graph} from "./graph/graph.tsx";
import {employees} from "../../employees.ts";

type Props = {
  client: (employee: IEmployee) => void,
}
export const DisplayData = ({client}: Props) => {
  const [isLayoutGrid, setIsLayoutGrid] = useState<boolean>(true)

  const onIsLayoutGridToggle = (isNewLayout: boolean) => {
    setIsLayoutGrid(isNewLayout)
  }

  return (
    <div>
      <DisplayAction isLayoutGrid={isLayoutGrid} setIsLayoutGrid={onIsLayoutGridToggle}/>

      {isLayoutGrid ? (
        <LayoutGrid
          employees={employees.slice(60, 70)}
          client={(data: IEmployee) => client(data)}
        />
      ) : (
        <Graph/>
      )}
    </div>
  );
};
