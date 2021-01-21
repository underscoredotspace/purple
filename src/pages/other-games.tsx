import { Card } from "components"
import { LazyImage, Pill, Pills, RouteLink, Text } from "components/primitives"
import { env } from "helpers"

const Word: React.FC = ({ children }) => (
    <span className={`bg-white text-black px-2 border-2 border-black screen`}>
        {children}
    </span>
)

interface GameCardProps {
    title: string
    description: string
    pictures: [string, string?]
    games?: string[]
}

const GameCard: React.FC<GameCardProps> = ({
    title,
    description,
    pictures,
    games,
}) => (
    <Card>
        <div className="relative flex flex-row h-48 md:h-64 w-full content z-20 border-b border-gray-700 overflow-hidden">
            {pictures[0] && (
                <LazyImage
                    src={`${env.ASSETS}/640/640__${pictures[0]}`}
                    alt={`${title} screenshot`}
                    className={`object-cover ${
                        pictures.length === 2 ? "w-1/2" : "w-full"
                    }`}
                />
            )}
            {pictures[1] && (
                <LazyImage
                    src={`${env.ASSETS}/640/640__${pictures[1]}`}
                    alt={`${title} screenshot`}
                    className="object-cover w-1/2"
                />
            )}
            <p className="absolute inset-0 flex flex-wrap items-center justify-center md:justify-end text-4xl font-black bg-black bg-opacity-10 content-center px-4">
                {title.split(" ").map((word, i) => (
                    <Word key={`word-${i}`}>{word}</Word>
                ))}
            </p>
        </div>
        <Text padding>{description}</Text>
        <Pills className="px-4">
            {games &&
                games.map((game) => (
                    <Pill
                        className="bg-games text-card"
                        key={`game-${game}`}
                        text={game}
                    />
                ))}
        </Pills>
    </Card>
)

const gameCards: GameCardProps[] = [
    {
        title: "Among Us",
        description:
            "Since this game is massively popular, we're holding weekly events! Yes, red is sus aren't they?",
        pictures: ["games_amongus.jpg"],
    },
    {
        title: "Minecraft",
        description: "We have a steady base of Minecraft players in GPAD.",
        pictures: ["games_minecraft1.jpg", "games_minecraft2.jpg"],
    },
    {
        title: "Call of Duty",
        description:
            'Call of Duty is arguably one of the most popular shooter games. Whether you fancy "running and gunning", "sniping", or even "camping", you can find friends to play with here at GPAD.',
        pictures: ["games_cod1.jpg"],
    },
    {
        title: "Role Playing Games",
        description:
            "You take the role of a protagonist who must face down world-beating odds to save the universe. You meet lots of cool characters, gain new skills and abilities, fight gnarly monsters, and watch an epic story unfold: your story",
        games: ["The Elder Scrolls Online", "Horizon Zero Dawn", "Watchdogs"],
        pictures: ["games_rpg1.jpg", "games_rpg2.jpg"],
    },
    {
        title: "Sports",
        description:
            "Bringing out the competitor in all of us. If you like finessing shots like Mbappe, throwing touchdowns like Patrick Mahomes, driving like a maniac plus scoring goals in Rocket League, or making defenders look silly like Kobe, we have a place for you.",
        games: ["NBA2K", "Rocket League", "FIFA"],
        pictures: ["games_sports2.jpg"],
    },
    {
        title: "Simulation",
        description:
            "Real life not doing it for you? Build a new one on your screen! ",
        games: ["The Sims", "Cities: Skyline", "Flight Simulator"],
        pictures: ["games_simulation2.jpg", "games_simulation1.jpg"],
    },
    {
        title: "Fighting",
        description:
            "Throw hands (or the pointy end of a big sword) at your friends. Just make sure you FINISH THEM!",
        pictures: ["games_fighting1.jpg"],
        games: [
            "Mortal Kombat",
            "Dead or Alive",
            "Soul Caliber",
            "Tekken",
            "Injustice",
            "Street Fighter",
        ],
    },
    {
        title: "Nintendo Switch",
        description:
            "Nintendo are in a league of their own, so we decided they should have their own channel at GPAD",
        pictures: ["games_switch1.jpg", "games_switch2.jpg"],
        games: [
            "Animal Crossing",
            "Pokémon",
            "Super Smash Bros",
            "The Legend of Zelda",
            "Splatoon",
        ],
    },
    {
        title: "Indie",
        description: "",
        pictures: ["games_indie.jpg", "games_indie2.jpg"],
        games: [
            "Fall Guys",
            "We Happy Few",
            "Five Nights at Freddie’s",
            "Sable",
            "Spelunky",
            "Hellblade: Senua’s Sacrifice",
        ],
    },
    {
        title: "Action",
        description:
            "With a primary focus on physical challenge, and usually characterized by fast-paced, intense gameplay that demands speed, mental dexterity and hand-eye coordination.",
        pictures: ["games_action1.jpg", "games_action2.jpg"],
        games: [
            "Resident Evil",
            "Spider-Man",
            "Assassin's Creed",
            "Far Cry",
            "Tomb Raider",
            "Uncharted",
        ],
    },
    {
        title: "Racing",
        description:
            "For those of us who like going fast and not being last, GPAD has plenty of racing players for you to test your driving skills against. Join us if you enjoy racing as much as we do!",
        pictures: ["games_racing2.jpg"],
        games: [
            "Forza",
            "Gran Turismo",
            "Nascar Heat",
            "Need for Speed",
            "The Crew",
        ],
    },
]

const OtherGames: React.FC = () => (
    <>
        <p>
            As well as{" "}
            <RouteLink to="/gta-online" title="Grand Theft Auto" bold>
                Grand Theft Auto
            </RouteLink>{" "}
            and{" "}
            <RouteLink to="/red-dead" title="Red Dead Redemption" bold>
                Red Dead Redemption
            </RouteLink>{" "}
            , we have channels dedicated to popular games, and genre channels
            for chat about the rest.
        </p>
        <p>
            Check out our channels, with some examples of what games we&apos;re
            talking about.
        </p>

        {gameCards.map((card) => (
            <GameCard key={`gamecard-${card.title}`} {...card} />
        ))}
    </>
)

export default OtherGames
