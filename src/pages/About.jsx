import { Helmet } from "react-helmet-async";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

const About = () => {
  const mapKey = import.meta.env.VITE_MAP_KEY

  return (
    <>
      <Helmet>
        <title>徳有企画 | 私たちについて</title>
        <meta name="description" content="当社は、高齢者や障がいを持つ方々、そしてそのご家族の方々に寄り添い、心身の健康と幸福をサポートをしていきます。利用者様、ご家族の皆様、地域のコミュニティ、そして当社のスタッフ全員の幸福と福祉を真摯に考えています。" />

        <meta property="og:title" content="徳有企画 | 私たちについて" />
        <meta
          property="og:description"
          content="当社は、高齢者や障がいを持つ方々、そしてそのご家族の方々に寄り添い、心身の健康と幸福をサポートをしていきます。利用者様、ご家族の皆様、地域のコミュニティ、そして当社のスタッフ全員の幸福と福祉を真摯に考えています。"
        />
        <meta property="og:image" content="/images/dayservice2.webp" />
        <meta property="og:url" content="https://tokuyukikaku.netlify.app/about" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="about relative">
        {/* Blobs About */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute top-1/3 translate-y-1/4 2md:top-1/2 2md:-translate-y-1/2 -left-16 w-52 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M43.1,-64.2C53.2,-52,56.8,-35.8,62.8,-19.8C68.9,-3.8,77.4,12.1,75.7,26.8C74,41.6,62,55.3,47.7,63.4C33.4,71.6,16.7,74.3,-0.5,75C-17.8,75.8,-35.6,74.6,-50.7,66.7C-65.7,58.8,-78.1,44.1,-81.6,27.8C-85.1,11.6,-79.7,-6.3,-73.8,-23.9C-67.9,-41.5,-61.6,-58.8,-49.3,-70.2C-36.9,-81.7,-18.4,-87.2,-1,-85.9C16.5,-84.6,33.1,-76.4,43.1,-64.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute top-3/4 -translate-y-2/3 2md:top-1/2 2md:-translate-y-1/4 -right-16 w-52 xs:w-64 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M31.7,-46.2C43,-35.4,55.5,-28.7,62.1,-17.9C68.8,-7.1,69.5,7.9,67.6,24.5C65.7,41.1,61.1,59.4,49.3,64.5C37.6,69.6,18.8,61.5,0.7,60.5C-17.4,59.5,-34.7,65.6,-45.5,60.2C-56.2,54.8,-60.3,37.9,-65.8,21.3C-71.3,4.8,-78.1,-11.4,-76,-26.8C-73.9,-42.3,-63,-56.9,-48.8,-66.8C-34.7,-76.7,-17.3,-81.8,-3.6,-76.9C10.2,-72,20.4,-57,31.7,-46.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute top-12 left-1/2 2md:-translate-x-1/4 w-80">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M40.1,-58.3C51,-47.3,58.1,-34.2,60.9,-20.9C63.7,-7.6,62.2,6.1,57.6,18.2C53,30.4,45.3,41,35.1,49.5C25,57.9,12.5,64.2,-0.2,64.5C-13,64.8,-25.9,59.1,-36.6,50.9C-47.3,42.6,-55.6,31.7,-62,18.6C-68.4,5.5,-72.7,-9.8,-69.2,-23C-65.6,-36.3,-54.2,-47.5,-41.3,-57.9C-28.5,-68.3,-14.2,-77.8,0.2,-78.1C14.6,-78.3,29.2,-69.3,40.1,-58.3Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="about-us px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12 flex gap-10 items-center">
          <div className="md:w-3/4 2md:w-3/5">
            <h1 className="text-2xl mb-3 text-darkpink">私たちについて</h1>
            <p className="mb-2">当社は、高齢者や障がいを持つ方々、そしてそのご家族の方々に寄り添い、心身の健康と幸福をサポートをしていきます。利用者様、ご家族の皆様、地域のコミュニティ、そして当社のスタッフ全員の幸福と福祉を真摯に考えています。</p>
            <p className="mb-2">介護に取り組む私たちは、利用者様のニーズを理解し、満たすことを最優先にしています。一人ひとりの利用者様に最適なケアプランを提供し、利用者様の生活を豊かで充実したものにすることを目指します。</p>
            <p>また、私たちは真の人間関係を築き、お互いに学び合い、支え合う環境を大切にしています。地域のコミュニティとの協力を通じて、お互いに成長し、より良い未来を築いていくことを使命としています。</p>
          </div>
          {/* <div aria-label="徳有企画（とくゆきかく）の施設" role="img" className="bg-[url('/images/dayservice2.webp')] bg-center bg-cover rounded-md shadow-md hidden md:block w-1/4 2md:w-2/5 min-h-80"></div> */}
          <ImageWithPlaceholder
            src="/images/dayservice2.webp"
            placeholderSrc="/images/dayservice2Small.jpg"
            alt="徳有企画（とくゆきかく）の施設"
            className="bg-center bg-cover rounded-md shadow-md hidden md:block w-1/4 2md:w-2/5 h-80"
            imgClassName="rounded-md h-80"
          />
        </div>
        <div className="annai py-6 lg:py-12 bg-lightgray bg-opacity-30">
          <div className="px-6 2md:px-12 lg:px-24 xl:px-28">
            <h2 className="text-2xl mb-3 text-darkpink">会社案内</h2>
            <div className="2md:flex gap-10">
              <table className="mb-4 2md:mb-0 w-full 2md:w-3/4">
                <tbody>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">社名（事業所番号）</th>
                    <td className="bg-white p-2 border border-darkstone">合同会社徳有企画 （1395400417）</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">設立年月日</th>
                    <td className="bg-white p-2 border border-darkstone">2010年（平成22年）7月31日</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">代表者</th>
                    <td className="bg-white p-2 border border-darkstone">長谷川 燕華</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">従業員数</th>
                    <td className="bg-white p-2 border border-darkstone">27名（2024年9月現在）</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">事業内容</th>
                    <td className="bg-white p-2 border border-darkstone">訪問介護、地域密着型通所介護、介護タクシー、居宅介護支援</td>
                  </tr>
                </tbody>
              </table>
              <div className="2md:w-1/4 min-w-64 h-64 xs:h-80 2md:min-h-72">
                <iframe className="rounded-md shadow-md" style={{ border: '0', height: '100%', width: '100%' }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRbVMFADlGGART5nk37jmu4c&key=${mapKey}`}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>

  );
}

export default About;
