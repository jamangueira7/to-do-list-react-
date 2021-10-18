import * as Component from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    return (
        <Component.Container>
            {item.name}
        </Component.Container>
    );
}
