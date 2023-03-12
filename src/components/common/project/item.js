import styled from "styled-components";
import { ContentDate } from "../date";

export function Item({item}){
    let Tag = styled.div`
        margin-top: 10px;
    `;

    return (
        <Tag>
            <ContentDate 
                content={<Content content={item.content}/>}
                date={item.date}/>

            <Children children={item.children}/>
        </Tag>
    )
}

function Content({content}){
    let Tag = styled.div`
    `;

    return (
        <Tag>{'● ' + content}</Tag>
    )
}

function Children( {children }){
    let Tag = styled.div`
        margin-top: 10px;
        margin-left: 20px;
    `;

    return (
        <Tag>
            {
                children.map(c=> {
                    return ( <Child child={c}/> )
                })
            }
        </Tag>
    )
}

function Child({child}){
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <ContentDate content={'- ' + child.content} date={child.date}/>
        </Tag>
    )

}
