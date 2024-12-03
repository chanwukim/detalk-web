import React from "react";

import type { PropsWithChildren } from "@/lib/types";

/** 
  <AppLayout>
    <AppLayoutLeft></AppLayoutLeft>
    <AppLayoutContent>
      <AppLayoutContentHeader></AppLayoutContentHeader>
      <AppLayoutContentMain></AppLayoutContentMain>
    </AppLayoutContent>
    <AppLayoutRight></AppLayoutRight>
  </AppLayout>
 */
export function AppLayout({ children }: PropsWithChildren) {
  const childrenArray = React.Children.toArray(children);

  const contentComponent = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === AppLayoutContent,
  );
  const leftComponent = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === AppLayoutLeft,
  );
  const rightComponent = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === AppLayoutRight,
  );

  return (
    <div className="tablet:grid-cols-[1fr_minmax(0,600px)_1fr] relative mx-auto grid w-full max-w-screen-xl flex-1 grid-cols-1 gap-32">
      {contentComponent}
      {leftComponent}
      {rightComponent}
    </div>
  );
}

export function AppLayoutContent({ children }: PropsWithChildren) {
  return (
    <div className="tablet:border-l/40 tablet:border-l tablet:border-r order-2 flex w-full min-w-0 flex-1 flex-col">
      {children}
    </div>
  );
}

export function AppLayoutContentHeader({ children }: PropsWithChildren) {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-52 items-center">{children}</header>
  );
}

export function AppLayoutContentMain({ children }: PropsWithChildren) {
  return <main className="flex-1 pb-64">{children}</main>;
}

export function AppLayoutLeft({ children }: PropsWithChildren) {
  return (
    <aside className="tablet:flex pc:justify-end order-1 hidden w-full">
      <h2 className="sr-only">Sidebar</h2>
      <div className="tablet:border-r pc:max-w-288 pc:border-r-0 pc:px-16 pc:w-full sticky top-0 flex h-svh w-72 flex-col">
        {children}
      </div>
    </aside>
  );
}

export function AppLayoutRight({ children }: PropsWithChildren) {
  return (
    <div className="pc:flex order-3 hidden">
      <div className="sticky top-0 h-svh flex-1">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
