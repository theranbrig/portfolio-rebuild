// components/CodeBlock.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = (props) => {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={dracula} useInline>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
