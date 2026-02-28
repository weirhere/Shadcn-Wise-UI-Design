"use client"

import { useState } from "react"
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
import {
  CreditCard,
  Eye,
  EyeOff,
  Snowflake,
  Play,
  Settings,
  Globe,
  Plane,
  Banknote,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/fade-in"

const CARDS = [
  {
    id: "personal",
    label: "Personal card",
    type: "Physical",
    last4: "4829",
    currency: "AUD",
    defaultStatus: "active" as const,
    monthlySpent: 1240,
    monthlyLimit: 3000,
    expiry: "08/28",
    number: "5214 •••• •••• 4829",
  },
  {
    id: "online",
    label: "Online shopping",
    type: "Virtual",
    last4: "7361",
    currency: "EUR",
    defaultStatus: "active" as const,
    monthlySpent: 89,
    monthlyLimit: 500,
    expiry: "12/26",
    number: "5214 •••• •••• 7361",
  },
  {
    id: "travel",
    label: "Travel card",
    type: "Virtual",
    last4: "2058",
    currency: "GBP",
    defaultStatus: "frozen" as const,
    monthlySpent: 0,
    monthlyLimit: 2000,
    expiry: "03/27",
    number: "5214 •••• •••• 2058",
  },
]

const SPENDING_CONTROLS = [
  { id: "online", icon: Globe, label: "Online purchases", limit: "500/mo" },
  { id: "international", icon: Plane, label: "International payments", limit: "2,000/mo" },
  { id: "atm", icon: Banknote, label: "ATM withdrawals", limit: "1,000/mo" },
]

export default function CardsPage() {
  const [selectedCardId, setSelectedCardId] = useState(CARDS[0].id)
  const [cardStatuses, setCardStatuses] = useState<Record<string, "active" | "frozen">>(() =>
    Object.fromEntries(CARDS.map((c) => [c.id, c.defaultStatus]))
  )
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({})

  const selectedCard = CARDS.find((c) => c.id === selectedCardId)!
  const isFrozen = cardStatuses[selectedCardId] === "frozen"
  const isRevealed = revealedCards[selectedCardId] ?? false

  function toggleFreeze(cardId: string) {
    setCardStatuses((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === "active" ? "frozen" : "active",
    }))
  }

  function toggleReveal(cardId: string) {
    setRevealedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  return (
    <PageTransition className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-8 px-6 pb-6 pt-14">
      {/* Header */}
      <FadeIn as="section" delay={0} className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Your cards</p>
          <h2 className="text-3xl font-bold tracking-tight">3 cards</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]"
          >
            Order card
          </Button>
          <Button size="sm" variant="secondary">
            Create virtual card
          </Button>
        </div>
      </FadeIn>

      {/* Card tiles */}
      <FadeIn as="section" delay={0.1} className="flex gap-3 overflow-x-auto">
        {CARDS.map((card) => {
          const status = cardStatuses[card.id]
          const isSelected = card.id === selectedCardId
          return (
            <Card
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              className={`flex h-[206px] w-[256px] shrink-0 cursor-pointer flex-col justify-between rounded-2xl border-0 bg-card transition-colors hover:brightness-95 dark:hover:brightness-125 ${
                ""
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                    <CreditCard className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base font-medium">{card.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto space-y-1">
                <p className="text-xs text-muted-foreground">
                  {card.type} · •••• {card.last4}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{card.currency}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      status === "active"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {status === "active" ? "Active" : "Frozen"}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </FadeIn>

      {/* Selected card detail */}
      <FadeIn as="section" delay={0.2} className="space-y-6">
        {/* Detail header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{selectedCard.label}</h3>
            <p className="text-sm text-muted-foreground">
              {selectedCard.type} · Expires {selectedCard.expiry}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="rounded-full">
                <Settings className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Rename card</DropdownMenuItem>
              <DropdownMenuItem>Set spending limit</DropdownMenuItem>
              <DropdownMenuItem>Replace card</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Cancel card</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Card number */}
        <div className="flex items-center justify-between rounded-xl bg-card px-4 py-3">
          <div>
            <p className="text-xs text-muted-foreground">Card number</p>
            <p className="font-mono text-sm font-medium">
              {isRevealed ? selectedCard.number.replace("••••", selectedCard.last4) : selectedCard.number}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-full"
            onClick={() => toggleReveal(selectedCardId)}
          >
            {isRevealed ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </Button>
        </div>

        {/* Freeze toggle */}
        <div className="flex items-center justify-between rounded-xl bg-card px-4 py-3">
          <div className="flex items-center gap-3">
            {isFrozen ? (
              <Play className="size-5 text-muted-foreground" />
            ) : (
              <Snowflake className="size-5 text-muted-foreground" />
            )}
            <div>
              <p className="text-sm font-medium">{isFrozen ? "Unfreeze card" : "Freeze card"}</p>
              <p className="text-xs text-muted-foreground">
                {isFrozen
                  ? "Unfreeze to allow new transactions"
                  : "Temporarily block all new transactions"}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className={`rounded-full ${
              isFrozen
                ? ""
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            onClick={() => toggleFreeze(selectedCardId)}
          >
            {isFrozen ? "Unfreeze" : "Freeze"}
          </Button>
        </div>

        {/* Monthly spending */}
        <div className="space-y-2 rounded-xl bg-card px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Monthly spending</p>
            <p className="text-sm text-muted-foreground">
              {selectedCard.monthlySpent.toLocaleString()} / {selectedCard.monthlyLimit.toLocaleString()} {selectedCard.currency}
            </p>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{
                width: `${Math.min((selectedCard.monthlySpent / selectedCard.monthlyLimit) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      </FadeIn>

      {/* Spending controls */}
      <FadeIn as="section" className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold">Spending controls</h2>
        <ul className="flex flex-col gap-0.5">
          {SPENDING_CONTROLS.map((control) => (
            <li key={control.id} className="flex items-center gap-4 rounded-lg py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                <control.icon className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{control.label}</p>
                <p className="text-sm text-muted-foreground">{control.limit}</p>
              </div>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                On
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </PageTransition>
  )
}
