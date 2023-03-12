import React from "react";
import styled from "styled-components";
import { Seperator1 } from "../styled";
import { Text } from "./text";
import { Contact } from "./contact";
import { title_name, title_desc, title_keywords } from "../data";
import { contact_items } from "../links";

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
                <Text column={1} title={title_name} desc={title_desc} keywords={title_keywords} />
                <Contact column={2} items={contact_items} />
            </Grid>
            <Seperator1 />
        </Tag>
    )
}