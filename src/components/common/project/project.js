import styled from "styled-components";
import { Item } from "./item";
import { Header, SeperatableHeader, Seperator } from "../header";

export function Project({project}){

    let Tag = styled.div`
        margin-bottom: 30px;
    `;

    return (
        <Tag>
            <Header level={3} title={project.name} date={project.date}/>
            <Block content1={<Header level={4} title={'Description'}/>}
                   content2={<Description desc={project.desc}/>}/>
            <Block content1={<Header level={4} title={'What I did'}/>}
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

function Description({desc}){
    let Tag = styled.div`
        margin-top: 10px;
    `;

    return (
        <Tag>
            {desc}
        </Tag>
    )
}