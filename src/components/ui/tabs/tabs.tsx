import {TabStrip, TabStripSelectEventArguments} from '@progress/kendo-react-layout';

type Props = {
  children?: JSX.Element | JSX.Element[],
  selected: number,
  onTabSelect: (index: number) => void,
};

export const Tabs = ({children, selected, onTabSelect}: Props) => {
  const handleSelect = (e: TabStripSelectEventArguments) => {
    console.log(e)
    onTabSelect(e.selected);
  }

  return (
    <TabStrip selected={selected} onSelect={handleSelect} scrollable={true} >
      {children}
    </TabStrip>
  )
}
