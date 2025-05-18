import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt=" " className="w-10 rounded-md" loading="lazy"/>
            <q>Kode yang indah, berasal dari ketekunan yang nyata.💻</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hii, Saya Arya Ramadhan</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Data, terutama pada pembuatan Website dan Menganalisis Data. Ketertarikan ini sudha berlangsung lebih dari 5 tahun untuk Programming.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"> 
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt=" " className="w-[500px] rounded-2xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      <div className="tentang my-32 py-10" id="tentang">
        <div className="xl:w2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt=" " className="w-12 rouded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">Halo semua, perkenalkan saya Arya Ramadhan, seorang Web Developer dan Data Analyst yang sedang merintis kehidupan seorang programmer. Saya percaya bahwa setiap hal wajib memiliki fungsionalitas yang harus berjalan beriringan, sehingga setiap proyek yang saya kerjakan tidak hanya terlihat menarik, tetapi juga memberikan pengalaman pengguna yang optimal.</p>
        
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt=" " className="w-12 rounded-md sm:block hidden" loading="lazy" />

          <div  className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">45 <span className="text-violet-400">+</span></h1>
              <p>Proyek Selesai</p>
            </div>

            <div>
              <h1 className="text-4xl mb-1">5 <span className="text-violet-400">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
          <p className="xl:w2/5 lg:w2/4 md:w2/3 sm:w3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website.</p>
          
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
              </div>
            ))}

            
          </div>
        </div>

      </div>

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">

            {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                  <img src={proyek.gambar} alt=" Proyek" loading="lazy" />
                  <div>
                    <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                      ))}

                    </div>
                    <div className="mt-8 text-center">
                      <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                    </div>
                  </div>
              </div>  
            ))}

        </div>
      </div>
      
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/github.yak@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama.." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email.." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" className="border border-zinc-500 p-2 rounded-md" placeholder="Pesan.." required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default App
