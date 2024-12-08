import { useState } from 'react';
import Item from './ItemList';
import './App.scss';

function App() {
    const [items, setItems] = useState([
        { item: 'Buy Tomatoes', id: 0 },
        { item: 'Clean House', id: 1 }
    ]);

    const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

    return (
        <>
            <Item entries={items} deleteItem={deleteItem} />
        </>
    );
}

export default App;
