import Header from "../components/Header.tsx";
export default function Home() {
  return (
      <>
    <Header />
    <div class="bg-[#1A202C] w-full h-[80vh]">
      <div class="flex items-center justify-center h-full">
      <div>
        <img src="/logo.png" alt="" class="" />
        <h1 class="text-5xl text-white font-bold text-center">takos</h1>
      </div>
      </div>
    </div>
      </>
  );
}
