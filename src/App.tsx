import {useState } from 'react';
import * as Components from './App.styles';

const App = () => {
    const [list, setList] = useState([]);

    return(
        <Components.Container>
            <Components.Area>
                <Components.Header>Lista de Tarefas</Components.Header>
            </Components.Area>
        </Components.Container>
    );
}

export default App;
