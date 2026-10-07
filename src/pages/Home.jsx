import { Link,  useParams } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
const cardData = [
  {
    id: "1",
    title: "Cara Mendaftar Akun",
    description: "Petunjuk langkah demi langkah untuk mendaftar akun baru.",
    content:
      "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail.",
  },
  {
    id: "2",
    title: "Metode Pembayaran",
    description: "Daftar metode pembayaran yang didukung",
    content:
      "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail.",
  },
  {
    id: "3",
    title: "Kebijakan Pengembalian",
    description: "Syarat dan ketentuan Refund.",
    content:
      "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail.",
  },
];
export default function Home() {
  const { id } = useParams();

  if (id) {
    const item = cardData.find((card) => card.id === id);
    if (!item) {
      return (
        <section>
          <h1 className="text-2xl font-bold">Pertanyaan tidak ditemukan</h1>
          <Link to="/" className="mt-4 inline-block underline">
            Kembali ke Home
          </Link>
        </section>
      );
    }
    return (
      <article className="space-y-4">
        <Link to="/" className="text-sm underline">
           Kembali
        </Link>
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p>{item.content}</p>
      </article>
    );
  }
  return (
    <>
      <section>
      <header className="mb-8">
        <p>Pusat Bantuan</p>
        <h1 className="mt-2 text-4xl font-bold">Pertanyaan Umum</h1>
        <p className="mt-2 text-muted-foreground">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {cardData.map((item) => (
          <Link
            key={item.id}
            to={`/home/${item.id}`}
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-muted font-bold">
                  {item.id}
                </span>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium">Lihat detail →</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}
