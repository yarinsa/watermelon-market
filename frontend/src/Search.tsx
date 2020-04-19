import React, { useState } from "react";
import { Suggest, ItemPredicate, ItemRenderer } from "@blueprintjs/select";
import { MenuItem, Button, Spinner } from "@blueprintjs/core";
import styled from "styled-components/macro";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { debounce } from "lodash";
import { SearchMenuItem } from "./Components/SearchMenuItem";
import { useHistory } from "react-router-dom";

export interface ISearchOption {
  symbol: string;
  name: string;
  type: string;
  region: string;
}

export const Search: React.FC<any> = ({}) => {
  const [query, setQuery] = useState<string>("");

  let history = useHistory();
  const handleValueChange = (searchOption: ISearchOption) => {
    history.push(`/quote/${searchOption.symbol}`);
  };

  const handleQuery = debounce((query: string) => {
    setQuery(query);
  }, 500);

  const { data, loading, error } = useQuery(SEARCH, {
    variables: { query: query },
  });

  let rightElement = <h6>hey</h6>;
  if (loading) {
    rightElement = <Loader size={16} />;
  } else {
    rightElement = <SearchButton icon="arrow-right" minimal active />;
  }

  return (
    <div>
      <SearchSuggest
        items={data?.searchByQuery ?? []}
        inputValueRenderer={(searchOption: ISearchOption) =>
          searchOption.symbol
        }
        inputProps={{
          leftIcon: "search",
          large: true,
          placeholder: "Search by Symbol, Company name and etc...",
          rightElement: rightElement,
          //   onChange: (event: React.FormEvent<HTMLInputElement>) => {
          //     handleQuery(event);
          //   },
        }}
        fill
        noResults={
          loading ? (
            <Loader size={24} />
          ) : (
            <MenuItem disabled={true} text="No results." />
          )
        }
        onItemSelect={(searchOption: ISearchOption) =>
          handleValueChange(searchOption)
        }
        itemRenderer={SearchMenuItem}
        onQueryChange={(query: string) => handleQuery(query)}
        openOnKeyDown
      ></SearchSuggest>
    </div>
  );
};

const SearchSuggest = styled(Suggest)`
  input {
    border-radius: 40px;
  }
`;

const SearchButton = styled(Button)`
  color: #6436b6;
  background-color: #e0d2ed !important;
  border-radius: 40px 40px 40px 0;
  :hover {
    background-color: #e0d2ed;
    border-radius: 40px 40px 40px 0;
  }
  svg {
    fill: #6436b6 !important;
  }
`;

const Loader = styled(Spinner)``;

const SEARCH = gql`
  query Search($query: String!) {
    searchByQuery(query: $query) {
      name
      region
      type
      symbol
    }
  }
`;
