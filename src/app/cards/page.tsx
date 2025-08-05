export default function CardsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Card Templates</h1>
        <p className="text-muted-foreground">Versatile card components for any use case</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Product Card</h3>
          <p className="text-sm text-muted-foreground mb-4">E-commerce product display card</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Profile Card</h3>
          <p className="text-sm text-muted-foreground mb-4">User profile with avatar and stats</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Stats Card</h3>
          <p className="text-sm text-muted-foreground mb-4">Analytics and metrics display</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}