import { AppSidebar } from "@/components/app-sidebar";
import headerImg from "@/app/assits/istockphoto-491647736-612x612.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="w-full bg-blue-200 overflow-hidden flex h-[30%] shrink-0 items-center  border-b ">
          <div className=" ">
            <div className="absolute top-0 left-0 w-full p-7 h-[30%] bg-black bg-opacity-65">
              <div className="flex items-center gap-1 mb-4 text-white font-bold">
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
              <div className="h-full  text-white w-[51%]">
                <h1 className="mb-4 text-3xl font-medium">
                  Suppercharge your equine business all in one place with Bridle
                </h1>
                <p className="text-sm">
                  Manage horses & client, streamline finances, automate bookings
                  & event, and more.
                </p>
              </div>
            </div>
            <img
              className="w-full "
              src="https://wallpapershome.com/images/pages/pic_h/26488.jpg"
              alt="asd"
            />
          </div>
          {/* <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" /> */}
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
