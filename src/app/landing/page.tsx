export default function LandingPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Landing Page Templates</h1>
        <p className="text-muted-foreground">High-converting landing page designs</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">SaaS Landing</h3>
          <p className="text-sm text-muted-foreground mb-4">Feature-rich SaaS product landing</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Product Launch</h3>
          <p className="text-sm text-muted-foreground mb-4">New product announcement page</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">App Landing</h3>
          <p className="text-sm text-muted-foreground mb-4">Mobile app download page</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Startup Landing</h3>
          <p className="text-sm text-muted-foreground mb-4">Modern startup presentation</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}