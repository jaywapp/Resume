import React from "react";
import styled from "styled-components";
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

    return (
        <Tag>
            <Header level={2} title={experience.company} />
            <Roles roles={experience.roles} />
            <Date enter={experience.enterDate} resign={experience.resignDate} />
            <Works works={experience.works} />
            <Performances performances={experience.performances} />
        </Tag>
    )
}

function Date({ enter, resign }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;

        font-size: 20px;
        width: fit-content;
        background-color: lightgray;
    `;

    return (
        <Tag>{enter + ' ~ ' + resign}</Tag>
    )
}

function Roles({ roles }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
    `;

    return (
        <Tag>
            {
                roles.map(role => {
                    return (
                        <Role role={role} />
                    )
                })
            }
        </Tag>
    )
}

function Role({ role }) {
    let Tag = styled.div`
        width: fit-content;
        margin-right: 10px;
    `

    return (
        <Tag>{role}</Tag>
    )
}

function Works({ works }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>
            <Header level={3} title={"업무"} />
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
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>{'● ' + work}</Tag>
    )
}

function Performances({ performances }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>
            <Header level={3} title={"성과"} />
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
        margin-top: 5px;
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <Header level={4} title={performance.name} />
            <PerformanceDesc desc={performance.desc} />
            <PerformanceSummary summary={performance.summary} />
        </Tag>
    )
}

function PerformanceDesc({ desc }) {

    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>
            {desc}
        </Tag>
    )
}

function PerformanceSummary({ summary }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 10px;
    `;

    let idx = 1;

    return (
        <Tag>
            {
                summary.map(s => {
                    return (
                        <PerformanceSummaryUnit idx={idx++} unit={s} />
                    )
                })
            }
        </Tag>
    )
}

function PerformanceSummaryUnit({ idx, unit }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>{idx + '. ' + unit}</Tag>
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