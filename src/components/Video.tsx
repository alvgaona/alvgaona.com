import { AspectRatio } from '@/components/ui/aspect-ratio';
import ReactPlayer from 'react-player/file';

const Video = ({ url, ratio = 4 / 3 }: { url: string; ratio: number }) => (
  <AspectRatio ratio={ratio}>
    <ReactPlayer
      url={url}
      controls={true}
      loop={true}
      playing={true}
      width="100%"
      height="100%"
    />
  </AspectRatio>
);

export default Video;
