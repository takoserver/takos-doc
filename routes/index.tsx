import Header from "../components/Header.tsx";
export default function Home() {
  return (
      <>
    <Header />
    <div class="bg-[#1A202C] w-full h-[80vh]">
      <div class="flex items-center justify-center h-full">
        <h1 class="text-4xl text-white">Welcome to takos</h1>
      </div>
    </div>
      </>
  );
}
