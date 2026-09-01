/**
 * WORK DATA - Centralized image and project records
 *
 * HOW TO ADD A NEW IMAGE:
 * 1. Place your WebP image in: public/work/
 *    Example: public/work/transformer-installation-01.webp
 *
 * 2. Add a new WorkImage entry below:
 *    {
 *      id: "work-001",
 *      src: "/work/transformer-installation-01.webp",
 *      alt: "Technicians installing electrical equipment at industrial site",
 *      caption: "Transformer installation at industrial facility",
 *      tags: ["transformer", "installation", "equipment"],
 *      projectId: "project-001",  // Optional: link to a project
 *      width: 800,
 *      height: 600
 *    }
 *
 * 3. TAGS: One image can have multiple tags. It will appear when filtered by any of its tags.
 *    Available tags: transformer, cubicle-lv, cubicle-mv, electrical, installation,
 *                    equipment, procurement, construction, maintenance, completed, in-progress
 *
 * 4. TO USE AS PROJECT COVER: Set the image id in project.coverImageId
 * 5. TO ASSOCIATE WITH PROJECT: Set projectId to match a project's id
 */

// ===== TAG SYSTEM =====
export const WORK_TAGS = {
  transformer: { slug: "transformer", label: "Transformer" },
  cubicle_lv: { slug: "cubicle-lv", label: "Cubicle LV" },
  cubicle_mv: { slug: "cubicle-mv", label: "Cubicle MV" },
  electrical: { slug: "electrical", label: "Elektrikal" },
  installation: { slug: "installation", label: "Instalasi" },
  equipment: { slug: "equipment", label: "Peralatan" },
  procurement: { slug: "procurement", label: "Pengadaan" },
  construction: { slug: "construction", label: "Konstruksi" },
  maintenance: { slug: "maintenance", label: "Maintenance" },
  completed: { slug: "completed", label: "Completed Work" },
  in_progress: { slug: "in-progress", label: "In Progress" },
} as const;

// Tags to hide from gallery filters (still usable in data, just not shown as filter buttons)
export const HIDDEN_GALLERY_TAGS: WorkTag[] = ["transformer", "maintenance", "in_progress", "completed"];

export type WorkTag = keyof typeof WORK_TAGS;

// ===== TYPESCRIPT TYPES =====
export type WorkImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tags: WorkTag[];
  projectId?: string;
  width?: number;
  height?: number;
  carousel?: boolean; // If true, image appears in homepage carousel
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary?: string;
  location?: string;
  completionDate?: string;
  scope?: string[];
  tags: WorkTag[];
  coverImageId: string;
  imageIds: string[];
  featured?: boolean;
};

// ===== WORK IMAGES =====
// Original carousel images (carousel_1.jpg through carousel_9.jpg)
const originalCarouselImages: WorkImage[] = [
  {
    id: "carousel-001",
    src: "/assets/carousel_1.jpg",
    alt: "Instalasi panel elektrikal proyek 1",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-002",
    src: "/assets/carousel_2.jpg",
    alt: "Instalasi panel elektrikal proyek 2",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-003",
    src: "/assets/carousel_3.jpg",
    alt: "Instalasi panel elektrikal proyek 3",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-004",
    src: "/assets/carousel_4.jpg",
    alt: "Instalasi panel elektrikal proyek 4",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-005",
    src: "/assets/carousel_5.jpg",
    alt: "Instalasi panel elektrikal proyek 5",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-006",
    src: "/assets/carousel_6.jpg",
    alt: "Instalasi panel elektrikal proyek 6",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-007",
    src: "/assets/carousel_7.jpg",
    alt: "Instalasi panel elektrikal proyek 7",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-008",
    src: "/assets/carousel_8.jpg",
    alt: "Instalasi panel elektrikal proyek 8",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
  {
    id: "carousel-009",
    src: "/assets/carousel_9.jpg",
    alt: "Instalasi panel elektrikal proyek 9",
    caption: "Instalasi Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 400,
    height: 300,
    carousel: true,
  },
];

// New work images from IMAGE_VCA files
const newWorkImages: WorkImage[] = [
  {
    id: "work-001",
    src: "/work/IMAGE_VCA_00001.jpg",
    alt: "Deretan panel switchgear Schneider yang telah selesai dipasang dan beroperasi di ruang elektrikal",
    caption: "Panel Switchgear Schneider",
    tags: ["electrical", "equipment", "installation"],
    projectId: "project-001",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-002",
    src: "/work/IMAGE_VCA_00002.jpg",
    alt: "Transformer besar yang diposisikan di dalam ruangan khusus selama proses instalasi",
    caption: "Instalasi Transformer",
    tags: ["equipment", "installation"],
    projectId: "project-002",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-003",
    src: "/work/IMAGE_VCA_00003.jpg",
    alt: "Teknisi sedang melakukan instalasi dan perataan panel distribusi elektrikal",
    caption: "Instalasi Panel Distribusi",
    tags: ["electrical", "installation", "equipment"],
    projectId: "project-001",
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-004",
    src: "/work/IMAGE_VCA_00004.jpg",
    alt: "Teknisi bekerja pada panel switchboard yang baru diposisikan selama instalasi",
    caption: "Pemasangan Panel Switchboard",
    tags: ["electrical", "installation", "equipment"],
    projectId: "project-001",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-005",
    src: "/work/IMAGE_VCA_00005.jpg",
    alt: "Close-up teknisi mengamankan panel elektrikal pada tempatnya",
    caption: "Pengamanan Panel Elektrikal",
    tags: ["electrical", "installation"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-006",
    src: "/work/IMAGE_VCA_00006.jpg",
    alt: "Teknisi bekerja pada kabel elektrikal yang terbuka di lokasi konstruksi",
    caption: "Pekerjaan Kabel Elektrikal",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-007",
    src: "/work/IMAGE_VCA_00007.jpg",
    alt: "Panel elektrikal dan penopang kabel overhead selama instalasi berlangsung",
    caption: "Instalasi Panel dan Kabel Overhead",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-008",
    src: "/work/IMAGE_VCA_00008.jpg",
    alt: "Deretan panel distribusi elektrikal yang baru selesai dipasang",
    caption: "Panel Distribusi Elektrikal",
    tags: ["electrical", "equipment", "installation"],
    projectId: "project-001",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-009",
    src: "/work/IMAGE_VCA_00009.jpg",
    alt: "Teknisi memasang conduit elektrikal permukaan dan titik-titik kabel",
    caption: "Instalasi Conduit dan Kabel",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-010",
    src: "/work/IMAGE_VCA_00010.jpg",
    alt: "Teknisi menarik dan menyambungkan kabel elektrikal melalui conduit plafon",
    caption: "Penarikan Kabel Plafon",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-011",
    src: "/work/IMAGE_VCA_00011.jpg",
    alt: "Teknisi memasang conduit elektrikal overhead di dalam bangunan yang sedang dibangun",
    caption: "Instalasi Conduit Overhead",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-012",
    src: "/work/IMAGE_VCA_00012.jpg",
    alt: "Teknisi memotong dan memasang penopang metal overhead selama pekerjaan renovasi",
    caption: "Pemasangan Penopang Metal",
    tags: ["construction", "installation"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-013",
    src: "/work/IMAGE_VCA_00013.jpg",
    alt: "Dua teknisi merakit cable tray metal berbentuk lengkung",
    caption: "Perakitan Cable Tray",
    tags: ["construction", "installation", "equipment"],
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-014",
    src: "/work/IMAGE_VCA_00014.jpg",
    alt: "Teknisi mengencangkan bagian-bagian cable tray metal",
    caption: "Pemasangan Cable Tray Metal",
    tags: ["construction", "installation", "equipment"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-015",
    src: "/work/IMAGE_VCA_00015.jpg",
    alt: "Teknisi memasang layanan elektrikal overhead dan penopang kabel",
    caption: "Instalasi Elektrikal Overhead",
    tags: ["electrical", "installation", "construction"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-016",
    src: "/work/IMAGE_VCA_00016.jpg",
    alt: "Teknisi menyambungkan kabel elektrikal di titik sambungan plafon",
    caption: "Penyambungan Kabel Plafon",
    tags: ["electrical", "installation"],
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-017",
    src: "/work/IMAGE_VCA_00017.jpg",
    alt: "Teknisi memasang cable tray metal melalui area utilitas outdoor",
    caption: "Instalasi Cable Tray Outdoor",
    tags: ["construction", "installation", "equipment"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-018",
    src: "/work/IMAGE_VCA_00018.jpg",
    alt: "Teknisi bekerja di samping panel kontrol elektrikal industri",
    caption: "Panel Kontrol Industri",
    tags: ["electrical", "equipment", "installation"],
    projectId: "project-003",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-019",
    src: "/work/IMAGE_VCA_00019.jpg",
    alt: "Tim teknisi memposisikan transformer besar di dalam ruang elektrikal",
    caption: "Pemasangan Transformer",
    tags: ["equipment", "installation"],
    projectId: "project-002",
    width: 1600,
    height: 1200,
  },
  {
    id: "work-020",
    src: "/work/IMAGE_VCA_00020.png",
    alt: "Transformer besar yang diposisikan di dalam ruang elektrikal khusus",
    caption: "Transformer di Ruang Elektrikal",
    tags: ["equipment", "installation"],
    projectId: "project-002",
    width: 1600,
    height: 1200,
    carousel: true,
  },
  {
    id: "work-021",
    src: "/work/IMAGE_VCA_00021.jpg",
    alt: "Teknisi melakukan pekerjaan elektrikal overhead di dalam ruangan yang telah didekorasi",
    caption: "Pekerjaan Elektrikal Overhead",
    tags: ["electrical", "installation"],
    width: 1600,
    height: 1200,
  },
  {
    id: "work-022",
    src: "/work/IMAGE_VCA_00022.jpg",
    alt: "Teknisi memasang lampu plafon berbentuk lingkaran",
    caption: "Instalasi Lampu Plafon",
    tags: ["electrical", "installation"],
    width: 1600,
    height: 1200,
  },
];

// Combine all images (original carousel + new work images)
export const workImages: WorkImage[] = [...originalCarouselImages, ...newWorkImages];

// ===== PROJECTS =====
export const projects: Project[] = [
  {
    id: "project-001",
    slug: "instalasi-panel-switchgear-schneider",
    title: "Instalasi Panel Switchgear Schneider",
    category: "Instalasi Elektrikal",
    summary: "Pemasangan dan instalasi panel switchgear Schneider untuk fasilitas industri dengan kapasitas tinggi.",
    location: "Batam, Kepulauan Riau",
    completionDate: "2024",
    scope: [
      "Instalasi panel switchgear Schneider",
      "Pemasangan panel distribusi elektrikal",
      "Pengamanan dan perataan panel",
      "Testing dan commissioning",
    ],
    tags: ["electrical", "installation", "equipment"],
    coverImageId: "work-001",
    imageIds: ["work-001", "work-003", "work-004", "work-005", "work-008"],
    featured: true,
  },
  {
    id: "project-002",
    slug: "instalasi-transformer-industri",
    title: "Instalasi Transformer Industri",
    category: "Transformer Installation",
    summary: "Pemasangan transformer besar untuk kebutuhan tenaga listrik industri di ruangan khusus.",
    location: "Batam, Kepulauan Riau",
    completionDate: "2024",
    scope: [
      "Survey dan persiapan lokasi",
      "Pemasangan transformer",
      "Instalasi sistem grounding",
      "Testing dan commissioning",
    ],
    tags: ["equipment", "installation"],
    coverImageId: "work-002",
    imageIds: ["work-002", "work-019", "work-020"],
    featured: true,
  },
  {
    id: "project-003",
    slug: "instalasi-panel-kontrol-industri",
    title: "Instalasi Panel Kontrol Industri",
    category: "Panel Kontrol",
    summary: "Instalasi panel kontrol elektrikal untuk sistem industri dengan standar keamanan tinggi.",
    location: "Batam, Kepulauan Riau",
    completionDate: "2024",
    scope: [
      "Instalasi panel kontrol industri",
      "Pemasangan sistem proteksi",
      "Wiring dan koneksi",
      "Testing dan kalibrasi",
    ],
    tags: ["electrical", "equipment", "installation"],
    coverImageId: "work-018",
    imageIds: ["work-018"],
    featured: true,
  },
];

// ===== HELPER FUNCTIONS =====

/**
 * Get a work image by its ID
 */
export function getWorkImageById(id: string): WorkImage | undefined {
  return workImages.find((img) => img.id === id);
}

/**
 * Get all images for a specific project
 */
export function getProjectImages(project: Project): WorkImage[] {
  return project.imageIds
    .map((id) => getWorkImageById(id))
    .filter((img): img is WorkImage => img !== undefined);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Filter images by tag
 */
export function getImagesByTag(tag: WorkTag): WorkImage[] {
  return workImages.filter((img) => img.tags.includes(tag));
}

/**
 * Get all unique tags used across all images (excluding hidden tags)
 */
export function getAllUsedTags(): WorkTag[] {
  const tagSet = new Set<WorkTag>();
  workImages.forEach((img) => {
    img.tags.forEach((tag) => {
      if (!HIDDEN_GALLERY_TAGS.includes(tag)) {
        tagSet.add(tag);
      }
    });
  });
  return Array.from(tagSet);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured === true);
}

/**
 * Get all projects (for static generation)
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get cover image for a project
 */
export function getProjectCoverImage(project: Project): WorkImage | undefined {
  return getWorkImageById(project.coverImageId);
}

/**
 * Get images marked for homepage carousel
 */
export function getCarouselImages(): WorkImage[] {
  return workImages.filter((img) => img.carousel === true);
}
