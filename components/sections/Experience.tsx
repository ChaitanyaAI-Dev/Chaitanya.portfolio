import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-fade py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Experience"
            title="Professional Experience"
            description="Professional experience across applied AI platforms, LLM systems, backend services, and regulated pharmaceutical software."
          />

          <div className="space-y-8">
            {portfolioData.experience.map((role) => (
              <article
                key={`${role.company}-${role.role}`}
                className="glass-panel soft-shadow rounded-[2rem] p-7 md:p-9"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {role.role}
                    </h3>
                    <p className="mt-2 text-base text-white/70">
                      {role.company} — {role.location}
                    </p>
                  </div>
                  <p className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75">
                    {role.dates}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  <span className="font-semibold text-white/75">Tech Stack:</span>{" "}
                  {role.techStack}
                </p>

                {"groups" in role ? (
                  <div className="mt-7 space-y-7">
                    {role.groups??.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-lg font-semibold text-white">
                          {group.title}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                          {group.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
