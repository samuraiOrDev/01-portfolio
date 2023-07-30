import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
//@ts-ignore
export const CodeBlock = ({ children, className = 'rust' }) => {
  const language = className && className.split("-")[1];
  return (
    <div className="mt-10 mb-10">
      <SyntaxHighlighter language={language} style={oneDark}>
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
