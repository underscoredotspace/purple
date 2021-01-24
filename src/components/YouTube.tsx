interface YouTubeProps {
    videoId: string
    title: string
}

export const YouTube: React.FC<YouTubeProps> = ({ videoId, title }) => (
    <iframe
        title={title}
        className="w-full h-80"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?iv_load_policy=3&fs=0&disablekb=1`}
        frameBorder="0"
        allowFullScreen
    />
)
