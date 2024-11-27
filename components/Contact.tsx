"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSheet } from "@/context/SheetContext";
import { Button } from "./ui/button";

const Contact = () => {
  const { isOpen, closeSheet } = useSheet();

  return (
    <Sheet open={isOpen} onOpenChange={(state) => !state && closeSheet()}>
      <SheetContent className="w-[700px]">
        <SheetHeader>
          <SheetTitle>Let's Start a Project</SheetTitle>
          <SheetDescription>
            This is your opportunity to share your vision and goals. Let's
            collaborate!
          </SheetDescription>
        </SheetHeader>
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" onClick={closeSheet}>
            Close
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Contact;
