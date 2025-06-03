import { redirect } from "next/navigation";

const Home = () => {
  return redirect("/dashboard");
};

export default Home;
