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
import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import ChatDotsIcon from "@/components/icons/chat-dots-icon";
import ExportIcon from "@/components/icons/export-icon";
import ForwardIcon from "@/components/icons/forward-icon";
import LogoIcon from "@/components/icons/logo-icon";
import SignalHighIcon from "@/components/icons/signal-high-icon";
import ThumbsUpIcon from "@/components/icons/thumbs-up-icon";
import LeftNavigation from "@/components/left-navigation";
import MobileNavigation from "@/components/mobile-navigation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselSlideList, CarouselSlide } from "@/components/ui/carousel";

export default function ClientPostDetailPage() {
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
        <AppLayoutContentHeader className="border-b">
          <div className="flex items-center justify-center pl-12">
            <Button
              variant="ghost"
              rounded="full"
              className="w-36 p-0"
              onClick={() => window.history.back()}
            >
              <ArrowLeftIcon size={20} />
            </Button>
          </div>
          <div className="flex-end ml-auto flex items-center pr-16">
            <Button rounded="full" className="px-40">
              <ForwardIcon size={16} />
              Visit
            </Button>
          </div>
        </AppLayoutContentHeader>
        <AppLayoutContentMain>
          <article className="relative border-b">
            <div className="flex flex-col p-16 transition-[background-color]">
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
                  <span className="bg-muted rounded-sm px-10 py-2 text-xs font-medium">WebApp</span>
                  <span className="bg-muted rounded-sm px-10 py-2 text-xs font-medium">Free</span>
                </div>
              </div>
              <div className="relative mt-16 -mb-10 -ml-8 flex justify-center px-16">
                <Button variant="ghost" rounded="full" className="w-full">
                  <span className="sr-only">Recommend counts</span>
                  <ThumbsUpIcon size={16} className="text-foreground-muted mr-4" />
                  <span className="text-foreground-muted text-sm">111</span>
                </Button>

                <Button variant="ghost" rounded="full" className="w-full">
                  <span className="sr-only">Comment counts</span>
                  <ChatDotsIcon size={16} className="text-foreground-muted mr-4" />
                  <span className="text-foreground-muted text-sm">111</span>
                </Button>

                <span className="flex w-full items-center justify-center gap-8">
                  <span className="sr-only">View counts</span>
                  <SignalHighIcon size={16} className="text-foreground-muted mr-4" />
                  <span className="text-foreground-muted text-sm">111</span>
                </span>

                <Button variant="ghost" rounded="full" className="w-full">
                  <span className="sr-only">Share</span>
                  <ExportIcon size={16} className="text-foreground-muted mr-4" />
                  <span className="text-foreground-muted text-sm">111</span>
                </Button>
              </div>
            </div>
          </article>

          <section className="relative border-b p-16">
            <h3 className="text-lg font-semibold">What&apos;s great about it</h3>

            <ul className="mt-16 space-y-4">
              <li className="bg-muted relative h-44 rounded-lg">
                <div className="flex h-full items-center pr-20 pl-16">
                  <span className="block flex-1 font-semibold">
                    <span className="mr-6">💲</span>
                    Fair Pricing
                  </span>
                  <span className="text-primary text-sm font-semibold">1,111</span>
                  <span className="sr-only">people chose it</span>
                </div>
                <div
                  style={{ width: "60%" }}
                  className="bg-primary/30 absolute top-0 bottom-0 left-0 rounded-lg"
                ></div>
              </li>
              <li className="bg-muted relative h-44 rounded-lg">
                <div className="flex h-full items-center pr-20 pl-16">
                  <span className="block flex-1 font-semibold">
                    <span className="mr-6">⏰</span>Saves Time
                  </span>
                  <span className="text-primary text-sm font-semibold">1,111</span>
                  <span className="sr-only">people chose it</span>
                </div>
                <div
                  style={{ width: "40%" }}
                  className="bg-primary/20 absolute top-0 bottom-0 left-0 rounded-lg"
                ></div>
              </li>
              <li className="bg-muted relative h-44 rounded-lg">
                <div className="flex h-full items-center pr-20 pl-16">
                  <span className="block flex-1 font-semibold">
                    <span className="mr-6">😌</span>Easy to use
                  </span>
                  <span className="text-primary text-sm font-semibold">1,111</span>
                  <span className="sr-only">people chose it</span>
                </div>
                <div
                  style={{ width: "30%" }}
                  className="bg-primary/10 absolute top-0 bottom-0 left-0 rounded-lg"
                ></div>
              </li>
            </ul>
          </section>
        </AppLayoutContentMain>
        <MobileNavigation />
      </AppLayoutContent>

      <AppLayoutRight></AppLayoutRight>
    </AppLayout>
  );
}
