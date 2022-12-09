
import React from "react";
import { useWindowSize } from './CustomSize';
import '../styles.css'

export default function CustomLayout({ LeftComponent, RightComponent }) {
    //992 for Tablet 600 fro Mobile

    const size = useWindowSize();
    const container = {
        width: `${size.width}px`,
        height: `${size.height}px`,
        display: 'flex',

        flexDirection: size.width < 800 ? 'column' : 'row'
    }
    const MobileStyle = {
        // Aside: { display: 'none' },
        // subContaine: { width: '100%', backgroundColor: '#F5EFE6', height: '100%' }

    }
    const DestopStyle = {
        Aside: { width: '480px' },
        subContaine: { width: `${size.width - 480}px` }
    }
    return (
        <div style={container}>
            <div className="left-cotainer" style={size.width < 600 ? MobileStyle.Aside : DestopStyle.Aside}>{LeftComponent}</div>
            <div className="right-container" style={size.width < 600 ? MobileStyle.subContaine : DestopStyle.subContaine}>{RightComponent}</div>
        </div>
    );
}
