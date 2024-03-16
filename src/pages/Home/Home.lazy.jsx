import Loader from "@/components/Loader";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Home"));

const Home = props => (
	<Suspense fallback={<Loader />}>
		<LazyHome {...props} />
	</Suspense>
);

export default Home;
