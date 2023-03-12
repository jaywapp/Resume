import React from "react";
import styled from "styled-components";
import { SeperatableHeader } from "../header";

export function Skill(){

    let Tag = styled.div`
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <SeperatableHeader level={2} title={'Skill'}/>
            {
            }
        </Tag>
    )
}