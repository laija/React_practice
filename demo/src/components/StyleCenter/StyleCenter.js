import React from "react";
import { Collapse } from 'antd';

// import "./reactgrid.css";
 import "./style_center.css";

function CreateStyleCenter() {
    const { Panel } = Collapse;
	

	// useEffect(() => {
	// 	var head = document.head;head.removeChild(link);
	// 	};
	// }, [stylePath]);

    function callback(key) {
        console.log(key);
      }

//       const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;


	return (
		<Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Block and Input Styler" key="1">
            <iframe src="https://enjoycss.com/start" title="button generator" class="content-frame"></iframe>
        </Panel>
        <Panel header="Button Styler" key="2">
            <iframe src="https://www.bestcssbuttongenerator.com/" title="button generator" class="content-frame"></iframe>
        </Panel>
        <Panel header="Drop Shadow Examples" key="3">
            <iframe src="https://getcssscan.com/css-box-shadow-examples" title="button generator" class="content-frame"></iframe>
        </Panel>
        <Panel header="Table Styler" key="4">
            <iframe src="https://divtable.com/table-styler/" title="button generator" class="content-frame"></iframe>
        </Panel>
        <Panel header="Bucket of Tools" key="5">
            <iframe src="https://html-css-js.com/css/" title="button generator" class="content-frame"></iframe>
        </Panel>
      </Collapse>
	);
}
export default CreateStyleCenter;


