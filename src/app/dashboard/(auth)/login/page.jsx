"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Login({ url }) {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <main>
      <h2>{success ? success : "Welcome Back"}</h2>
      <h3>Please sign in to see the dashboard.</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
        {error && error}
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>

      <span>- OR -</span>
      <Link href="/dashboard/register">Create new account</Link>
    </main>
  );
}
