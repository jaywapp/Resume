import React from "react";
import styled from "styled-components";
import { Expes } from "../../../data/information";
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
            <Projects projects={experience.projects}/>
            {/* <Performances performances={experience.performances} /> */}
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

function Projects({projects}){
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>
            <Header level={3} title={"프로젝트"} />
            {
                projects.map(p => {
                    return (
                        <Project project={p} />
                    )
                })
            }

        </Tag>
    )

}

function Project({project}){

    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        
        display: grid;
        grid-template-columns: auto 1fr;
        border: 1px solid black;
    `;

    let LeftTag = styled.div`
        grid-row: ${(props) => props.row};
        grid-column: 1;
        width: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-right: 1px solid;
        font-weight: bold;
        text-align: center;
    `;

    let RightTag = styled.div`
        grid-row: ${(props) => props.row};
        grid-column: 2;

        margin-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    `;

    return (
        <Tag>
            <LeftTag row={1}>이름</LeftTag>
            <LeftTag row={2}>설명</LeftTag>
            <LeftTag row={3}>기간</LeftTag>
            <LeftTag row={4}>역할</LeftTag>
            <LeftTag row={5}>성과</LeftTag>
            <LeftTag row={6}>기술</LeftTag>

            <RightTag row={1}>{project.name}</RightTag>
            <RightTag row={2}>{project.desc}</RightTag>
            <RightTag row={3}>{project.date}</RightTag>
            <RightTag row={4}>
                <List items={project.actions}/>
            </RightTag>
            <RightTag row={5}>
                <List items={project.results}/>
            </RightTag>
            <RightTag row={6}>
                {Join(project.skills, ',')}
            </RightTag>

        </Tag>
    )
}

function List({items}){
    let Tag = styled.div`
    `;

    let Unit = styled.div`
        margin-top: 2px;
        margin-bottom: 2px;
    `; 

    let index = 1;

    return (
        <Tag>
            {
                items.map(item => {
                    return(
                        <Unit>{index++ + '. ' + item}</Unit>
                    )
                })
            }
        </Tag>
    )
}

function Join(strs, seperator){
    let result = '';
    let index = 1;

    strs.forEach(str => {
        result += str;
        if(strs.length != index++){
            result += seperator;
            result += ' ';
        }
    });

    return result;
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
            <PerformanceActions actions={performance.actions} />
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

function PerformanceActions({ actions }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 10px;
    `;

    let idx = 1;

    return (
        <Tag>
            {
                actions.map(s => {
                    return (
                        <PerformanceAction idx={idx++} action={s} />
                    )
                })
            }
        </Tag>
    )
}

function PerformanceAction({ idx, action }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>{idx + '. ' + action}</Tag>
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