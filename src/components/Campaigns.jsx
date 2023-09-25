/* eslint-disable react/no-unescaped-entities */

function Campaigns() {

	return (
		<>
			<div className="container mx-auto flex bg-[#5d3ebc] sm: h-[312px] rounded-lg" >
                <div className="container flex-col justify-start text-2xl text-white">
                    <h1 className="pl-20 mt-20 font-bold">Getir'i indirin!</h1>
                    <p className="pl-20 mt-1 font-normal">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                    <div className="flex pl-20 mt-10 gap-2">
                        <button>
                            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="container flex justify-end">
                    <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                </div>
			</div>
		</>
	)
}

export default Campaigns