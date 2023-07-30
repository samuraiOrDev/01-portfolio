import React from 'react';
import { CodeBlock } from './Mdx/CodeBlock';
import { Table } from './Mdx/Table';

interface TypeProps {
  children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
}
const MDXComponents = {
  // Componente de encabezado <h1>
  h1: (props: TypeProps) => <h1 className='text-5xl text-gradient-h1 font-bold mb-10 mt-10'>{props.children}</h1>,
  h2: (props: TypeProps) => <h1 className='text-3xl mt-10 font-bold text-gradient-h1'># {props.children}</h1>,
  h3: (props: TypeProps) => <h3 className='text-2xl mt-10 font-bold text-gradient-h1'>## {props.children}</h3>,
  p: (props: TypeProps) => <p className='mt-5 mb-2 text-start text-xl'>{props.children}</p>,
  ul: (props: TypeProps) => <ul className='ml-5'>{props.children}</ul>,
  li: (props: TypeProps) => <li className=' list-disc mb-2'>{props.children}</li>,
  code :CodeBlock,
  blockquote: (props: TypeProps) => <blockquote className=' border-yellow-600 border-l-4  pl-4 text-yellow-700'>
  {props.children}</blockquote>,
  Table
};

export default MDXComponents;