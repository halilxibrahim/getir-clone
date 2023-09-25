
function Favorites() {
  return (
    <div className="container flex mx-auto pt-10 justify-between gap-10 bg-gray-100 ">

        <div className="flex-col p-[70px] ml-3 bg-white rounded-lg">
            <div>
                <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
            </div>
            <h1 className="text-[#5d3ebc]d">Her siparişinize bir kampanya</h1>
            <p>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
        </div>

        <div className="p-[150px] bg-white rounded-lg">
            <div>
                <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
            </div>
        </div>
        <div className="p-[150px] mr-3 bg-white rounded-lg">
            <div>
                <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Favorites