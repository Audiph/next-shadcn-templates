export default function AuthPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Authentication Templates</h1>
        <p className="text-muted-foreground">User authentication and authorization pages</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Login Page</h3>
          <p className="text-sm text-muted-foreground mb-4">Simple and secure login interface</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Sign Up Page</h3>
          <p className="text-sm text-muted-foreground mb-4">User registration with validation</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Forgot Password</h3>
          <p className="text-sm text-muted-foreground mb-4">Password recovery flow</p>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:underline">Preview</button>
            <button className="text-sm text-primary hover:underline">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}