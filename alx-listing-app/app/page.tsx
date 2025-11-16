import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
         <h2 className="text-3xl font-semibold">Welcome to ALX listing App</h2>
         <p className="mt-4 text-gray-600">
          This is where you will see all property listings soon.
         </p>
      </main>
    </div>
  );
}
