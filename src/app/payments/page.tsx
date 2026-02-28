import { Button } from "@/components/ui/button"
import { Clock, Repeat } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

const SCHEDULED_PAYMENTS = [
  { id: "1", name: "Sarah Mitchell", subtitle: "Sends 1 Mar · EUR", amount: "500.00 EUR" },
  { id: "2", name: "James Cooper", subtitle: "Sends 5 Mar · AUD", amount: "1,200.00 AUD" },
  { id: "3", name: "Liam Nguyen", subtitle: "Sends 10 Mar · GBP", amount: "320.00 GBP" },
]

const RECURRING_PAYMENTS = [
  { id: "1", name: "Rent — Olivia Chen", subtitle: "Monthly · Next 15 Mar", amount: "1,800.00 EUR", status: "Active" as const },
  { id: "2", name: "Gym Membership", subtitle: "Monthly · Next 1 Apr", amount: "49.99 AUD", status: "Active" as const },
  { id: "3", name: "Cloud Storage", subtitle: "Monthly · Next 22 Mar", amount: "9.99 USD", status: "Active" as const },
]

const totalCount = SCHEDULED_PAYMENTS.length + RECURRING_PAYMENTS.length

export default function PaymentsPage() {
  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Header */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Payments</p>
          <h2 className="text-3xl font-bold tracking-tight">{totalCount} payments</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]"
          >
            Set up payment
          </Button>
          <Button size="sm" variant="secondary">
            Manage direct debits
          </Button>
        </div>
      </FadeIn>

      {/* Scheduled payments */}
      <FadeIn as="section" delay={0.1} className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Scheduled</h3>
        <ul className="flex flex-col gap-0.5">
          {SCHEDULED_PAYMENTS.map((payment) => (
            <li key={payment.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <Clock className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{payment.name}</p>
                <p className="text-sm text-muted-foreground">{payment.subtitle}</p>
              </div>
              <div className="ml-auto shrink-0 text-right">
                <p className="font-medium">{payment.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Recurring payments */}
      <FadeIn as="section" delay={0.2} className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Recurring</h3>
        <ul className="flex flex-col gap-0.5">
          {RECURRING_PAYMENTS.map((payment) => (
            <li key={payment.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <Repeat className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{payment.name}</p>
                <p className="text-sm text-muted-foreground">{payment.subtitle}</p>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-3">
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  {payment.status}
                </span>
                <p className="font-medium">{payment.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Footer */}
      <FadeIn>
        <p className="pb-4 text-center text-sm text-muted-foreground">
          You've reached the end
        </p>
      </FadeIn>
    </PageTransition>
  )
}
