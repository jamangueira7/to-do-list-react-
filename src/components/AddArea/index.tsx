import { useState } from 'react';
import * as Component from './styles';
import { Item } from '../../types/Item';


export const AddArea = () => {

    return (
        <Component.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Adicionar tarefa"
            />
        </Component.Container>
    );
}
