import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface Props {
  placeholder?: string;
  onSearch?: (searchText: string) => void;
  className?: string;
}

const Search = (props: Props) => {
  const { placeholder, onSearch, className } = props;

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch?.(searchText);
    setSearchText("");
  };

  return (
    <div
      className={cn(
        "flex justify-between gap-2 rounded-lg ps-2 shadow",
        className,
      )}
    >
      <input
        type="text"
        id="search"
        placeholder={placeholder}
        className="w-full rounded-lg bg-transparent outline-none"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Button
        variant="default"
        className="rounded-none rounded-br-lg rounded-tr-lg"
        type="submit"
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
