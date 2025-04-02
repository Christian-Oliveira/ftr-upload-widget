import { Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import * as Collapsible from "@radix-ui/react-collapsible";

export function UploadWidgetHeader() {
  return (
    <div className="w-full p-4 py-2 bg-white/5 border-zinc-800 border-b flex items-center justify-between">
      <span className="text-sm font-medium">Upload files</span>

      <Collapsible.Trigger asChild>
        <Button size="icon" className="-mr-2">
          <Minimize2 strokeWidth={1.5} className="size-4" />
        </Button>
      </Collapsible.Trigger>
    </div>
  )
}