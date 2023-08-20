const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto mt-14 mb-8 md:w-4/12">
            <p className="text-amber-500">---{subHeading}---</p>
            <h2 className="text-3xl border-y-4 py-4 mt-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;