import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt} from "@fortawesome/free-solid-svg-icons"
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
function Editor(props) {
    const { displayName, language, value, onChange } = props;
    const [isOpen, setIsOpen] = useState(true);
    const handleChange = (editor, data, value)=>{
        onChange(value);
    };
    return (
        <Container isOpen={isOpen}>
            <Title>
                {displayName}
                <button
                    onClick={()=>setIsOpen(prevIsOpen => !prevIsOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
                </button>
            </Title>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </Container>
    );
};
// styled components
const Container = styled.div`
  flex-grow: ${({isOpen})=>(isOpen === true ? "1" :"0")};
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: hsl(225, 6%, 25%);
  .code-mirror-wrapper {
      flex-grow: 1;
      border-bottom-left-radius: .5rem;
      border-bottom-right-radius: .5rem;
      overflow: hidden;
  }
  .CodeMirror-scroll {
      position: ${({isOpen})=>(!isOpen === true ? "absolute" :"initial")};
      /* overflow: hidden !important; */
  }
  .CodeMirror-line {
      word-wrap: break-word;
      white-space: pre-wrap;
      word-break: normal;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(225, 6%, 13%);
  color: #fff;
  padding: .5rem .5rem .5rem 1rem;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  button {
      background: none;
      border: none;
      outline: none;
      margin-left: .5rem;
      color: #fff;
      cursor: pointer;
  }
`;

export default Editor;
