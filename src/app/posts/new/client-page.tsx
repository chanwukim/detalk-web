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
import PlusIcon from "@/components/icons/plus-icon";
import SignalHighIcon from "@/components/icons/signal-high-icon";
import ThumbsUpIcon from "@/components/icons/thumbs-up-icon";
import UploadIcon from "@/components/icons/upload-icon";
import XIcon from "@/components/icons/x-icon";
import LeftNavigation from "@/components/left-navigation";
import MobileNavigation from "@/components/mobile-navigation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselSlideList, CarouselSlide } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const PRODUCT_PRICING = {
  FREE: "Free",
  PAID: "Paid",
  PAID_WITH_FREE_PLAN: "Paid with a free trial/plan",
} as const;

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
            <Button variant="ghost" rounded="full" className="w-36 p-0">
              <span className="sr-only">Cancel</span>
              <XIcon size={20} />
            </Button>
          </div>
        </AppLayoutContentHeader>
        <AppLayoutContentMain>
          <div className="p-16">
            <h1 className="text-base font-semibold">New Product</h1>

            <form>
              <div>
                <Label>Name</Label>
                <Input />
              </div>

              <div className="mt-16">
                <Label>Links</Label>
                <Input />
              </div>

              <div className="mt-16">
                <Label>Description</Label>
                <Textarea />
              </div>

              <div className="mt-16">
                <Label>제품 개발에 참여 또는 메이커인가요?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="option-one" />
                    <Label htmlFor="option-one">네, 나는 이제품</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="option-two" />
                    <Label htmlFor="option-two">아니요. 나는 이 제품을 소개</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-16">
                <Label>Pricing</Label>
                <RadioGroup defaultValue={PRODUCT_PRICING.FREE}>
                  {Object.values(PRODUCT_PRICING).map((pricing) => (
                    <div key={pricing}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={pricing} id={pricing} />
                        <Label htmlFor={pricing}>{pricing}</Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="mt-16">
                <Label>Add 5 important tags to represent this product</Label>
                <div className="mt-4">
                  <Button variant="outline" className="rounded-full">
                    <PlusIcon size={18} /> Add Tag
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border">
                <div className="bg-muted/50 border-b px-20 py-12">Images</div>
                <div className="bg-background px-16 py-16">
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border border-dashed py-24">
                    <div>
                      <Button variant="outline">
                        <UploadIcon size={18} />
                        Upload
                      </Button>
                    </div>
                    <p className="mt-16 text-sm">Choose Images.</p>
                    {/* Choose Images or drag & drop it here. */}
                    <p className="text-foreground-muted mt-4 text-sm">
                      JPG, JPEG, PNG and WEBP. Max 10 MB.
                    </p>
                  </div>
                </div>

                <div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </AppLayoutContentMain>
        <MobileNavigation />
      </AppLayoutContent>

      <AppLayoutRight></AppLayoutRight>
    </AppLayout>
  );
}
