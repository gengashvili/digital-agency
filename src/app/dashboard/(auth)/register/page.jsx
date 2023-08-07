"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 p-6 rounded-lg border-solid border-white border-2 w-full mx-auto sm:max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="username"
        required
        className="p-2 rounded-lg"
      />
      <input
        type="email"
        placeholder="email"
        required
        className="p-2 rounded-lg"
      />
      <input
        type="password"
        placeholder="password"
        required
        className="p-2 rounded-lg"
      />
      <button type="submit" className="link-btn mx-auto">
        Register
      </button>
      {error && <p color="red">something went wrong</p>}
      <Link href="/dashboard/login" className="underline mx-auto">
        Already have an account?
      </Link>
    </form>
  );
}
