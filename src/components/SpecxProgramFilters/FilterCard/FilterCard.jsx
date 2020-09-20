import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './FilterCard.scss';

export function FilterCard({ title, options, selected, onSelect }) {

    const handleSelect = (selectedValue, event) => {
        event.preventDefault();
        const key = title.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        onSelect({ [key]: selectedValue });
    }
    return (
        <div className="filterCard">
            <div className="filterCard__header">
                <span className="filterCard__headerTitle">{title}</span>
            </div>
            <div className="filterCard__options">
                {
                    options.map((value, index) => (
                        <div key={value} className="filterCard__optionsBadge">
                            <span
                                className={`filterCard__optionsBadgeTitle${
                                    value === selected ? ' active' : ''
                                }`}
                                onClick={handleSelect.bind(null, value)}
                            > {value} </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

FilterCard.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ).isRequired,
    selected: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onSelect: PropTypes.func
}

export default memo(FilterCard);
