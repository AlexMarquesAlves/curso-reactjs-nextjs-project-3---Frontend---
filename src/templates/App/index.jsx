import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Base {...mockBase}></Base>
    </div>
  );
}

export default Home;
