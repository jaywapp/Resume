import styled from "styled-components";
import { InnerTitle3, InnerTitle4, Seperator3 } from "../styled";
import { ContentDate, Date } from "../date";
import { Item } from "./item";

export function Project({project}){

    let Tag = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <Seperator3/>
            <ContentDate 
                content={<Title title={project.name}/>}
                date={project.date}/>

            <Block content1={<InnerTitle4>Description</InnerTitle4>}
                   content2={<Description desc={project.desc}/>}/>
            <Block content1={<InnerTitle4>What I did</InnerTitle4>}
                   content2={<Items items={project.items}/>}/>
        </Tag>
    )
}

function Block( {content1, content2} ){
    let Tag = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
    `;

    return (
        <Tag>
            {content1}
            {content2}
        </Tag>
    )
}

function Items ({items}){
    let Tag = styled.div`
    `;

    return (
        <Tag> {items.map(i => ( <Item item={i}/>))} </Tag>
    )
}

function Title({title}){

    let Tag = styled.div`
    `;

    return (
        <Tag>
            <InnerTitle3>{title}</InnerTitle3>
        </Tag>
    )
}

function Description({desc}){
    let Tag = styled.div`
    `;

    return (
        <Tag>
            {desc}
        </Tag>
    )
}