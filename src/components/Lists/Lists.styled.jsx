import styled from "@emotion/styled";

export const ListContainer = styled.div``;

export const ListsWrapper = styled.div`
	position: relative;
	padding: 16px 16px 0px 16px;
	&.active {
		background: #f8f9ff;
	}
	&.completed {
		pointer-events: none;
		opacity: 0.2;
	}
	&.active::before {
		position: absolute;
		content: "";
		border-radius: 0 10px 10px 0;
		width: 3px;
		height: 20px;
		background: #1329fe;
		z-index: 2;
		left: 0;
	}
`;

export const ListsItem = styled.div``;

export const ListInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 16px;
	.listRight {
		text-align: right;
	}
	.listBox {
		display: flex;
		column-gap: 8px;
	}
	h5 {
		font-weight: 500;
		font-size: 16px;
		line-height: 125%;
		letter-spacing: 0em;
		color: #202124;
	}
	h6 {
		font-weight: 400;
		font-size: 14px;
		line-height: 114%;
		letter-spacing: 0em;
		color: #202124;
		margin-top: 4px;
	}
`;

export const ListNumber = styled.span`
	display: inline-block;
	border-radius: 4px;
	width: 24px;
	height: 20px;
	background: #e7eaff;
	font-weight: 700;
	font-size: 12px;
	line-height: 167%;
	text-align: center;
	color: #1329fe;
`;

export const ListAction = styled.div``;

export const ListActionWrapper = styled.div`
	padding-top: 13px;
	padding-bottom: 16px;
	display: flex;
	column-gap: 8px;
	.actionBtn {
		border-radius: 1000px;
		padding: 10px;
		width: 40px;
		height: 40px;
		background-color: #1329fe;
		&:hover {
			background: #1329fe;
		}
	}

	.btnCompleted {
		border: 1px solid #eaebf0;
		border-radius: 1000px;
		padding: 8px 16px 8px 12px;
		max-width: 120px;
		width: 100%;
		height: 40px;
		font-weight: 500;
		font-size: 14px;
		line-height: 171%;
		letter-spacing: 0.02em;
		color: #4d4d50;
		text-transform: capitalize;
		background: #fff;
	}
`;
