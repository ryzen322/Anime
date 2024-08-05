import SearchUl from "./common/search/SearchUl";
import { fakeArray } from "../utils";
import SearchLoading from "./common/search/loadingComponents/SearchLoading";

const SearchComp = ({ isLoading }: { isLoading: boolean | undefined }) => {
  return (
    <SearchUl loading={isLoading}>
      {fakeArray.map((_, index) => (
        <SearchLoading key={index} isLoading={isLoading} />
      ))}
    </SearchUl>
  );
};

export default SearchComp;
