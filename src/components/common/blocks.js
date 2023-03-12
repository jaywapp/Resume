import { InnerTitle1, Seperator2 } from "./styled"
import styled from "styled-components";

export function Block ( { header, content } ){

    const BlockDiv = styled.div`
        margin-top: 20px;
    `;

    return (
        <BlockDiv>
            <div>
                <InnerTitle1>{header}</InnerTitle1>
                <Seperator2/>
            </div>
            {
                content
            }
        </BlockDiv>
    )
}
