import { setCompletedStop } from "@/app/features/stops/stopsSlice";
import { MAPSTOPS } from "@/router/route-path";
import { findFirstFalseIndex } from "@/utils";
import DirectionsIcon from "@mui/icons-material/Directions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	ListAction,
	ListActionWrapper,
	ListContainer,
	ListInfo,
	ListNumber,
	ListsItem,
	ListsWrapper,
} from "./Lists.styled";

const Lists = ({ data }) => {
	const dispatch = useDispatch();
	const handleComplete = sequenceNumber => {
		// Dispatch the completeItem action with the sequence_number of the item to mark as completed
		dispatch(setCompletedStop(sequenceNumber));
	};
	return (
		<ListContainer>
			{data.map((itemStop, index) => {
				const {
					sequence_number,
					eta,
					time_window,
					street,
					zip,
					completed,
					lat,
					lng,
				} = itemStop;
				const isActive = index === findFirstFalseIndex(data);
				const classNames = [""];

				if (isActive) classNames.push("active");
				if (completed) classNames.push("completed");
				return (
					<ListsWrapper key={sequence_number} className={classNames.join(" ")}>
						<ListsItem>
							<ListInfo>
								<div className="listLeft">
									<div className="listBox">
										<ListNumber>{sequence_number}</ListNumber>
										<h5>{street}</h5>
									</div>
									<h6>{zip}</h6>
								</div>
								<div className="listRight">
									<h5>
										{completed ? (
											<DoneAllIcon fontSize="small" sx={{ color: "#4abc7a" }} />
										) : null}
										{eta}
									</h5>
									<h6>{time_window}</h6>
								</div>
							</ListInfo>
							<Divider sx={{ borderColor: "#eaebf0;" }} />
						</ListsItem>
						{isActive ? (
							<ListAction>
								<ListActionWrapper>
									<Link
										to={MAPSTOPS}
										state={{ centerData: { lat, lng } }}
										className="actionBtn"
									>
										<DirectionsIcon fontSize="small" sx={{ color: "#fff" }} />
									</Link>
									<Button
										className="btnCompleted"
										onClick={() => handleComplete(sequence_number)}
										startIcon={
											<DoneAllIcon fontSize="small" sx={{ color: "#4abc7a" }} />
										}
									>
										Complete
									</Button>
								</ListActionWrapper>
								<Divider sx={{ borderColor: "#eaebf0;" }} />
							</ListAction>
						) : null}
					</ListsWrapper>
				);
			})}
		</ListContainer>
	);
};

export default Lists;
