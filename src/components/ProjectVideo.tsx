import "./styles/ProjectVideo.css";

const ProjectVideo = ({ src, title }: { src: string; title: string }) => (
  <video className="project-video" controls playsInline preload="metadata" aria-label={`${title} demonstration`} data-cursor="disable" data-lenis-prevent>
    <source src={src} type="video/mp4" />
    Your browser does not support this video. <a href={src}>Download the demo</a>.
  </video>
);

export default ProjectVideo;
