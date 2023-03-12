import React from "react";
import styled from "styled-components";
import { experiences } from "../data";
import { Project } from "../project/project";
import { SeperatableHeader, Seperator } from "../header";

export function Experience() {

    let Tag = styled.div`
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <SeperatableHeader level={1} title={'Experience'}/>
            {
                experiences.map(e => ExperienceBlock(e))
            }
        </Tag>
    )
}

function ExperienceBlock(experience) {

    let Tag = styled.div`
    `;

    let index = 1;
    return (
        <Tag>
            <SeperatableHeader level={2} title={experience.company} date={experience.date}/>
            {
                experience.projects.map(p=> {
                    return(
                        <>
                        {
                            index++ != 1
                            ? <Seperator level={4}/>
                            : <></>
                        }
                        <Project project={p}/>
                        </>
                    )
                })
            }
            
        </Tag>
    )
}