import { Link, NavLink, useParams } from 'react-router'
const cardData = [
  {
    id: "1",
    title: "Cara Mendaftar Akun",
    description:"Petunjuk langkah demi langkah untuk mendaftar akun baru.",
    content: "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail."
  },
  {
    id: "2",
    title: "Metode Pembayaran",
    description: "Daftar metode pembayaran yang didukung",
    content: "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail."
  },
  {
    id: "3",
    title: "Kebijakan Pengembalian",
    description: "Syarat dan ketentuan Refund.",
    content: "Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail.",
  }
]
export default function Home() {
    const { id } = useParams()
      const selectedFaq = cardData.find((faq) => faq.id === id)
    
      if (id) {
        return (
          <section className="space-y-5">
            <Link
              to="/faq"
              className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Kembali ke FAQ
            </Link>
            {selectedFaq ? (
              <article className="space-y-3">
                <h1 className="text-2xl font-semibold">{selectedFaq.title}</h1>
                <p className="text-muted-foreground">{selectedFaq.content}</p>
              </article>
            ) : (
              <h1 className="text-xl font-semibold">Pertanyaan FAQ tidak ditemukan.</h1>
            )}
          </section>
        )
      }
  return (
    <>
    <p className="text-md font-medium">Pusat Bantuan</p>
    <h1 className="text-2xl font-semibold">Pertanyaan Umum</h1>
    <p className="text-sm text-slate-300">Temukan jawaban dari pertanyaan yang sering ditanyakan</p>
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Pertanyaan umum (FAQ)</h1>
        <p className="mt-2 text-muted-foreground">Pilih pertanyaan untuk membaca jawaban lengkapnya.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {cardData.map((faq) => (
          <NavLink
            key={faq.id}
            to={faq.id}
            className="rounded-md border border-border p-4 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <h2 className="font-semibold">{faq.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{faq.description}</p>
          </NavLink>
        ))}
      </div>
    </section>
    </>

  )
}
