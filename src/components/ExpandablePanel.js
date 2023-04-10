import { useState } from 'react';

// components
import { GoChevronUp, GoChevronDown } from 'react-icons/go';

function ExpandablePanel ({ header, children }) {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	}

	return(
		<div className="mb-2 border rounded">
			<div className="flex grow p-2 justify-between items-center">
				<div className="flex flex-row grow items-center justify-between">
					{header}
				</div>
				<div onClick={handleClick} className="flex items-center justify-center w-8 h-8 cursor-pointer">
					{expanded ? <GoChevronUp /> : <GoChevronDown />}
				</div>
			</div>
			{
				expanded && <div className="p-2 border-t">{children}</div>
			}
		</div>
	)
}

export default ExpandablePanel;