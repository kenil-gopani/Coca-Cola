type TextSectionProps = {
    mainText: string;
    secondaryText: string;
    position: string;
    id: string;
};

export function TextSection({
    mainText,
    secondaryText,
    position,
    id,
}: TextSectionProps) {
    return (
        <div
            id={id}
            className={`flex h-screen items-center gap-4 md:p-12 text-[#FFFACD] ${position}`}>
            <div className="w-full xl:w-1/2 max-[1240px]:h-1/2 max-[1240px]:z-[99999] max-[1240px]:backdrop-blur-xl max-[1240px]:px-12 max-[1240px]:py-4">
                <h1 className="capitalize text-[2rem] md:text-[5rem] font-bold mb-8">
                    {mainText}
                </h1>
                <h2 className="text-[1.5rem] leading-10">{secondaryText}</h2>
            </div>
        </div>
    );
}
