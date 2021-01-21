import { AchievementTable, Card } from "components"
import { SectionTitle } from "components/primitives"
import React from "react"

export interface Achievement {
    name: string
    colour: string
    desc: string
    roles: {
        role: string
        desc: string
    }[]
}

export const rdoAchievements = {
    name: "GPAD Red Dead Event Winners",
    desc: "Roles associated with winners for RDO in-game Crew Events",
    colour: "eventcontest",
    roles: [
        { role: "Django", desc: "Win a quickest draw event" },
        { role: "Bare Knuckles", desc: "Win a fight club event" },
        { role: "Bill Miner", desc: "Win a wagon racing event" },
        { role: "Davy Crockett", desc: "Win a weekly challenge" },
    ],
}

const achievements: Achievement[] = [
    {
        name: "GTA Online",
        desc: "Roles associated with milestones earned in GTA Online",
        colour: "achievements",
        roles: [
            {
                role: "Warren Buffett",
                desc: "Earn 1 billion dollars overall in online",
            },
            { role: "I'm a business, man", desc: "Own every business in-game" },
            {
                role: "Ronnie Biggs",
                desc: "Complete the criminal mastermind challenge",
            },
            {
                role: "Jay Leno",
                desc: "Own every I/E vehicle collection at once",
            },
            { role: "Fedex VIP", desc: "Own every special crate item at once" },
            {
                role: "Beached Whale",
                desc: "Get a tugboat on top of Mount Chiliad",
            },
            {
                role: "Golden Bullet",
                desc: "Earn all gold trophies in bunker gun range",
            },
            { role: "Top Gun", desc: "Earn all gold in flight school" },
            {
                role: "Wolf of LS",
                desc: "1000 crate missions to earn trophy in CEO office",
            },
            { role: "Chop Shop", desc: "Own all modified bennys vehicles" },
            { role: "Road Warrior", desc: "Own all arena apocalypse vehicles" },
            {
                role: "Wheels of Terror",
                desc: "Own all arena nightmare vehicles",
            },
            {
                role: "Back to the Future",
                desc: "Own all arena future shock vehicles",
            },
            {
                role: "Bruce Wayne",
                desc:
                    "Own all special I/E vehicles, Ruiner2k, Phantom Wedge, etc",
            },
            { role: "Santa's Elf", desc: "Achieve MC contribution 9,999" },
            {
                role: "Joe Girard",
                desc: "Sell 1,000 cars with Import/Export business",
            },
            { role: "Level 100 🥇", desc: "Reach 100 in-game rank" },
            { role: "Level 300 🥉", desc: "Reach 300 in-game rank" },
            { role: "Level 500 🎖", desc: "Reach 500 in-game rank" },
            { role: "Level 1000 🏆", desc: "Reach 1000 in-game rank" },
            { role: "Mad Scientist", desc: "Unlock all bunker research" },
        ],
    },
    {
        name: "Red Dead Online",
        desc: "Roles associated with milestones earned in Red Dead Online",
        colour: "achievements",
        roles: [
            {
                role: "Magpie",
                desc: "Have 10 of every collectible in your inventory at once",
            },
            { role: "Big Spender", desc: "500 gold and 100k cash at once" },
            { role: "Rank 100", desc: "Reach 100 in-game rank" },
            { role: "Rank 200", desc: "Reach 200 in-game rank" },
            { role: "Rank 300", desc: "Reach 300 in-game rank" },
            { role: "Rank 400", desc: "Reach 400 in-game rank" },
            { role: "Jack of All Trades", desc: "Level 20 all roles" },
            { role: "Animal Friend", desc: "Own all level 20 role horses" },
            {
                role: "Sharpshooter",
                desc: "Gold award for all combat and sharpshooter awards",
            },
            {
                role: "King of the West",
                desc: "Every single in game gold award",
            },
            { role: "Ability Master", desc: "All ability cards maxed out" },
            {
                role: "Naturalist Expert",
                desc: "100% completed naturalist compendium",
            },
            { role: "Beans", desc: "1000 camp stews made" },
            {
                role: "Bob Younger",
                desc:
                    "Complete all online story missions/moonshine missions/stranger missions",
            },
            { role: "Gun Nut", desc: "Owning all catalogue weapons" },
            { role: "Bare Knuckles", desc: "Win a Fight Club event" },
            { role: "Bill Miner", desc: "Win a Wagon Racing event" },
            { role: "Django", desc: "Win a Quick Draw event" },
        ],
    },
    {
        name: "GPAD GTA Event Winners",
        desc: "Roles associated with winners for GTA in-game Crew Events",
        colour: "eventcontest",
        roles: [
            { role: "Prettiest Pistons", desc: "Win a car meet or top gear" },
            { role: "Fast & Furious", desc: "Win a crew race event" },
            {
                role: "Poppin' Muscle",
                desc: "Win a muscle car wheelie contest",
            },
            { role: "Ninja Warrior", desc: "Win a triathlon" },
            { role: "Golden Gloves", desc: "Win a fight club event" },
            {
                role: "👑 Golden Gloves 👑",
                desc: "Win a Golden Glove vs Golden Glove only fight club",
            },
            { role: "Fashion Police", desc: "Win a fashion show event" },
            {
                role: "Where's Waldo?",
                desc:
                    "Achieve the longest time hidden in the current season of Photo Hunt",
            },
            {
                role: "Sherlock Holmes",
                desc:
                    "Whoever finds the most hidden players in the current season of Photo Hunt",
            },
            { role: "Speed Racer", desc: "Win a time trial event" },
        ],
    },
    { ...rdoAchievements },
    {
        name: "Photo/Video Contest Winner",
        desc:
            "Exclusive roles given to people who win our weekly themed contests on Discord",
        colour: "discordcontest",
        roles: [
            { role: "Moby Dick", desc: "Casino heist theme" },
            { role: "Cloud 9", desc: "Aviation theme" },
            { role: "Sucker Punch", desc: "Fist fight theme" },
            { role: "Dr. Dolittle", desc: "IRL pets or Peyote Plants theme" },
            { role: "AquaMan", desc: "Underwater theme" },
            { role: "Kodak Moment", desc: "Best photo from any video game" },
            { role: "Gobble Gobble", desc: "Thanksgiving theme" },
            { role: "New Me", desc: "New Years theme" },
            { role: "Understudy", desc: "Movie/tv show theme" },
            { role: "Baywatch", desc: "Beach theme" },
            { role: "🍑", desc: "Valentine’s day theme" },
            { role: "Meme Lord/Lady", desc: "Meme theme" },
            { role: "Krusty the 🤡", desc: "April fools day theme" },
            { role: "Collecting Dust", desc: "Garage theme" },
            { role: "Felix Jumper", desc: "Airplane skydiving theme" },
            { role: "🍀 Leprechaun 🍀", desc: "St. Patrick’s Day theme" },
            { role: "Covid Task Force", desc: "Social distancing theme" },
            { role: "Cat & Mouse", desc: "Tom and Jerry theme" },
            { role: "9-1-1", desc: "Essential workers theme" },
            { role: "‘Merica", desc: "4th of July theme" },
            { role: "Atomic Blast", desc: "Atomizer theme" },
            { role: "Prettiest Pistons", desc: "Favorite car theme" },
        ],
    },
    {
        name: "Rockstar Editor Contest Video Winner",
        desc:
            "Competitions using rockstar editing, where crew members can showcase their content creation skills",
        colour: "discordcontest",
        roles: [
            { role: "Tokyo Drifter🏎", desc: "Showcase your favorite car" },
            {
                role: "Director's Cut🎬",
                desc: "Winners for all future competitions",
            },
        ],
    },
]

const Achievements: React.FC = () => {
    return (
        <>
            <p>Discord roles you can earn for in-game or crew achievements</p>
            {achievements.map((a, ndx) => (
                <Card padding key={`achievements-${ndx}`}>
                    <SectionTitle type="h3">{a.name}</SectionTitle>
                    <p className="pb-4">{a.desc}</p>
                    <AchievementTable tableData={a.roles} colour={a.colour} />
                </Card>
            ))}
        </>
    )
}

export default Achievements
