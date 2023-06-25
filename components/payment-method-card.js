export function PaymentMethodCard({ children }) {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover my-4 p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
    >
      <div className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</div>
    </div>
  )
}