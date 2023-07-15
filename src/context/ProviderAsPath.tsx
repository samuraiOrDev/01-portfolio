import { FC, createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
interface TypeContext {
    asPathURL: string
}
interface Props {
  children: React.ReactNode;
}
export const ContextAsPath = createContext({} as TypeContext);

const ProviderAsPath: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [asPathURL, setAsPathURL] = useState<string>("#hero-section");
  console.log({"router.asPath": router.asPath})
  useEffect(() => {
      setAsPathURL(router.asPath.split("/")[1])
  }, [router.asPath])

  return <ContextAsPath.Provider value={{ asPathURL }}>{children}</ContextAsPath.Provider>;
};

export default ProviderAsPath