import { getStopsData } from "@/app/features/stops/stopsActions";
import { selectStopsList } from "@/app/features/stops/stopsSlice";
import Lists from "@/components/Lists";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const { loading, stopsList } = useSelector(selectStopsList);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!stopsList) dispatch(getStopsData());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Loader />;

	return (
		<>
			<Lists data={stopsList} />
		</>
	);
};

export default Home;
