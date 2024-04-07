import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex max-xl:flex-col ">
      <div className="flex-1 p-10 gap-10 flex flex-col">
        <h1 className=" xl:text-7xl max-xl:text-3xl font-bold">
          Creative Thoughts Agency
        </h1>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-5 max-lg:items-center max-sm:flex-col font-semibold ">
          <button className=" bg-btn p-4 rounded-lg">Learn more</button>
          <button className="bg-white text-black rounded-lg p-4">
            Contact us
          </button>
        </div>
      </div>
      <div className="flex-1 p-8">
        <Image src={"/hero.gif"} width={1000} height={1000} alt="home image" />
      </div>
    </div>
  );
};

export default Home;
