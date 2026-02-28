import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ArrowUp, Plus, Landmark } from "lucide-react"
import europeFlag from "@/assets/europe.jpg"
import australiaFlag from "@/assets/australia.jpg"
import canadaFlag from "@/assets/canada.jpg"
import unitedKingdomFlag from "@/assets/united-kingdom.jpg"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "AUD", label: "AUD", accountId: "4 7823", balance: "3,842.50", flag: australiaFlag },
  { code: "EUR", label: "EUR", accountId: "6 1904", balance: "1,215.30", flag: europeFlag },
  { code: "GBP", label: "GBP", accountId: "8 3361", balance: "478.90", flag: unitedKingdomFlag },
  { code: "CAD", label: "CAD", accountId: "2 5517", balance: "156.20", flag: canadaFlag },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUp, name: "Sarah Mitchell", subtitle: "Sent · 26 Feb", amount: "750 AUD", isCredit: false },
  { id: "2", icon: Plus, name: "To AUD", subtitle: "Added · 24 Feb", amount: "+ 2,000 AUD", subAmount: "2,014.80 AUD", isCredit: true },
  { id: "3", icon: ArrowUp, name: "James Cooper", subtitle: "Sent · 19 Feb", amount: "320 EUR", isCredit: false },
  { id: "4", icon: Plus, name: "To GBP", subtitle: "Added · 15 Feb", amount: "+ 500 GBP", subAmount: "503.25 GBP", isCredit: true },
  { id: "5", icon: ArrowUp, name: "Liam Nguyen", subtitle: "Sent · 10 Feb", amount: "1,100 AUD", isCredit: false },
]

export default function Home() {
  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Total balance + actions */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Total balance</p>
          <h2 className="text-3xl font-bold tracking-tight">5,692.90 USD</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]">
            Send
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
          <Button size="sm" variant="secondary">
            Request
          </Button>
        </div>
      </FadeIn>

      {/* Currency account cards */}
      <FadeIn as="section" delay={0.1} className="flex gap-3 overflow-x-auto">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card key={account.code} className="flex h-[206px] w-[256px] shrink-0 cursor-pointer flex-col justify-between rounded-2xl border-0 bg-card transition-colors hover:brightness-95 dark:hover:brightness-125">
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <Image src={account.flag} alt={`${account.label} flag`} width={48} height={48} className="size-12 rounded-full object-cover" />
              <CardTitle className="text-base font-medium">{account.label}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto space-y-1">
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Landmark className="size-3" />
                <span>·· {account.accountId}</span>
              </p>
              <p className="text-2xl font-bold">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </FadeIn>

      {/* Recent transactions */}
      <FadeIn as="section" delay={0.2} className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/transactions"
            className="text-sm font-medium text-foreground underline underline-offset-4"
          >
            See all
          </Link>
        </div>
        <ul className="flex flex-col gap-0.5">
          {RECENT_TRANSACTIONS.map((tx) => (
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

    </PageTransition>
  )
}
