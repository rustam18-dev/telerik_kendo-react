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

  return (
    <div>
      <DisplayAction
        isLayoutGrid={(data: boolean) => setIsLayoutGrid(data)}
      />

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
