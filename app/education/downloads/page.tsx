import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download,
  Monitor,
  Wrench,
  Camera,
  LayoutGrid,
  Laptop,
} from "lucide-react";

// Product categories with their PDF files
const downloadCategories = [
  {
    id: "i3-connect",
    title: "Produits i3-CONNECT",
    description: "Écrans interactifs et solutions tactiles i3-CONNECT",
    icon: Monitor,
    products: [
      {
        name: "i3 Touch ELM2",
        file: "/Fiches%20techniques/i3CONNECT_Elm2_ProductBrochure.pdf",
      },
      {
        name: "i3 Touch Ultra 105",
        file: "/Fiches%20techniques/FT_i3TOUCH-ULTRA.pdf",
      },
      {
        name: "i3 Touch V-One",
        file: "/Fiches%20techniques/i3TOUCH%20V-ONE_DataSheet%2020240606_compressed%20(1)%20(1).pdf",
      },
      {
        name: "i3 Touch Aspen 4",
        file: "/Fiches%20techniques/i3CONNECT_Aspen4_ProductBrochure_FR.pdf",
      },
      {
        name: "Écran i3 Sixty 3",
        file: "/Fiches%20techniques/FR_i3SIXTY3_ProductBrochure.pdf",
      },
    ],
  },
  {
    id: "accessoires",
    title: "Accessoires",
    description: "Supports, caméras et accessoires complémentaires",
    icon: Wrench,
    products: [
      {
        name: "Support mobile i3LYFT",
        file: "/Fiches%20techniques/i3LYFT_M-French.pdf",
      },
      {
        name: "i3FLEX (55 & 105 pouces)",
        file: "/Fiches%20techniques/FT-i3FLEX-55&105%20pouce.pdf",
      },
      {
        name: "i3CAMERA Full HD",
        file: "/Fiches%20techniques/FT_i3CAMERA_FHD.pdf",
      },
      {
        name: "i3CAMERA Pro 4K",
        file: "/Fiches%20techniques/FT_i3CAMERA-Pro-4K.pdf",
      },
      {
        name: "i3COMPUTER (OPS)",
        file: "/Fiches%20techniques/FT-OPS%20512%20-%20712%20(1)%20(1).pdf",
      },
      {
        name: "Adaptateurs i3ALLSYNC",
        file: "/Fiches%20techniques/FT-i3ALLSYNC.pdf",
      },
      { name: "i3CAIR", file: "/Fiches%20techniques/FT_i3CAIR.pdf" },
    ],
  },
  {
    id: "ipevo",
    title: "Produits IPEVO",
    description: "Caméras de documents et solutions de vidéoconférence IPEVO",
    icon: Camera,
    products: [
      {
        name: "Vocal Wearable (récepteur vocal)",
        file: "/Fiches%20techniques/IPEVO%20VOCAL%20WEARABLE%20R%C3%A9cepteur%20Vocal%20Vurbo.ai.pdf",
      },
      {
        name: "TOTEM 180 (caméra panoramique)",
        file: "/Fiches%20techniques/Datasheet%20Totem%20180.pdf",
      },
      {
        name: "TOTEM 360 (caméra + haut-parleur)",
        file: "/Fiches%20techniques/Datasheet%20Totem%20360.pdf",
      },
      {
        name: "VC-Z4K (caméra PTZ UHD 4K)",
        file: "/Fiches%20techniques/Cam%C3%A9ra%20PTZ%20IPEVO%20VC-Z4K%20UHD%204K.pdf",
      },
      {
        name: "VC-B4K (barre vidéo UHD 4K)",
        file: "/Fiches%20techniques/IPEVO%20VC-B4K%20Barre%20vid%C3%A9o%20UHD%204K.pdf",
      },
      {
        name: "P2V ULTRA (caméra pour objets)",
        file: "/Fiches%20techniques/IPEVO%20P2V%20ULTRA%20OBJECT%20CAMERA%20FULL%20PACK.pdf",
      },
      {
        name: "VZ-R double mode HDMI/USB 8MP",
        file: "/Fiches%20techniques/Datasheet%20VZ-R%20HDMI-USB%20DUAL%20MODE%208MP.pdf",
      },
      {
        name: "VZ-R ULTRA (caméra de documents)",
        file: "/Fiches%20techniques/Datasheet%20VZ-R%2013MP%20HDMI-USB%20DUAL%20MODE%208MP.pdf",
      },
      {
        name: "VZ-X ULTRA",
        file: "/Fiches%20techniques/IPEVO%20VZ-X%20ULTRA%20Cam%C3%A9ra%20de%20documents%2013%20MP%20sans%20fil,%20HDMI%20et%20USB_.pdf",
      },
      {
        name: "VZ-X sans fil HDMI/USB",
        file: "/Fiches%20techniques/Datasheet%20VZ-X_HDMI_USB.pdf",
      },
      {
        name: "IPEVO Vocal Hub",
        file: "/Fiches%20techniques/Ipevo Vocal Hub.pdf",
      },
      { name: "IPEVO Vocal", file: "/Fiches%20techniques/Ipevo Vocal.pdf" },
    ],
  },
  {
    id: "vanerum",
    title: "VANERUM",
    description: "Tableaux et mobiliers pour espaces collaboratifs",
    icon: LayoutGrid,
    products: [
      {
        name: "Tableaux mobiles coulissants",
        file: "/Fiches%20techniques/FT%20TABLEAU%20BLANC%20COULISSANT.pdf",
      },
    ],
  },

  {
    id: "ACER",
    title: "ACER",
    description: "Ordinateurs portables et solutions informatiques ACER",
    icon: Laptop,
    products: [
      {
        name: "Chromebook",
        file: "/Fiches%20techniques/ACER-Chromebook-Spin-511-R756T-TCO-C7ZA_Noir_NX.KEBEF.003.pdf",
      },
    ],
  },
];

export const metadata = {
  title: "Téléchargements - Focus M",
  description: "Téléchargez les fiches techniques et manuels produits Focus M",
};

export default function DownloadsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Téléchargements &{" "}
              <span className="text-[#C52133]">Ressources</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Accédez aux fiches techniques de tous nos produits. Téléchargez
              les documentations PDF pour en savoir plus sur nos solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#162030]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {downloadCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-gray-50 dark:bg-[#1e293b] rounded-2xl p-6 md:p-8 border border-border dark:border-[#22304a]"
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#fef2f2] dark:bg-[#C52133]/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-[#C52133]" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground text-sm md:text-base mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.products.map((product, index) =>
                      product.file ? (
                        <a
                          key={index}
                          href={product.file}
                          download
                          className="
                            flex items-center justify-start h-auto py-3 px-4 text-left
                            bg-white dark:bg-[#162030] 
                            border border-border dark:border-[#22304a]
                            hover:border-[#C52133] hover:text-[#C52133]
                            transition-all duration-200 rounded-lg
                            text-foreground
                          "
                        >
                          <Download className="h-4 w-4 mr-3 flex-shrink-0 text-[#C52133]" />
                          <span className="text-sm font-medium truncate">
                            {product.name}
                          </span>
                        </a>
                      ) : (
                        <div
                          key={index}
                          className="
                            flex items-center justify-start h-auto py-3 px-4 text-left
                            bg-white dark:bg-[#162030] 
                            border border-border dark:border-[#22304a]
                            rounded-lg opacity-60 cursor-not-allowed
                          "
                        >
                          <Download className="h-4 w-4 mr-3 flex-shrink-0 text-muted-foreground" />
                          <span className="text-sm font-medium truncate text-muted-foreground">
                            {product.name}
                          </span>
                          <span className="ml-auto text-xs text-muted-foreground">
                            Bientôt
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Besoin d'informations supplémentaires ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous
            accompagner dans votre projet.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#C52133] hover:bg-[#991b1b] text-white"
          >
            <Link href="/education/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
