import nanoId from 'nano-id';
import { memo, useState } from 'react';

const FileTree = memo(({ name, node }) => {
    const [open, setOpen] = useState(false);
    if (node.type === 'file') {
        return <div style={{ marginLeft: '20px' }}> 📄 {name}</div>;
    }

    return (
        <div style={{ marginLeft: 20, cursor: 'pointer' }}>
            <div onClick={() => setOpen(prev => !prev)}>
                {open ? '📂' : '📁'} {name}
            </div>
            <div>
                {open &&
                    node.children &&
                    Object.entries(node.children).map(
                        ([childName, childNode]) => (
                            <FileTree
                                key={nanoId()}
                                name={childName}
                                node={childNode}
                            />
                        ),
                    )}
            </div>
        </div>
    );
});

export default FileTree;
