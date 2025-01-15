import Image from "next/image";

const featuredProject = [
  {
    id: 1,
    src: "/chagui.jpg?height=256&width=384&text=Project+",
    alt: "Project",
  },
  {
    id: 2,
    src: "/fedi_workshop.jpg?height=256&width=384&text=Project+",
    alt: "Project",
  },
  {
    id: 3,
    src: "/bav+micro.jpg?height=256&width=384&text=Project+",
    alt: "Project",
  },
  {
    id: 4,
    src: "/bav_khouh.jpg?height=256&width=384&text=Project+",
    alt: "Project",
  },
];

export function FeaturedProject() {
  return (
    <section id="portfolio" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProject.map((item, index) => (
          <div key={index} className="relative h-64">
            <Image
              src={`${item.src}+${index}`}
              alt={`${item.alt}+${item}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
