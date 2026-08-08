import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-fade py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Projects"
            title="AI Systems & Demos"
            description="Focused systems across RAG, document intelligence, compliance AI, agentic automation, and generative AI workflows."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <div
                key={project.title}
                className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/55">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-base leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {project.github ? (
                    <Button href={project.github} variant="secondary" external>
                      GitHub
                    </Button>
                  ) : null}

                  {project.demo ? (
                    <Button href={project.demo} variant="ghost" external>
                      Demo
                    </Button>
                  ) : null}

                  {!project.github && !project.demo ? (
                    <span className="text-sm text-white/50">
                      Walkthrough available on request
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
