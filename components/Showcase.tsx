import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";

const screens = [
  { src: "/screens/profile.jpeg", alt: "Learner profile with progress" },
  { src: "/screens/refer.jpeg", alt: "Refer and earn credits screen" },
  { src: "/screens/more_tab.jpeg", alt: "Explore menu with courses and community" },
  { src: "/screens/settings.jpeg", alt: "Account settings screen" },
  { src: "/screens/help.jpeg", alt: "Help and support screen" },
];

export function Showcase() {
  return (
    <Reveal>
      <div className="mt-14 overflow-x-auto pb-4">
        <div className="flex min-w-max gap-6 px-1">
          {screens.map((s, i) => (
            <PhoneMockup
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={i % 2 === 0 ? 240 : 220}
              className="shrink-0"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
