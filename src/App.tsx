import { ICONS } from './components/Icons';
import { List } from './components/List';
import { ListItem } from './components/ListItem';
import { ListItemProps } from './types';

function App() {
  const items: ListItemProps[] = [
    {key: "ASAJSASJUTYUYSAJSA", title: "Parcel List 02/11/2022", description: "carries will pick up the parcel today", description2: "5 items to be picked up",isDelivered: true},
    {key: "ASESDCBSJANSAJNSAJSA",title: "Parcel List 02/11/2022", description: "carries will pick up the parcel today", isDelivered: false},
    {key: "ASAJSABGFBGJNSAJSA",title: "Parcel List 02/11/2022", description: "carries will pick up the parcel today", icon: ICONS.PHONE_ICON},
    {key: "ASGHFHBGNSAJNSAJSA",title: "Parcel List 02/11/2022", description: "carries will pick up the parcel today", date: "02/11/2022"},
  ]
  return (
    <div>
      <List childrens={items.map((item) => ({
        key: item.key,
        elem: <ListItem key={item.key} title={item.title} description={item.description} description2={item.description2} isDelivered={item.isDelivered} icon={item.icon} date={item.date} />
      }))}/>
    </div>
  );
}

export default App;
