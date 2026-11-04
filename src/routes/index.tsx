import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import bussola from "@/assets/bussola.png.asset.json";
import rutePensando from "@/assets/rute-pensando.png.asset.json";
import ruteRobotica from "@/assets/rute-robotica.png.asset.json";

const FORM_URL = "https://forms.gle/m1XK9DDPANNG5Vkr5";
const TITLE = "Quer começar um hobby, mas não sabe por onde começar? | Rota do Fazer";
const DESC =
  "Bate-papo online e gratuito no Google Meet, quinta, 10 de dezembro de 2026, às 19h. Para adultos com mais de 30 anos que querem começar um hobby.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ className = "" }: { className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta ${className}`}
      aria-label="Inscreva-se (abre o formulário em uma nova aba)"
    >
      Inscreva-se <span aria-hidden>→</span>
    </a>
  );
}

function Compass({ className = "" }: { className?: string }) {
  return <img src={bussola.url} alt="" aria-hidden className={className} />;
}

const hobbies = ["Robótica", "Macramê", "Cozinhar", "Ler", "Ouvir música", "Ver um filme", "Cuidar de um jardim"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <img src={logo.url} alt="Rota do Fazer" className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-ink px-5 py-2 font-display text-sm font-bold transition-colors hover:bg-ink hover:text-ink-foreground"
        >
          Inscreva-se
        </a>
      </header>

      {/* Chamada principal */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.1fr_1fr] md:pt-12">
        <div className="min-w-0">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-display text-sm font-bold text-accent-foreground">
            Live gratuita · aberta a todos
          </span>
          <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Quer começar um <span className="text-primary">hobby</span>, mas não sabe por onde começar?
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Um bate-papo acolhedor e prático sobre como encontrar um hobby e dar os primeiros passos.
          </p>
          <dl className="mt-7 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["Quando", "Qui, 10 dez 2026"],
              ["Horário", "19h · 1 hora"],
              ["Onde", "Google Meet"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border-2 border-border bg-card p-3">
                <dt className="text-xs font-bold uppercase tracking-wider text-secondary">{k}</dt>
                <dd className="mt-1 font-display font-bold">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Cta />
            <p className="text-sm text-muted-foreground">Gratuito · Não precisa ter experiência com robótica</p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <Compass className="spin-slow absolute -right-16 -top-16 w-48 opacity-20" />
          <img
            src={rutePensando.url}
            alt="Dona Rute pensando em qual hobby começar"
            className="relative w-full rounded-[2rem] border-4 border-ink shadow-card"
          />
          <p className="absolute -bottom-5 left-4 rotate-[-3deg] rounded-xl bg-secondary px-4 py-2 font-display font-extrabold text-secondary-foreground">
            Criar, errar, rir e repetir
          </p>
        </div>
      </section>

      {/* O que será abordado */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-black sm:text-4xl">O que vamos conversar</h2>
          <p className="mt-4 max-w-2xl opacity-80">
            Como descobrir algo que desperte sua curiosidade, reservar um tempo para algo prazeroso e dar o primeiro
            passo sem complicação. A robótica será o exemplo principal, mas também falaremos de outros caminhos:
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {hobbies.map((h, i) => (
              <li
                key={h}
                className={`rounded-full px-5 py-2 font-display font-bold ${i === 0 ? "bg-primary text-primary-foreground" : "border-2 border-ink-foreground/30"}`}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Para quem é */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="font-display text-3xl font-black sm:text-4xl">Para quem é</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
          {[
            ["Adultos com mais de 30 anos", "Que querem aprender algo novo para se divertir."],
            ["Quem ainda não sabe por onde começar", "Vamos explorar juntos os primeiros passos."],
            ["Sem experiência", "Não é preciso saber nada de robótica."],
            ["Aberto a todos", "Não é necessário assinar ou já fazer parte da Rota do Fazer."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-display text-lg font-extrabold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demonstração */}
      <section className="bg-accent py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <img
            src={ruteRobotica.url}
            alt="Dona Rute experimentando robótica"
            className="mx-auto w-full max-w-md rounded-[2rem] border-4 border-ink shadow-card"
          />
          <div className="min-w-0">
            <h2 className="font-display text-3xl font-black text-accent-foreground sm:text-4xl">
              Demonstração prática (opcional)
            </h2>
            <p className="mt-4 text-lg">
              Vamos mostrar a robótica na prática usando <strong>Tinkercad</strong> e <strong>MakeCode</strong>.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Você pode só assistir ou acompanhar no seu ritmo.",
                "Não é preciso preparar nada antes da live.",
                "O MakeCode não exige cadastro.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Compass className="mt-0.5 h-6 w-6 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quem conduz + como funciona */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-border bg-card p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary">Quem conduz</p>
          <h2 className="mt-2 font-display text-2xl font-black">Alex Martins dos Santos</h2>
          <p className="mt-3 text-muted-foreground">
            Conduz o bate-papo pela Rota do Fazer, uma plataforma de cursos para explorar hobbies.
          </p>
        </div>
        <div className="rounded-3xl border-2 border-border bg-card p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary">Como participar</p>
          <h2 className="mt-2 font-display text-2xl font-black">Online, pelo Google Meet</h2>
          <p className="mt-3 text-muted-foreground">
            Após a inscrição, você recebe por e-mail a confirmação e lembretes. O link do Meet e as instruções de acesso
            serão enviados antes do evento.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
        <Compass className="spin-slow absolute -left-20 -bottom-20 w-72 opacity-15" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-black sm:text-4xl">Garanta sua vaga na live</h2>
          <p className="mt-3 text-lg">Quinta-feira, 10 de dezembro de 2026, às 19h · Gratuito</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-display text-lg font-extrabold text-ink-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ink-foreground"
            aria-label="Inscreva-se (abre o formulário em uma nova aba)"
          >
            Inscreva-se <span aria-hidden>→</span>
          </a>
          <p className="mx-auto mt-6 max-w-xl text-sm opacity-90">
            Os dados informados serão utilizados apenas para a inscrição na live. Enviaremos e-mails de confirmação e
            lembretes sobre o evento.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <img src={logo.url} alt="Rota do Fazer" className="h-20 w-20" />
        <p className="text-sm text-muted-foreground">Rota do Fazer · Criar, errar, rir e repetir</p>
      </footer>
    </div>
  );
}
