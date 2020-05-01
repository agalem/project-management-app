import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import LaunchIcon from '@material-ui/icons/Launch';

const SearchContainer = styled.div`
    background-color: ${props => props.isactive ? '#fff' : 'rgba(255, 255, 255, 0.1)'};
    display: flex;
    align-items: center;
    border-radius: 3px;
    height: 30px;
    width: ${props => props.isactive ? '300px' : '170px'};
    margin: 0 10px;
    padding: 0 5px;
    position: relative;
    transition: width 0.5s;
    &:hover {
        background-color: ${props => props.isactive ? '#fff' : 'rgba(255,255,255,0.2)'};
    }
`;

const InputStyled = styled(InputBase)`
    width: ${props => props.isactive ? '250px' : 'auto'};
`;

const SearchIconStyled = styled(SearchIcon)`
    position: absolute;
    right: 0;
    color: #fff;
`;

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    right: 5px;
    color: #657289;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    position: absolute;
    margin: 0;
    padding: 0;
    right: 28px;
    top: 5px;
    color: #657289;
`;


const SearchField = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        if(!isActive) {
            setActive(true);
        }
    };

    const makeInactive = () => {
        if(isActive) {
            setActive(false);
        }
    };

    return (
        <SearchContainer isactive={isActive ? 1 : 0} onClick={handleClick}>
            <InputStyled
                isactive={isActive ? 1 : 0}
                inputProps={{'aria-label': 'search teams, tables and tasks'}}
            />
            {
                !isActive &&
                    <SearchIconStyled/>
            }
            {
                isActive &&
                    <React.Fragment>
                        <StyledCloseIcon fontSize={'small'} onClick={makeInactive}/>
                        <StyledLink to={'/'}>
                            <LaunchIcon fontSize={'small'}/>
                        </StyledLink>
                    </React.Fragment>
            }
        </SearchContainer>
    )
};

export default SearchField;