import { useState } from 'react';
import Item from './ItemList';
import Input from './Input';
import './App.scss';

function App() {
    const [items, setItems] = useState([
        { item: 'Buy Tomatoes', id: 0 },
        { item: 'Clean House', id: 1 }
    ]);

    const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
    const addItem = (item) => {
        console.log('Item', item);
        setItems([...items, item])
    };

    return (
        <>
            <Item entries={items} deleteItem={deleteItem} />
            <Input addItem={addItem} />
        </>
    );
}

export default App;
