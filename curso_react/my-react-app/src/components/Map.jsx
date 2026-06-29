

export const Fruits = () => {
    const fruits = [
        'Apple', 'Banana', 'Cherry', 'DAte'
    ];

    return (
        <ul>
            {fruits.map(fruit => <li>{fruit}</li> )}
        </ul>
    );
}