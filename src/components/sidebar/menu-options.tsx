"use client";

import { icons } from "@/lib/constants";
import { useModal } from "@/providers/modal-provider";
import {
  Agency,
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from "@prisma/client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { ChevronsUpDown, Compass, Menu, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SubAccountDetails from "../forms/subaccount-details";
import CustomModal from "../global/custom-modal";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
type Props = {
  defaultOpen?: boolean;
  subAccounts: SubAccount[];
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccounts,
  user,
  defaultOpen,
}: Props) => {
  const { setOpen } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <Sheet
      modal={false}
      open={true}
      //{...openState}
    >
      <SheetTrigger
        asChild
        className="absolute top-4 left-4 z-[100] md:hidden flex"
      >
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        showX={!defaultOpen}
        side={"left"}
        className={clsx(
          "bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6",
          {
            "hidden md:inline-block z-0 w-[300px]": defaultOpen,
            "inline-block md:hidden z-[100] w-full": !defaultOpen,
          }
        )}
      >
        <div>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={sidebarLogo}
              alt="Sidebar Logo"
              fill
              className="rounded-md object-contain "
              draggable={false}
            />
          </AspectRatio>

          <Popover>
            <PopoverTrigger>
              <Button
                className="w-full my-4 gap-4 flex items-center justify-between py-8"
                variant="ghost"
              >
                <div className="flex items-center text-left gap-4">
                  <Compass />
                  <div className="flex flex-col">
                    {details.name}
                    <span className="text-muted-foreground">
                      {details.address}
                    </span>
                  </div>
                </div>
                <div>
                  <ChevronsUpDown size={16} className="text-muted-foreground" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 h-80 mt-4 z-[200]">
              <Command className="rounded-lg">
                <CommandInput placeholder="Search Accounts..." />
                <CommandList className="pb-16">
                  <CommandEmpty> No results found</CommandEmpty>
                  {(user?.role === "AGENCY_OWNER" ||
                    user?.role === "AGENCY_ADMIN") &&
                    user?.Agency && (
                      <CommandGroup heading="Agency">
                        <CommandItem className="!bg-transparent my-2 text-primary broder-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all">
                          {defaultOpen ? (
                            <Link
                              href={`/agency/${user?.Agency?.id}`}
                              className="flex gap-4 w-full h-full"
                            >
                              <div className="relative w-16">
                                <Image
                                  src={user?.Agency?.agencyLogo}
                                  alt="Agency Logo"
                                  fill
                                  className="rounded-md object-contain"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                {user?.Agency?.name}
                                <span className="text-muted-foreground">
                                  {user?.Agency?.address}
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={`/agency/${user?.Agency?.id}`}
                                className="flex gap-4 w-full h-full"
                              >
                                <div className="relative w-16">
                                  <Image
                                    src={user?.Agency?.agencyLogo}
                                    alt="Agency Logo"
                                    fill
                                    className="rounded-md object-contain"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  {user?.Agency?.name}
                                  <span className="text-muted-foreground">
                                    {user?.Agency?.address}
                                  </span>
                                </div>
                              </Link>
                            </SheetClose>
                          )}
                        </CommandItem>
                      </CommandGroup>
                    )}
                  <CommandGroup heading="Accounts">
                    {!!subAccounts
                      ? subAccounts.map((subAccount) => (
                          <CommandItem key={subAccount.id}>
                            {defaultOpen ? (
                              <Link
                                href={`/subaccount/${subAccount.id}`}
                                className="flex gap-4 w-full h-full"
                              >
                                <div className="relative w-16">
                                  <Image
                                    src={subAccount.subAccountLogo}
                                    alt="Sub Account Logo"
                                    fill
                                    className="rounded-md object-contain"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  {subAccount.name}
                                  <span className="text-muted-foreground">
                                    {subAccount.address}
                                  </span>
                                </div>
                              </Link>
                            ) : (
                              <SheetClose asChild>
                                <Link
                                  href={`/agency/${subAccount.id}`}
                                  className="flex gap-4 w-full h-full"
                                >
                                  <div className="relative w-16">
                                    <Image
                                      src={subAccount.subAccountLogo}
                                      alt="Sub Account Logo"
                                      fill
                                      className="rounded-md object-contain"
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1">
                                    {subAccount.name}
                                    <span className="text-muted-foreground">
                                      {subAccount.address}
                                    </span>
                                  </div>
                                </Link>
                              </SheetClose>
                            )}
                          </CommandItem>
                        ))
                      : "No Accounts Found"}
                  </CommandGroup>
                </CommandList>
                {(user?.role === "AGENCY_OWNER" ||
                  user?.role === "AGENCY_ADMIN") && (
                  <Button
                    className="w-full flex gap-2"
                    onClick={() => {
                      setOpen(
                        <CustomModal
                          title="Create Sub Account"
                          subHeading="You can switch betweem your agency 
                          account and the subaccount from the sidebar"
                          defaultOpen={true}
                        >
                          <SubAccountDetails
                            agencyDetails={user?.Agency as Agency}
                            userId={user?.id as string}
                            userName={user?.name}
                          />
                        </CustomModal>
                      );
                    }}
                  >
                    {" "}
                    <PlusCircleIcon size={16} /> {`Create Sub Account`}
                  </Button>
                )}
              </Command>
            </PopoverContent>
          </Popover>
          <p className=" text-muted-foreground text-xs mb-2">MENU LINKS</p>
          <Separator className="mb-4" />
          <nav className=" relative">
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Search Menu..." />
              <CommandList className="pb-16 overflow-visible"></CommandList>
              <CommandEmpty> No results found</CommandEmpty>
              <CommandGroup className=" overflow-visible">
                {sidebarOpt.map((sidebarOptions) => {
                  let val;
                  const result = icons.find(
                    (icon) => icon.value === sidebarOptions.icon
                  );
                  if (result) {
                    val = <result.path />;
                  }
                  return (
                    <CommandItem
                      key={sidebarOptions.id}
                      className=" md:w-[320px]  w-full"
                    >
                      <Link
                        href={sidebarOptions.link}
                        className=" flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                      >
                        {val}
                        <span className="">{sidebarOptions.name}</span>
                      </Link>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </Command>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;