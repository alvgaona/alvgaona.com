import ReactPlayer from 'react-player';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Video = ({ url, ratio = 4 / 3 }: { url: string; ratio: number }) => (
    <AspectRatio ratio={ratio}>
        <ReactPlayer src={url} controls={true} loop={true} playing={true} width="100%" height="100%" />
    </AspectRatio>
);

export default Video;
