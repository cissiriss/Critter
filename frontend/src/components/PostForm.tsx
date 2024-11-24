import { useState } from "react";
import "../index.css";

interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function PostForm({ setModalOpen }: ModalProps) {
  // Initialize state for the form fields
  const [formData, setFormData] = useState({
    id: 0,
    display_name: "",
    title: "",
    content: "",
    created_at: "",
  });

  // Handle input changes
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    // Update the corresponding field in state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field by name
    }));
  }

  // Handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Submitting form data:", formData);

    const formDataObject = {
      display_name: formData.display_name,
      title: formData.title,
      content: formData.content,
    };

    console.log("Form data object:", JSON.stringify(formDataObject));

    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject), // Send the form data as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Success:", result);

      // Optionally reset the form or handle success
      setFormData({
        id: 0,
        display_name: "",
        title: "",
        content: "",
        created_at: "",
      });

      setModalOpen(false);
    } catch (error) {
      console.error("Error:", error);
      // Optionally show an error message
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 w-full max-w-xs mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            onChange={handleChange}
            name="display_name"
            type="text"
            className="grow"
            placeholder="Screen name"
          />
        </label>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full mb-4"
        />
        <textarea
          onChange={handleChange}
          name="content"
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Write your post here"
        ></textarea>
        <button type="submit" className="btn">
          Post
        </button>
      </form>
    </div>
  );
}
