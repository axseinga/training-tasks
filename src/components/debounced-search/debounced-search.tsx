import React from "react";
import DebouncedSearchSyles from "@/components/debounced-search/debounced-search.module.scss";

export const DebouncedSearch = () => {
    const [data, setData] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [inputText, setInputText] = React.useState("");
    const [debouncedText, setDebouncedText] = React.useState(inputText);
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedText(inputText);
      }, 300);
  
      return () => clearTimeout(timer);
    }, [inputText]);
  
    React.useEffect(() => {
      if (debouncedText) {
        setIsLoading(true);
        const timer = setTimeout(() => {
          const result = ["banana", "apple", "mandarine", "ananas"].filter(
            (item) => item.toLowerCase().includes(debouncedText.toLowerCase())
          );
          setData(result);
          setIsLoading(false);
        }, 1000);
  
        return () => clearTimeout(timer);
      } else {
        setData([]);
      }
    }, [debouncedText]);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
  
    return (
      <div className={DebouncedSearchSyles.wrapper}>
        <h1>Debounced search with 300ms.</h1>
        <p>Array values: "banana", "apple", "mandarine", "ananas"</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search</label>
          <input
            id="search-input"
            name="search-input"
            type="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {" "}
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };