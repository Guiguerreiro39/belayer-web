import { useAuthStore } from "@/services/store/auth";

const Navbar = () => {
  const store = useAuthStore();

  return (
    <nav className="w-full h-16 p-4 pl-20 bg-white shadow-sm flex items-center justify-between">
      <form className="w-1/3 relative">
        <input
          type="text"
          placeholder="Search for anything..."
          className="h-8 w-full px-4 text-sm rounded-xl bg-background shadow-inner focus:outline-none"
        />
        <button className="btn-sm h-full absolute right-0">
          Search
        </button>
      </form>
      <div>
        <div className="rounded-full bg-dark h-10 w-10">

        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
