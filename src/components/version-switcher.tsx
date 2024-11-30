"use client";

import * as React from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <div className="items-center text-xl font-bold text-[#9a33df] flex mx-2 justify-between gap-1 leading-none">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  className="h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M23 4c-2.043 0-3.305 1.207-4 2.156V5C3.184 5 3 27.77 3 28h4s-.016-4.875 1.531-9.688c.774-2.406 1.95-4.785 3.625-6.5S15.973 9 19 9h.625l.281-.563S20.793 6.954 22 6.313V9.25l4.094 8.188l.093.156l.125.125c.403.379.555.738.625.968c.055.168.032.165.032.188c-.028.098-.07.309-.25.594c-.219.347-.414.531-.719.531s-.5-.184-.719-.531s-.312-.719-.312-.719l-.219-.844l-.875.094s-.832.098-1.75-.156s-1.785-.703-2.156-2.094l-.344-1.281l-1.125.656c-1.293.758-2.043 1.914-2.188 3.094c-.144 1.18.204 2.316.625 3.437C17.777 23.898 19 26.184 19 28h2c0-2.621-1.465-5.055-2.219-7.063c-.375-1.003-.547-1.851-.468-2.468a1.8 1.8 0 0 1 .468-1c.762 1.191 1.805 2.035 2.813 2.312c.93.258 1.308.176 1.75.157c.09.234.062.292.25.593C24 21.184 24.804 22 26 22c1.195 0 2-.816 2.406-1.469c.407-.652.563-1.281.563-1.281l.031-.094v-.093s.008-.481-.156-1c-.137-.438-.496-.97-.969-1.5h.031L24 8.75V4zm-4.531 3.031c-.004.008-.028.024-.032.032c-.406.019-.8.039-1.187.093c-.313.043-.61.121-.906.188a10 10 0 0 1 .906-.188c.39-.066.8-.105 1.219-.125M22 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"
                  />
                </svg>
              </span>
              BRIDLE
            </div>
            <div>
              <Button size={"icon"} className="w-7 h-7 p-2"  variant={"outline"}>
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="m13.58 11.6l-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.5 2.5 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88a1.6 1.6 0 0 0 0 .38a4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9M7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63a6 6 0 0 0-.75 0a6 6 0 0 0-.75 0M8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75m-4.52-2.5l1.34-2.17l.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09a4 4 0 0 1 .6 2.12v3.44l.18.31l1.34 2.17z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}
              >
                v{version}{" "}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
