import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | PT. Veritasindo Citra Abadi",
  description: "Hubungi PT. Veritasindo Citra Abadi — kontraktor elektrikal dan supplier peralatan listrik di Batam. Telepon, WhatsApp, email, dan alamat kantor kami.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
