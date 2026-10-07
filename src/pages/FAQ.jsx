import { Link, NavLink, useParams } from 'react-router'

const faqData = [
  {
    id: "1",
    title: "Apa itu Layanan Kami?",
    description: "Klik di sini untuk melihat penjelasan lengkap tentang layanan utama kami.",
    content: "Layanan kami membantu kamu membangun aplikasi web modern dengan cepat dan efisien tanpa pusing memikirkan infrastruktur dasar."
  },
  {
    id: "2",
    title: "Bagaimana Cara Mendaftar?",
    description: "Panduan cepat langkah-langkah membuat akun baru.",
    content: "Kamu cukup menekan tombol daftar di pojok kanan atas, isi email dan kata sandi, lalu verifikasi tautan yang dikirimkan ke email kamu."
  },
  {
    id: "3",
    title: "Kebijakan Pengembalian",
    description: "Syarat dan ketentuan pengembalian dana.",
    content: "Pengajuan pengembalian dana dapat dilakukan dengan menghubungi tim dukungan dalam waktu 14 hari setelah transaksi. Sertakan nomor pesanan dan alasan pengajuan agar kami dapat membantu.",
  }
]

function FAQ() {
  const { id } = useParams()
  const selectedFaq = faqData.find((faq) => faq.id === id)

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
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Pertanyaan umum (FAQ)</h1>
        <p className="mt-2 text-muted-foreground">Pilih pertanyaan untuk membaca jawaban lengkapnya.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {faqData.map((faq) => (
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
  )
}

export default FAQ
