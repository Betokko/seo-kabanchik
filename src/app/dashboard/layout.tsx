import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar/AppSidebar";
import {ModeToggle} from "@/components/mode-togle/ModeTogle";
import {Breadcrumbs} from "@/components/breadcrumbs/Breadcrumbs";


export default function Dashboard() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className={"w-full"}>
                <div className={"p-2 pb-0 flex justify-between"}>
                    <div className={"flex gap-2 items-center"}>
                        <SidebarTrigger/>
                        <Breadcrumbs/>
                    </div>
                    <ModeToggle/>
                </div>
                <main className={'container mx-auto p-2'}>
                    123
                </main>
            </div>
        </SidebarProvider>
    )
}
