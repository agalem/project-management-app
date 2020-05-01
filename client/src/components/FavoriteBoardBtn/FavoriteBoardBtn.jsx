import React, { useState, useEffect } from "react";

import IconBtn from "../UIComponents/BackgroundButtons/IconBtn";
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star';
import {Star} from "@material-ui/icons";

const FavoriteBoardBtn = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [icon, setIcon] = useState(StarBorderIcon);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        (isFavorite) ? setIcon(StarIcon) : setIcon(StarBorderIcon);
    }, [isFavorite]);

    return (
        <IconBtn Icon={icon} color={'yellow'} onClick={handleClick}/>
    )
};

export default FavoriteBoardBtn;
