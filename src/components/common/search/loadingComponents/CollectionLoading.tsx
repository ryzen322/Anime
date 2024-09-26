import { loadingItem } from "../../../../utils";
import { CollectionUL } from "../../../CollectionUL";
import Layout from "../../../Layout";

const CollectionLoading = () => {
  return (
    <Layout>
      <div className=" w-full h-[72.3dvh] phoneX:h-[74.3dvh]">
        <CollectionUL>
          {loadingItem.map((_, index) => (
            <li
              key={index + 1}
              className=" h-[165px] w-[115px] flex items-center bg-stone-500 rounded-md overflow-hidden relative phoneX:w-[150px] sm:w-[146px] md:w-[175px] md:h-[250px]"
            />
          ))}
        </CollectionUL>
      </div>
    </Layout>
  );
};

export default CollectionLoading;
