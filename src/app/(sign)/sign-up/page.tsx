import type { Metadata } from "next";
import Link from "next/link";

import LogoIcon from "@/components/icons/logo-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Sign up - Detalk",
  description: "Sign up to Detalk.",
};

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo: string }>;
}) {
  const { redirectTo } = await searchParams;

  return (
    <main className="pc:grid-cols-[4fr_6fr] grid w-full flex-1">
      <div className="pc:flex pc:items-center pc:justify-center pc:bg-muted hidden">
        <h1 className="sr-only">Sign up to Detalk</h1>
        <div className="mb-64">
          <Link href="/">
            <span className="sr-only">Home - Detalk</span>
            <LogoIcon size={52} className="text-primary" />
          </Link>
        </div>
      </div>
      <div className="bg-background">
        <div className="pc:hidden flex items-center justify-center">
          <Link href="/" className="mx-auto">
            <span className="sr-only">Home - Detalk</span>
            <LogoIcon size={40} className="text-primary mt-12" />
          </Link>
        </div>
        <form className="mx-auto flex max-w-[600px] flex-col gap-24 p-32 pt-112">
          <div className="text-2xl font-medium">Sign up</div>

          <div>
            <Label>User handle</Label>
            <Input type="text" placeholder="input your user handle" required maxLength={255} />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="your-email@detalk.net" required maxLength={255} />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" required minLength={8} maxLength={32} />
          </div>

          <div>
            <Label>Confirm your password</Label>
            <Input type="password" placeholder="••••••••" required minLength={8} maxLength={32} />
          </div>

          <div className="text-foreground-mute text-sm">
            By creating an account you agree to our{" "}
            <Link
              target="_blank"
              href="https://slashpage.com/detalk-terms/dwy5rvmj99zjv2p46zn9"
              className="text-link underline underline-offset-2"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              href="https://slashpage.com/detalk-terms/y9e1xp2xggwq7m7k35vz"
              className="text-link underline underline-offset-2"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="mt-8 flex justify-end gap-12">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Already have an account?</Link>
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
