import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

const FREQUENT_RECIPIENTS = [
  { id: "1", name: "Sarah Mitchell", subtitle: "EUR · Last sent 24 Feb", account: "DE89 •••• 1904" },
  { id: "2", name: "James Cooper", subtitle: "AUD · Last sent 19 Feb", account: "AU80 •••• 7823" },
  { id: "3", name: "Liam Nguyen", subtitle: "AUD · Last sent 10 Feb", account: "AU44 •••• 3310" },
]

const ALL_RECIPIENTS = [
  { id: "4", name: "Daniel Park", subtitle: "AUD · Last sent 17 Jan", account: "AU62 •••• 5501" },
  { id: "1", name: "James Cooper", subtitle: "AUD · Last sent 19 Feb", account: "AU80 •••• 7823" },
  { id: "5", name: "Liam Nguyen", subtitle: "AUD · Last sent 10 Feb", account: "AU44 •••• 3310" },
  { id: "6", name: "Marcus Webb", subtitle: "EUR · Last sent 2 Jan", account: "DE32 •••• 8817" },
  { id: "7", name: "Olivia Chen", subtitle: "GBP · Last sent 28 Jan", account: "GB29 •••• 3361" },
  { id: "8", name: "Rachel Adams", subtitle: "CAD · Last sent 12 Jan", account: "CA73 •••• 2204" },
  { id: "2", name: "Sarah Mitchell", subtitle: "EUR · Last sent 24 Feb", account: "DE89 •••• 1904" },
]

const totalCount = ALL_RECIPIENTS.length

export default function RecipientsPage() {
  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Header */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Recipients</p>
          <h2 className="text-3xl font-bold tracking-tight">{totalCount} recipients</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]"
          >
            Add recipient
          </Button>
          <Button size="sm" variant="secondary">
            Import contacts
          </Button>
        </div>
      </FadeIn>

      {/* Frequent recipients */}
      <FadeIn as="section" delay={0.1} className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Frequent</h3>
        <ul className="flex flex-col gap-0.5">
          {FREQUENT_RECIPIENTS.map((recipient) => (
            <li key={recipient.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <User className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{recipient.name}</p>
                <p className="text-sm text-muted-foreground">{recipient.subtitle}</p>
              </div>
              <div className="ml-auto shrink-0 text-right">
                <p className="text-sm text-muted-foreground">{recipient.account}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* All recipients */}
      <FadeIn as="section" delay={0.2} className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">All recipients</h3>
        <ul className="flex flex-col gap-0.5">
          {ALL_RECIPIENTS.map((recipient) => (
            <li key={recipient.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <User className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{recipient.name}</p>
                <p className="text-sm text-muted-foreground">{recipient.subtitle}</p>
              </div>
              <div className="ml-auto shrink-0 text-right">
                <p className="text-sm text-muted-foreground">{recipient.account}</p>
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
