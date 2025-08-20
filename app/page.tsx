import Image from "next/image";
import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Guled's To Do List Application</h1>
      <TodoApp />
    </div>
  );
}
