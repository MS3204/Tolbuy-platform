import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useT } from "@/i18n/I18nContext";
import { TolsentinelBadge } from "@/components/TolsentinelBadge";

export const Route = createFileRoute("/ai")({
  component: AiPage,
  head: () => ({
    meta: [
      { title: "Tolsentinel AI — TolBuy" },
      {
        name: "description",
        content:
          "Talk to Tolsentinel AI - Your personal economic assistant for shopping, trading, and investing.",
      },
    ],
  }),
});

function AiPage() {
  const t = useT();

  return (
    <div className="container mx-auto px-5 pt-8 pb-24">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          to="/"
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <TolsentinelBadge />
            Tolsentinel AI
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Your intelligent economic assistant
          </p>
        </div>
      </div>

      {/* Main content area - Placeholder for future AI implementation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar - Features */}
        <div className="md:col-span-1">
          <div className="glass-strong holo-border rounded-3xl p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Capabilities</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm">
                <div className="font-medium">Product Search</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Find exactly what you need
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm">
                <div className="font-medium">Market Analysis</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Understand trends & signals
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm">
                <div className="font-medium">Trading Assistant</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Optimize your positions
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm">
                <div className="font-medium">Investment Scout</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Discover opportunities
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm">
                <div className="font-medium">Profit Optimizer</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Maximize your returns
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right main area - Chat interface placeholder */}
        <div className="md:col-span-2">
          <div className="glass-strong holo-border rounded-3xl p-8 md:p-12 h-[600px] flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-ai/20 mb-4">
                <Sparkles className="h-10 w-10 text-ai" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Tolsentinel AI</h2>
            <p className="text-muted-foreground max-w-md mb-6">
              Your personal economic assistant is ready to help you navigate
              shopping, trading, and investing opportunities.
            </p>
            <p className="text-sm text-muted-foreground/60">
              Chat interface coming soon — awaiting AI engine integration
            </p>
          </div>

          {/* Quick prompts below chat area */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">Try asking:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm">
                "What should I buy today?"
              </button>
              <button className="text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm">
                "Analyze my portfolio risk"
              </button>
              <button className="text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm">
                "Show me trending products"
              </button>
              <button className="text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm">
                "Find investment opportunities"
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="mt-12 rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center">
        <h3 className="text-xl font-semibold mb-3">How Tolsentinel works</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Tolsentinel AI watches every signal across shopping, trading, and
          investing. It surfaces what matters — only when it matters. Every
          interaction makes it smarter about your preferences and goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-left">
            <div className="text-2xl font-bold text-ai mb-2">1</div>
            <div className="font-medium mb-1">Observe</div>
            <p className="text-sm text-muted-foreground">
              Monitor market signals and your behavior
            </p>
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-intelligence mb-2">2</div>
            <div className="font-medium mb-1">Analyze</div>
            <p className="text-sm text-muted-foreground">
              Process patterns and opportunities
            </p>
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-profit mb-2">3</div>
            <div className="font-medium mb-1">Recommend</div>
            <p className="text-sm text-muted-foreground">
              Surface personalized actions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
