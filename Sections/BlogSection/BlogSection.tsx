import BlogCard from "@/Sections/BlogSection/BlogCard";

export default function BlogSection() {
    return (
        <section id={'blog'} className={'px-4 md:px0 py-8 min-h-fit'}>

            {/*Section Title*/}
            <div className={'text-5xl mb-8'}>Blog</div>

            {/*Blog Cards*/}
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </section>
    )
}