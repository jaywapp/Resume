import React from "react";
import styled from "styled-components";
import { Block } from "../blocks";
import { experiences } from "../data";
import { InnerTitle2 } from "../styled";
import { ContentDate, Date } from "../date";
import { Project } from "../project/project";

export function Experience() {
    return (
        <Block header='Experience' content={
            experiences.map(e => ExperienceBlock(e))
        } />
    )
}

function ExperienceBlock(experience) {

    let Tag = styled.div`
    `;

    return (
        <Tag>
            <ContentDate content={<Title title={experience.company}/>} date={experience.date}/>
            {
                experience.projects.map(p=> {
                    return(
                        <Project project={p}/>
                    )
                })
            }
        </Tag>
    )
}

function Title({ title }) {
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <InnerTitle2>
                {title}
            </InnerTitle2>
        </Tag>
    )
}