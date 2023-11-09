import React from 'react';

import "./CellComponent.scss"
import {Colors} from "../../Models/Colors";

interface CellComponentProps {
    color: Colors;
}
const CellComponent = ({color}:CellComponentProps) => {
    return (
        <div className={`cell ${color}`}>

        </div>
    );
};

export default CellComponent;