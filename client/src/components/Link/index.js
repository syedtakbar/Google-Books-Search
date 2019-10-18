import React from 'react';
import { Button, Colors } from 'react-foundation';
import './style.css';

export default function LinkBtn(props) {
    return <Button 
        className="button-custom" 
        color={Colors.SUCCESS} 
        style={{borderRadius: '5px'}}
        >{props.label}</Button>;
}