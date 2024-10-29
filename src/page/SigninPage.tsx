import { SignInButton } from "@clerk/clerk-react";
import Layout from "../components/Layout";

const SigninPage = () => {
  return (
    <Layout>
      <div className=" h-[71dvh] w-full flex items-center justify-center">
        <SignInButton>
          <button className="  py-2 rounded-sm bg-stone-800 px-2 text-white font-semibold">
            Sign In
          </button>
        </SignInButton>
      </div>
    </Layout>
  );
};

export default SigninPage;
