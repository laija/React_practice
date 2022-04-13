import { DatePicker, Space } from 'antd';
import { PropTypes } from "prop-types";
import moment from 'moment'

function onChange(date, dateString) { // Callback function, can be executed when the selected time is changing
	if (date ==! null ) {
		console.log("onChange: " + date.format("MMMM Do YYYY, h:mm:ss a"));
	}
}

function onPanelChange(value, mode) { // Callback function for panel changing
	console.log("onPanelChange: " + value);
}

function disabledDate(current) {
	return moment().add(-1, 'days')  >= current || moment().add(1, 'month')  <= current
}

function BasicDatePicker({allowClear, bordered, defaultPickerValue, disabled, format, pickerFormat,
	 datePickerSize, showNow, showTime}) {
	return (
		<>
			<Space direction="vertical" size={12}>
				<DatePicker allowClear={allowClear} bordered={bordered} 
				defaultPickerValue={defaultPickerValue} disabled={disabled} format={format} 
				disabledDate={disabledDate} onChange={onChange} onPanelChange={onPanelChange} 
				picker={pickerFormat} size={datePickerSize} showNow={showNow} showTime={showTime}/>
			</Space>
	    </>
	);
}

BasicDatePicker.propTypes = {
	allowClear: PropTypes.bool,
	bordered: PropTypes.bool,
	defaultPickerValue: PropTypes.object,
	disabled: PropTypes.bool,
	format: PropTypes.string,
	datePickerSize: PropTypes.string,
	pickerFormat: PropTypes.string,
	showNow: PropTypes.bool,
	showTime: PropTypes.bool
};

export default BasicDatePicker;
