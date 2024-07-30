import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
        {/* grid */}

        <div className="absolute bottom-0 left-0 right-0 top-20 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        <p className="text-center text-3xl bold mt-[6rem]">
          Run your agency, in one place
        </p>
        <div className=" flex flex-row  justify-center items-center">
          <div className=" relative size-[9vw]">
            <Image
              src="/assets/logo.png"
              className=" absolute"
              fill={true}
              alt="logo"
            />
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="tetx-4xl font-bold text-center md:text-[135px]">
              neSync
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center relative md:-mt-[-70px]">
          <Image
            src="/assets/preview.png"
            alt="banner"
            width={1200}
            height={1200}
            className=" rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className=" bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-0"></div>
        </div>
      </section>
      <section className=" flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[60px]">
        <h2 className=" text-4xl text-center">Choose what fits you right</h2>
        <p className=" text-muted-foreground text-center">
          {" "}
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {"you`re "} not <br />
          ready to commit you can get started with our free plan.
        </p>
        <div className=" flex gap-4 justify-center flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                ></CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-6xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  {card.duration ? ` / ${card.duration}` : null}
                </span>
              </CardContent>
              <CardFooter className=" flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className=" text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    { "!bg-muted-foreground": card.title !== "Unlimited Saas" }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
