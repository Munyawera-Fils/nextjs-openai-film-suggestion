import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import TextInput from "@/components/TextInput";
import SubmitButton from "@/components/SubmitButton";
import ResponseDisplay from "@/components/ResponseDisplay";
import DropdownSelect from "@/components/DropdownSelect"; // Import the DropdownSelect component
import useApi from "@/hooks/useApi";
import { getUserPrompt } from "../prompts/promptUtils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category
  const { data, error, loading, fetchData } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitValue = { userInput: inputValue, selectedCategory }; // Pass selected category to the submission data
    await fetchData("/api/openai", "POST", submitValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { label: 'Actions', value: 'actions' },
    { label: 'Romantic', value: 'romantic' },
    { label: 'Cartoons', value: 'cartoons' },
    // Add more categories as needed
  ];

  return (
    <>
      <Head>
        <title>NextJS OpenAI Film Suggestion</title>
        <meta name="description" content="Get film suggestions based on your input" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className={inter.className}>NextJS OpenAI Film Suggestion</h1>
        <p className={inter.className}>
          Enter a film you enjoyed and select a category to get similar film suggestions.
        </p>
        <form>
          <ResponseDisplay data={data} error={error} loading={loading} />
          <TextInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder={"Enter a film you enjoyed"}
          />
          <DropdownSelect options={categories} onSelect={handleCategorySelect} /> {/* Render the DropdownSelect component */}
          <SubmitButton onClick={handleSubmit} disabled={loading} />
        </form>
      </main>
    </>
  );
}
