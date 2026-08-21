import {
  BookOpen,
  ClipboardCheck,
  Award,
  Users,
  Radio,
  Gift,
  Store,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
};

export const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Courses & video lessons",
    description:
      "Structured, expert-led courses and video lessons covering fundamentals to advanced topics — learn at your own pace.",
  },
  {
    icon: ClipboardCheck,
    title: "Practice quizzes",
    description:
      "Reinforce what you learn with quizzes and knowledge checks that turn concepts into confident understanding.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Earn certificates as you complete courses and demonstrate your progress on your learning journey.",
  },
  {
    icon: Store,
    title: "Mentor marketplace",
    description:
      "Discover and learn directly from experienced mentors offering courses and guidance across the platform.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with like-minded learners, exchange ideas, ask questions, and grow together in a supportive community.",
  },
  {
    icon: Radio,
    title: "Live sessions",
    description:
      "Join interactive live sessions with mentors for real-time learning and Q&A.",
    comingSoon: true,
  },
  {
    icon: Gift,
    title: "Refer & earn",
    description:
      "Invite friends and earn referral credits — 1 credit = ₹1 — that you can put toward paid courses.",
  },
  {
    icon: LineChart,
    title: "Practical, applied insights",
    description:
      "Lessons, strategies, and actionable takeaways that bridge theory and real-world practice.",
  },
];

export type Step = { title: string; description: string };

export const steps: Step[] = [
  {
    title: "Sign up",
    description:
      "Create your free account in seconds and set up your learner profile.",
  },
  {
    title: "Learn",
    description:
      "Explore free and paid courses, video lessons, and insights from expert mentors.",
  },
  {
    title: "Practice",
    description:
      "Test yourself with quizzes and apply what you learn in the community.",
  },
  {
    title: "Get certified",
    description:
      "Complete courses, earn certificates, and keep levelling up your knowledge.",
  },
];
