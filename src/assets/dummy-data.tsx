import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Smart upload",
    desc: "Drag and drop your assets and let our AI analyze and optimize them for maximum impact across all platforms.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Instant Generation",
    desc: "optimized models deliver output in seconds with great fidelity.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Video Synthesis",
    desc: "Create dynamic short-form videos from your images, perfect for Reels and TikTok.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$10",
    desc: "Try the platform at no cost.",
    credits: 25,
    features: [
      "25 credits",
      "Standard quality",
      "No watermark",
      "Slower generation speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "pro",
    price: "$29",
    desc: "Creators and small teams.",
    credits: 80,
    features: [
      "80 credits",
      "HD quality",
      "No watermark",
      "video generation",
      "Priority  support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "$99",
    desc: "Scale accross teams and agencies.",
    credits: 300,
    features: [
      "300 credits",
      "FHD quality",
      "No watermark",
      "Fast generation speed",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "How does the AI generation work?",
    answer:
      "We leverage state-of-the-art diffusion models trained on millions of product images to blend your products into realistic scences while preserving details, lighting and reflections",
  },
  {
    question: "Do I own the generated images?",
    answer:
      "Yes - you received full commercial right to any images or videos generated on the platform. Used them for ads, ecommerce, social media and more.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes - you can cancel from your dashboard at any time. Your subscription will remain active until the end of the current billing cycle, and you can continue to use any remaining credits until then.",
  },
  {
    question: "What input formats do you support?",
    answer:
      "We support JPEG,PNG and WEBP . Output are hight-resolution PNGs and MP4 optimized for web and social media.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#" },
      { name: "Features", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "FAQ", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
