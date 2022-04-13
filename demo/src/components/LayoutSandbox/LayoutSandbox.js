import React, { useState, useCallback, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import CampaignChart from "../mdp/graphs/CampaignChart";
import CampaignDetails from "../mdp/CampaignDetails";
import CardRow from "../mdp/cards/Cards";
import StratCardTile from "../mdp/cards/StratCardTile";

import { Card,  Divider, Statistic } from "antd";
import { CaretUpFilled, CaretDownFilled } from "@ant-design/icons";

import "./reactgrid.css";
import "./content.css";

function CreateLayout() {
	let initLayout = [
		{
			x: 0,
			y: 0,
			w: 4,
			h: 4,
			i: "1",
			isBounded: void 0,
			isDraggable: true,
			isResizable: void 0,
			maxH: void 0,
			maxW: void 0,
			minH: void 0,
			minW: void 0,
			moved: false,
			resizeHandles: void 0,
			static: false,
		},
		{
			x: 4,
			y: 0,
			w: 4,
			h: 6,
			i: "2",
			isBounded: void 0,
			isDraggable: void 0,
			isResizable: void 0,
			maxH: void 0,
			maxW: 4,
			minH: void 0,
			minW: 2,
			moved: false,
			resizeHandles: void 0,
			static: false,
		},
		{
			x: 8,
			y: 0,
			w: 4,
			h: 4,
			i: "3",
			isBounded: void 0,
			isDraggable: void 0,
			isResizable: void 0,
			maxH: void 0,
			maxW: void 0,
			minH: void 0,
			minW: void 0,
			moved: false,
			resizeHandles: void 0,
			static: false,
		},
		{
			x: 0,
			y: 4,
			w: 4,
			h: 6,
			i: "4",
			isBounded: void 0,
			isDraggable: void 0,
			isResizable: void 0,
			maxH: void 0,
			maxW: void 0,
			minH: void 0,
			minW: void 0,
			moved: false,
			resizeHandles: void 0,
			static: false,
		},
	];
	const initialState = process.env.PUBLIC_URL + "/Layout.css";
	const [stylePath, setStylePath] = useState(initialState);
	// layout (var initLayout) is an array of objects that contain the size, location and other defining props of a grid item, see the demo for more complete usage
	const [layout, setLayout] = useState(initLayout);
	const ReactGridLayout = NewReactGridLayout();
	const Layout = LayoutSandbox(ReactGridLayout);

	const handleThemeSelect = (event) => {
		const themePath = process.env.PUBLIC_URL + "/" + event.target.value;
		setStylePath(themePath);
		console.log("Theme path is: ", themePath);
	};

	useEffect(() => {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = stylePath;

		head.appendChild(link);

		return () => {
			head.removeChild(link);
		};
	}, [stylePath]);

	function NewReactGridLayout() {
		return WidthProvider(RGL); // NOTE: WidthProvider is a HigherOrderComponent that determines grid width on instantiation and window resize events
	}

	/*The event handler that gets called when the layout object of the react-grid gets changed */
	const onLayoutChangeFN = useCallback((newLayout) => {
		setLayout(newLayout);
		console.log(
			"1. layout Changed Should update the location list ==> ",
			newLayout
		);
	}, []);

	/* This function creates the dynamic grid with repositionable items.
     NOTE: This function does not return the grid element - it returns a FUNCTION that, when called, returns the grid element
     this function is passed the react ggrid component and this is where we add the child components that will populate the grid
  */
	function LayoutSandbox(LayoutGrid) {
		return function LayoutComponent({ onLayoutChange, layout }) {
			const [localLayout, setLocalLayout] = useState(layout);
			function localOnLayoutChange(lt) {
				onLayoutChange(lt);
			}

			/*NOTE: For Simplicity all Grid children are divs. If you use React Components as grid children, they need to do a few things:
      Forward refs to an underlying DOM node, and
      Forward style and className to that same DOM node.
      */
			return (
				<LayoutGrid
					cols={12}
					rowHeight={30}
					width={1200}
					layout={localLayout}
					onLayoutChange={localOnLayoutChange}
				>
					{/* MAGIC Happens Here!! */}
					<div key="1" className="rChild">
						<CampaignChart
							areaColor="#FF9900"
							areaStyle={{
								fill: "#0000FF",
							}}
							autoFit
							color="#81D99C"
							data={[
								{
									name: "Week 1",
									revenue: 4500,
									xfd: "Round 1",
								},
								{
									name: "Week 2",
									revenue: 2800,
									xfd: "Round 2",
								},
								{
									name: "Week 3",
									revenue: 3000,
									xfd: "Round 3",
								},
								{
									name: "Week 4",
									revenue: 4250,
									xfd: "Round 4",
								},
								{
									name: "Week 5",
									revenue: 4500,
									xfd: "Round 5",
								},
								{
									name: "Week 6",
									revenue: 7500,
									xfd: "Round 6",
								},
								{
									name: "Week 7",
									revenue: 4750,
									xfd: "Round 7",
								},
								{
									name: "Week 9",
									revenue: 8720,
									xfd: "Round 8",
								},
							]}
							isStack
							line={{
								color: "#FF0033",
								size: 5,
								style: {
									stroke: "black",
								},
							}}
							point={{
								shape: "circle",
								size: 5,
								style: {
									fill: "#81D99C",
									lineWidth: 2,
									stroke: "#81D99C",
								},
							}}
							smooth
							tooltip={{
								showMarkers: true,
							}}
							xField="xfd"
							yField="revenue"
						/>
					</div>
					<div key="2" className="rChild">
						<Card className="top-card-row">
							<div className="card-title">
								<span>Card Title</span>
							</div>
							<Statistic
								value="1023"
								suffix={<CaretDownFilled style={{ color: "#cf1322" }} />}
								prefix="$"
							/>
							<Divider />
							<div className="card-bottom">
								<div className="card-title">
									<span>title too</span>
								</div>
								<Statistic value="4987" prefix="$" />
							</div>
						</Card>
					</div>
					<div key="3" className="rChild">
						<CardRow
							cardData={[
								{
									cardBottomTitle: "Last Year",
									cardBottomValue: 3080000,
									isUpward: true,
									key: "a",
									prefix: "$",
									title: "Program Revenue",
									value: 40000000,
								},
								{
									cardBottomTitle: "Last Year",
									cardBottomValue: 4082000,
									isUpward: false,
									key: "b",
									prefix: "$",
									title: "Web Traffic",
									value: 4420000,
								},
								{
									cardBottomTitle: "Last Year",
									cardBottomValue: 200000,
									isUpward: true,
									key: "f",
									title: "Outreach",
									value: 216000,
								},
								{
									cardBottomTitle: "Last Year",
									cardBottomValue: 1160000,
									isUpward: false,
									key: "ad",
									title: "Renewals",
									value: 152000,
								},
							]}
						/>
					</div>
					<div key="4" className="rChild">
						<CampaignDetails
							data={[
								{
									name: "Actual Revenue",
									value: "$4,200,000",
								},
								{
									name: "Schedule",
									value: "12/28/19 - 3/28/20",
								},
								{
									name: "Budget",
									value: "$1,200,000",
								},
								{
									name: "Estimated Revenue",
									value: "$2,700,000",
								},
								{
									name: "Unallocated",
									value: "$350,000",
								},
								{
									name: "Estimated ROI",
									value: "125%",
								},
								{
									name: "Dollars Tied to Activites",
									value: "$50,000",
								},
								{
									name: "Activities",
									value: "200 new messages",
									value2: "160 new posts",
								},
								{
									name: "Results",
									value: "1.2M Impressions",
									value2: "400K App Downloads",
								},
								{
									name: "Outcomes",
									value: "790 New Customers",
									value2: "$4.2M New Customer Revenue",
								},
							]}
							footerContent={<a href="#">Footer Example Link</a>}
							headerContent=""
						/>
					</div>
					<div key="5" className="rChild">
						<Card className="top-card-row">
							<div className="card-title">
								<span>Card Title</span>
							</div>
							<Statistic
								value="1023"
								suffix={<CaretDownFilled style={{ color: "#cf1322" }} />}
								prefix="$"
							/>
							<Divider />
							<div className="card-bottom">
								<div className="card-title">
									<span>title too</span>
								</div>
								<Statistic value="4987" prefix="$" />
							</div>
						</Card>
					</div>
					<div key="6" className="rChild">
						<Card className="top-card-row">
							<div className="card-title">
								<span>Card Title</span>
							</div>
							<Statistic
								value="1023"
								suffix={<CaretUpFilled style={{ color: "#cf1322" }} />}
								prefix="$"
							/>
							<Divider />
							<div className="card-bottom">
								<div className="card-title">
									<span>title too</span>
								</div>
								<Statistic value="4987" prefix="$" />
							</div>
						</Card>
					</div>
					<div key="7" className="rChild">
						<Card className="top-card-row">
							<div className="card-title">
								<span>Card Title</span>
							</div>
							<Statistic
								value="1023"
								suffix={<CaretDownFilled style={{ color: "#cf1322" }} />}
								prefix="$"
							/>
							<Divider />
							<div className="card-bottom">
								<div className="card-title">
									<span>title too</span>
								</div>
								<Statistic value="4987" prefix="$" />
							</div>
						</Card>
					</div>
					{/* <div key="5" className="rChild">block 5 </div>
<div key="6" className="rChild">block 6</div>
<div key="7" className="rChild">block 7 </div> */}
					<div key="8" className="rChild">
						<StratCardTile
							marketData={[
								{
									activeCampaigns: 2,
									availableFunds: 1620000,
									closedCampaigns: 4,
									committedFunds: 1600000,
									favorabilityScore: 45,
									recommendedScore: 23,
									recoverableFunds: 500000,
									revenue: 4200000,
									scenarioKey: 1,
									searchSessions: 23000,
									strategyId: "0017e000007JzHyAAL",
									strategyKey: 2,
									strategyName: "Brand Awareness",
									unallocatedFunds: 350000,
									uncommittedFunds: 3500000,
								},
								{
									activeCampaigns: 1,
									availableFunds: 1620000,
									closedCampaigns: 3,
									committedFunds: 1600000,
									favorabilityScore: 33,
									recommendedScore: 15,
									recoverableFunds: 500000,
									revenue: 4200000,
									scenarioKey: 1,
									searchSessions: 23000,
									strategyId: "0017e000007JzHyAAR",
									strategyKey: 3,
									strategyName: "Acquistion",
									unallocatedFunds: 350000,
									uncommittedFunds: 3500000,
								},
								{
									activeCampaigns: 2,
									availableFunds: 1800000,
									closedCampaigns: 4,
									committedFunds: 1600000,
									favorabilityScore: 21,
									recommendedScore: 33,
									recoverableFunds: 100000,
									revenue: 1300000,
									scenarioKey: 1,
									searchSessions: 23000,
									strategyId: "0017e000007JzHyAAQ",
									strategyKey: 4,
									strategyName: "Retention",
									unallocatedFunds: 350000,
									uncommittedFunds: 3500000,
								},
							]}
						/>
					</div>
					<div key="99" className="rChild">
						block 9
					</div>
				</LayoutGrid>
			);
		};
	}

	/*helper function to display the layou info for all grid items */
	function stringifyLayout(newLayout) {
		const itm = newLayout ? newLayout : layout;
		return itm.map(function (l) {
			const name = l.i === "__dropping-elem__" ? "drop" : l.i;
			return (
				<div className="layoutItem" key={l.i}>
					<b>{name}</b>
					{`: [x=${l.x}, y=${l.y}, w=${l.w}, h=${l.h}]`}
				</div>
			);
		});
	}

	return (
		<React.StrictMode>
			<div>
				<link rel="stylesheet" type="text/css" href={stylePath} />
				<div className="layoutJSON">
					<div>
						<form action="./" method="post">
							<select
								name="themeSelect"
								id="themeSelect"
								onChange={handleThemeSelect}
							>
								<option value="Layout.css">Default</option>
								<option value="LayoutRed.css">Red</option>
								<option value="LayoutGreen.css">Green</option>
								<option value="LayoutKPMG.css">KPMG</option>
							</select>
						</form>
					</div>
					Displayed as <code>[x, y, w, h]</code>:
					<div className="columns">{stringifyLayout()}</div>
				</div>
				<Layout onLayoutChange={onLayoutChangeFN} layout={layout} />
			</div>
		</React.StrictMode>
	);
}
export default CreateLayout;
