import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "For small teams getting started with security",
    features: [
      { text: "Up to 50 endpoints", included: true },
      { text: "Basic threat detection", included: true },
      { text: "Email support", included: true },
      { text: "Weekly reports", included: true },
      { text: "API access", included: false },
      { text: "Custom integrations", included: false },
      { text: "24/7 SOC", included: false },
      { text: "Dedicated advisor", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: [
      { text: "Up to 250 endpoints", included: true },
      { text: "Advanced threat detection", included: true },
      { text: "Priority support", included: true },
      { text: "Daily reports", included: true },
      { text: "Full API access", included: true },
      { text: "Standard integrations", included: true },
      { text: "24/7 SOC", included: false },
      { text: "Dedicated advisor", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations requiring complete protection",
    features: [
      { text: "Unlimited endpoints", included: true },
      { text: "AI-powered detection", included: true },
      { text: "24/7 premium support", included: true },
      { text: "Real-time dashboards", included: true },
      { text: "Full API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "24/7 SOC included", included: true },
      { text: "Dedicated security advisor", included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <PageLayout>
      <PageHeader
        title="Pricing"
        description="Transparent pricing plans designed to fit businesses of all sizes."
      />
      <ContentSection>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl bg-card border ${
                plan.popular ? "border-primary glow-green" : "border-border"
              } transition-all hover:border-primary/50`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "hover-glow-green" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our sales team for custom pricing or volume discounts.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
