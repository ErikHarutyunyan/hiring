import {
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { MainRout } from "./MainRoute";

const router = createBrowserRouter(createRoutesFromElements([MainRout()]));
export default router;
