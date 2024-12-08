import { useState } from 'react';
function Input({ addItem }) {
    const [value, setValue] = useState('');
    return (
        <>
            Input:{' '}
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (value.trim()) {
                        addItem({
                            item: value,
                            id: Date.now()
                        });
                        setValue('');
                    }
                }}
            >
                Add
            </button>
        </>
    );
}

export default Input;
