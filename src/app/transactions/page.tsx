import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Plus } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

const TRANSACTIONS: {
  month: string
  items: {
    id: string
    icon: typeof ArrowUp
    name: string
    subtitle: string
    amount: string
    subAmount?: string
    isCredit: boolean
  }[]
}[] = [
  {
    month: "February 2026",
    items: [
      { id: "1", icon: ArrowUp, name: "Sarah Mitchell", subtitle: "Sent · 26 Feb", amount: "750 AUD", isCredit: false },
      { id: "2", icon: Plus, name: "To AUD", subtitle: "Added · 24 Feb", amount: "+ 2,000 AUD", subAmount: "2,014.80 AUD", isCredit: true },
      { id: "3", icon: ArrowUp, name: "James Cooper", subtitle: "Sent · 19 Feb", amount: "320 EUR", isCredit: false },
      { id: "4", icon: Plus, name: "To GBP", subtitle: "Added · 15 Feb", amount: "+ 500 GBP", subAmount: "503.25 GBP", isCredit: true },
      { id: "5", icon: ArrowUp, name: "Liam Nguyen", subtitle: "Sent · 10 Feb", amount: "1,100 AUD", isCredit: false },
      { id: "6", icon: ArrowDown, name: "Emma Blackwood", subtitle: "Received · 5 Feb", amount: "+ 430 EUR", isCredit: true },
    ],
  },
  {
    month: "January 2026",
    items: [
      { id: "7", icon: ArrowUp, name: "Olivia Chen", subtitle: "Sent · 28 Jan", amount: "215 GBP", isCredit: false },
      { id: "8", icon: Plus, name: "To EUR", subtitle: "Added · 22 Jan", amount: "+ 1,500 EUR", subAmount: "1,511.10 EUR", isCredit: true },
      { id: "9", icon: ArrowDown, name: "Daniel Park", subtitle: "Received · 17 Jan", amount: "+ 900 AUD", isCredit: true },
      { id: "10", icon: ArrowUp, name: "Rachel Adams", subtitle: "Sent · 12 Jan", amount: "640 CAD", isCredit: false },
      { id: "11", icon: Plus, name: "To AUD", subtitle: "Added · 6 Jan", amount: "+ 3,000 AUD", subAmount: "3,022.20 AUD", isCredit: true },
      { id: "12", icon: ArrowUp, name: "Marcus Webb", subtitle: "Sent · 2 Jan", amount: "180 EUR", isCredit: false },
    ],
  },
]

const totalCount = TRANSACTIONS.reduce((sum, group) => sum + group.items.length, 0)

export default function TransactionsPage() {
  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Header */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Transactions</p>
          <h2 className="text-3xl font-bold tracking-tight">{totalCount} transactions</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]"
          >
            Export
          </Button>
          <Button size="sm" variant="secondary">
            Filter
          </Button>
        </div>
      </FadeIn>

      {/* Transaction list grouped by date */}
      {TRANSACTIONS.map((group) => (
        <FadeIn as="section" key={group.month} delay={0.1} className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">{group.month}</h3>
          <ul className="flex flex-col gap-0.5">
            {group.items.map((tx) => (
              <li key={tx.id} className="flex items-center gap-4 rounded-lg py-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                  <tx.icon className="size-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                </div>
                <div className="ml-auto shrink-0 text-right">
                  <p className="font-medium">{tx.amount}</p>
                  {tx.subAmount && (
                    <p className="text-sm text-muted-foreground">{tx.subAmount}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}

      {/* Footer */}
      <FadeIn>
        <p className="pb-4 text-center text-sm text-muted-foreground">
          You've reached the end
        </p>
      </FadeIn>
    </PageTransition>
  )
}
