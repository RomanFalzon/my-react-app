function ItemList({ entries, deleteItem }) {
    return entries.map(({ item, id }) => {
        return (
            <div key={id}>
                {item}{' '}
                <span
                    onClick={() => {
                        deleteItem(id);
                    }}
                >
                    DELETE
                </span>
            </div>
        );
    });
}
export default ItemList;
