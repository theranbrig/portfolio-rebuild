import PropTypes from 'prop-types';
// components/CodeBlock.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter
    language={language}
    style={dracula}
    useInlineStyles
    customStyle={{ fontFamily: "'Fira Code', monospace" }}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.node.isRequired,
};
