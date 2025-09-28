import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

import { toast } from 'sonner';

const CopyLink = () => {
    const onClick = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => toast('Link has been copied to the clipboard'))
            .catch((error) => {
                console.error(error);
                toast.error('Failed to copy link to the clipboard');
            });
    };

    return (
        <Button
            onClick={onClick}
            className="flex gap-2 rounded-md bg-transparent hover:bg-transparent cursor-pointer text-xs shadow shadow-black active:shadow-none"
            variant="outline"
            size="sm"
        >
            <Link className="h-4 w-4" />
            Copy link
        </Button>
    );
};

export { CopyLink };
