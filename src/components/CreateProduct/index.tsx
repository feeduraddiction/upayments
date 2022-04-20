import Select from "@components/UI/Select";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { createProduct } from "src/utils/http";

const CreateProduct = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");

  const chooseCategoryHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value);
  };

  const changeDescriptionHandler = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.currentTarget.value);
  };

  const changeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "avatar":
        setAvatar(e.currentTarget.value);
        break;
      case "price":
        setPrice(e.currentTarget.value);
        break;
      case "devEmail":
        setDeveloperEmail(e.currentTarget.value);
        break;
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      description,
      category,
      avatar,
      price: +price,
      developerEmail,
    };
    await createProduct(data);
    history.push("/");
  };

  return (
    <main className="max-w-3xl mx-auto my-10 text-center">
      <h2 className="text-xl font-bold">Create product</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col jsutify-center items-center"
      >
        <input
          id="name"
          onChange={changeInputHandler}
          required
          placeholder="Product name"
          className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md my-5"
          type="text"
        />
        <textarea
          required
          onChange={changeDescriptionHandler}
          placeholder="Description"
          className="block text-gray-700 text-base font-normal h-24 w-64 px-5 py-2 rounded-lg shadow-md my-5"
        />
        <input
          id="avatar"
          required
          onChange={changeInputHandler}
          placeholder="Image URL"
          className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md my-5"
          type="text"
        />
        <Select onChangeCategory={chooseCategoryHandler} />
        <input
          required
          onChange={changeInputHandler}
          placeholder="Price"
          id="price"
          title="Only digits allowed"
          pattern="^[0-9]+$"
          className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md my-5"
          type="text"
        />
        <input
          required
          id="devEmail"
          onChange={changeInputHandler}
          placeholder="developerEmail"
          className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md my-5"
          type="email"
        />
        <button
          className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md bg-white my-5 hover:bg-gray-100"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
};

export default CreateProduct;
