import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import { AppSidebarClient } from "./_AppSidebarClient";

const HomePage = () => {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span className="text-xl text-nowrap">HireSpot</span>
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>nbcwjebkj</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1">cjnvkjwne</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
};

export default HomePage;
