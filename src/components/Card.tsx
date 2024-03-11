import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function Card() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="m-3 h-[250px] w-[330px] cursor-pointer rounded-lg 
        border transition ease-out hover:scale-105"
        >
          <div className="relative h-2/3 w-full">
            <Image
              alt="corn dog"
              src="/images/corn-dog.png"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between p-2 text-xl">
            <h5 className="">Corn dog Mozzarella</h5>
            <h6 className="font-bold underline">500 din</h6>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2/3 max-w-[90%] rounded-lg sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Corn dog Mozzarella</DialogTitle>
          <DialogDescription>
            Ovde bi isao opis jela, sastojci, mozda moze i slika da se ubaci
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-[150px]  border">
          <Image
            alt="corn dog"
            src="/images/corn-dog.png"
            fill
            // width={200}
            // height={100}
            style={{ objectFit: "cover" }}
            className="m-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
