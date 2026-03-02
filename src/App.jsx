import { useEffect, useState } from 'react';
import FileTree from './FileTree';
import nanoId from 'nano-id';

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:3001/root');
            const data = await res.json();
            setData(data);
        }
        getData();
    }, []);

    return (
        <>
            {data &&
                Object.entries(data).map(([name, node]) => (
                    <FileTree key={nanoId()} name={name} node={node} />
                ))}
        </>
    );
}

export default App;
