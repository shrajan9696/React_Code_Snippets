import React, {useState} from 'react';

function FolderComponent({files}) {
    const [expand, setExpand] = useState(false);
    console.log(files)
    return (
        <div>
            <div style={{marginLeft:files.isFolder?"2px":"20px"}} >
                {files.isFolder ? (
                    <button onClick={()=>setExpand(!expand)} style={{marginRight:"5px",border:"none",backgroundColor:"transparent"}}> {!expand?">":"⬇️"}</button>
                ): null}
                {files.name}
            </div>
            {files.isFolder && expand &&
             files.children.map(ele=>(
                 <div style={{paddingLeft:"10px"}}>
                     <FolderComponent files={ele}/>
                 </div>
             ))
            }
        </div>
    );
}

export default FolderComponent;