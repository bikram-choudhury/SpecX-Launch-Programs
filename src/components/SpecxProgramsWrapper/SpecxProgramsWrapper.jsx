import React, { memo } from 'react';
import './SpecxProgramsWrapper.scss';
import SpecxProgramFilters from '../SpecxProgramFilters/SpecxProgramFilters';
import SpecxPrograms from '../SpecxPrograms/SpecxPrograms';

function SpecxProgramsWrapper() {

    return (
        <div className="specxLaunchPrograms">
            <h1>SpecX Launch Programs</h1>
            <div className="specxLaunchPrograms__container">
                <SpecxProgramFilters />
                <SpecxPrograms />
            </div>
            <div className="specxLaunchPrograms__footer">
                <label className="specxLaunchPrograms__footerLabel">Developed by:</label>
                <span className="specxLaunchPrograms__footerValue">&nbsp; Bikram Choudhury</span>
            </div>
        </div>
    )
}

export default memo(SpecxProgramsWrapper);
