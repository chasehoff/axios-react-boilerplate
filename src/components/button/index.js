import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//tag template literal
const Btn = styled.button`
    font-family: inherit;
    background-color: ${props => (props.bgColor ? props.bgColor : 'green' )};
    padding: .25em 1.25em;
    border: none;
    border-radius: 4px;
    color: ${props => (props.color ? props.color : 'black')};
    box-shadow: ${props => (props.shadow === true ? '1px 1px 4px 1px rgba(166,166,166,1)' : '')}
`;

function Button(props) {
    return (
        <Link to="/">
            <Btn bgColor={props.bgColor} color={props.color} shadow={props.shadow}>{(props.text) ? props.text : "Button" }</Btn>
        </Link>
        
    )
}
export default Button;


