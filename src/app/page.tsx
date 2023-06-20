const Tech = () => {
  const items: { name: string; desc: string; color: string }[] = [
    {
      name: "macOS",
      desc: "OS of my choice, I feel myself most productive in there",
      color: "rosewater",
    },
    {
      name: "cli",
      desc: "i always look for the cli tools to improve my working routine",
      color: "sapphire",
    },
    {
      name: "nix",
      desc: "deterministic configuration/package management tool",
      color: "blue",
    },
    {
      name: "ansible",
      desc: "automation tool I use daily",
      color: "red",
    },
    {
      name: "nvim/jetbrains",
      desc: "i use neovim and jetbrains products to write code",
      color: "lavender",
    },
  ]

  return (
    <div className="my-10">
      <h2 className="font-bold text-4xl mb-3 text-peach font-caveat">tech</h2>
      <ul className="list-disc list-inside space-y-2 marker:text-peach">
        {items.map(({ name, desc, color }) => {
          return (
            <li key={name}>
              <span className={`text-${color}`}>{name}</span>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">{desc}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <section>
      <h1 className="mb-5 text-4xl font-bold text-peach font-jetbrains">nico mokrinsky</h1>

      <div className="space-y-5">
        <div className="space-x-3">
          <a className="underlined" href="https://github.com/mokrinsky">
            github
          </a>
          <a className="underlined" href="https://discordapp.com/users/145687199294160896">
            discord
          </a>
          <a className="underlined" href="https://t.me/yumi4ka">
            telegram
          </a>
        </div>
        <Tech />
        <div className="my-10">
          <h2 className="font-bold text-4xl mb-3 text-peach font-caveat">security</h2>
          <p className="mb-2">
            if you gonna let me in to your server or send me private encrypted message - here ya go
          </p>
          <ul className="list-disc list-inside space-y-2 marker:text-peach">
            <li>
              <a className="text-mauve underlined" href="https://github.com/mokrinsky.gpg">
                gpg pubkey
              </a>
            </li>
            <li>
              <a className="text-teal underlined" href="https://github.com/mokrinsky.keys">
                ssh pubkey
              </a>
            </li>
          </ul>
        </div>

        <div className="my-10">
          <h2 className="font-bold text-4xl mb-3 text-peach font-caveat">hobbies</h2>
          <ul className="list-disc list-inside space-y-2 marker:text-peach">
            <li>
              <a className="text-green underlined" href="https://open.spotify.com/user/31g3wizn52pdmpnjuhtx5jxka7hq">
                spotify
              </a>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">music is my main source of inspiration</span>
            </li>
            <li>
              <a className="text-lavender underlined" href="https://myanimelist.net/profile/mokrinsky">
                myanimelist
              </a>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">i think i&#39;m certified weeb</span>
            </li>
            <li>
              <a className="text-red underlined" href="https://trakt.tv/users/mokrinsky">
                trakt.tv
              </a>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">i watch a lot of movies and tv series... sometimes</span>
            </li>
            <li>
              <a className="text-sky underlined" href="https://discogs.com/user/mokrinsky">
                discogs.com
              </a>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">i purchased a turntable recently... LP wishlist is here</span>
            </li>
          </ul>
        </div>

        <div className="my-10">
          <h2 className="font-bold text-4xl mb-2 text-peach font-caveat">Infrastructure</h2>
          <p className="mb-2">
            i&#39;m into r/homelab, so here are some links about my infra. if you know me in person - @tg me for more
          </p>
          <ul className="list-disc list-inside space-y-2 marker:text-peach">
            <li>
              <a href="https://mokrinsky.github.io/statuspage" className="underlined">
                status
              </a>
              <span className="mx-2 text-overlay0">-</span>
              <span className="text-overlay0">
                there was a statuspage of my services. now it doesn&#39;t work so I leave it as a placeholder for links
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
