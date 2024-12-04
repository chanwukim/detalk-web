"use client";

import Link from "next/link";

import {
  AppLayout,
  AppLayoutLeft,
  AppLayoutContent,
  AppLayoutContentHeader,
  AppLayoutContentMain,
  AppLayoutRight,
} from "@/components/app-layout";
import ChatDotsIcon from "@/components/icons/chat-dots-icon";
import ForwardIcon from "@/components/icons/forward-icon";
import LogoIcon from "@/components/icons/logo-icon";
import PlusIcon from "@/components/icons/plus-icon";
import SignalHighIcon from "@/components/icons/signal-high-icon";
import ThumbsUpIcon from "@/components/icons/thumbs-up-icon";
import LeftNavigation from "@/components/left-navigation";
import MobileNavigation from "@/components/mobile-navigation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselSlideList, CarouselSlide } from "@/components/ui/carousel";

export default function ClientHomePage() {
  return (
    <AppLayout>
      <AppLayoutLeft>
        <div className="pc:justify-start tablet:pl-0 flex justify-center pt-24 pl-10">
          <Link href="/" className="inline-block">
            <span className="sr-only">Home</span>
            <LogoIcon size={32} className="text-primary" />
          </Link>
        </div>
        <LeftNavigation />
      </AppLayoutLeft>

      <AppLayoutContent>
        <AppLayoutContentHeader>
          <div className="flex items-center justify-center pl-12">
            <Link href="/" className="tablet:hidden">
              <LogoIcon size={32} className="text-primary" />
            </Link>
            <h1 className="tablet:block ml-4 hidden text-base font-medium">Home</h1>
          </div>
          <div className="flex-end ml-auto flex items-center pr-16">
            <Button rounded="full">
              <PlusIcon size={16} />
              New Product
            </Button>
          </div>
        </AppLayoutContentHeader>
        <AppLayoutContentMain>
          <div className="bg-background sticky top-52 z-10 overflow-hidden">
            <div className="no-scrollbar overflow-x-auto overflow-y-hidden">
              <nav>
                <h2 className="sr-only">Tabs</h2>
                <ul className="border-border flex w-full items-center border-b px-16 py-12">
                  {["New"].map((category, i) => (
                    <li key={i}>
                      <button className="bg-accent rounded-full px-16 py-8 text-sm font-bold">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <section>
            <h2 className="sr-only">Product posts</h2>
            {Array.from({ length: 10 }).map((_, index) => (
              <article key={index} className="group relative cursor-pointer border-b">
                <Link href={"/posts/id"} className="absolute inset-0 z-0 cursor-pointer">
                  <span className="sr-only">View detail</span>
                </Link>
                <div className="group-hover:bg-muted/40 flex p-16 transition-[background-color]">
                  <div className="flex-1 overflow-hidden">
                    <div>
                      <span className="text-foreground-muted text-sm">@userhandle</span>
                      <time className="text-foreground-muted ml-2 text-sm">· 1 hour ago</time>
                    </div>
                    <div className="flex items-center">
                      <h3 className="line-clamp-1 text-lg leading-24 font-semibold">
                        Product name Product nameProduct nameProduct
                      </h3>
                    </div>

                    <p className="text-foreground-muted line-clamp-3 text-base">
                      설명이 들어갑니다. 최대 세 줄까지 표시됩니다.설명이 들어갑니다.
                    </p>

                    <div className="relative mt-16 overflow-hidden">
                      <Carousel>
                        <CarouselSlideList className="no-scrollbar tablet:gap-16 flex cursor-grab gap-8 overflow-x-auto overflow-y-hidden">
                          {[
                            "/mock.jpg",
                            "/mock.jpg",
                            "/mock.jpg",
                            "/mock.jpg",
                            "/mock.jpg",
                            "/mock.jpg",
                          ].map((image, i) => (
                            <CarouselSlide key={i} className="flex-none first:pl-0 last:pr-0">
                              <div className="tablet:max-w-384 relative max-h-320 max-w-256 flex-none">
                                <img
                                  src={image}
                                  alt={`Post image ${i + 1}`}
                                  className="aspect-[4/3] h-full w-full cursor-pointer rounded-md object-cover"
                                />
                              </div>
                            </CarouselSlide>
                          ))}
                        </CarouselSlideList>
                      </Carousel>
                    </div>

                    <div className="mt-24 space-x-8">
                      <span className="bg-muted rounded-sm px-10 py-2 text-xs font-medium">
                        WebApp
                      </span>
                      <span className="bg-muted rounded-sm px-10 py-2 text-xs font-medium">
                        Free
                      </span>
                    </div>
                    <div className="relative mt-16 -mb-10 -ml-8 flex justify-between">
                      <span className="inline-flex w-full items-center justify-center gap-2 py-8">
                        <span className="sr-only">View counts</span>
                        <ThumbsUpIcon size={16} className="text-foreground-muted mr-4" />
                        <span className="text-foreground-muted text-sm">111</span>
                      </span>

                      <span className="inline-flex w-full items-center justify-center gap-2 py-8">
                        <span className="sr-only">View counts</span>
                        <ChatDotsIcon size={16} className="text-foreground-muted mr-4" />
                        <span className="text-foreground-muted text-sm">111</span>
                      </span>

                      <span className="inline-flex w-full items-center justify-center gap-2 py-8">
                        <span className="sr-only">View counts</span>
                        <SignalHighIcon size={16} className="text-foreground-muted mr-4" />
                        <span className="text-foreground-muted text-sm">111</span>
                      </span>

                      <span className="inline-flex w-full items-center justify-center gap-2 py-8">
                        <span className="sr-only">View counts</span>
                        <ForwardIcon size={16} className="text-foreground-muted mr-4" />
                        <span className="text-foreground-muted text-sm">Visit</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </AppLayoutContentMain>
        <MobileNavigation />
      </AppLayoutContent>

      <AppLayoutRight></AppLayoutRight>
    </AppLayout>
  );
}
