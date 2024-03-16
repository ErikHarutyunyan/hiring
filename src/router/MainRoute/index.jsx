import { Layout } from "@/layout";
import { Home, MapStops } from "@/pages";
import { Route } from "react-router-dom";
import { HOME, MAPSTOPS } from "../route-path";

export const MainRout = () => {
	return (
		<Route path={HOME} element={<Layout />}>
			<Route index element={<Home />} />
			<Route path={MAPSTOPS} element={<MapStops />} />
		</Route>
	);
};
