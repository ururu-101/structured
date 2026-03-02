import { useEffect, useState } from 'react';
import FileTree from './FileTree';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const res = await fetch('data.json');
            const data = await res.json();
            setData(data.root);
        }
        getData();
    }, []);

    return (
        <>
            {data &&
                Object.entries(data).map(([name, node]) => {
                    return <FileTree key={name} name={name} node={node} />;
                })}
        </>
    );
}

export default App;
