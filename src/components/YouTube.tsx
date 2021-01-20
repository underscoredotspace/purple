interface YouTubeProps {
    videoId: string
    title: string
}

export const YouTube: React.FC<YouTubeProps> = ({ videoId, title }) => {
    const style = {
        maxWidth: "600px",
        maxHeight: "340px",
        width: "100%",
        height: "64vw",
    }

    if (!videoId) {
        return (
            <div
                style={{
                    ...style,
                    margin: "0 auto",
                    backgroundColor: "black",
                }}
            />
        )
    }

    return (
        <div style={{ ...style }}>
            <iframe
                title={title}
                style={style}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?iv_load_policy=3&fs=0&disablekb=1`}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )
}
