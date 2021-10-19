import {useState } from 'react';
import * as Components from './App.styles';

import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Compra o pão na padaria', done: false},
        {id: 2, name: 'Compra um bolo na padaria', done: true},
    ]);

    return(
        <Components.Container>
            <Components.Area>
                <Components.Header>Lista de Tarefas</Components.Header>

                <AddArea />

                {list.map((item, index) => (
                    <ListItem key={index} item={item}/>
                ))}
            </Components.Area>
        </Components.Container>
    );
}

export default App;
