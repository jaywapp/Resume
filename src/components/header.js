import styled from "styled-components"

const HeaderDiv = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: ${(props) => props.fontsize} + 'px';
    margin-bottom: ${(props) => props.margin} + 'px';
`

const SeperatorDiv = styled.hr`
    color: black;
    background-color: black;
    height: ${(props) => props.height} + 'px';
`

export function Header({level, title, date}){
    
    let fontsize = GetFontSize(level);
    let margin = GetMargin(level);
    let height = GetHeight(level);

    if(date == null){

        return (
            <div>
                <HeaderDiv fontsize={fontsize} margin={margin}/>
                <SeperatorDiv height={height}/>
            </div>
        );
    }
    else{

        return (
            <>
            </>
        )

    }
}

function GetFontSize(level){
    if(level == 1){
        return 35;
    }
    else if(level == 2){
        return 30;
    }
    else if(level == 3){
        return 25;
    }
    else if(level == 4){
        return 20;
    }

    return 0;
}

function GetMargin(level){
    if(level == 1){
        return 25;
    }
    else if(level == 2){
        return 20;
    }
    else if(level == 3){
        return 10;
    }
    else if(level == 4){
        return 15;
    }

    return 0;
}

function GetHeight(level){
    if(level == 1){
        return 7;
    }
    else if(level == 2){
        return 5;
    }
    else if(level == 3){
        return 3;
    }
    else if(level == 4){
        return 1;
    }

    return 0;
}
