import { subcriptionPlan } from "../api/dummyApi";
import { SubscriptionList } from "./SubscriptionList";

const Subscription = () => {
  return (
    <section className=" flex flex-col gap-2">
      <h1 className=" text-white font-semibold text-2xl">Subscription</h1>
      <ul className=" h-auto w-full flex items-center overflow-x-scroll gap-3 no-scrollbar lg:grid lg:grid-cols-4 lg:justify-center lg:justify-items-center ">
        {subcriptionPlan.map((item) => (
          <SubscriptionList
            key={item.id}
            price={item.price}
            plan={item.plan}
            discount={item.discount}
            description={item.description}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Subscription;
