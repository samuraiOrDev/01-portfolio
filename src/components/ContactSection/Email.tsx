import { Html } from 'next/document';
import Link from 'next/link';
import * as React from 'react';



interface EmailProps {
  url: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({ url }) => {
  return (
    <Html lang="en">
      <Link href={url}>Click me</Link>
    </Html>
  );
};