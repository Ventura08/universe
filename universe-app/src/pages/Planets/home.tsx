export function Home (props: any) {
        return (
            <video width="100%" height="100%" preload="auto">
              <source src={props.video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          );
}