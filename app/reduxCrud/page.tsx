"use client";

import ItemCrud from "@/components/itemCrud";

export default function ReduxCrudPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Redux CRUD Page
        </h1>
        <p className="text-slate-500 mt-2">
          Manage your items using Redux Toolkit
        </p>
      </div>

      {/* CRUD Component */}
      <ItemCrud />

    </div>
  );
}