import {CircularRevealHeading} from "@/components/ui/circular-reveal-heading";
// Note: *When you hover on text it takes some time to load image*
 const items = [
        {
            text: "STRATEGY",
            image: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkceCYjHtyWSduj04chzxgP3pt1Dvo8KfCsHnwk"
        },
        {
            text: "DESIGN",
            image: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcZY3vRlCe5wpMsRmKntGfIu4E6OSxhgzL3kU1"
        },
        {
            text: "GROWTH",
            image: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcz9VsoNLlt5AKuj9HqWQm3NeDUywcLSxB6Yo1"
        },
        {
            text: "INNOVATION",
            image: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcypc1wWQBS4VNPtfqkpIhO7M6XUva5TzWomdZ"
        }
    ];

export function MediumCircularRevealHeadingDemo() {
    return (
        <div className="p-16  min-h-screen flex items-center justify-center">
            <CircularRevealHeading
                items={items}
                centerText={
                    <div className="text-xl font-bold text-[#444444]">
                        MISHRA HUB
                    </div>
                }
                size="md"
            />
        </div>
    );
}

export function LargeCircularRevealHeadingDemo() {
    return (
        <div className="p-16  min-h-screen flex items-center justify-center">
            <CircularRevealHeading
                items={items}
                centerText={
                    <div className="text-2xl font-bold text-[#444444]">
                        MISHRA HUB
                    </div>
                }
                size="lg"
            />
        </div>
    );
}

export function SmallCircularRevealHeadingDemo() {
    return (
        <div className="p-16  min-h-screen flex items-center justify-center">
            <CircularRevealHeading
                items={items}
                centerText={
                    <div className="text-sm font-bold text-[#444444]">
                        MISHRA HUB
                    </div>
                }
                size="sm"
            />
        </div>
    );
}
