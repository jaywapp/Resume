import React from "react";
import styled from "styled-components";
import { Text } from "./text";
import { Contact } from "./contact";
import { Common, Contacts } from "../../../data/information";
import { Seperator } from "../header";

export function Title() {

    let Tag = styled.div`
        margin-top: 100px;
        margin-bottom: 50px;
    `

    let Grid = styled.div`
        display: grid;
        grid-template-columns: 1fr 200px;
    `

    return (
        <Tag>
            <Grid>
                <Text column={1} title={Common.name} desc={Common.job} keywords={Common.keywords} />
                <Contact column={2} items={Contacts} />
            </Grid>
            <Seperator level={1}/>
        </Tag>
    )
}