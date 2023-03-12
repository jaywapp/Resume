import './App.css';
import { Title } from './components/common/title/title';
import { Introduce } from './components/common/introduce/introduce';
import { Experience } from './components/common/experience/experience';
import { Skill } from './components/common/skill/skill';
import styled from 'styled-components';

function App() {
  let Tag = styled.div`
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
  `

  let Body = styled.div`
    grid-column: 2;
  `

  return (
    <Tag>
      <Body>
        <Title />
        <Introduce />
        <Experience />
        <Skill />
      </Body>
    </Tag>
  );
}

export default App;
