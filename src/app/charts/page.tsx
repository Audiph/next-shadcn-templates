export default function ChartsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Chart Templates</h1>
        <p className="text-muted-foreground">Data visualization components</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <p className="text-sm text-muted-foreground mb-4">Time series and trend visualization</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <p className="text-sm text-muted-foreground mb-4">Comparative data display</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <p className="text-sm text-muted-foreground mb-4">Percentage and distribution view</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}