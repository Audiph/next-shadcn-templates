export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          Beautiful Component Templates
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A curated collection of component templates built with Next.js and shadcn/ui. 
          Copy, paste, and customize for your projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <a href="/forms" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Forms</h3>
          <p className="text-muted-foreground">Contact forms, login screens, and multi-step wizards</p>
        </a>

        <a href="/cards" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Cards</h3>
          <p className="text-muted-foreground">Product cards, profiles, and information displays</p>
        </a>

        <a href="/tables" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Tables</h3>
          <p className="text-muted-foreground">Data tables with sorting, filtering, and pagination</p>
        </a>

        <a href="/charts" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Charts</h3>
          <p className="text-muted-foreground">Beautiful data visualizations and analytics</p>
        </a>

        <a href="/emails" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Email Templates</h3>
          <p className="text-muted-foreground">Responsive email designs for every occasion</p>
        </a>

        <a href="/dashboards" className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Dashboards</h3>
          <p className="text-muted-foreground">Complete dashboard layouts and admin panels</p>
        </a>
      </div>

      <div className="mt-16 text-center space-y-4">
        <h2 className="text-3xl font-bold">Why Choose Our Templates?</h2>
        <div className="grid gap-6 md:grid-cols-3 mt-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-semibold">Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">Every component is built with Tailwind CSS and easily customizable</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Production Ready</h3>
            <p className="text-sm text-muted-foreground">TypeScript support, accessibility, and best practices built-in</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Copy & Paste</h3>
            <p className="text-sm text-muted-foreground">No dependencies, just copy the code and use in your project</p>
          </div>
        </div>
      </div>
    </div>
  );
}
