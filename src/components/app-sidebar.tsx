import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  logo: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      // title: "Getting Started",
      // url: "#",
      items: [
        {
          icon: (
            <svg className='w-5 h-5' 
            
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"
              />
            </svg>
          ),
          title: "Browse Events",
          url: "#",
        },
        {
          icon: <svg className='w-5 h-5'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm2 4h10v2H7zm0 4h7v2H7z"/></svg>,
          title: "My Events",
          url: "#",
        },
        {
          icon: <svg className='w-5 h-5'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"/></svg>,
          title: "Messages",
          url: "#",
          notification: "1"
        },
        {
          icon: <svg className='w-5 h-5'  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M11.248 14.572c0 .49.4.89.89.89s.891-.4.891-.89V12.89c0-.49-.4-.891-.89-.891s-.891.4-.891.89zM5.68 20.567a1.12 1.12 0 0 1-1.568 0L5.68 19c.428.442.428 1.14 0 1.567"/><path d="M7.094 9.719c-.261.26.115 1.673 1.451 2.26a418 418 0 0 0-3.713 4.078c-.668.741-1.234 1.369-1.674 1.845c-1.044 1.132-1.609 2.338-1.484 3.522c.129 1.22.95 2.1 1.986 2.627c.745.38 1.584.437 2.333.277l.004-.001l6.894-1.504a19 19 0 0 0-2.204 4.069a16 16 0 0 0-.664 2.107a11 11 0 0 0-.164.837l-.002.016v.006l-.001.002v.001l-.14 1.123h11.675l.004.016h6.97l-.048-.137c.554-.098 1.064-.27 1.485-.571c.85-.61 1.104-1.55 1.104-2.573v-10.75c0-1.797-.505-3.066-1.291-3.914a3.97 3.97 0 0 0-1.823-1.119a8.3 8.3 0 0 0-1.562-2.307c-.601-.615-1.319-1.119-2.095-1.357c-.981-1.385-2.285-2.51-3.695-3.201c-2.068-1.013-3.957-1.057-5.516-.813l-.612.095a46 46 0 0 0-.71-.65l-.03-.025l-.001-.001c-.579-.555-1.557-.16-1.568.654v.025L12 4.457c-.002.09-.001.227.003.424c.007.303.023.749.06 1.383c-.23.16-.425.334-.564.517c-.562.739-.881 1.36-1.13 1.842c-.29.565-.484.94-.854 1.096c-.606.254-1.154.107-1.592-.01c-.36-.097-.647-.174-.83.01M13 4.508v.05l.048-.008l-.004-.003zm.004.352L13 4.73l1.41 1.261c.608.544 1.201 1.122 1.522 1.548l.184.244l.01.004q.032.046.057.09a1 1 0 0 1 .134.291l.55-.083c.363.191.855.52 1.3 1.053c.675.806 1.323 2.17 1.163 4.474c-.122 1.705-.898 3.377-1.845 5.327c-1.068.751-2.24 1.297-3.307 1.556L8.56 21.721l.046-.072c.26-.414.513-.943.565-1.495a.5.5 0 0 0-.995-.094c-.031.328-.193.702-.417 1.057c-.22.35-.471.638-.626.788a.5.5 0 0 0-.106.15l-1.454.317h-.002c-.37.08-.73.037-1.004-.103c-.635-.323-.869-.708-.905-1.054c-.04-.381.12-1.04.966-1.957c.457-.496 1.037-1.14 1.717-1.894c1.982-2.198 4.807-5.33 7.871-8.446a1.4 1.4 0 0 1-.564-.403c-.325-.383-.484-.958-.554-1.692h.001a45 45 0 0 1-.096-1.963m2.953 17.437c-.773 1.982-1.303 4.188-.982 6.687h-2.883c.107-.38.255-.844.459-1.366a17.1 17.1 0 0 1 3.32-5.307zm4.336 5.976c-.15-1.099-.297-2.166.458-5.577c.264-1.195 1.05-2.8 1.813-4.356c.654-1.337 1.291-2.638 1.567-3.615c.648-2.296-.142-4.727-.51-5.356c1.396 1.229 2.692 3.412.942 7.256c-.3.658-.607 1.28-.907 1.887c-1.452 2.936-2.736 5.536-2.218 10.363h-1.07c-.021-.21-.048-.407-.075-.602m4.632.032c-.15-1.1-.297-2.166.458-5.578c.26-1.18.7-1.975 1.144-2.78c.392-.709.787-1.425 1.067-2.416c.647-2.295.613-4.408.244-5.037c1.396 1.229 1.162 3.912.35 5.881c-.13.313-.287.645-.458 1.006c-.906 1.91-2.193 4.626-1.668 9.526H25c-.022-.211-.049-.407-.075-.602"/></g></svg>,
          title: "My Hourses",
          url: "#",
        },
        {
          icon: <svg className='w-5 h-5'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.8 9.8 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68zM2.05 11a9.8 9.8 0 0 1 2.21-5.33L5.69 7.1A8 8 0 0 0 4.05 11zm2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9zm1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"/></svg>,
          title: "My Points",
          url: "#",
        },
        {
          icon: <svg  className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"/><path fill="currentColor" d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.75 4.75 0 0 0-4.553 3.392l1.438.428A3.25 3.25 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.75 4.75 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z"/></g></svg>,
          title: "My Profile",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Building Your Application",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Routing",
    //       url: "#",
    //     },
    //     {
    //       title: "Data Fetching",
    //       url: "#",
    //       isActive: true,
    //     },
    //   //   {
    //   //     title: "Rendering",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Caching",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Styling",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Optimizing",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Configuring",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Testing",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Authentication",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Deploying",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Upgrading",
    //   //     url: "#",
    //   //   },
    //   //   {
    //   //     title: "Examples",
    //   //     url: "#",
    //   //   },
    //    ],
    // },
    // {
    //   title: "API Reference",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Components",
    //       url: "#",
    //     },
    //     // {
    //     //   title: "File Conventions",
    //     //   url: "#",
    //     // },
    //     // {
    //     //   title: "Functions",
    //     //   url: "#",
    //     // },
    //     // {
    //     //   title: "next.config.js Options",
    //     //   url: "#",
    //     // },
    //     // {
    //     //   title: "CLI",
    //     //   url: "#",
    //     // },
    //     // {
    //     //   title: "Edge Runtime",
    //     //   url: "#",
    //     // },
    //   ],
    // },
    // {
    //   title: "Architecture",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Accessibility",
    //       url: "#",
    //     },
    //     {
    //       title: "Fast Refresh",
    //       url: "#",
    //     },
    //     {
    //       title: "Next.js Compiler",
    //       url: "#",
    //     },
    //     {
    //       title: "Supported Browsers",
    //       url: "#",
    //     },
    //     {
    //       title: "Turbopack",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="" {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.logo} defaultVersion={data.logo[0]} />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup >
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <div className="flex  items-center justify-between">
                        <div className="font-semibold gap-3 text-md flex items-center">
                        <span>{item.icon}</span>
                        <a href={item.url}>{item.title}</a>
                        </div>
                        <span className="bg-red-500 rounded-full px-2 text-white">{item.notification}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export { Sidebar };
