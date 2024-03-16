import Loader from "@/components/Loader";
import { lazy, Suspense } from "react";

const LazyMapStops = lazy(() => import("./MapStops"));

const Home = props => (
	<Suspense fallback={<Loader />}>
		<LazyMapStops {...props} />
	</Suspense>
);

export default Home;
