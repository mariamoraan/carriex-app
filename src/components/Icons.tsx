import ComputerIcon from '@mui/icons-material/Computer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TvIcon from '@mui/icons-material/Tv';
import WatchIcon from '@mui/icons-material/Watch';
import { PRODUCT_TYPES } from '../constants/products';

export const TRUCK_ICON = "TRUCK_ICON"

export const ICONS: {[key: string]: JSX.Element} = {
    TRUCK_ICON: <LocalShippingIcon />,
    [PRODUCT_TYPES.TELEVISION_ICON]: <TvIcon />,
    [PRODUCT_TYPES.PC_ICON]: <ComputerIcon />,
    [PRODUCT_TYPES.WATCH_ICON]: <WatchIcon />,
    [PRODUCT_TYPES.PHONE_ICON]: <PhoneIphoneIcon />,
}