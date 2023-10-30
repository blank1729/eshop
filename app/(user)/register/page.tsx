"use client";

const page = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className="flex h-full justify-center items-center text-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:w-9/12 md:w-6/12 lg:w-3/12 gap-y-3 border border-black rounded-md p-3"
      >
        <h2 className="text-xl font-bold">Register</h2>
        <hr />
        <label htmlFor="email">Email</label>
        <input
          className="border border-black rounded-md px-2 py-1"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="border border-black rounded-md px-2 py-1"
          type="password"
        />
        <div className="flex justify-end gap-x-3">
          <button className="bg-gray-500 p-2 text-white rounded-md">
            Cancel
          </button>
          <button className="bg-black p-2 text-white rounded-md">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default page;
