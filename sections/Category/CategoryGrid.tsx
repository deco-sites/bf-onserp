import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Category {
  tag?: string;
  label: string;
  href?: string;
  image?: ImageWidget;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

function Card(
  { tag, label, image, href }: {
    tag?: string;
    label?: string;
    image?: ImageWidget;
    href?: string;
  },
) {
  return (
    <a class="relative bg-neutral-800 flex flex-col gap-4" href={href || "#"}>
      <Image
        src={image || ""}
        alt={label || ""}
        class="w-full h-44 object-scale-down object-right"
        width={200}
        height={200}
      />
      {tag && <div class="badge text-white bg-red-500">{tag}</div>}
      {label &&
        (
          <div
            class={`absolute px-7 lg:px-8 w-full h-full top-0 left-0 flex items-center`}
          >
            <h3 class="text-left text-lg text-neutral-50">{label}</h3>
          </div>
        )}
    </a>
  );
}

function CategoryGrid(props: Props) {
  const id = useId();
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "10% off",
        label: "Feminino",
        href: "/feminino",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        buttonText: "Ver produtos",
      },
    ],
    layout = {
      headerAlignment: "center",
    },
  } = props;

  return (
    <div class="text-white bg-neutral-900">
      <div
        id={id}
        class="container py-8 flex flex-col gap-8 lg:gap-10 lg:py-10"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
          fontSize="Normal"
        />

        <div class="grid lg:grid-cols-3 gap-8">
          {list.map((item) => (
            <Card
              href={item.href}
              image={item.image}
              tag={item.tag}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryGrid;
