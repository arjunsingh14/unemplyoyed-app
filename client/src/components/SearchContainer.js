import React from "react";
import FormRowSelect from "./FormRowSelect";
import FormRow from "./FormRow";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    statusOptions,
    jobTypeOptions,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
      e.preventDefault()
      clearFilters();
  }
  return (

    <Wrapper>
      <form className="form">
        <h4>Search</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          <FormRowSelect
            label="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          <FormRowSelect
            label="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          ></FormRowSelect>
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>Clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
