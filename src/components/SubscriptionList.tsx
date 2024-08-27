export interface TypePlan {
  price: number;
  id: string;
  description: string[];
  discount: number;
  plan: string;
}

export function SubscriptionList({
  description,
  discount,
  plan,
  price,
}: TypePlan) {
  return (
    <li className=" h-[200px] min-w-[250px] max-w-[250px] rounded-md p-4 flex flex-col cursor-pointer  gap-1 border active:border-red-500 border-[#101014] hover:border-[#FF4A80]  lg:min-w-full">
      <div className=" flex flex-col flex-1 text-white gap-4">
        <div className=" flex flex-col">
          <h1 className=" font-semibold text-lg">{plan}</h1>
          <p className=" text-[#FF4A80] font-bold text-sm">
            ₱<span className=" text-xl">{price}</span>
          </p>
          {!discount ? (
            ""
          ) : (
            <div className=" flex gap-1 text-[#FF4A80]">
              <p className="text-stone-400 line-through text-xs">
                ₱ {price * discount}
              </p>
              <div className=" bg-[#F26183]/25 px-1">
                <p className=" text-xs text-[#FF4A80]">{discount}% OFF</p>
              </div>
            </div>
          )}
        </div>
        <ul className=" flex flex-col mt-auto text-xs text-stone-500 font-semibold list-disc list-inside">
          {description?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
