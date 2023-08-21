import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  text: string;
  className: string;
}
export const CodeBlock: FC<Props> = ({ text, className = "java" }) => {
  const language = className && className.split("-")[1];
  return (
    <div className="mt-10 mb-10 w-[auto]">
      <SyntaxHighlighter
        language={"java"}
        style={oneDark}
        wrapLongLines
        className=" text-[10px]  sm:text-[12px] md:text-[16px]"
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};
