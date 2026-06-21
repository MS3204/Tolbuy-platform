import type { RedemptionPerkType } from "./tolTokenConfig";

export type PerkId =
  | "discount_10"
  | "content_premium"
  | "tools_pro"
  | "fee_reduction_30"
  | "early_access";

export type PerkCatalogItem = {
  perkId: PerkId;
  nameKey: string;
  descriptionKey: string;
  tokenCost: number;
  perkType: RedemptionPerkType;
  availability: "always" | "limited";
  stock: number | null;
};

export const perksCatalog: PerkCatalogItem[] = [
  {
    perkId: "discount_10",
    nameKey: "perk.discount10.name",
    descriptionKey: "perk.discount10.desc",
    tokenCost: 1800,
    perkType: "discount",
    availability: "always",
    stock: null,
  },
  {
    perkId: "content_premium",
    nameKey: "perk.contentPremium.name",
    descriptionKey: "perk.contentPremium.desc",
    tokenCost: 2400,
    perkType: "content",
    availability: "limited",
    stock: 50,
  },
  {
    perkId: "tools_pro",
    nameKey: "perk.toolsPro.name",
    descriptionKey: "perk.toolsPro.desc",
    tokenCost: 3200,
    perkType: "tool",
    availability: "always",
    stock: null,
  },
  {
    perkId: "fee_reduction_30",
    nameKey: "perk.feeReduction30.name",
    descriptionKey: "perk.feeReduction30.desc",
    tokenCost: 4200,
    perkType: "fee_reduction",
    availability: "limited",
    stock: 20,
  },
  {
    perkId: "early_access",
    nameKey: "perk.earlyAccess.name",
    descriptionKey: "perk.earlyAccess.desc",
    tokenCost: 2800,
    perkType: "other",
    availability: "always",
    stock: null,
  },
];

export function getPerkById(perkId: PerkId): PerkCatalogItem | undefined {
  return perksCatalog.find((p) => p.perkId === perkId);
}
