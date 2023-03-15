import React from "react";
import styled from "styled-components";
import { experiences } from "../data";
import { Expes } from "../../../data/information";
import { Project } from "../project/project";
import { Header, SeperatableHeader, Seperator } from "../header";

export function Experiences() {

    let Tag = styled.div`
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <SeperatableHeader level={1} title={'Experience'} />
            {
                Expes.map(e => Experience(e))
            }
        </Tag>
    )
}

function Experience(experience) {
    let Tag = styled.div`
    `;

    let count = experience.roles.length;
    let idx = 1;

    return (
        <Tag>
            <Header level={2} title={experience.company}/>
            <div>{experience.enterDate + ' ~ ' + experience.resignDate}</div>
            {
                experience.roles.map(role => {
                    
                    let result = role;

                    if(idx++ != count)
                        result += ' / '

                    return(
                        <>{result}</>
                    )
                })
            }
            {/* Header & date */}
            {/* Roles */}
            <Works works={experience.works} />
            <Performances performances={experience.performances} />
        </Tag>
    )
}

function Works({ works }) {
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <Header level={3} title={"업무"}/>
            {
                works.map(w => {
                    return (
                        <Work work={w} />
                    )
                })
            }

        </Tag>
    )
}

function Work({ work }) {
    let Tag = styled.div`
    `;

    return (
        <Tag>{'● ' + work}</Tag>
    )
}

function Performances({ performances }) {
    let Tag = styled.div`
    `;

    return(
        <Tag>
            <Header level={3} title={"성과"}/>
            {
                performances.map(p => {
                    return (
                        <Performance performance={p} />
                    )
                })
            }

        </Tag>
    )
}

function Performance({ performance }) {

    let Tag = styled.div`
    `;

    return (
        <Tag>
            <Header level={4} title={performance.name}/>
            <PerformanceDesc desc={performance.desc}/>
            <PerformanceSummary summary={performance.summary}/>
        </Tag>
    )
}

function PerformanceDesc({desc}){

    let Tag = styled.div`
    `;

    return (
        <Tag>
            {desc}
        </Tag>
    )
}

function PerformanceSummary({summary}){
    let Tag = styled.div`
        margin-left: 10px;
    `;

    let idx = 1;

    return (
        <Tag>
        {
            summary.map(s=> {
                return(
                    <div>{idx + '. ' + s}</div>
                )
            })
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
            <SeperatableHeader level={2} title={experience.company} date={experience.date} />
            {
                experience.projects.map(p => {
                    return (
                        <>
                            {
                                index++ != 1
                                    ? <Seperator level={4} />
                                    : <></>
                            }
                            <Project project={p} />
                        </>
                    )
                })
            }

        </Tag>
    )
}