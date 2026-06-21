import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRouterState, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import * as React from "react";
import { useState, useEffect, useCallback, useContext, createContext } from "react";
import { Sparkles, X, Home, ShoppingBag, TrendingUp, Store, Wallet, ChevronRight, Check, Circle, Globe, Coins } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const appCss = "/assets/styles-DEx1hbRo.css";
const languages = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
    dir: "ltr",
    flag: "🇬🇧"
  },
  {
    code: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
    dir: "rtl",
    flag: "🇸🇦"
  },
  {
    code: "es",
    nativeName: "Español",
    englishName: "Spanish",
    dir: "ltr",
    flag: "🇪🇸"
  },
  {
    code: "fr",
    nativeName: "Français",
    englishName: "French",
    dir: "ltr",
    flag: "🇫🇷"
  },
  {
    code: "de",
    nativeName: "Deutsch",
    englishName: "German",
    dir: "ltr",
    flag: "🇩🇪"
  },
  {
    code: "zh",
    nativeName: "中文",
    englishName: "Chinese",
    dir: "ltr",
    flag: "🇨🇳"
  }
];
const DEFAULT_LANGUAGE = "en";
const en = {
  // Nav
  "nav.feed": "Feed",
  "nav.shop": "Shop",
  "nav.trade": "Trade",
  "nav.sell": "Sell",
  "nav.wallet": "Wallet",
  // Top bar
  "top.tolTokens": "TolTokens",
  "top.premium": "Premium",
  "top.language": "Language",
  // Common
  "common.addToCart": "Add to cart",
  "common.buy": "Buy",
  "common.sell": "Sell",
  "common.send": "Send",
  "common.redeem": "Redeem",
  "common.earnMore": "Earn more",
  "common.invest": "Invest",
  "common.details": "Details",
  "common.actNow": "Act now",
  "common.dimension": "Dimension",
  // Feed / home
  "feed.live": "Tolsentinel · live",
  "feed.heroTitle1": "You are not browsing a store.",
  "feed.heroTitle2": "You are navigating an economy.",
  "feed.heroSubtitle": "Shop, trade and invest in one adaptive interface. Tolsentinel AI watches every signal and surfaces what matters — only when it matters.",
  "feed.enterUniverse": "Enter the universe",
  "feed.talkToTolsentinel": "Talk to Tolsentinel",
  "feed.stat.netWorth": "Net worth",
  "feed.stat.todayProfit": "Today's profit",
  "feed.stat.tolTokens": "TolTokens",
  "feed.stat.riskIndex": "Risk index",
  "feed.stat.riskLow": "Low",
  "feed.stat.stable": "stable",
  "feed.yourAiFeed": "Your AI Feed",
  "feed.adaptive": "Adaptive · learns from every tap",
  "feed.tab.forYou": "For you",
  "feed.tab.deals": "Deals",
  "feed.tab.trades": "Trades",
  "feed.tab.insights": "Insights",
  "feed.item1.title": "Tolsentinel detected a pattern",
  "feed.item1.body": "Your last 6 trades cluster around tech ETFs. A diversification opportunity in clean energy is rising +14% this week.",
  "feed.item1.cta": "Explore allocation",
  "feed.item2.title": "Aurora Studio Headphones",
  "feed.item2.body": "Spatial audio · Trust 98% · Demand trending +37%",
  "feed.item2.fairness": "Below market by $26",
  "feed.item2.cta": "Quick buy",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "Support holding at $3,420. AI confidence: 76%.",
  "feed.item3.cta": "Open position",
  "feed.item4.title": "Wholesale match",
  "feed.item4.body": "12 verified suppliers in Istanbul match your saved query 'organic cotton'.",
  "feed.item4.cta": "View matches",
  "feed.item5.title": "Spending watch",
  "feed.item5.body": "Subscriptions +18% MoM. Cancel 2 unused to save $34/mo.",
  "feed.item5.cta": "Optimize",
  "feed.item6.title": "Startup spotlight: Verda",
  "feed.item6.body": "Climate-tech, Series A. Sentinel score 8.2/10.",
  "feed.item6.delta": "Closing in 6d",
  "feed.item6.cta": "Read brief",
  "feed.tokensLevel": "TolTokens · economic level 4",
  "feed.toNextRank": "/ 2,500 to next rank",
  "feed.premiumTag": "Tolsentinel AI Premium",
  "feed.premiumTitle": "Predict markets. Optimize profit. Protect privacy.",
  "feed.premiumF1": "Predictive market insights",
  "feed.premiumF2": "Automated trading assistance",
  "feed.premiumF3": "Smart inventory & profit optimization",
  "feed.premiumF4": "Enhanced privacy controls",
  "feed.monthly": "Monthly",
  "feed.perMonth": "/mo",
  "feed.activatePremium": "Activate Premium",
  "feed.cancelAnytime": "Cancel anytime · Pay with TolTokens for 10% off",
  // Shop
  "shop.title": "Shop",
  "shop.subtitle": "Every product comes pre-analyzed. Tap to expand AI insight.",
  "shop.searchPlaceholder": "Ask Tolsentinel: 'best leather backpack under $150'",
  "shop.aiSearch": "AI search",
  "shop.trust": "Trust",
  "shop.fairBelow": "Fair · below market",
  "shop.aboveMarket": "Above market",
  "shop.marketPrice": "Market price",
  "shop.fairness": "Fairness",
  "shop.demand": "Demand",
  "shop.demandHigh": "High",
  "shop.seller": "Seller",
  "shop.p1": "Aurora Headphones",
  "shop.p2": "Nomad Leather Pack",
  "shop.p3": "Solstice Watch v3",
  "shop.p4": "Atlas Camera 35mm",
  "shop.p5": "Lumen Desk Lamp",
  "shop.p6": "Helix Sneakers",
  // Trade
  "trade.title": "Trade & Invest",
  "trade.subtitle": "No complex charts. AI interprets every market signal for you.",
  "trade.portfolioPulse": "Portfolio pulse",
  "trade.aiConfidence": "AI confidence · 81%",
  "trade.liveAssets": "Live assets",
  "trade.risk": "Risk",
  "trade.riskMedium": "Medium",
  "trade.riskLow": "Low",
  "trade.riskVeryLow": "Very low",
  "trade.investMarketplace": "Investment marketplace",
  "trade.sentinelScore": "Sentinel score",
  "trade.closesIn": "Closes in",
  "trade.eth": "Ethereum",
  "trade.btc": "Bitcoin",
  "trade.usd": "US Dollar",
  "trade.tol": "TolToken",
  "trade.s1.sector": "Climate-tech",
  "trade.s2.sector": "Industrial AI",
  "trade.s3.sector": "Local food",
  // Wallet
  "wallet.title": "Wallet",
  "wallet.subtitle": "Your money as a living stream — not a spreadsheet.",
  "wallet.balance": "Balance",
  "wallet.in": "in",
  "wallet.out": "out",
  "wallet.aiInsight": "AI insight",
  "wallet.aiInsightBody": "Subscriptions ↑ 18% — cancel 2 unused to save",
  "wallet.smartMove": "Smart move",
  "wallet.smartMoveBody": "Move $1,200 to high-yield · projected",
  "wallet.privacy": "Privacy",
  "wallet.privacyBody": "Shielded payments active",
  "wallet.tokensDesc": "Use tokens for fee discounts, premium features and exclusive deals.",
  "wallet.recentFlow": "Recent flow",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "ETH trade",
  "wallet.tx3": "Verda investment",
  "wallet.tx4": "Atlas Goods sale",
  "wallet.tx5": "Spotify",
  // TolToken wallet demo
  "wallet.tolToken.title": "TolToken Wallet",
  "wallet.tolToken.subtitle": "Earn points from platform actions and redeem perks instantly (localStorage demo).",
  "wallet.tolToken.balance": "TolToken Balance",
  "wallet.tolToken.balanceDesc": "Non-transferable internal utility points. Stored locally for the demo.",
  "wallet.tolToken.unit": "TolTokens",
  "wallet.tolToken.tierProgress": "Progress",
  "wallet.tolToken.nextMilestone": "Next milestone",
  "wallet.quickActions": "Earn tokens",
  "wallet.actions.purchase": "Simulate purchase (+value-based)",
  "wallet.actions.trade": "Simulate trade (+value-based)",
  "wallet.actions.daily_login": "Daily login bonus",
  "wallet.actions.verified_review": "Verified review reward",
  "wallet.demo.storage": "Demo uses localStorage. Replace walletStore later to use real API.",
  "wallet.redeem.title": "Redeem perks",
  "wallet.redeem.desc": "Instant redemption with token cost validation.",
  "wallet.history.title": "History",
  "wallet.history.desc": "Earn / redeem events with timestamps.",
  "wallet.history.empty": "No TolToken activity yet. Earn tokens to generate history.",
  "wallet.fraud.title": "Suspicious activity pending review",
  "wallet.fraud.body": "TolSentinel placeholder flagged an earning spike. Balance was not credited in this demo.",
  "wallet.perk.limited": "Limited stock",
  "wallet.toast.earned": "Tokens credited to your balance.",
  "wallet.toast.review": "Earning flagged by fraud rules. Pending review.",
  "wallet.toast.redeemed": "Perk redeemed successfully.",
  "wallet.toast.insufficient_balance": "Not enough TolTokens.",
  "wallet.toast.out_of_stock": "This perk is out of stock.",
  "wallet.toast.invalid_perk": "Invalid perk.",
  "wallet.tx.type.earn": "Earn",
  "wallet.tx.type.bonus": "Bonus",
  "wallet.tx.type.redeem": "Redeem",
  "wallet.tx.type.adjustment": "Adjustment",
  "wallet.tier.1": "Economic level 1",
  "wallet.tier.2": "Economic level 2",
  "wallet.tier.3": "Economic level 3",
  "wallet.tier.4": "Economic level 4+",
  // Perks
  "perk.discount10.name": "10% off discount",
  "perk.discount10.desc": "Get 10% discount on eligible TolBuy services.",
  "perk.contentPremium.name": "Premium content unlock",
  "perk.contentPremium.desc": "Unlock exclusive digital content for a limited set.",
  "perk.toolsPro.name": "TolTrading Pro tools",
  "perk.toolsPro.desc": "Unlock advanced trading tools and analytics.",
  "perk.feeReduction30.name": "Fee reduction bundle",
  "perk.feeReduction30.desc": "Reduce platform transaction fees by 30% (demo).",
  "perk.earlyAccess.name": "Early access",
  "perk.earlyAccess.desc": "Get early access to new features and launches.",
  "wallet.kind.shop": "Shop",
  "wallet.kind.trade": "Trade",
  "wallet.kind.invest": "Invest",
  "wallet.kind.sell": "Sell",
  "wallet.kind.subscription": "Subscription",
  "wallet.time.2m": "2m ago",
  "wallet.time.1h": "1h ago",
  "wallet.time.3h": "3h ago",
  "wallet.time.5h": "5h ago",
  "wallet.time.yesterday": "yesterday",
  // Sell
  "sell.tag": "Seller Mode · focus interface",
  "sell.title1": "Sell anything.",
  "sell.title2": "Anywhere.",
  "sell.subtitle": "Drag a photo. Tolsentinel writes the listing, sets the price and matches buyers in seconds.",
  "sell.dropPhoto": "Drop a photo or video",
  "sell.autoGen": "AI auto-generates title, description, price & tags",
  "sell.pickFile": "Pick a file",
  "sell.previewLabel": "AI-generated listing preview",
  "sell.previewTitle": "Vintage Leica M3 35mm Camera — Excellent",
  "sell.previewBody": "1958, fully serviced, original leather case. Ideal for film enthusiasts. Auto-translated to 12 languages.",
  "sell.suggestedPrice": "Suggested price",
  "sell.profitSim": "Live profit simulation",
  "sell.net": "net",
  "sell.listPrice": "List price",
  "sell.platformFee": "Platform fee · 4%",
  "sell.shippingIntl": "Shipping (intl)",
  "sell.tokenBonus": "TolToken bonus",
  "sell.buyerMatch": "+18% buyer match in 24h with this price",
  "sell.logistics": "Logistics",
  "sell.logisticsBody": "3 carriers ready · pickup in 2h · 184 buyers nearby",
  // About
  "about.kicker": "About",
  "about.title1": "The intelligent",
  "about.title2": "economic universe",
  "about.intro": "TolBuy unifies commerce, trading, and investing into one adaptive ecosystem — guided by Tolsentinel AI, our proprietary economic intelligence engine.",
  "about.tolbuyBody": "The primary brand and platform — a unified marketplace where products, markets, and capital flow through one intelligent interface.",
  "about.tolsentinelBody": "The AI sub-brand that powers personalization, market signals, and decision support across every TolBuy surface. A sentinel for your economic life.",
  "about.tmParent": "Parent company",
  "about.tmBody1": "TolBuy is",
  "about.tmBody2": "a TM Group company",
  "about.tmBody3": ". TM Group is the parent organization behind TolBuy and Tolsentinel AI, investing in the next generation of intelligent economic infrastructure.",
  // Footer
  "footer.rights": "All rights reserved.",
  "footer.tmCompany": "A TM Group Company",
  // Orb
  "orb.commandCenter": "Command Center",
  "orb.commandCenterTitle": "Command Center",
  "orb.commandCenterBody": "Tolsentinel AI command center is under development. The intelligent agent will be integrated soon to provide real-time market insights, trading recommendations, and personalized economic guidance.",
  "orb.commandCenterComing": "🚀 Coming with the full AI agent integration",
  "orb.open": "Open Tolsentinel AI",
  "orb.mode.calm": "Monitoring",
  "orb.mode.alert": "New insight",
  "orb.mode.opportunity": "Opportunity",
  "orb.mode.risk": "Risk detected",
  "orb.i1": "Vintage cameras trending +24% in your region. Worth listing.",
  "orb.i2": "ETH support level approaching. Consider averaging in.",
  "orb.i3": "Spending on subscriptions up 18% this month.",
  "orb.i4": "Portfolio balanced. Tolsentinel is watching 1,420 signals.",
  "orb.i5": "Seller 'Atlas Goods' has +98% trust — wholesale match found.",
  // 404
  "nf.title": "Lost in the economic universe",
  "nf.body": "This dimension doesn't exist. Tolsentinel can guide you back.",
  "nf.return": "Return to Feed",
  // AI page
  "ai.title": "Tolsentinel AI",
  "ai.subtitle": "Your intelligent economic assistant",
  "ai.capabilities": "Capabilities",
  "ai.feature.productSearch.title": "Product Search",
  "ai.feature.productSearch.body": "Find exactly what you need",
  "ai.feature.marketAnalysis.title": "Market Analysis",
  "ai.feature.marketAnalysis.body": "Understand trends & signals",
  "ai.feature.tradingAssistant.title": "Trading Assistant",
  "ai.feature.tradingAssistant.body": "Optimize your positions",
  "ai.feature.investmentScout.title": "Investment Scout",
  "ai.feature.investmentScout.body": "Discover opportunities",
  "ai.feature.profitOptimizer.title": "Profit Optimizer",
  "ai.feature.profitOptimizer.body": "Maximize your returns",
  "ai.chatComing": "Chat interface coming soon — awaiting AI engine integration",
  "ai.tryAsking": "Try asking:",
  "ai.prompt.buyToday": "What should I buy today?",
  "ai.prompt.analyzeRisk": "Analyze my portfolio risk",
  "ai.prompt.trendingProducts": "Show me trending products",
  "ai.prompt.investOpportunities": "Find investment opportunities",
  "ai.howWorks.title": "How Tolsentinel works",
  "ai.howWorks.body": "Tolsentinel AI watches every signal across shopping, trading, and investing. It surfaces what matters — only when it matters. Every interaction makes it smarter about your preferences and goals.",
  "ai.howWorks.step1.title": "Observe",
  "ai.howWorks.step1.body": "Monitor market signals and your behavior",
  "ai.howWorks.step2.title": "Analyze",
  "ai.howWorks.step2.body": "Process patterns and opportunities",
  "ai.howWorks.step3.title": "Recommend",
  "ai.howWorks.step3.body": "Surface personalized actions",
  "ai.back": "Go back"
};
const ar = {
  "nav.feed": "الموجز",
  "nav.shop": "التسوق",
  "nav.trade": "التداول",
  "nav.sell": "البيع",
  "nav.wallet": "المحفظة",
  "top.tolTokens": "توكنات TolTokens",
  "top.premium": "بريميوم",
  "top.language": "اللغة",
  "common.addToCart": "أضف إلى السلة",
  "common.buy": "شراء",
  "common.sell": "بيع",
  "common.send": "إرسال",
  "common.redeem": "استبدال",
  "common.earnMore": "اكسب المزيد",
  "common.invest": "استثمر",
  "common.details": "التفاصيل",
  "common.actNow": "تصرف الآن",
  "common.dimension": "البُعد",
  "feed.live": "Tolsentinel · مباشر",
  "feed.heroTitle1": "أنت لا تتصفح متجراً.",
  "feed.heroTitle2": "أنت تتنقل في اقتصاد.",
  "feed.heroSubtitle": "تسوّق وتداول واستثمر في واجهة واحدة متكيّفة. يراقب Tolsentinel AI كل إشارة ويُظهر ما يهم — فقط عندما يهم.",
  "feed.enterUniverse": "ادخل الكون",
  "feed.talkToTolsentinel": "تحدث مع Tolsentinel",
  "feed.stat.netWorth": "صافي الثروة",
  "feed.stat.todayProfit": "ربح اليوم",
  "feed.stat.tolTokens": "توكنات TolTokens",
  "feed.stat.riskIndex": "مؤشر المخاطر",
  "feed.stat.riskLow": "منخفض",
  "feed.stat.stable": "مستقر",
  "feed.yourAiFeed": "موجز الذكاء الاصطناعي الخاص بك",
  "feed.adaptive": "متكيّف · يتعلم من كل نقرة",
  "feed.tab.forYou": "لك",
  "feed.tab.deals": "العروض",
  "feed.tab.trades": "الصفقات",
  "feed.tab.insights": "الرؤى",
  "feed.item1.title": "اكتشف Tolsentinel نمطاً",
  "feed.item1.body": "تتركز صفقاتك الست الأخيرة حول صناديق التكنولوجيا. هناك فرصة تنويع في الطاقة النظيفة ترتفع +14٪ هذا الأسبوع.",
  "feed.item1.cta": "استكشف التوزيع",
  "feed.item2.title": "سماعات Aurora Studio",
  "feed.item2.body": "صوت مكاني · الثقة 98٪ · الطلب يرتفع +37٪",
  "feed.item2.fairness": "أقل من السوق بـ 26$",
  "feed.item2.cta": "شراء سريع",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "الدعم ثابت عند 3,420$. ثقة الذكاء الاصطناعي: 76٪.",
  "feed.item3.cta": "افتح مركزاً",
  "feed.item4.title": "تطابق الجملة",
  "feed.item4.body": "12 مورّداً موثوقاً في إسطنبول يطابقون استعلامك المحفوظ 'قطن عضوي'.",
  "feed.item4.cta": "عرض التطابقات",
  "feed.item5.title": "مراقبة الإنفاق",
  "feed.item5.body": "الاشتراكات +18٪ شهرياً. ألغِ اثنين غير مستخدمين لتوفير 34$ شهرياً.",
  "feed.item5.cta": "تحسين",
  "feed.item6.title": "تسليط الضوء على شركة ناشئة: Verda",
  "feed.item6.body": "تقنية مناخية، الجولة A. تقييم Sentinel 8.2/10.",
  "feed.item6.delta": "يغلق خلال 6 أيام",
  "feed.item6.cta": "اقرأ الملخص",
  "feed.tokensLevel": "TolTokens · المستوى الاقتصادي 4",
  "feed.toNextRank": "/ 2,500 للرتبة التالية",
  "feed.premiumTag": "Tolsentinel AI بريميوم",
  "feed.premiumTitle": "تنبّأ بالأسواق. حسّن الأرباح. احمِ الخصوصية.",
  "feed.premiumF1": "رؤى تنبؤية للسوق",
  "feed.premiumF2": "مساعدة تداول آلية",
  "feed.premiumF3": "تحسين ذكي للمخزون والأرباح",
  "feed.premiumF4": "ضوابط خصوصية معززة",
  "feed.monthly": "شهرياً",
  "feed.perMonth": "/شهر",
  "feed.activatePremium": "تفعيل بريميوم",
  "feed.cancelAnytime": "ألغِ في أي وقت · ادفع بـ TolTokens لخصم 10٪",
  "shop.title": "التسوق",
  "shop.subtitle": "كل منتج محلّل مسبقاً. اضغط لتوسيع رؤية الذكاء الاصطناعي.",
  "shop.searchPlaceholder": "اسأل Tolsentinel: 'أفضل حقيبة جلدية أقل من 150$'",
  "shop.aiSearch": "بحث ذكي",
  "shop.trust": "الثقة",
  "shop.fairBelow": "عادل · أقل من السوق",
  "shop.aboveMarket": "أعلى من السوق",
  "shop.marketPrice": "سعر السوق",
  "shop.fairness": "العدالة",
  "shop.demand": "الطلب",
  "shop.demandHigh": "مرتفع",
  "shop.seller": "البائع",
  "shop.p1": "سماعات Aurora",
  "shop.p2": "حقيبة Nomad الجلدية",
  "shop.p3": "ساعة Solstice v3",
  "shop.p4": "كاميرا Atlas 35مم",
  "shop.p5": "مصباح مكتب Lumen",
  "shop.p6": "أحذية Helix",
  "trade.title": "التداول والاستثمار",
  "trade.subtitle": "لا رسوم بيانية معقدة. يفسر الذكاء الاصطناعي كل إشارة سوق لك.",
  "trade.portfolioPulse": "نبض المحفظة",
  "trade.aiConfidence": "ثقة الذكاء الاصطناعي · 81٪",
  "trade.liveAssets": "الأصول المباشرة",
  "trade.risk": "المخاطر",
  "trade.riskMedium": "متوسط",
  "trade.riskLow": "منخفض",
  "trade.riskVeryLow": "منخفض جداً",
  "trade.investMarketplace": "سوق الاستثمار",
  "trade.sentinelScore": "تقييم Sentinel",
  "trade.closesIn": "يغلق خلال",
  "trade.eth": "إيثريوم",
  "trade.btc": "بيتكوين",
  "trade.usd": "دولار أمريكي",
  "trade.tol": "TolToken",
  "trade.s1.sector": "تقنية مناخية",
  "trade.s2.sector": "ذكاء صناعي",
  "trade.s3.sector": "أغذية محلية",
  "wallet.title": "المحفظة",
  "wallet.subtitle": "أموالك كتدفق حي — لا كجدول بيانات.",
  "wallet.balance": "الرصيد",
  "wallet.in": "وارد",
  "wallet.out": "صادر",
  "wallet.aiInsight": "رؤية الذكاء الاصطناعي",
  "wallet.aiInsightBody": "الاشتراكات ↑ 18٪ — ألغِ اثنين غير مستخدمين لتوفير",
  "wallet.smartMove": "خطوة ذكية",
  "wallet.smartMoveBody": "انقل 1,200$ إلى عائد مرتفع · متوقع",
  "wallet.privacy": "الخصوصية",
  "wallet.privacyBody": "المدفوعات المحمية مفعّلة",
  "wallet.tokensDesc": "استخدم التوكنات لخصومات الرسوم والميزات المميزة والعروض الحصرية.",
  "wallet.recentFlow": "التدفق الأخير",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "صفقة ETH",
  "wallet.tx3": "استثمار Verda",
  "wallet.tx4": "بيع Atlas Goods",
  "wallet.tx5": "Spotify",
  "wallet.kind.shop": "تسوق",
  "wallet.kind.trade": "تداول",
  "wallet.kind.invest": "استثمار",
  "wallet.kind.sell": "بيع",
  "wallet.kind.subscription": "اشتراك",
  "wallet.time.2m": "قبل دقيقتين",
  "wallet.time.1h": "قبل ساعة",
  "wallet.time.3h": "قبل 3 ساعات",
  "wallet.time.5h": "قبل 5 ساعات",
  "wallet.time.yesterday": "أمس",
  "sell.tag": "وضع البائع · واجهة مركّزة",
  "sell.title1": "بِع أي شيء.",
  "sell.title2": "في أي مكان.",
  "sell.subtitle": "اسحب صورة. يكتب Tolsentinel القائمة، ويحدد السعر، ويطابق المشترين في ثوانٍ.",
  "sell.dropPhoto": "أفلت صورة أو فيديو",
  "sell.autoGen": "ينشئ الذكاء الاصطناعي العنوان والوصف والسعر والوسوم تلقائياً",
  "sell.pickFile": "اختر ملفاً",
  "sell.previewLabel": "معاينة القائمة المُنشأة بالذكاء الاصطناعي",
  "sell.previewTitle": "كاميرا Leica M3 35مم عتيقة — ممتازة",
  "sell.previewBody": "1958، مُصانة بالكامل، حقيبة جلدية أصلية. مثالية لعشاق التصوير الفيلمي. مترجمة تلقائياً إلى 12 لغة.",
  "sell.suggestedPrice": "السعر المقترح",
  "sell.profitSim": "محاكاة الربح المباشر",
  "sell.net": "صافٍ",
  "sell.listPrice": "سعر القائمة",
  "sell.platformFee": "رسوم المنصة · 4٪",
  "sell.shippingIntl": "الشحن (دولي)",
  "sell.tokenBonus": "مكافأة TolToken",
  "sell.buyerMatch": "+18٪ تطابق مشترين خلال 24 ساعة بهذا السعر",
  "sell.logistics": "اللوجستيات",
  "sell.logisticsBody": "3 شركات شحن جاهزة · استلام خلال ساعتين · 184 مشترياً قريباً",
  "about.kicker": "حول",
  "about.title1": "الكون الاقتصادي",
  "about.title2": "الذكي",
  "about.intro": "يوحّد TolBuy التجارة والتداول والاستثمار في نظام بيئي واحد متكيّف — بقيادة Tolsentinel AI، محرك الذكاء الاقتصادي الخاص بنا.",
  "about.tolbuyBody": "العلامة والمنصة الأساسية — سوق موحّد تتدفق فيه المنتجات والأسواق ورأس المال عبر واجهة ذكية واحدة.",
  "about.tolsentinelBody": "العلامة الفرعية للذكاء الاصطناعي التي تشغّل التخصيص وإشارات السوق ودعم القرار عبر كل واجهات TolBuy. حارس لحياتك الاقتصادية.",
  "about.tmParent": "الشركة الأم",
  "about.tmBody1": "TolBuy هي",
  "about.tmBody2": "شركة تابعة لـ TM Group",
  "about.tmBody3": ". TM Group هي المؤسسة الأم وراء TolBuy و Tolsentinel AI، تستثمر في الجيل القادم من البنية التحتية الاقتصادية الذكية.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.tmCompany": "شركة تابعة لـ TM Group",
  "orb.commandCenter": "مركز القيادة",
  "orb.commandCenterTitle": "مركز القيادة",
  "orb.commandCenterBody": "مركز قيادة Tolsentinel AI قيد التطوير. سيتم دمج الوكيل الذكي قريباً لتقديم رؤى سوق فورية وتوصيات تداول وإرشاد اقتصادي مخصص.",
  "orb.commandCenterComing": "🚀 قادم مع دمج وكيل الذكاء الاصطناعي بالكامل",
  "orb.open": "افتح Tolsentinel AI",
  "orb.mode.calm": "مراقبة",
  "orb.mode.alert": "رؤية جديدة",
  "orb.mode.opportunity": "فرصة",
  "orb.mode.risk": "تم اكتشاف خطر",
  "orb.i1": "الكاميرات العتيقة ترتفع +24٪ في منطقتك. تستحق العرض.",
  "orb.i2": "مستوى دعم ETH يقترب. فكّر في التوسط.",
  "orb.i3": "الإنفاق على الاشتراكات ارتفع 18٪ هذا الشهر.",
  "orb.i4": "المحفظة متوازنة. يراقب Tolsentinel 1,420 إشارة.",
  "orb.i5": "البائع 'Atlas Goods' لديه ثقة +98٪ — تم العثور على تطابق جملة.",
  "nf.title": "ضائع في الكون الاقتصادي",
  "nf.body": "هذا البُعد غير موجود. يمكن لـ Tolsentinel إرشادك للعودة.",
  "nf.return": "العودة إلى الموجز"
};
const es = {
  "nav.feed": "Inicio",
  "nav.shop": "Tienda",
  "nav.trade": "Operar",
  "nav.sell": "Vender",
  "nav.wallet": "Cartera",
  "top.tolTokens": "TolTokens",
  "top.premium": "Premium",
  "top.language": "Idioma",
  "common.addToCart": "Añadir al carrito",
  "common.buy": "Comprar",
  "common.sell": "Vender",
  "common.send": "Enviar",
  "common.redeem": "Canjear",
  "common.earnMore": "Gana más",
  "common.invest": "Invertir",
  "common.details": "Detalles",
  "common.actNow": "Actuar ahora",
  "common.dimension": "Dimensión",
  "feed.live": "Tolsentinel · en vivo",
  "feed.heroTitle1": "No estás navegando por una tienda.",
  "feed.heroTitle2": "Estás navegando por una economía.",
  "feed.heroSubtitle": "Compra, opera e invierte en una interfaz adaptativa. Tolsentinel AI vigila cada señal y muestra lo importante — solo cuando importa.",
  "feed.enterUniverse": "Entrar al universo",
  "feed.talkToTolsentinel": "Hablar con Tolsentinel",
  "feed.stat.netWorth": "Patrimonio neto",
  "feed.stat.todayProfit": "Ganancia de hoy",
  "feed.stat.tolTokens": "TolTokens",
  "feed.stat.riskIndex": "Índice de riesgo",
  "feed.stat.riskLow": "Bajo",
  "feed.stat.stable": "stable",
  "feed.yourAiFeed": "Tu feed de IA",
  "feed.adaptive": "Adaptativo · aprende de cada toque",
  "feed.tab.forYou": "Para ti",
  "feed.tab.deals": "Ofertas",
  "feed.tab.trades": "Operaciones",
  "feed.tab.insights": "Análisis",
  "feed.item1.title": "Tolsentinel detectó un patrón",
  "feed.item1.body": "Tus últimas 6 operaciones se concentran en ETFs tecnológicos. Una oportunidad de diversificación en energía limpia sube +14% esta semana.",
  "feed.item1.cta": "Explorar asignación",
  "feed.item2.title": "Auriculares Aurora Studio",
  "feed.item2.body": "Audio espacial · Confianza 98% · Demanda +37%",
  "feed.item2.fairness": "Por debajo del mercado por $26",
  "feed.item2.cta": "Compra rápida",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "Soporte en $3,420. Confianza de IA: 76%.",
  "feed.item3.cta": "Abrir posición",
  "feed.item4.title": "Coincidencia mayorista",
  "feed.item4.body": "12 proveedores verificados en Estambul coinciden con tu búsqueda 'algodón orgánico'.",
  "feed.item4.cta": "Ver coincidencias",
  "feed.item5.title": "Vigilancia de gastos",
  "feed.item5.body": "Suscripciones +18% mensual. Cancela 2 sin usar para ahorrar $34/mes.",
  "feed.item5.cta": "Optimizar",
  "feed.item6.title": "Startup destacada: Verda",
  "feed.item6.body": "Tecnología climática, Serie A. Puntuación Sentinel 8.2/10.",
  "feed.item6.delta": "Cierra en 6d",
  "feed.item6.cta": "Leer resumen",
  "feed.tokensLevel": "TolTokens · nivel económico 4",
  "feed.toNextRank": "/ 2,500 para el siguiente rango",
  "feed.premiumTag": "Tolsentinel AI Premium",
  "feed.premiumTitle": "Predice mercados. Optimiza ganancias. Protege la privacidad.",
  "feed.premiumF1": "Análisis predictivo de mercado",
  "feed.premiumF2": "Asistencia de trading automatizada",
  "feed.premiumF3": "Optimización inteligente de inventario y ganancias",
  "feed.premiumF4": "Controles de privacidad mejorados",
  "feed.monthly": "Mensual",
  "feed.perMonth": "/mes",
  "feed.activatePremium": "Activar Premium",
  "feed.cancelAnytime": "Cancela cuando quieras · Paga con TolTokens y ahorra 10%",
  "shop.title": "Tienda",
  "shop.subtitle": "Cada producto viene preanalizado. Toca para ver el análisis de IA.",
  "shop.searchPlaceholder": "Pregunta a Tolsentinel: 'mejor mochila de cuero por menos de $150'",
  "shop.aiSearch": "Búsqueda IA",
  "shop.trust": "Confianza",
  "shop.fairBelow": "Justo · bajo el mercado",
  "shop.aboveMarket": "Sobre el mercado",
  "shop.marketPrice": "Precio de mercado",
  "shop.fairness": "Equidad",
  "shop.demand": "Demanda",
  "shop.demandHigh": "Alta",
  "shop.seller": "Vendedor",
  "shop.p1": "Auriculares Aurora",
  "shop.p2": "Mochila de cuero Nomad",
  "shop.p3": "Reloj Solstice v3",
  "shop.p4": "Cámara Atlas 35mm",
  "shop.p5": "Lámpara de escritorio Lumen",
  "shop.p6": "Zapatillas Helix",
  "trade.title": "Operar e Invertir",
  "trade.subtitle": "Sin gráficos complejos. La IA interpreta cada señal del mercado por ti.",
  "trade.portfolioPulse": "Pulso del portafolio",
  "trade.aiConfidence": "Confianza de IA · 81%",
  "trade.liveAssets": "Activos en vivo",
  "trade.risk": "Riesgo",
  "trade.riskMedium": "Medio",
  "trade.riskLow": "Bajo",
  "trade.riskVeryLow": "Muy bajo",
  "trade.investMarketplace": "Mercado de inversión",
  "trade.sentinelScore": "Puntuación Sentinel",
  "trade.closesIn": "Cierra en",
  "trade.eth": "Ethereum",
  "trade.btc": "Bitcoin",
  "trade.usd": "Dólar estadounidense",
  "trade.tol": "TolToken",
  "trade.s1.sector": "Tecnología climática",
  "trade.s2.sector": "IA industrial",
  "trade.s3.sector": "Comida local",
  "wallet.title": "Cartera",
  "wallet.subtitle": "Tu dinero como un flujo vivo — no una hoja de cálculo.",
  "wallet.balance": "Saldo",
  "wallet.in": "entrada",
  "wallet.out": "salida",
  "wallet.aiInsight": "Análisis de IA",
  "wallet.aiInsightBody": "Suscripciones ↑ 18% — cancela 2 sin usar para ahorrar",
  "wallet.smartMove": "Movimiento inteligente",
  "wallet.smartMoveBody": "Mueve $1,200 a alto rendimiento · proyectado",
  "wallet.privacy": "Privacidad",
  "wallet.privacyBody": "Pagos protegidos activos",
  "wallet.tokensDesc": "Usa tokens para descuentos en tarifas, funciones premium y ofertas exclusivas.",
  "wallet.recentFlow": "Flujo reciente",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "Operación ETH",
  "wallet.tx3": "Inversión Verda",
  "wallet.tx4": "Venta Atlas Goods",
  "wallet.tx5": "Spotify",
  "wallet.kind.shop": "Tienda",
  "wallet.kind.trade": "Operar",
  "wallet.kind.invest": "Invertir",
  "wallet.kind.sell": "Vender",
  "wallet.kind.subscription": "Suscripción",
  "wallet.time.2m": "hace 2m",
  "wallet.time.1h": "hace 1h",
  "wallet.time.3h": "hace 3h",
  "wallet.time.5h": "hace 5h",
  "wallet.time.yesterday": "ayer",
  "sell.tag": "Modo vendedor · interfaz enfocada",
  "sell.title1": "Vende lo que sea.",
  "sell.title2": "Donde sea.",
  "sell.subtitle": "Arrastra una foto. Tolsentinel escribe el anuncio, fija el precio y encuentra compradores en segundos.",
  "sell.dropPhoto": "Suelta una foto o video",
  "sell.autoGen": "La IA genera título, descripción, precio y etiquetas",
  "sell.pickFile": "Elegir archivo",
  "sell.previewLabel": "Vista previa del anuncio generado por IA",
  "sell.previewTitle": "Cámara Leica M3 35mm vintage — Excelente",
  "sell.previewBody": "1958, totalmente revisada, estuche de cuero original. Ideal para entusiastas del cine. Traducida automáticamente a 12 idiomas.",
  "sell.suggestedPrice": "Precio sugerido",
  "sell.profitSim": "Simulación de ganancia en vivo",
  "sell.net": "neto",
  "sell.listPrice": "Precio de venta",
  "sell.platformFee": "Comisión · 4%",
  "sell.shippingIntl": "Envío (intl)",
  "sell.tokenBonus": "Bono TolToken",
  "sell.buyerMatch": "+18% coincidencia de compradores en 24h con este precio",
  "sell.logistics": "Logística",
  "sell.logisticsBody": "3 transportistas listos · recogida en 2h · 184 compradores cerca",
  "about.kicker": "Acerca de",
  "about.title1": "El universo económico",
  "about.title2": "inteligente",
  "about.intro": "TolBuy unifica comercio, trading e inversión en un ecosistema adaptativo — guiado por Tolsentinel AI, nuestro motor de inteligencia económica.",
  "about.tolbuyBody": "La marca y plataforma principal — un mercado unificado donde productos, mercados y capital fluyen a través de una interfaz inteligente.",
  "about.tolsentinelBody": "La submarca de IA que impulsa la personalización, señales de mercado y soporte de decisiones en cada superficie de TolBuy. Un centinela para tu vida económica.",
  "about.tmParent": "Empresa matriz",
  "about.tmBody1": "TolBuy es",
  "about.tmBody2": "una empresa de TM Group",
  "about.tmBody3": ". TM Group es la organización matriz detrás de TolBuy y Tolsentinel AI, invirtiendo en la próxima generación de infraestructura económica inteligente.",
  "footer.rights": "Todos los derechos reservados.",
  "footer.tmCompany": "Una empresa de TM Group",
  "orb.commandCenter": "Centro de mando",
  "orb.commandCenterTitle": "Centro de mando",
  "orb.commandCenterBody": "El centro de mando de Tolsentinel AI está en desarrollo. El agente inteligente se integrará pronto para ofrecer información de mercado en tiempo real, recomendaciones de trading y orientación económica personalizada.",
  "orb.commandCenterComing": "🚀 Llega con la integración completa del agente de IA",
  "orb.open": "Abrir Tolsentinel AI",
  "orb.mode.calm": "Monitoreando",
  "orb.mode.alert": "Nuevo análisis",
  "orb.mode.opportunity": "Oportunidad",
  "orb.mode.risk": "Riesgo detectado",
  "orb.i1": "Las cámaras vintage suben +24% en tu región. Vale la pena anunciarlas.",
  "orb.i2": "El nivel de soporte de ETH se acerca. Considera promediar.",
  "orb.i3": "El gasto en suscripciones subió 18% este mes.",
  "orb.i4": "Portafolio equilibrado. Tolsentinel vigila 1,420 señales.",
  "orb.i5": "El vendedor 'Atlas Goods' tiene +98% de confianza — coincidencia mayorista encontrada.",
  "nf.title": "Perdido en el universo económico",
  "nf.body": "Esta dimensión no existe. Tolsentinel puede guiarte de vuelta.",
  "nf.return": "Volver al inicio"
};
const fr = {
  "nav.feed": "Fil",
  "nav.shop": "Boutique",
  "nav.trade": "Trader",
  "nav.sell": "Vendre",
  "nav.wallet": "Portefeuille",
  "top.tolTokens": "TolTokens",
  "top.premium": "Premium",
  "top.language": "Langue",
  "common.addToCart": "Ajouter au panier",
  "common.buy": "Acheter",
  "common.sell": "Vendre",
  "common.send": "Envoyer",
  "common.redeem": "Échanger",
  "common.earnMore": "Gagner plus",
  "common.invest": "Investir",
  "common.details": "Détails",
  "common.actNow": "Agir maintenant",
  "common.dimension": "Dimension",
  "feed.live": "Tolsentinel · en direct",
  "feed.heroTitle1": "Vous ne parcourez pas une boutique.",
  "feed.heroTitle2": "Vous naviguez dans une économie.",
  "feed.heroSubtitle": "Achetez, tradez et investissez dans une interface adaptative. Tolsentinel AI surveille chaque signal et révèle l'essentiel — uniquement quand cela compte.",
  "feed.enterUniverse": "Entrer dans l'univers",
  "feed.talkToTolsentinel": "Parler à Tolsentinel",
  "feed.stat.netWorth": "Valeur nette",
  "feed.stat.todayProfit": "Profit du jour",
  "feed.stat.tolTokens": "TolTokens",
  "feed.stat.riskIndex": "Indice de risque",
  "feed.stat.riskLow": "Faible",
  "feed.stat.stable": "stable",
  "feed.yourAiFeed": "Votre fil IA",
  "feed.adaptive": "Adaptatif · apprend de chaque clic",
  "feed.tab.forYou": "Pour vous",
  "feed.tab.deals": "Offres",
  "feed.tab.trades": "Trades",
  "feed.tab.insights": "Analyses",
  "feed.item1.title": "Tolsentinel a détecté un schéma",
  "feed.item1.body": "Vos 6 derniers trades se concentrent sur des ETF tech. Une opportunité de diversification dans l'énergie propre monte de +14% cette semaine.",
  "feed.item1.cta": "Explorer l'allocation",
  "feed.item2.title": "Casque Aurora Studio",
  "feed.item2.body": "Audio spatial · Confiance 98% · Demande +37%",
  "feed.item2.fairness": "Sous le marché de 26$",
  "feed.item2.cta": "Achat rapide",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "Support maintenu à 3 420$. Confiance IA : 76%.",
  "feed.item3.cta": "Ouvrir une position",
  "feed.item4.title": "Correspondance en gros",
  "feed.item4.body": "12 fournisseurs vérifiés à Istanbul correspondent à votre recherche 'coton bio'.",
  "feed.item4.cta": "Voir les correspondances",
  "feed.item5.title": "Surveillance des dépenses",
  "feed.item5.body": "Abonnements +18% par mois. Annulez 2 inutilisés pour économiser 34$/mois.",
  "feed.item5.cta": "Optimiser",
  "feed.item6.title": "Startup en vedette : Verda",
  "feed.item6.body": "Climate-tech, Série A. Score Sentinel 8,2/10.",
  "feed.item6.delta": "Clôture dans 6j",
  "feed.item6.cta": "Lire le résumé",
  "feed.tokensLevel": "TolTokens · niveau économique 4",
  "feed.toNextRank": "/ 2 500 pour le rang suivant",
  "feed.premiumTag": "Tolsentinel AI Premium",
  "feed.premiumTitle": "Prédisez les marchés. Optimisez les profits. Protégez la vie privée.",
  "feed.premiumF1": "Analyses prédictives de marché",
  "feed.premiumF2": "Assistance de trading automatisée",
  "feed.premiumF3": "Optimisation intelligente des stocks et profits",
  "feed.premiumF4": "Contrôles de confidentialité renforcés",
  "feed.monthly": "Mensuel",
  "feed.perMonth": "/mois",
  "feed.activatePremium": "Activer Premium",
  "feed.cancelAnytime": "Annulez à tout moment · Payez en TolTokens pour 10% de réduction",
  "shop.title": "Boutique",
  "shop.subtitle": "Chaque produit est pré-analysé. Touchez pour développer l'analyse IA.",
  "shop.searchPlaceholder": "Demandez à Tolsentinel : 'meilleur sac en cuir à moins de 150$'",
  "shop.aiSearch": "Recherche IA",
  "shop.trust": "Confiance",
  "shop.fairBelow": "Juste · sous le marché",
  "shop.aboveMarket": "Au-dessus du marché",
  "shop.marketPrice": "Prix du marché",
  "shop.fairness": "Équité",
  "shop.demand": "Demande",
  "shop.demandHigh": "Élevée",
  "shop.seller": "Vendeur",
  "shop.p1": "Casque Aurora",
  "shop.p2": "Sac en cuir Nomad",
  "shop.p3": "Montre Solstice v3",
  "shop.p4": "Appareil photo Atlas 35mm",
  "shop.p5": "Lampe de bureau Lumen",
  "shop.p6": "Baskets Helix",
  "trade.title": "Trader & Investir",
  "trade.subtitle": "Pas de graphiques complexes. L'IA interprète chaque signal du marché pour vous.",
  "trade.portfolioPulse": "Pouls du portefeuille",
  "trade.aiConfidence": "Confiance IA · 81%",
  "trade.liveAssets": "Actifs en direct",
  "trade.risk": "Risque",
  "trade.riskMedium": "Moyen",
  "trade.riskLow": "Faible",
  "trade.riskVeryLow": "Très faible",
  "trade.investMarketplace": "Marché d'investissement",
  "trade.sentinelScore": "Score Sentinel",
  "trade.closesIn": "Clôture dans",
  "trade.eth": "Ethereum",
  "trade.btc": "Bitcoin",
  "trade.usd": "Dollar américain",
  "trade.tol": "TolToken",
  "trade.s1.sector": "Climate-tech",
  "trade.s2.sector": "IA industrielle",
  "trade.s3.sector": "Alimentation locale",
  "wallet.title": "Portefeuille",
  "wallet.subtitle": "Votre argent comme un flux vivant — pas un tableur.",
  "wallet.balance": "Solde",
  "wallet.in": "entrant",
  "wallet.out": "sortant",
  "wallet.aiInsight": "Analyse IA",
  "wallet.aiInsightBody": "Abonnements ↑ 18% — annulez 2 inutilisés pour économiser",
  "wallet.smartMove": "Action intelligente",
  "wallet.smartMoveBody": "Déplacer 1 200 $ vers un rendement élevé · projeté",
  "wallet.privacy": "Confidentialité",
  "wallet.privacyBody": "Paiements sécurisés actifs",
  "wallet.tokensDesc": "Utilisez les jetons pour des réductions, des fonctionnalités premium et des offres exclusives.",
  "wallet.recentFlow": "Flux récent",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "Transaction ETH",
  "wallet.tx3": "Investissement Verda",
  "wallet.tx4": "Vente Atlas Goods",
  "wallet.tx5": "Spotify",
  "wallet.kind.shop": "Boutique",
  "wallet.kind.trade": "Trade",
  "wallet.kind.invest": "Investir",
  "wallet.kind.sell": "Vendre",
  "wallet.kind.subscription": "Abonnement",
  "wallet.time.2m": "il y a 2m",
  "wallet.time.1h": "il y a 1h",
  "wallet.time.3h": "il y a 3h",
  "wallet.time.5h": "il y a 5h",
  "wallet.time.yesterday": "hier",
  "sell.tag": "Mode vendeur · interface ciblée",
  "sell.title1": "Vendez n'importe quoi.",
  "sell.title2": "N'importe où.",
  "sell.subtitle": "Glissez une photo. Tolsentinel crée l'annonce, fixe le prix et trouve des acheteurs en quelques secondes.",
  "sell.dropPhoto": "Déposez une photo ou une vidéo",
  "sell.autoGen": "L'IA génère le titre, la description, le prix et les tags",
  "sell.pickFile": "Choisir un fichier",
  "sell.previewLabel": "Aperçu de l'annonce générée par l'IA",
  "sell.previewTitle": "Appareil photo vintage Leica M3 35mm — Excellent",
  "sell.previewBody": "1958, entièrement révisé, étui en cuir d'origine. Idéal pour les passionnés de cinéma. Traduit en 12 langues.",
  "sell.suggestedPrice": "Prix suggéré",
  "sell.profitSim": "Simulation de profit en direct",
  "sell.net": "net",
  "sell.listPrice": "Prix de l'annonce",
  "sell.platformFee": "Frais de plateforme · 4%",
  "sell.shippingIntl": "Expédition (intl)",
  "sell.tokenBonus": "Bonus TolToken",
  "sell.buyerMatch": "+18% de correspondance acheteurs en 24h avec ce prix",
  "sell.logistics": "Logistique",
  "sell.logisticsBody": "3 transporteurs prêts · ramassage en 2h · 184 acheteurs à proximité",
  "about.kicker": "À propos",
  "about.title1": "L'univers économique",
  "about.title2": "intelligent",
  "about.intro": "TolBuy unifie le commerce, le trading et l'investissement dans un écosystème adaptatif — guidé par Tolsentinel AI.",
  "about.tolbuyBody": "La marque principale — un marché unifié où les produits, les marchés et les capitaux circulent via une interface intelligente.",
  "about.tolsentinelBody": "La sous-marque d'IA qui gère la personnalisation, les signaux du marché et l'aide à la décision.",
  "about.tmParent": "Société mère",
  "about.tmBody1": "TolBuy est",
  "about.tmBody2": "une entreprise de TM Group",
  "about.tmBody3": ". TM Group est l'organisation mère derrière TolBuy et Tolsentinel AI.",
  "footer.rights": "Tous droits réservés.",
  "footer.tmCompany": "Une entreprise de TM Group",
  "orb.commandCenter": "Centre de commandement",
  "orb.open": "Ouvrir Tolsentinel AI",
  "orb.mode.calm": "Surveillance",
  "orb.mode.alert": "Nouvelle analyse",
  "orb.mode.opportunity": "Opportunité",
  "orb.mode.risk": "Risque détecté",
  "orb.i1": "Appareils photo vintage +24% dans votre région. Intéressant à lister.",
  "orb.i2": "Niveau de support ETH proche. Pensez à moyenner.",
  "orb.i3": "Les dépenses d'abonnement ont augmenté de 18% ce mois-ci.",
  "orb.i4": "Portefeuille équilibré. Tolsentinel surveille 1 420 signaux.",
  "orb.i5": "Le vendeur 'Atlas Goods' a +98% de confiance — correspondance en gros trouvée.",
  "nf.title": "Perdu dans l'univers économique",
  "nf.body": "Cette dimension n'existe pas. Tolsentinel peut vous guider pour revenir.",
  "nf.return": "Retour au Fil"
};
const de = {
  "nav.feed": "Feed",
  "nav.shop": "Shop",
  "nav.trade": "Handeln",
  "nav.sell": "Verkaufen",
  "nav.wallet": "Wallet",
  "top.tolTokens": "TolTokens",
  "top.premium": "Premium",
  "top.language": "Sprache",
  "common.addToCart": "In den Warenkorb",
  "common.buy": "Kaufen",
  "common.sell": "Verkaufen",
  "common.send": "Senden",
  "common.redeem": "Einlösen",
  "common.earnMore": "Mehr verdienen",
  "common.invest": "Investieren",
  "common.details": "Details",
  "common.actNow": "Jetzt handeln",
  "common.dimension": "Dimension",
  "feed.live": "Tolsentinel · Live",
  "feed.heroTitle1": "Sie durchsuchen keinen Shop.",
  "feed.heroTitle2": "Sie navigieren in einer Wirtschaft.",
  "feed.heroSubtitle": "Kaufen, handeln und investieren Sie in einer adaptiven Benutzeroberfläche. Tolsentinel AI überwacht jedes Signal.",
  "feed.enterUniverse": "Das Universum betreten",
  "feed.talkToTolsentinel": "Mit Tolsentinel sprechen",
  "feed.stat.netWorth": "Nettovermögen",
  "feed.stat.todayProfit": "Heutiger Gewinn",
  "feed.stat.tolTokens": "TolTokens",
  "feed.stat.riskIndex": "Risikoindex",
  "feed.stat.riskLow": "Niedrig",
  "feed.stat.stable": "stabil",
  "feed.yourAiFeed": "Ihr KI-Feed",
  "feed.adaptive": "Adaptiv · lernt mit jedem Fingertipp",
  "feed.tab.forYou": "Für Sie",
  "feed.tab.deals": "Angebote",
  "feed.tab.trades": "Trades",
  "feed.tab.insights": "Einblicke",
  "feed.item1.title": "Tolsentinel hat ein Muster erkannt",
  "feed.item1.body": "Ihre letzten 6 Trades konzentrieren sich auf Technologie-ETFs.",
  "feed.item1.cta": "Allokation erkunden",
  "feed.item2.title": "Aurora Studio Kopfhörer",
  "feed.item2.body": "Spatial Audio · Vertrauen 98% · Nachfrage +37%",
  "feed.item2.fairness": "$26 unter Marktwert",
  "feed.item2.cta": "Schnellkauf",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "Unterstützung hält bei $3.420. KI-Vertrauen: 76%.",
  "feed.item3.cta": "Position öffnen",
  "feed.item4.title": "Großhandels-Treffer",
  "feed.item4.body": "12 verifizierte Lieferanten in Istanbul entsprechen Ihrer Anfrage 'Bio-Baumwolle'.",
  "feed.item4.cta": "Treffer anzeigen",
  "feed.item5.title": "Ausgabenwächter",
  "feed.item5.body": "Abonnements +18% MoM. Kündigen Sie 2 ungenutzte, um $34/Monat zu sparen.",
  "feed.item5.cta": "Optimieren",
  "feed.item6.title": "Startup-Rampenlicht: Verda",
  "feed.item6.body": "Climate-Tech, Serie A. Sentinel-Score 8.2/10.",
  "feed.item6.delta": "Schließt in 6 Tagen",
  "feed.item6.cta": "Kurzbericht lesen",
  "feed.tokensLevel": "TolTokens · Wirtschaftsstufe 4",
  "feed.toNextRank": "/ 2.500 zum nächsten Rang",
  "feed.premiumTag": "Tolsentinel AI Premium",
  "feed.premiumTitle": "Märkte vorhersagen. Gewinn optimieren. Privatsphäre schützen.",
  "feed.premiumF1": "Prädiktive Markteinblicke",
  "feed.premiumF2": "Automatisierte Handelsunterstützung",
  "feed.premiumF3": "Intelligente Inventar- & Gewinnoptimierung",
  "feed.premiumF4": "Erweiterte Datenschutzeinstellungen",
  "feed.monthly": "Monatlich",
  "feed.perMonth": "/Monat",
  "feed.activatePremium": "Premium aktivieren",
  "feed.cancelAnytime": "Jederzeit kündigen · Mit TolTokens bezahlen für 10% Rabatt",
  "shop.title": "Shop",
  "shop.subtitle": "Jedes Produkt ist voranalysiert. Tippen für KI-Einblick.",
  "shop.searchPlaceholder": "Fragen Sie Tolsentinel: 'bester Lederrucksack unter $150'",
  "shop.aiSearch": "KI-Suche",
  "shop.trust": "Vertrauen",
  "shop.fairBelow": "Fair · unter Marktwert",
  "shop.aboveMarket": "Über Marktwert",
  "shop.marketPrice": "Marktpreis",
  "shop.fairness": "Fairness",
  "shop.demand": "Nachfrage",
  "shop.demandHigh": "Hoch",
  "shop.seller": "Verkäufer",
  "shop.p1": "Aurora Kopfhörer",
  "shop.p2": "Nomad Lederrucksack",
  "shop.p3": "Solstice Uhr v3",
  "shop.p4": "Atlas Kamera 35mm",
  "shop.p5": "Lumen Schreibtischlampe",
  "shop.p6": "Helix Sneakers",
  "trade.title": "Handeln & Investieren",
  "trade.subtitle": "Keine komplexen Charts. KI interpretiert jedes Marktsignal für Sie.",
  "trade.portfolioPulse": "Portfolio-Puls",
  "trade.aiConfidence": "KI-Vertrauen · 81%",
  "trade.liveAssets": "Live-Anlagen",
  "trade.risk": "Risiko",
  "trade.riskMedium": "Mittel",
  "trade.riskLow": "Niedrig",
  "trade.riskVeryLow": "Sehr niedrig",
  "trade.investMarketplace": "Investment-Marktplatz",
  "trade.sentinelScore": "Sentinel-Score",
  "trade.closesIn": "Schließt in",
  "trade.eth": "Ethereum",
  "trade.btc": "Bitcoin",
  "trade.usd": "US-Dollar",
  "trade.tol": "TolToken",
  "trade.s1.sector": "Climate-Tech",
  "trade.s2.sector": "Industrielle KI",
  "trade.s3.sector": "Lokale Lebensmittel",
  "wallet.title": "Wallet",
  "wallet.subtitle": "Ihr Geld als lebendiger Strom — kein Tabellenblatt.",
  "wallet.balance": "Guthaben",
  "wallet.in": "Eingehend",
  "wallet.out": "Ausgehend",
  "wallet.aiInsight": "KI-Einblick",
  "wallet.aiInsightBody": "Abonnements ↑ 18% — Kündigen Sie 2 ungenutzte zum Sparen",
  "wallet.smartMove": "Kluger Schachzug",
  "wallet.smartMoveBody": "Verschieben Sie $1.200 zu hoher Rendite · prognostiziert",
  "wallet.privacy": "Privatsphäre",
  "wallet.privacyBody": "Geschützte Zahlungen aktiv",
  "wallet.tokensDesc": "Nutzen Sie Token für Gebührenrabatte, Premium-Funktionen und exklusive Angebote.",
  "wallet.recentFlow": "Neueste Transaktionen",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "ETH Trade",
  "wallet.tx3": "Verda Investment",
  "wallet.tx4": "Atlas Goods Verkauf",
  "wallet.tx5": "Spotify",
  "wallet.kind.shop": "Shop",
  "wallet.kind.trade": "Handeln",
  "wallet.kind.invest": "Investieren",
  "wallet.kind.sell": "Verkaufen",
  "wallet.kind.subscription": "Abonnement",
  "wallet.time.2m": "vor 2 Min.",
  "wallet.time.1h": "vor 1 Std.",
  "wallet.time.3h": "vor 3 Std.",
  "wallet.time.5h": "vor 5 Std.",
  "wallet.time.yesterday": "gestern",
  "sell.tag": "Verkäufermodus · Fokus-Interface",
  "sell.title1": "Verkaufen Sie alles.",
  "sell.title2": "Überall.",
  "sell.subtitle": "Foto hineinziehen. Tolsentinel schreibt das Angebot, legt den Preis fest und findet Käufer.",
  "sell.dropPhoto": "Foto oder Video hierher ziehen",
  "sell.autoGen": "KI generiert automatisch Titel, Beschreibung, Preis & Tags",
  "sell.pickFile": "Datei auswählen",
  "sell.previewLabel": "KI-generierte Angebotsvorschau",
  "sell.previewTitle": "Vintage Leica M3 35mm Kamera — Ausgezeichnet",
  "sell.previewBody": "1958, voll funktionsfähig, original Ledertasche. Automatisch in 12 Sprachen übersetzt.",
  "sell.suggestedPrice": "Empfohlener Preis",
  "sell.profitSim": "Live-Gewinnstimulation",
  "sell.net": "Netto",
  "sell.listPrice": "Listenpreis",
  "sell.platformFee": "Plattformgebühr · 4%",
  "sell.shippingIntl": "Versand (intl)",
  "sell.tokenBonus": "TolToken-Bonus",
  "sell.buyerMatch": "+18% Käufer-Übereinstimmung in 24 Std. mit diesem Preis",
  "sell.logistics": "Logistik",
  "sell.logisticsBody": "3 Versanddienstleister bereit · Abholung in 2 Std. · 184 Käufer in der Nähe",
  "about.kicker": "Über uns",
  "about.title1": "Das intelligente",
  "about.title2": "Wirtschaftsuniversum",
  "about.intro": "TolBuy vereint Handel, Trading und Investment in einem adaptiven Ökosystem — gesteuert von Tolsentinel AI.",
  "about.tolbuyBody": "Die Hauptmarke — ein einheitlicher Marktplatz, auf dem Produkte, Märkte und Kapital fließen.",
  "about.tolsentinelBody": "Die KI-Submarke für Personalisierung, Marktsignale und Entscheidungsunterstützung.",
  "about.tmParent": "Muttergesellschaft",
  "about.tmBody1": "TolBuy ist",
  "about.tmBody2": "ein Unternehmen der TM Group",
  "about.tmBody3": ". Die TM Group ist die Mutterorganisation hinter TolBuy und Tolsentinel AI.",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.tmCompany": "Ein Unternehmen der TM Group",
  "orb.commandCenter": "Kommandozentrale",
  "orb.commandCenterTitle": "Kommandozentrale",
  "orb.commandCenterBody": "Das Tolsentinel AI-Kommandozentrum befindet sich in Entwicklung. Der intelligente Agent wird bald integriert, um Echtzeit-Markteinblicke, Trading-Empfehlungen und personalisierte wirtschaftliche Orientierung bereitzustellen.",
  "orb.commandCenterComing": "🚀 Kommt mit der vollständigen Integration des KI-Agents",
  "orb.open": "Tolsentinel AI öffnen",
  "orb.mode.calm": "Überwachung",
  "orb.mode.alert": "Neue Erkenntnis",
  "orb.mode.opportunity": "Gelegenheit",
  "orb.mode.risk": "Risiko erkannt",
  "orb.i1": "Vintage-Kameras legen in Ihrer Region um +24% zu. Listung lohnt sich.",
  "orb.i2": "ETH-Unterstützungsniveau nähert sich.",
  "orb.i3": "Abonnementsausgaben in diesem Monat um 18% gestiegen.",
  "orb.i4": "Portfolio ausgeglichen. Tolsentinel überwacht 1.420 Signale.",
  "orb.i5": "Verkäufer 'Atlas Goods' hat +98% Vertrauen — Großhandels-Treffer gefunden.",
  "nf.title": "Verloren im Wirtschaftsuniversum",
  "nf.body": "Diese Dimension existiert nicht. Tolsentinel kann Sie zurückführen.",
  "nf.return": "Zurück zum Feed"
};
const zh = {
  "nav.feed": "动态",
  "nav.shop": "商店",
  "nav.trade": "交易",
  "nav.sell": "出售",
  "nav.wallet": "钱包",
  "top.tolTokens": "TolTokens 代币",
  "top.premium": "高级版",
  "top.language": "语言",
  "common.addToCart": "加入购物车",
  "common.buy": "购买",
  "common.sell": "出售",
  "common.send": "发送",
  "common.redeem": "兑换",
  "common.earnMore": "赚取更多",
  "common.invest": "投资",
  "common.details": "详情",
  "common.actNow": "立即行动",
  "common.dimension": "维度",
  "feed.live": "Tolsentinel · 实况",
  "feed.heroTitle1": "您不仅是在浏览一家商店。",
  "feed.heroTitle2": "您正在驾驭一个经济体。",
  "feed.heroSubtitle": "在一个自适应界面中进行购物、交易和投资。Tolsentinel AI 监控每一个信号并呈现关键内容。",
  "feed.enterUniverse": "进入宇宙",
  "feed.talkToTolsentinel": "与 Tolsentinel 对话",
  "feed.stat.netWorth": "净资产",
  "feed.stat.todayProfit": "今日利润",
  "feed.stat.tolTokens": "TolTokens",
  "feed.stat.riskIndex": "风险指数",
  "feed.stat.riskLow": "低",
  "feed.stat.stable": "稳定",
  "feed.yourAiFeed": "您的 AI 动态",
  "feed.adaptive": "自适应 · 从每次点击中学习",
  "feed.tab.forYou": "为您推荐",
  "feed.tab.deals": "优惠",
  "feed.tab.trades": "交易",
  "feed.tab.insights": "洞察",
  "feed.item1.title": "Tolsentinel 检测到了一个模式",
  "feed.item1.body": "您最近的 6 笔交易集中在科技 ETF。本周清洁能源的多元化机会上涨了 +14%。",
  "feed.item1.cta": "探索配置",
  "feed.item2.title": "Aurora Studio 头戴式耳机",
  "feed.item2.body": "空间音频 · 信任度 98% · 需求趋势 +37%",
  "feed.item2.fairness": "低于市场价 $26",
  "feed.item2.cta": "快速购买",
  "feed.item3.title": "ETH/USD",
  "feed.item3.body": "支撑位守在 $3,420。AI 置信度：76%。",
  "feed.item3.cta": "开仓",
  "feed.item4.title": "批发匹配",
  "feed.item4.body": "伊斯坦布尔的 12 家认证供应商与您保存的查询“有机棉”相匹配。",
  "feed.item4.cta": "查看匹配",
  "feed.item5.title": "开支监测",
  "feed.item5.body": "订阅费环比增长 +18%。取消 2 个未使用的订阅可每月节省 $34。",
  "feed.item5.cta": "优化",
  "feed.item6.title": "初创公司聚焦：Verda",
  "feed.item6.body": "气候技术，A 轮融资。Sentinel 评分 8.2/10。",
  "feed.item6.delta": "将在 6 天后关闭",
  "feed.item6.cta": "阅读简报",
  "feed.tokensLevel": "TolTokens · 经济等级 4",
  "feed.toNextRank": "/ 2,500 距离下一等级",
  "feed.premiumTag": "Tolsentinel AI 高级版",
  "feed.premiumTitle": "预测市场。优化利润。保护 privacy。",
  "feed.premiumF1": "预测性市场洞察",
  "feed.premiumF2": "自动化交易助手",
  "feed.premiumF3": "智能库存与利润优化",
  "feed.premiumF4": "增强的隐私控制",
  "feed.monthly": "每月",
  "feed.perMonth": "/月",
  "feed.activatePremium": "激活高级版",
  "feed.cancelAnytime": "随时取消 · 使用 TolTokens 支付可享 10% 优惠",
  "shop.title": "商店",
  "shop.subtitle": "每个产品都经过预先分析。点击展开 AI 洞察。",
  "shop.searchPlaceholder": "咨询 Tolsentinel：'150 美元以下最好的皮质背包'",
  "shop.aiSearch": "AI 搜索",
  "shop.trust": "信任度",
  "shop.fairBelow": "公道 · 低于市场价",
  "shop.aboveMarket": "高于市场价",
  "shop.marketPrice": "市场价格",
  "shop.fairness": "公平度",
  "shop.demand": "需求",
  "shop.demandHigh": "高",
  "shop.seller": "卖家",
  "shop.p1": "Aurora 耳机",
  "shop.p2": "Nomad 皮质包",
  "shop.p3": "Solstice 手表 v3",
  "shop.p4": "Atlas 35mm 相机",
  "shop.p5": "Lumen 台灯",
  "shop.p6": "Helix 运动鞋",
  "trade.title": "交易与投资",
  "trade.subtitle": "无需复杂的图表。AI 为您解读每一个市场信号。",
  "trade.portfolioPulse": "投资组合脉搏",
  "trade.aiConfidence": "AI 置信度 · 81%",
  "trade.liveAssets": "实时资产",
  "trade.risk": "风险",
  "trade.riskMedium": "中",
  "trade.riskLow": "低",
  "trade.riskVeryLow": "极低",
  "trade.investMarketplace": "投资市场",
  "trade.sentinelScore": "Sentinel 评分",
  "trade.closesIn": "关闭剩余时间",
  "trade.eth": "以太坊",
  "trade.btc": "比特币",
  "trade.usd": "美元",
  "trade.tol": "TolToken",
  "trade.s1.sector": "气候技术",
  "trade.s2.sector": "工业人工智能",
  "trade.s3.sector": "本地食品",
  "wallet.title": "钱包",
  "wallet.subtitle": "您的资金如活水流淌 — 而非电子表格。",
  "wallet.balance": "余额",
  "wallet.in": "流入",
  "wallet.out": "流出",
  "wallet.aiInsight": "AI 洞察",
  "wallet.aiInsightBody": "订阅费用 ↑ 18% — 取消 2 个未使用的以节省开支",
  "wallet.smartMove": "明智之举",
  "wallet.smartMoveBody": "将 $1,200 转入高收益账户 · 预计",
  "wallet.privacy": "隐私",
  "wallet.privacyBody": "受保护的支付已激活",
  "wallet.tokensDesc": "使用代币享受费用折扣、高级功能和独家优惠。",
  "wallet.recentFlow": "近期流水",
  "wallet.tx1": "Aurora Studio",
  "wallet.tx2": "ETH 交易",
  "wallet.tx3": "Verda 投资",
  "wallet.tx4": "Atlas Goods 出售",
  "wallet.tx5": "Spotify",
  "wallet.kind.shop": "商店",
  "wallet.kind.trade": "交易",
  "wallet.kind.invest": "投资",
  "wallet.kind.sell": "出售",
  "wallet.kind.subscription": "订阅",
  "wallet.time.2m": "2分钟前",
  "wallet.time.1h": "1小时前",
  "wallet.time.3h": "3小时前",
  "wallet.time.5h": "5小时前",
  "wallet.time.yesterday": "昨天",
  "sell.tag": "卖家模式 · 专注界面",
  "sell.title1": "出售任何东西。",
  "sell.title2": "在任何地方。",
  "sell.subtitle": "拖入照片。Tolsentinel 自动编写商品详情、定价并在数秒内匹配买家。",
  "sell.dropPhoto": "拖放照片或视频",
  "sell.autoGen": "AI 自动生成标题、描述、价格和标签",
  "sell.pickFile": "选择文件",
  "sell.previewLabel": "AI 生成的商品预览",
  "sell.previewTitle": "复古 Leica M3 35mm 相机 — 极佳",
  "sell.previewBody": "1958年产，全机已保养，原装皮套。胶片爱好者理想之选。自动翻译至 12 种语言。",
  "sell.suggestedPrice": "建议价格",
  "sell.profitSim": "实时利润模拟",
  "sell.net": "净得",
  "sell.listPrice": "标价",
  "sell.platformFee": "平台费用 · 4%",
  "sell.shippingIntl": "运输（国际）",
  "sell.tokenBonus": "TolToken 奖励",
  "sell.buyerMatch": "在此价格下，24小时内买家匹配度 +18%",
  "sell.logistics": "物流",
  "sell.logisticsBody": "3 家承运商就绪 · 2小时内取件 · 附近有 184 名买家",
  "about.kicker": "关于",
  "about.title1": "智能的",
  "about.title2": "经济宇宙",
  "about.intro": "TolBuy 将商业、交易和投资统一为一个自适应生态系统 — 由我们的专属经济智能引擎 Tolsentinel AI 引领。",
  "about.tolbuyBody": "主品牌与平台 — 一个统一的市场，产品、市场和资本通过一个智能界面流动。",
  "about.tolsentinelBody": "AI 子品牌，为跨 TolBuy 的每个界面提供个性化、市场信号和决策支持。您经济生活的哨兵。",
  "about.tmParent": "母公司",
  "about.tmBody1": "TolBuy 是",
  "about.tmBody2": "TM Group 旗下公司",
  "about.tmBody3": "。TM Group 是 TolBuy 和 Tolsentinel AI 的母组织，投资于下一代智能经济基础设施。",
  "footer.rights": "保留所有权利。",
  "footer.tmCompany": "TM Group 旗下公司",
  "orb.commandCenter": "指挥中心",
  "orb.open": "打开 Tolsentinel AI",
  "orb.mode.calm": "监控中",
  "orb.mode.alert": "新洞察",
  "orb.mode.opportunity": "机遇",
  "orb.mode.risk": "检测到风险",
  "orb.i1": "您所在地区的复古相机趋势上涨了 +24%。值得上架。",
  "orb.i2": "ETH 支撑位临近。考虑分批买入。",
  "orb.i3": "本月订阅支出增加了 18%。",
  "orb.i4": "投资组合平衡。Tolsentinel 正在监控 1,420 个信号。",
  "orb.i5": "卖家 'Atlas Goods' 信任度达 +98% — 已找到批发匹配。",
  "nf.title": "在经济宇宙中迷失",
  "nf.body": "该维度不存在。Tolsentinel 可以引导您返回。",
  "nf.return": "返回动态"
};
const translations = {
  en,
  ar,
  es,
  fr,
  de,
  zh
};
const STORAGE_KEY = "tolbuy.lang";
const I18nContext = createContext(null);
function metaFor(code) {
  return languages.find((l) => l.code === code) ?? languages[0];
}
function getStoredLang() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = window.localStorage.getItem(
      STORAGE_KEY
    );
    if (stored && languages.some((l) => l.code === stored)) return stored;
    const browser = window.navigator.language?.slice(0, 2);
    if (browser && languages.some((l) => l.code === browser)) return browser;
  } catch {
  }
  return DEFAULT_LANGUAGE;
}
function I18nProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANGUAGE);
  useEffect(() => {
    setLangState(getStoredLang());
  }, []);
  const meta = metaFor(lang);
  const dir = meta.dir;
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  const setLang = useCallback((code) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
    }
  }, []);
  const t = useCallback(
    (key) => {
      const dict = translations[lang] ?? translations[DEFAULT_LANGUAGE];
      return dict[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
    },
    [lang]
  );
  return /* @__PURE__ */ jsx(I18nContext.Provider, { value: { lang, dir, meta, languages, setLang, t }, children });
}
function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      lang: DEFAULT_LANGUAGE,
      dir: "ltr",
      meta: languages[0],
      languages,
      setLang: () => {
      },
      t: (key) => key
    };
  }
  return ctx;
}
function useT() {
  return useI18n().t;
}
function TolsentinelOrb() {
  const t = useT();
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50 flex items-end gap-3", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        "aria-label": t("orb.open"),
        className: "relative h-16 w-16 rounded-full magnetic group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-intelligence/60 via-ai/40 to-profit/40 animate-orb-rotate opacity-90 blur-[1px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-1 rounded-full bg-background/70 backdrop-blur-xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-3 rounded-full bg-intelligence/80 animate-orb-pulse glow-ai" }),
          /* @__PURE__ */ jsx(Sparkles, { className: "absolute inset-0 m-auto h-5 w-5 text-foreground" })
        ]
      }
    ) }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[60] bg-background/80 backdrop-blur-2xl animate-float-up", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-full p-6 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-10 w-10 rounded-full", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-intelligence via-ai to-profit animate-orb-rotate" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-1 rounded-full bg-background" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-3 rounded-full bg-ai animate-orb-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Tolsentinel AI" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display", children: t("orb.commandCenter") })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen(false),
            className: "glass rounded-full p-2 magnetic",
            children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center glass holo-border rounded-2xl p-8 md:p-12", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center h-16 w-16 rounded-full bg-ai/20 mb-4 mx-auto", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-8 w-8 text-ai" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: t("orb.commandCenterTitle") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: t("orb.commandCenterBody") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground/60", children: t("orb.commandCenterComing") })
      ] }) })
    ] }) })
  ] });
}
const items = [
  { to: "/", labelKey: "nav.feed", icon: Home },
  { to: "/shop", labelKey: "nav.shop", icon: ShoppingBag },
  { to: "/trade", labelKey: "nav.trade", icon: TrendingUp },
  { to: "/sell", labelKey: "nav.sell", icon: Store },
  { to: "/wallet", labelKey: "nav.wallet", icon: Wallet }
];
function DimensionNav() {
  const t = useT();
  const path = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsx("nav", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-strong holo-border rounded-full p-1.5 flex items-center gap-1", children: items.map((it) => {
    const active = path === it.to;
    const Icon = it.icon;
    return /* @__PURE__ */ jsxs(
      Link,
      {
        to: it.to,
        className: `relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm magnetic transition-colors ${active ? "text-background" : "text-foreground/70 hover:text-foreground"}`,
        children: [
          active && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-intelligence to-ai glow-intelligence" }),
          /* @__PURE__ */ jsx(Icon, { className: "relative h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "relative hidden sm:inline font-medium", children: t(it.labelKey) })
        ]
      },
      it.to
    );
  }) });
}
const logoSrc = "/assets/tolbuy-logo-Cze51Uyc.svg";
function Logo({
  size = 28,
  withWordmark = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-2 ${className}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: logoSrc,
        alt: "TolBuy logo",
        width: size,
        height: size,
        className: "object-contain drop-shadow-[0_0_12px_oklch(0.55_0.18_245/0.45)]",
        style: { width: size, height: size }
      }
    ),
    withWordmark && /* @__PURE__ */ jsxs("span", { className: "font-display font-bold tracking-tight text-lg", children: [
      "Tol",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Buy" })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function LanguageSelector() {
  const { lang, meta, languages: languages2, setLang } = useI18n();
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex items-center gap-1.5 glass magnetic rounded-full px-2.5 sm:px-3 py-1.5 text-xs",
        "aria-label": "Select language",
        children: [
          /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-intelligence" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-medium", children: meta.nativeName }),
          /* @__PURE__ */ jsx("span", { className: "sm:hidden font-medium uppercase", children: meta.code })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "min-w-[11rem] glass-strong", children: languages2.map((l) => /* @__PURE__ */ jsxs(
      DropdownMenuItem,
      {
        onClick: () => setLang(l.code),
        className: cn(
          "flex items-center gap-2 cursor-pointer",
          l.code === lang && "bg-accent/60"
        ),
        dir: l.dir,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: l.flag }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 font-medium", children: l.nativeName }),
          l.code === lang && /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-profit" })
        ]
      },
      l.code
    )) })
  ] });
}
function TopBar() {
  const t = useT();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-30 glass border-b", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 h-14 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "group", children: /* @__PURE__ */ jsx(Logo, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ jsx(Coins, { className: "h-3.5 w-3.5 text-profit" }),
        /* @__PURE__ */ jsx("span", { className: "tabular-nums font-medium", children: "1,847" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: t("top.tolTokens") })
      ] }),
      /* @__PURE__ */ jsx(LanguageSelector, {}),
      /* @__PURE__ */ jsx("button", { className: "text-xs glass magnetic rounded-full px-3 py-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-gradient-ai font-semibold", children: t("top.premium") }) }),
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-to-br from-intelligence to-ai shrink-0" })
    ] })
  ] }) });
}
const tmLogo = "/assets/tm-group-logo-XFt7XWEC.png";
function Footer() {
  const t = useT();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " TolBuy. ",
      t("footer.rights")
    ] }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/about",
        className: "flex items-center gap-2 magnetic opacity-80 hover:opacity-100",
        "aria-label": t("footer.tmCompany"),
        children: [
          /* @__PURE__ */ jsx("img", { src: tmLogo, alt: "TM Group", className: "h-5 w-auto opacity-90" }),
          /* @__PURE__ */ jsx("span", { children: t("footer.tmCompany") })
        ]
      }
    )
  ] }) });
}
function NotFoundComponent() {
  const t = useT();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient-ai", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: t("nf.title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("nf.body") }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "glass holo-border rounded-full px-5 py-2.5 text-sm magnetic inline-block",
        children: t("nf.return")
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TolBuy — The Intelligent Economic Universe" },
      {
        name: "description",
        content: "TolBuy unifies commerce, trading, and investing into one AI-native ecosystem powered by Tolsentinel AI."
      },
      {
        property: "og:title",
        content: "TolBuy — The Intelligent Economic Universe"
      },
      {
        property: "og:description",
        content: "Shop, trade, invest and grow with Tolsentinel AI as your personal economic assistant."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-dvh", children: [
        /* @__PURE__ */ jsx(TopBar, {}),
        /* @__PURE__ */ jsx("main", { className: "pb-12", children }),
        /* @__PURE__ */ jsx(Footer, {}),
        /* @__PURE__ */ jsx(DimensionNav, {}),
        /* @__PURE__ */ jsx(TolsentinelOrb, {})
      ] }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const $$splitComponentImporter$6 = () => import("./wallet-vnw7A1Ul.js");
const Route$6 = createFileRoute("/wallet")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Wallet — TolBuy"
    }, {
      name: "description",
      content: "TolToken wallet demo: earn points, redeem perks, and see fraud flags (placeholder) — stored locally."
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./trade-uZPknqHP.js");
const Route$5 = createFileRoute("/trade")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Trade & Invest — TolBuy"
    }, {
      name: "description",
      content: "Crypto, fiat and startup investments visualized as living nodes — interpreted by Tolsentinel AI."
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./shop-CC3RmPMU.js");
const Route$4 = createFileRoute("/shop")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Shop Dimension — TolBuy"
    }, {
      name: "description",
      content: "Floating product cards with AI insights — fairness, demand and trust scored by Tolsentinel."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./sell-DlPB7fmd.js");
const Route$3 = createFileRoute("/sell")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Sell Mode — TolBuy"
    }, {
      name: "description",
      content: "AI-generated listings, live profit simulation and instant onboarding for sellers — local to global."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./ai-FTXkBITs.js");
const Route$2 = createFileRoute("/ai")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Tolsentinel AI — TolBuy"
    }, {
      name: "description",
      content: "Talk to Tolsentinel AI - Your personal economic assistant for shopping, trading, and investing."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./about-DW8_-mrM.js");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About — TolBuy"
    }, {
      name: "description",
      content: "TolBuy is an AI-native economic universe powered by Tolsentinel AI — a TM Group company unifying commerce, trading, and investing."
    }, {
      property: "og:title",
      content: "About TolBuy — A TM Group Company"
    }, {
      property: "og:description",
      content: "Learn about TolBuy, Tolsentinel AI, and our parent company TM Group."
    }]
  })
});
const $$splitComponentImporter = () => import("./index-D6ZDjj7d.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Feed — TolBuy"
    }, {
      name: "description",
      content: "Your personalized AI economic feed: deals, trades, insights and opportunities curated by Tolsentinel."
    }]
  })
});
const WalletRoute = Route$6.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => Route$7
});
const TradeRoute = Route$5.update({
  id: "/trade",
  path: "/trade",
  getParentRoute: () => Route$7
});
const ShopRoute = Route$4.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$7
});
const SellRoute = Route$3.update({
  id: "/sell",
  path: "/sell",
  getParentRoute: () => Route$7
});
const AiRoute = Route$2.update({
  id: "/ai",
  path: "/ai",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AiRoute,
  SellRoute,
  ShopRoute,
  TradeRoute,
  WalletRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({
  error,
  reset
}) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Logo as L,
  cn as c,
  router as r,
  tmLogo as t,
  useT as u
};
