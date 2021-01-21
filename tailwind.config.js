module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        layers: ["base", "components", "utilities"],
        content: ["./src/**/*.tsx"],
        options: {
            safelist: [
                "bg-admin",
                "border-admin",
                "text-admin",
                "bg-mod",
                "border-mod",
                "text-mod",
                "bg-staff",
                "border-staff",
                "text-staff",
                "bg-vet",
                "border-vet",
                "text-vet",
                "bg-admissions",
                "border-admissions",
                "text-admissions",
                "bg-events",
                "border-events",
                "text-events",
                "border-ps",
                "border-xb",
                "text-eventcontest",
                "text-discordcontest",
                "text-achievements",
                "bg-games",
            ],
        },
    },
    theme: {
        extend: {
            colors: {
                discord: "#7289da",
                background: "#202225",
                copy: "#dcddde",
                card: "#36393f",
                admin: "#0067ff",
                mod: "#00f800",
                staff: "#ff8f14",
                ps: "#85e3ff",
                xb: "#a2faa2",
                vet: "#ad0aff",
                admissions: "#ff0697",
                events: "#ff1500",
                sessionmaker: "#ffc26a",
                games: "#eaa683",
                selfassign: "#b88e96",
                achievements: "#83a6ea",
                discordcontest: "#b89d67",
                eventcontest: "#3aa692",
                gpwinner: "#68CAB8",
            },
            opacity: {
                10: "0.10",
                95: "0.95",
            },
            boxShadow: {
                default:
                    "0 3px 3px 0 rgba(0, 0, 0, .5), 0 2px 2px 0 rgba(0, 0, 0, .2)",
                outline: "0 0 1 0 rgba(0,0,0, .5)",
            },
            borderRadius: {
                squircle: "1.5rem",
            },
            gridTemplateColumns: {
                profile: "repeat(auto-fill, minmax(theme('spacing.64'), 1fr))",
            },
            maxHeight: {
                0: "0",
                "1/4": "25vh",
                "1/2": "50vh",
                "3/4": "75vh",
                full: "100%",
            },
            maxWidth: {
                64: "theme('spacing.64')",
            },
        },
    },
    variants: {},
    plugins: [],
}
