import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SingleSpecxProgram.scss';

function SingleSpecxProgram({
    image,
    title,
    missionIds,
    launchYear,
    launchSuccess,
    landSuccess
}) {
    return (
        <div className="singleSpecxProgram">
            <div className="singleSpecxProgram__imageHolder">
                <img className="singleSpecxProgram__image" src={image} alt="SpecX Programe" />
            </div>
            <div className="singleSpecxProgram__title">{title}</div>
            <div className="singleSpecxProgram__infoHolder">
                <div className="singleSpecxProgram__info">
                    <label className="singleSpecxProgram__infoTitle">Mission Ids: </label>
                    <ul>
                        <li>
                            <span className="singleSpecxProgram__infoValue">
                                {missionIds ? missionIds : 'No Missions'}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="singleSpecxProgram__info">
                    <label className="singleSpecxProgram__infoTitle">Launch Year: </label>
                    <span className="singleSpecxProgram__infoValue">{launchYear}</span>
                </div>
                <div className="singleSpecxProgram__info">
                    <label className="singleSpecxProgram__infoTitle">Successful Launch: </label>
                    <span className="singleSpecxProgram__infoValue">{launchSuccess}</span>
                </div>
                <div className="singleSpecxProgram__info">
                    <label className="singleSpecxProgram__infoTitle">Successful Landing: </label>
                    <span className="singleSpecxProgram__infoValue">{landSuccess}</span>
                </div>
            </div>
        </div>
    )
}

SingleSpecxProgram.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    missionIds: PropTypes.string.isRequired,
    launchYear: PropTypes.number.isRequired,
    launchSuccess: PropTypes.string.isRequired,
    landSuccess: PropTypes.string.isRequired
}

export default memo(SingleSpecxProgram);
