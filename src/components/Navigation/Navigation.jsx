import { HOME, MAPSTOPS } from "@/router/route-path";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MapIcon from "@mui/icons-material/Map";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavLink } from "react-router-dom";
const Navigation = () => {
	// const [value, setValue] = useState(0);

	return (
		<BottomNavigation
			showLabels
			// value={value}
			// onChange={(event, newValue) => {
			// 	setValue(newValue);
			// }}
			sx={{
				width: "100%",
				boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.16)",
				justifyContent: "space-between",
				".active": {
					color: "#1329FE",
				},
			}}
		>
			<BottomNavigationAction
				label="Route"
				component={NavLink}
				to={HOME}
				icon={<LocalShippingIcon />}
			/>
			<BottomNavigationAction
				label="Map"
				component={NavLink}
				to={MAPSTOPS}
				icon={<MapIcon />}
			/>
		</BottomNavigation>
	);
};

export default Navigation;
