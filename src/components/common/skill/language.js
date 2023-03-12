import styled from "styled-components";
import { skills_major, skills_minor, nugets, skills_major_desc, skills_minor_desc, skills_nuget_desc } from "../data";
import { Header } from "../header";


let Tag = styled.div`
    margin-bottom: 30px;
    `;

export function Language(){
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <LanguageBox/>
            <LanguageGrid/>
        </Tag>

    )
}

function LanguageBox(){
    let Tag = styled.div`
        margin-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid #d3d3d350;
        background-color: #d3d3d350;
    `;

    let LI = styled.li`
        margin-bottom: 5px;
    `;

    return(
        <Tag>
            <LI>{'Major : ' + skills_major_desc}</LI>
            <LI>{'Minor : ' + skills_minor_desc}</LI>
            <LI>{'Nuget : ' + skills_nuget_desc}</LI>
        </Tag>
    )
}

function LanguageGrid(){
    let Tag = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    `;

    return (
        <Tag>
            <Major column={1}/>
            <Minor column={2}/>
            <Nuget column={3}/>
        </Tag>

    )
}

function Major({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Major'}/>
            <Keywords items={skills_major}/>
        </Tag>
    )
}

function Minor({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Minor'}/>
            <Keywords items={skills_minor}/>
        </Tag>
    )
}

function Nuget({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Nuget'}/>
            <Keywords items={nugets}/>
        </Tag>
    )
}

function Keywords({items}){
    let Tag = styled.p`
        margin-top: 10px;
    `;

    return (
        <Tag>{items.map(i=> <Keyword item={i}/>)}</Tag>
    )
}

function Keyword({item}){
    let Tag = styled.div`
        width: fit-content;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 2px;
        padding-bottom: 2px;

        &:hover{  
            background-color : darkgray;
            color : white;
        }
    `;


    const onClick = () => {

        if(item.link != null)
            window.open(item.link, '_blank');
    }

    return (
        <Tag onClick={onClick}>{'● ' + item.name}</Tag>
    )
}
