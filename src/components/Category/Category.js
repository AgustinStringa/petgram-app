import React from "react";
import { AnchorCategory } from "./Styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
    return (
        <AnchorCategory href={path}>
            <img src={cover} alt="category image" />
            {emoji}
        </AnchorCategory>
    );
};
