"use client"
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs/lib";
import { useServerInsertedHTML } from "next/navigation";
import { FC, PropsWithChildren, useMemo } from "react";

export const StyledComponentsRegistryProvider: FC<PropsWithChildren> = ({ children }) => {
  const cache = useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}/>
  ))
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};