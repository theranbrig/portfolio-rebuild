import React, { useContext, useEffect, useState } from 'react';

import CodeBlock from '../../components/CodeBlock';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph\n\n```js\n\nconst icon = "hello"`';

const blogId = () => {
  return (
    <div>
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
    </div>
  );
};

export default blogId;
