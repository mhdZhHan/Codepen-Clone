import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from "./Editor";
import useLocalStorage from "../Hooks/useLocalStorage";
function Home() {
    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCss] = useLocalStorage('css', '');
    const [js, setJs] = useLocalStorage('js', '');
    const [srcDoc, setSrcDoc] = useState('');
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `)
        }, 300)
        return ()=> clearTimeout(timeout)
    }, [html, css, js])
    return (
        <Fragment>
            <TopPane>
                <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
                <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
                <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
            </TopPane>
            <BottomPane>
                <iframe
                    srcDoc={srcDoc} 
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </BottomPane>
        </Fragment>
    );
};

const TopPane = styled.section`
  background-color: hsl(225, 6%, 25%);
  height: 50vh;
  display: flex;
`;
const BottomPane = styled.section`
  height: 50vh;
`;

export default Home;
