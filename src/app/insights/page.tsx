import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowUp,
  ArrowDown,
  TrendingDown,
  Home,
  Repeat,
  MoreHorizontal,
  User,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

const SUMMARY_CARDS = [
  { icon: ArrowUp, label: "Total sent", amount: "4,305.00 USD", subtitle: "12 transfers" },
  { icon: ArrowDown, label: "Total received", amount: "1,330.00 USD", subtitle: "2 transfers" },
  { icon: TrendingDown, label: "Fees saved", amount: "142.60 USD", subtitle: "vs. traditional banks" },
]

const SPENDING_CATEGORIES = [
  { icon: ArrowUp, label: "Transfers to people", subtitle: "8 transfers", amount: "2,640 USD", percent: 57, color: "var(--chart-1)" },
  { icon: Home, label: "Rent", subtitle: "Monthly", amount: "1,800 EUR", percent: 39, color: "var(--chart-2)" },
  { icon: Repeat, label: "Subscriptions", subtitle: "2 services", amount: "59.98 USD", percent: 1.3, color: "var(--chart-3)" },
  { icon: MoreHorizontal, label: "Other", subtitle: "Miscellaneous", amount: "105 USD", percent: 2.3, color: "var(--chart-4)" },
]

const TOP_RECIPIENTS = [
  { id: "1", name: "Olivia Chen", subtitle: "EUR", amount: "1,800.00 EUR" },
  { id: "2", name: "Sarah Mitchell", subtitle: "AUD", amount: "750.00 AUD" },
  { id: "3", name: "James Cooper", subtitle: "EUR", amount: "320.00 EUR" },
  { id: "4", name: "Liam Nguyen", subtitle: "AUD", amount: "1,100.00 AUD" },
]

export default function InsightsPage() {
  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Header */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Insights</p>
          <h2 className="text-3xl font-bold tracking-tight">February 2026</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]"
          >
            Export
          </Button>
          <Button size="sm" variant="secondary">
            This month
          </Button>
        </div>
      </FadeIn>

      {/* Summary cards */}
      <FadeIn as="section" delay={0.1} className="flex gap-3 overflow-x-auto">
        {SUMMARY_CARDS.map((card) => (
          <Card
            key={card.label}
            className="flex h-[206px] w-[256px] shrink-0 cursor-pointer flex-col justify-between rounded-2xl border-0 bg-card transition-colors hover:brightness-95 dark:hover:brightness-125"
          >
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                <card.icon className="size-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="mt-auto space-y-1">
              <p className="text-xs text-muted-foreground">{card.label}</p>
              <p className="text-2xl font-bold">{card.amount}</p>
              <p className="text-sm text-muted-foreground">{card.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </FadeIn>

      {/* Spending by category */}
      <FadeIn as="section" delay={0.2} className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Spending by category</h3>
        <ul className="flex flex-col gap-0.5">
          {SPENDING_CATEGORIES.map((category) => (
            <li key={category.label} className="rounded-lg py-4">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                  <category.icon className="size-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{category.label}</p>
                  <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                </div>
                <div className="ml-auto shrink-0 text-right">
                  <p className="font-medium">{category.amount}</p>
                </div>
              </div>
              <div className="mt-3 ml-16 h-2 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${category.percent}%`,
                    backgroundColor: category.color,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Top recipients */}
      <FadeIn as="section" className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Top recipients</h3>
        <ul className="flex flex-col gap-0.5">
          {TOP_RECIPIENTS.map((recipient) => (
            <li key={recipient.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <User className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{recipient.name}</p>
                <p className="text-sm text-muted-foreground">{recipient.subtitle}</p>
              </div>
              <div className="ml-auto shrink-0 text-right">
                <p className="font-medium">{recipient.amount}</p>
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
