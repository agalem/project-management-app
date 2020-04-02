import React from "react";
import styled from "styled-components";

import IconBtn from '../BackgroundButtons/IconBtn';
import IconLink from "../BackgroundButtons/IconLink";
import TextBtn from "../BackgroundButtons/TextBtn";
import TextIconBtn from "../BackgroundButtons/TextIconBtn";
import SearchField from "../SearchField/SearchField";

import {Delete} from '@material-ui/icons';
import {HomeOutlined} from '@material-ui/icons';
import {AssignmentOutlined} from '@material-ui/icons';

const Nav = styled.nav`
    height: 40px;
    width: 100%;
    background: rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;



const NavBar = () => {
    return (
        <Nav>
            <Section>
                <IconBtn Icon={Delete}/>
                <IconLink Icon={HomeOutlined}/>
                <TextBtn text={"Text"}/>
                <TextIconBtn text={"Text goes here"} Icon={AssignmentOutlined}/>
                <SearchField/>
            </Section>
            <Section/>
            <Section/>
        </Nav>
    )
};

export default NavBar;