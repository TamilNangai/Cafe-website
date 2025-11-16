function Our({ para , head }) {
    return (
        <>
            <section className="xl:px-2 xl:mt-10 lg:mt-10 md:mt-[70px] mt-[50px]">
                <h1 className="md:mb-3 text-[10px] lg:text-[36px] md:text-[20px] xl:text-[44px] font-[ABeeZee] font-bold text-center text-[#5C2D0B]">{head}</h1>
                <p className="text-[8px] lg:text-[21px] md:text-[15px] xl:text-[28px] font-[Bellefair] text-[#832C2C] text-center xl:mt-10 lg:mt-10 md:mt-5 mt-3">{para}</p>
            </section>
        </>
    );
}
export default Our;