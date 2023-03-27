import ComputerIcon from '@mui/icons-material/Computer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WatchIcon from '@mui/icons-material/Watch';


export const TRUCK_ICON = "TRUCK_ICON"
export const COMPUTER_ICON = "COMPUTER_ICON"
export const WATCH_ICON = "WATCH_ICON"
export const PHONE_ICON = "PHONE_ICON"

export const ICONS: {[key: string]: JSX.Element} = {
    TRUCK_ICON: <LocalShippingIcon />,
    COMPUTER_ICON: <ComputerIcon />,
    WATCH_ICON: <WatchIcon />,
    PHONE_ICON: <PhoneIphoneIcon />,
}