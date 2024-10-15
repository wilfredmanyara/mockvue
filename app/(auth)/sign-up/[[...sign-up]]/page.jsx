"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FaSpinner } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <section className="bg-zinc-100">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Mockvue
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            An AI-powered mock interview platform, enhanced by Gemini AI, 
            providing personalized questions and feedback to help users excel in their careers.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block lg:hidden">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Mockvue
              </h1>

              <p className="mt-4 mb-4 leading-relaxed text-gray-500">
              An AI-powered mock interview platform, enhanced by Gemini AI, 
            providing personalized questions and feedback to help users excel in their careers.
              </p>
            </div>

            <div className="grid w-full grow items-center px-4 sm:justify-center">
              <SignUp.Root>
                <Clerk.Loading>
                  {(isGlobalLoading) => (
                    <>
                      <SignUp.Step name="start">
                        <Card className="w-full sm:w-96">
                          <CardHeader>
                            <CardTitle>Create your account</CardTitle>
                            <CardDescription>
                              Welcome! Please fill in the details to get
                              started.
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="grid gap-y-4">
                            <Clerk.Field
                              name="emailAddress"
                              className="space-y-2"
                            >
                              <Clerk.Label asChild>
                                <Label>Email address</Label>
                              </Clerk.Label>
                              <Clerk.Input type="email" required asChild>
                                <Input />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                            <Clerk.Field name="password" className="space-y-2">
                              <Clerk.Label asChild>
                                <Label>Password</Label>
                              </Clerk.Label>
                              <Clerk.Input type="password" required asChild>
                                <Input />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <SignUp.Captcha className="empty:hidden" />
                              <SignUp.Action submit asChild>
                                <Button disabled={isGlobalLoading}>
                                  <Clerk.Loading>
                                    {(isLoading) => {
                                      return isLoading ? (
                                        <FaSpinner className="text-white animate-spin size-4" />
                                      ) : (
                                        "Continue"
                                      );
                                    }}
                                  </Clerk.Loading>
                                </Button>
                              </SignUp.Action>
                              <Button variant="link" size="sm" asChild>
                                <Link href="/sign-in">
                                  Already have an account? Sign in
                                </Link>
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignUp.Step>

                      <SignUp.Step name="continue">
                        <Card className="w-full sm:w-96">
                          <CardHeader>
                            <CardTitle>Continue registration</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Clerk.Field name="username" className="space-y-2">
                              <Clerk.Label>
                                <Label>Username</Label>
                              </Clerk.Label>
                              <Clerk.Input type="text" required asChild>
                                <Input />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <div className="grid w-full gap-y-4">
                              <SignUp.Action submit asChild>
                                <Button disabled={isGlobalLoading}>
                                  <Clerk.Loading>
                                    {(isLoading) => {
                                      return isLoading ? (
                                        <FaSpinner className="text-white animate-spin size-4" />
                                      ) : (
                                        "Continue"
                                      );
                                    }}
                                  </Clerk.Loading>
                                </Button>
                              </SignUp.Action>
                            </div>
                          </CardFooter>
                        </Card>
                      </SignUp.Step>

                      <SignUp.Step name="verifications">
                        <SignUp.Strategy name="email_code">
                          <Card className="w-full sm:w-96">
                            <CardHeader>
                              <CardTitle>Verify your email</CardTitle>
                              <CardDescription>
                                Use the verification link sent to your email
                                address
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-y-4">
                              <div className="grid items-center justify-center gap-y-2">
                                <Clerk.Field name="code" className="space-y-2">
                                  <Clerk.Label className="sr-only">
                                    Email address
                                  </Clerk.Label>
                                  <div className="flex justify-center text-center">
                                    <Clerk.Input
                                      type="otp"
                                      className="flex justify-center has-[:disabled]:opacity-50"
                                      autoSubmit
                                      render={({ value, status }) => {
                                        return (
                                          <div
                                            data-status={status}
                                            className={cn(
                                              "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                              {
                                                "z-10 ring-2 ring-ring ring-offset-background":
                                                  status === "cursor" ||
                                                  status === "selected",
                                              }
                                            )}
                                          >
                                            {value}
                                            {status === "cursor" && (
                                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                              </div>
                                            )}
                                          </div>
                                        );
                                      }}
                                    />
                                  </div>
                                  <Clerk.FieldError className="block text-center text-sm text-destructive" />
                                </Clerk.Field>
                                <SignUp.Action
                                  asChild
                                  resend
                                  className="text-muted-foreground"
                                  fallback={({ resendableAfter }) => (
                                    <Button variant="link" size="sm" disabled>
                                      Didn&apos;t receive a code? Resend (
                                      <span className="tabular-nums">
                                        {resendableAfter}
                                      </span>
                                      )
                                    </Button>
                                  )}
                                >
                                  <Button
                                    type="button"
                                    variant="link"
                                    size="sm"
                                  >
                                    Didn&apos;t receive a code? Resend
                                  </Button>
                                </SignUp.Action>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <div className="grid w-full gap-y-4">
                                <SignUp.Action submit asChild>
                                  <Button disabled={isGlobalLoading}>
                                    <Clerk.Loading>
                                      {(isLoading) => {
                                        return isLoading ? (
                                          <FaSpinner className="text-white animate-spin size-4" />
                                        ) : (
                                          "Continue"
                                        );
                                      }}
                                    </Clerk.Loading>
                                  </Button>
                                </SignUp.Action>
                              </div>
                            </CardFooter>
                          </Card>
                        </SignUp.Strategy>
                      </SignUp.Step>
                    </>
                  )}
                </Clerk.Loading>
              </SignUp.Root>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
