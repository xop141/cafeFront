"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleType = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };
  const submit = () => {
      console.log(form);
    };
  return (
    <div className="w-full h-screen">
      <input placeholder="name" name="name" onChange={handleType} />
      <input placeholder="password" name="password" onChange={handleType} />
      <input placeholder="email" name="email" onChange={handleType} />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default Page;
