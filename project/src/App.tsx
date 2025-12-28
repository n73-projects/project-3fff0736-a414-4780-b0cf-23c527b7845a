import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>Learn more about our application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            This is a modern React application built with TypeScript, Tailwind
            CSS, and shadcn/ui components. It provides a clean and accessible
            user interface with support for light and dark themes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
