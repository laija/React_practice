import { Calendar, Badge, Typography } from 'antd';
import { PropTypes } from "prop-types";
import moment from 'moment'

function getListData(value) {
	let listData;
	switch (value.date()) {
	  case 8:
		listData = [
		  { type: 'success', content: 'This is usual event.' },
		];
		break;
	  case 10:
		listData = [
		  { type: 'error', content: 'This is error event.' },
		];
		break;
	  case 15:
		listData = [
		  { type: 'warning', content: 'This is warning event' },
		];
		break;
	  default:
	}
	return listData || [];
  }
    
  // Customize the display of the date cell, the returned content will be appended to the cell
  function dateCellRender(value) {
	const listData = getListData(value);
	return (
	  <ul className="events">
		{listData.map(item => (
		  <span key={item.content}>
			<Badge status={item.type} text={item.content}/>
		  </span>
		))}
	  </ul>
	);
  }

// Callback for when date changes
function onChange(value) {
	console.log("onChange: " + value.format('YYYY-MM-DD'));
}

//	Callback for when panel changes
function onPanelChange(value) {
	console.log("onPanelChange: " + value.format('YYYY-MM-DD'));
  }

// Callback for when a date is selected
function onSelect(value) { 
	console.log("onSelect: " + value.format('YYYY-MM-DD'));
}

// Function that specifies the dates that cannot be selected
function disabledDate(current) {
	return moment(current).day() === 0;
}

function Almanac({ customHeader, defaultValue, fullscreen, header, mode, startDisabledDays, endDisableDays}) {
	return ( 
		<>
			{customHeader ?<Typography.Title level={4}>{header}</Typography.Title>: null}
			<Calendar  defaultValue={defaultValue} disabledDate={disabledDate} fullscreen={fullscreen} onChange={onChange} onPanelChange={onPanelChange} onSelect={onSelect} validRange={[moment().subtract(startDisabledDays, "days") , moment().add(endDisableDays, "days")]}/>
		</>
	);
}

Almanac.propTypes = {
	customHeader: PropTypes.bool,
	defaultValue: PropTypes.object,
	fullscreen: PropTypes.bool,
	header: PropTypes.string,
	mode: PropTypes.string,
	startDisabledDays: PropTypes.number,
	endDisableDays: PropTypes.number
};

export default Almanac;
 