import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoIosArrowBack } from "react-icons/io";

export default function uploadquestions() {
  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger>
          {" "}
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerClose className="w-full flex justify-center items-center">
              <Button variant="outline">
                <IoIosArrowBack className="text-md mr-2" />
                Back
              </Button>
            </DrawerClose>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
