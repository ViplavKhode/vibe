import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState, useMemo, useCallback, Fragment } from "react";

import { Hint } from "@/components/ui/hint";
import {Button} from "@/components/ui/button";
import { CodeView } from "@/components/code-view";

import { 
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable";

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis
 } from "@/components/ui/breadcrumb";

 type FileCollection = {[path: string] : string};


 function getLanguageFromExtension(filename: string):string{
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension || "text";
 }

interface FileExplorerProps{
    file: FileCollection;
}

export const FileExplorer = ({
    files,
 }: FileExplorerProps) =>{
    return(
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
                <p> TODO: Tree View</p>
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors"/>
        </ResizablePanelGroup>
    );
}