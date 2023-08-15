import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
//@ts-ignore
export const CodeBlock = ({ children, className = "java" }) => {
  const language = className && className.split("-")[1];
  console.log(language);
  return (
    <div className="mt-10 mb-10">
      <SyntaxHighlighter language={language} style={coldarkDark}>
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
