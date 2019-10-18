import React from 'react';
import { Button, Colors, Grid } from 'react-foundation';
import './style.css';

export default function SubmitBtn(props) {
    return (
        <Grid className="display">
            <Button 
                className="button-submit" 
                color={Colors.SUCCESS}
                onClick={props.onClick} 
                style={{borderRadius: '5px'}}
                >{props.label}
                </Button>
          </Grid>
   
        );
}