import Button from "@/components/Button";

export default function Login() {
  return (
    <main className="bg-accentBlack min-h-screen flex items-center justify-center p-8">
      <form className="flex flex-col items-center space-y-4 bg-accentGrey w-full p-8 rounded-lg lg:max-w-sm">
        <h1 className="text-3xl font-bold text-accentWhite">Login</h1>
        <input type="text" placeholder="username" className="p-2 w-full" />
        <input type="password" placeholder="password" className="p-2 w-full" />
        <Button varient="grey">
          Submit
        </Button>
      </form>
    </main>
  );
}
