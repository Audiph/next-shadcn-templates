export default function FormsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Form Templates</h1>
        <p className="text-muted-foreground">Beautiful form components for your next project</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
          <p className="text-sm text-muted-foreground mb-4">A simple contact form with validation</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Login Form</h3>
          <p className="text-sm text-muted-foreground mb-4">Secure login with remember me option</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Registration Form</h3>
          <p className="text-sm text-muted-foreground mb-4">Complete signup flow with validation</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}