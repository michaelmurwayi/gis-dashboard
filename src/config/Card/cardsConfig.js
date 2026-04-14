import MapIcon from "@mui/icons-material/Map";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PeopleIcon from "@mui/icons-material/People";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ElevatorIcon from '@mui/icons-material/Elevator';
import ForestIcon from '@mui/icons-material/Forest';

export const cardsConfig = [
  {
    id: "SUITABILITY",
    header: "Suitability Score",
    icon: MapIcon,
    text: "120",
    bgImage: "https://i.pinimg.com/1200x/ef/5a/7b/ef5a7b09cd1c5731f626d1b3b19e176e.jpg",
    color: "rgba(0, 128, 0, 0.6)",
  },
  {
    id: "RAINFALL",
    header: "Rainfall (mm)",
    icon: WaterDropIcon,
    text: "340",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPtX_iyVcW0570zniVH3ODAxrMJXmsK3WXVnPANr7&s",
    color: "rgba(101, 67, 33)",
    overlayOpacity: 0.9, 
  },
  {
    id: "TEMPERATURE",
    header: "Temperature (°C)",
    icon: DeviceThermostatIcon,
    text: "30",
    bgImage: "https://i.pinimg.com/1200x/ca/e5/0f/cae50f94a08cb45feeaa7e35e24365b6.jpg",
    color: "rgba(0, 0, 0, 0.6)",
  },
  {
    id: "ELEVATION",
    header: "Elevation (m)",
    icon: ElevatorIcon,
    text: "1500",
    bgImage: "https://i.pinimg.com/736x/59/13/42/591342cc5876215a3f84c797f883ea13.jpg",
    color: "rgba(0, 0, 0, 0.6)",
  },
  {
    id: "SOIL_TYPE",
    header: "Soil Type",
    icon: ForestIcon,
    text: "Loamy",
    bgImage: "https://i.pinimg.com/1200x/4e/8d/35/4e8d358e596ffd66ced20694d68a1696.jpg",
    color: "rgba(0, 0, 0, 0.6)",
  },
];