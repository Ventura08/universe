import VideoPlayer from "react-background-video-player";

export function Home(props: any) {
    return (
        <VideoPlayer
            className="video"
            src={props.video}
            autoPlay={true}
            muted={true}
        />
    );
}
