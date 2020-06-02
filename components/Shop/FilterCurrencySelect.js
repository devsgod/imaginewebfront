import React, {useState} from 'react';

import Dropdown from 'react-select';
const options = [
    { value: 0, label: 'Rand' },
    { value: 1, label: 'USD'},
    { value: 2, label: 'Euro' },
    { value: 3, label: 'Pound' },
];

const FilterCurrencySelect = (props) => {

    const [defaultValue, setValue] = useState(options[0]);
    return (
        <div className="mx-3" style={{minWidth:'120px'}}>
            <Dropdown
                className="FilterSelect"
                options={options}
                defaultValue ={defaultValue}
                onChange={props.onChange}
                placeholder="Select an option" />
        </div>
    )
};

export default React.memo(FilterCurrencySelect);