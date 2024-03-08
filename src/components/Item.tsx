import Image from "next/image";

export default function Item() {
  return (
    // ! Add width
    <div className="m-3 h-[250px] w-[330px] rounded-lg border">
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
      {/* // ! onClick -> open card and see description and more info */}
      {/* <p className="text-lg">Ovde ide neki opis</p> */}
    </div>
  );
}
