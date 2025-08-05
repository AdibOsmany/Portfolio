import CardModal from "./cardModal";
type JsonItem = {
    name: string;
    position: string;
    startTime: string;
    endTime: string | null;
    tools: string[];
    description: string;
    picture: string | null;
    video: string | null;
};
export default function PageInfo({
    title, data
}: {
    title: String;
    data: JsonItem[];
}) {


    return (
        <>



            <section className="p-6">
                <h2 className="text-3xl font-bold text-white text-center mb-10 drop-shadow-[0_1px_0_black] ">
                    {title}
                </h2>

                <CardModal data={data} />
            </section>
        </>
    );
};
