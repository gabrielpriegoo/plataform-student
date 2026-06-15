import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Home, BookOpen, BarChart3 } from "lucide-react";
import { subjects } from "@/lib/subjects";
import { useSidebar } from "@/components/ui/sidebar";
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
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const TRANSITION_DURATION = 250;

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isActive = (p: string) => pathname === p || pathname.startsWith(p + "/");

  return (
    <Sidebar collapsible="icon" className="overflow-hidden">
      <SidebarHeader className="border-b border-sidebar-border group-data-[collapsible=icon]:p-1.5">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 overflow-hidden px-2 py-2",
            "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!gap-0 group-data-[collapsible=icon]:!px-0"
          )}
          style={{
            transition: `padding ${TRANSITION_DURATION}ms ease, gap ${TRANSITION_DURATION}ms ease`,
          }}
        >
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div
            className="overflow-hidden whitespace-nowrap"
            style={{
              maxWidth: isCollapsed ? 0 : 200,
              opacity: isCollapsed ? 0 : 1,
              transition: `max-width ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
            }}
          >
            <div className="font-display text-base font-semibold text-sidebar-foreground">
              Atheneum
            </div>
            <div className="text-xs text-sidebar-foreground/60">
              Estudo universitário
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="overflow-hidden">
        <SidebarGroup>
          <div
            className="overflow-hidden"
            style={{
              maxHeight: isCollapsed ? 0 : 32,
              opacity: isCollapsed ? 0 : 1,
              transition: `max-height ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
            }}
          >
            <SidebarGroupLabel>Geral</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/")} tooltip="Início">
                  <Link to="/" className="overflow-hidden">
                    <Home className="h-4 w-4 shrink-0" />
                    <span
                      className="truncate overflow-hidden whitespace-nowrap"
                      style={{
                        maxWidth: isCollapsed ? 0 : 200,
                        opacity: isCollapsed ? 0 : 1,
                        transition: `max-width ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
                      }}
                    >
                      Início
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/desempenho")} tooltip="Desempenho">
                  <Link to="/desempenho" className="overflow-hidden">
                    <BarChart3 className="h-4 w-4 shrink-0" />
                    <span
                      className="truncate overflow-hidden whitespace-nowrap"
                      style={{
                        maxWidth: isCollapsed ? 0 : 200,
                        opacity: isCollapsed ? 0 : 1,
                        transition: `max-width ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
                      }}
                    >
                      Desempenho
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <div
            className="overflow-hidden"
            style={{
              maxHeight: isCollapsed ? 0 : 32,
              opacity: isCollapsed ? 0 : 1,
              transition: `max-height ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
            }}
          >
            <SidebarGroupLabel>Matérias</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {subjects.map((s) => {
                const path = `/materias/${s.slug}`;
                return (
                  <SidebarMenuItem key={s.slug}>
                    <SidebarMenuButton asChild isActive={isActive(path)} tooltip={s.name}>
                      <Link to="/materias/$slug" params={{ slug: s.slug }} className="overflow-hidden">
                        <BookOpen className="h-4 w-4 shrink-0" />
                        <span
                          className="truncate overflow-hidden whitespace-nowrap"
                          style={{
                            maxWidth: isCollapsed ? 0 : 200,
                            opacity: isCollapsed ? 0 : 1,
                            transition: `max-width ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
                          }}
                        >
                          {s.name}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
