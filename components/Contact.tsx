"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="con