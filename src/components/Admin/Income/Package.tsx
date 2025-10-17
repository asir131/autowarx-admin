"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { ArrowLeft, MoveLeft, Plus } from 'lucide-react';
import Link from 'next/link';
// Type definitions
interface Videos {
  ads: string
  privateAuctions: string
  vinCheck: string
  leadGeneration: string
  privateMarketplace: string
}

type VideoKey = keyof Videos

interface Benefit {
  title: string
  description: string
}

interface PackageInfo {
  title: string
  description: string
  benefits: Benefit[]
}

interface PackageCardProps {
  id: string
  title: string
  price: string
  features: string[]
  iconBg: string
  iconPath?: string
  iconComponent?: React.ReactNode
  onPlayClick: () => void
  onInfoClick: () => void
  onSelectPackage: (id: string, title: string, price: string) => void
}

const Package: React.FC = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentVideo, setCurrentVideo] = useState<string>('')
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false)
  const [currentPackageInfo, setCurrentPackageInfo] = useState<PackageInfo | null>(null)

  // Video URLs for different packages
  const videos: Videos = {
    ads: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    privateAuctions: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    vinCheck: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    leadGeneration: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    privateMarketplace: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }

  // Package information
  const packageInfoData: Record<string, PackageInfo> = {
    'Private Auctions': {
      title: 'Private Auctions',
      description: 'Discover our private auction channel where individual sellers list their cars exclusively to subscribing dealers. Bid, negotiate, and close completely online',
      benefits: [
        {
          title: 'Exclusive Listings',
          description: 'Access private-party cars that aren\'t available to non-subscribers'
        },
        {
          title: 'Live Offers, Real-Time Deals',
          description: 'Submit offers and receive counters instantly. Buy fast, sell faster'
        },
        {
          title: 'Direct Messaging',
          description: 'Chat directly with sellers to ask questions or close the deal without delays'
        }
      ]
    },
    'VIN Check': {
      title: 'VIN Check',
      description: 'Get comprehensive vehicle history and market insights with our advanced VIN check tool',
      benefits: [
        {
          title: 'Market Pricing & Trends',
          description: 'Access real-time market data and pricing trends for informed decisions'
        },
        {
          title: 'Find Similar Cars Nearby',
          description: 'Discover comparable vehicles in your area to compare and evaluate'
        },
        {
          title: 'Full Vehicle History',
          description: 'Complete vehicle history reports including accidents, ownership, and maintenance records'
        }
      ]
    },
    'Lead Generation': {
      title: 'Lead Generation',
      description: 'Boost your dealership\'s visibility and attract more qualified buyers with our lead generation tools',
      benefits: [
        {
          title: 'Get More Offers',
          description: 'Receive qualified purchase offers from interested buyers in your market'
        },
        {
          title: 'Get More Calls',
          description: 'Increase incoming calls from potential customers actively looking for vehicles'
        },
        {
          title: 'Increase Website Traffic',
          description: 'Drive more targeted traffic to your dealership website and inventory listings'
        }
      ]
    },
    'Private Marketplace': {
      title: 'Private Marketplace',
      description: 'Access our exclusive dealer-to-dealer marketplace for efficient vehicle sourcing and wholesale opportunities',
      benefits: [
        {
          title: 'Save Hours of Sourcing',
          description: 'Find the vehicles you need quickly without spending hours searching multiple platforms'
        },
        {
          title: 'Tap Into Hidden Inventory',
          description: 'Access vehicles not listed publicly, available only to marketplace members'
        },
        {
          title: 'Restock Smarter, Faster',
          description: 'Efficiently replenish your inventory with quality vehicles at competitive wholesale prices'
        }
      ]
    },
    'Ads': {
      title: 'Ads',
      description: 'Maximize your vehicle exposure with unlimited advertising and powerful market insights',
      benefits: [
        {
          title: 'Market Pricing & Trends',
          description: 'Stay competitive with real-time pricing data and market trend analysis'
        },
        {
          title: 'Unlimited Ads for Month',
          description: 'List as many vehicles as you want with no restrictions throughout your subscription'
        },
        {
          title: 'Get More Ads',
          description: 'Expand your reach and visibility across multiple platforms and channels'
        }
      ]
    }
  }

  const openModal = (videoKey: VideoKey): void => {
    setCurrentVideo(videos[videoKey])
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
    setCurrentVideo('')
  }

  const openInfoModal = (packageName: string): void => {
    setCurrentPackageInfo(packageInfoData[packageName])
    setIsInfoModalOpen(true)
  }

  const closeInfoModal = (): void => {
    setIsInfoModalOpen(false)
    setCurrentPackageInfo(null)
  }

  const handleSelectPackage = (id: string, title: string, price: string): void => {
    // Navigate to the payment page with package details
    // Encode the data to pass it via URL
    const params = new URLSearchParams({
      title: title,
      price: price
    })
    router.push(`/dashboard/support/${id}?${params.toString()}`)
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
        <div className="grid mb-8">
          <div
            className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
            onClick={() => window.history.back()}
          >
            <MoveLeft  size={30} />
            <span className="break-words">Package</span>
          </div>
        </div>

        <div className='bg-white p-3 rounded-lg border'>
          {/* Support Info Card */}
          

         

          {/* Choose Your Package Section */}
          <div className='mt-8'>
           <div className='mb-6 border-b pb-2 flex justify-between items-center'>
             <h2 className="text-2xl font-semibold ">Choose Your Package</h2>
             <Link href="/dashboard/income/package/add-package" className='flex  items-center bg-[#FFE135] px-5 py-2 rounded-lg'> <Plus size={20} />Add Package</Link>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Private Auctions Package */}
              <PackageCard
                id="private-auctions"
                title="Private Auctions"
                price="$99"
                features={[
                  "Exclusive Listings",
                  "Live Offers, Real-Time Deals",
                  "Direct Messaging"
                ]}
                iconBg="#FFFCEB"
                iconPath="M68.7402 39.2865L64.44 34.9865C63.7107 34.2581 62.744 33.8158 61.7159 33.7404C60.6879 33.6649 59.6669 33.9612 58.839 34.5753L45.4978 21.2347C46.1123 20.4071 46.4091 19.3864 46.3341 18.3584C46.2591 17.3304 45.8174 16.3636 45.0893 15.634L40.7891 11.334C40.3898 10.9346 39.9157 10.6178 39.3939 10.4016C38.8721 10.1855 38.3129 10.0742 37.7481 10.0742C37.1833 10.0742 36.624 10.1855 36.1023 10.4016C35.5805 10.6178 35.1064 10.9346 34.7071 11.334L17.5064 28.5339C17.107 28.9332 16.7902 29.4072 16.574 29.929C16.3578 30.4508 16.2466 31.01 16.2466 31.5748C16.2466 32.1395 16.3578 32.6988 16.574 33.2205C16.7902 33.7423 17.107 34.2163 17.5064 34.6156L21.8066 38.9156C22.5361 39.643 23.5024 40.0843 24.5299 40.1592C25.5573 40.2342 26.5775 39.9379 27.4049 39.3241L29.3319 41.251L11.7603 58.8218C10.5929 60.0985 9.96301 61.7762 10.0017 63.5057C10.0404 65.2352 10.7447 66.8831 11.968 68.1064C13.1912 69.3296 14.8392 70.0339 16.5688 70.0725C18.2984 70.1112 19.9762 69.4813 21.2529 68.314L38.8218 50.7432L40.7488 52.6674C40.1343 53.495 39.8375 54.5157 39.9125 55.5437C39.9875 56.5717 40.4292 57.5386 41.1573 58.2682L45.4575 62.5681C45.8568 62.9675 46.3309 63.2843 46.8527 63.5005C47.3745 63.7167 47.9337 63.8279 48.4985 63.8279C49.0633 63.8279 49.6225 63.7167 50.1443 63.5005C50.6661 63.2843 51.1402 62.9675 51.5395 62.5681L68.7402 45.3683C69.1396 44.969 69.4564 44.4949 69.6726 43.9731C69.8887 43.4514 70 42.8921 70 42.3274C70 41.7626 69.8887 41.2034 69.6726 40.6816C69.4564 40.1599 69.1396 39.6858 68.7402 39.2865ZM24.8463 35.8761L20.5461 31.5761L37.7467 14.3762L42.0469 18.6762L24.8463 35.8761ZM18.2133 65.2717C17.7601 65.7222 17.147 65.9751 16.508 65.9751C15.869 65.9751 15.2559 65.7222 14.8027 65.2717C14.353 64.8187 14.1006 64.2062 14.1006 63.5679C14.1006 62.9295 14.353 62.3171 14.8027 61.864L32.3715 44.2933L35.7821 47.701L18.2133 65.2717ZM30.4902 36.3222L42.493 24.3199L55.7537 37.5799L43.7535 49.5822L30.4902 36.3222ZM48.4972 59.5259L44.197 55.2259L45.272 54.1509L60.3226 39.101L61.3976 38.0261L65.6978 42.326L48.4972 59.5259Z"
                onPlayClick={() => openModal('privateAuctions')}
                onInfoClick={() => openInfoModal('Private Auctions')}
                onSelectPackage={handleSelectPackage}
              />

              {/* VIN Check Package */}
              <PackageCard
                id="vin-check"
                title="VIN Check"
                price="$499"
                features={[
                  "Market Pricing & Trends",
                  "Find Similar Cars Nearby",
                  "Full Vehicle History"
                ]}
                iconBg="#FFFCEB"
                iconComponent={
                  <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="12.0742" width="56" height="56" rx="14" stroke="#FFE135" strokeWidth="4"/>
                    <path d="M22.6705 31.6197L26.8892 44.881H27.0511L31.2784 31.6197H35.3693L29.3523 49.0742H24.5966L18.571 31.6197H22.6705ZM41.1605 31.6197V49.0742H37.4702V31.6197H41.1605ZM58.7962 31.6197V49.0742H55.6087L48.0149 38.0884H47.8871V49.0742H44.1967V31.6197H47.4354L54.9695 42.5969H55.1229V31.6197H58.7962Z" fill="#FFE135"/>
                  </svg>
                }
                onPlayClick={() => openModal('vinCheck')}
                onInfoClick={() => openInfoModal('VIN Check')}
                onSelectPackage={handleSelectPackage}
              />

              {/* Lead Generation Package */}
              <PackageCard
                id="lead-generation"
                title="Lead Generation"
                price="$199"
                features={[
                  "Get More Offers",
                  "Get More Calls",
                  "Increase Website Traffic"
                ]}
                iconBg="#FFFCEB"
                iconPath="M35.1281 32.1148C35.0243 31.8034 34.9828 31.4745 35.0061 31.147C35.0293 30.8195 35.1169 30.4997 35.2637 30.2061C35.4105 29.9124 35.6138 29.6505 35.8618 29.4354C36.1099 29.2203 36.3979 29.0562 36.7094 28.9523L40.4594 27.7023C40.8352 27.5771 41.2354 27.5429 41.627 27.6026C42.0186 27.6624 42.3905 27.8143 42.7118 28.046C43.0332 28.2776 43.2949 28.5823 43.4754 28.9349C43.6559 29.2876 43.75 29.6781 43.75 30.0742V42.5742C43.75 43.2373 43.4866 43.8731 43.0178 44.342C42.5489 44.8108 41.913 45.0742 41.25 45.0742C40.587 45.0742 39.9511 44.8108 39.4822 44.342C39.0134 43.8731 38.75 43.2373 38.75 42.5742V33.543L38.2906 33.6961C37.9791 33.7999 37.6503 33.8414 37.3228 33.8182C36.9952 33.7949 36.6755 33.7073 36.3819 33.5605C36.0882 33.4137 35.8263 33.2104 35.6112 32.9624C35.3961 32.7143 35.2319 32.4263 35.1281 32.1148ZM77.5 65.0742C77.5 65.7373 77.2366 66.3731 76.7678 66.842C76.2989 67.3108 75.663 67.5742 75 67.5742H5C4.33696 67.5742 3.70107 67.3108 3.23223 66.842C2.76339 66.3731 2.5 65.7373 2.5 65.0742C2.5 64.4112 2.76339 63.7753 3.23223 63.3064C3.70107 62.8376 4.33696 62.5742 5 62.5742H7.5V32.5742C7.5 31.2481 8.02678 29.9764 8.96447 29.0387C9.90215 28.101 11.1739 27.5742 12.5 27.5742H25V17.5742C25 16.2481 25.5268 14.9764 26.4645 14.0387C27.4021 13.101 28.6739 12.5742 30 12.5742H50C51.3261 12.5742 52.5979 13.101 53.5355 14.0387C54.4732 14.9764 55 16.2481 55 17.5742V40.0742H67.5C68.8261 40.0742 70.0979 40.601 71.0355 41.5387C71.9732 42.4764 72.5 43.7481 72.5 45.0742V62.5742H75C75.663 62.5742 76.2989 62.8376 76.7678 63.3064C77.2366 63.7753 77.5 64.4112 77.5 65.0742ZM55 45.0742V62.5742H67.5V45.0742H55ZM30 62.5742H50V17.5742H30V62.5742ZM12.5 62.5742H25V32.5742H12.5V62.5742Z"
                onPlayClick={() => openModal('leadGeneration')}
                onInfoClick={() => openInfoModal('Lead Generation')}
                onSelectPackage={handleSelectPackage}
              />

              {/* Private Marketplace Package */}
              <PackageCard
                id="private-marketplace"
                title="Private Marketplace"
                price="$199"
                features={[
                  "Save Hours of Sourcing",
                  "Tap Into Hidden Inventory",
                  "Restock Smarter, Faster"
                ]}
                iconBg="#FFFCEB"
                iconPath="M69.4767 21.9813C69.2681 21.7317 69.0073 21.531 68.7126 21.3932C68.418 21.2555 68.0966 21.1841 67.7714 21.1842H22.9652L21.2765 11.899C21.1835 11.387 20.9138 10.9239 20.5143 10.5905C20.1148 10.257 19.611 10.0743 19.0907 10.0742H12.222C11.6327 10.0742 11.0675 10.3083 10.6508 10.725C10.2341 11.1417 10 11.7069 10 12.2962C10 12.8855 10.2341 13.4507 10.6508 13.8674C11.0675 14.2841 11.6327 14.5182 12.222 14.5182H17.2214L24.3206 53.4836C24.5298 54.6392 25.0404 55.719 25.801 56.6138C24.7513 57.5943 23.9936 58.8464 23.612 60.2312C23.2304 61.6161 23.2398 63.0795 23.6391 64.4593C24.0385 65.8392 24.8122 67.0814 25.8744 68.0484C26.9367 69.0153 28.246 69.6692 29.6571 69.9374C31.0683 70.2057 32.5262 70.0778 33.8692 69.5681C35.2121 69.0584 36.3876 68.1866 37.2654 67.0496C38.1432 65.9125 38.6889 64.5546 38.842 63.1263C38.9952 61.6981 38.7498 60.2553 38.133 58.958H50.7483C50.2512 59.9987 49.9939 61.1377 49.9956 62.291C49.9956 63.8291 50.4517 65.3327 51.3062 66.6116C52.1607 67.8906 53.3753 68.8874 54.7964 69.476C56.2174 70.0646 57.7811 70.2186 59.2897 69.9185C60.7982 69.6185 62.184 68.8778 63.2716 67.7901C64.3592 66.7025 65.0999 65.3168 65.4 63.8082C65.7 62.2996 65.546 60.7359 64.9574 59.3149C64.3688 57.8938 63.372 56.6792 62.0931 55.8247C60.8142 54.9701 59.3106 54.514 57.7725 54.514H30.8782C30.3579 54.514 29.8541 54.3313 29.4546 53.9978C29.0551 53.6643 28.7854 53.2012 28.6924 52.6892L27.8119 47.8481H60.0306C61.5916 47.8478 63.1031 47.2997 64.3015 46.2993C65.4999 45.2989 66.3091 43.9096 66.5882 42.3736L69.9656 23.8033C70.0227 23.4824 70.0086 23.1528 69.9241 22.8379C69.8396 22.523 69.6869 22.2306 69.4767 21.9813ZM34.4417 62.291C34.4417 62.9502 34.2463 63.5946 33.88 64.1427C33.5138 64.6908 32.9933 65.118 32.3842 65.3703C31.7752 65.6225 31.1051 65.6885 30.4585 65.5599C29.812 65.4313 29.2181 65.1139 28.752 64.6478C28.2859 64.1816 27.9684 63.5878 27.8398 62.9412C27.7112 62.2947 27.7772 61.6245 28.0295 61.0155C28.2818 60.4065 28.709 59.886 29.2571 59.5197C29.8052 59.1535 30.4496 58.958 31.1088 58.958C31.9927 58.958 32.8405 59.3092 33.4655 59.9342C34.0906 60.5593 34.4417 61.407 34.4417 62.291ZM61.1054 62.291C61.1054 62.9502 60.91 63.5946 60.5437 64.1427C60.1775 64.6908 59.657 65.118 59.0479 65.3703C58.4389 65.6225 57.7688 65.6885 57.1222 65.5599C56.4757 65.4313 55.8818 65.1139 55.4157 64.6478C54.9496 64.1816 54.6322 63.5878 54.5036 62.9412C54.375 62.2947 54.441 61.6245 54.6932 61.0155C54.9455 60.4065 55.3727 59.886 55.9208 59.5197C56.4689 59.1535 57.1133 58.958 57.7725 58.958C58.6564 58.958 59.5042 59.3092 60.1292 59.9342C60.7543 60.5593 61.1054 61.407 61.1054 62.291ZM62.2164 41.5793C62.1232 42.0927 61.8522 42.5569 61.451 42.8905C61.0498 43.2241 60.544 43.406 60.0222 43.4041H27.0037L23.7735 25.6282H65.1078L62.2164 41.5793Z"
                onPlayClick={() => openModal('privateMarketplace')}
                onInfoClick={() => openInfoModal('Private Marketplace')}
                onSelectPackage={handleSelectPackage}
              />

              {/* Ads Package */}
              <PackageCard
                id="ads"
                title="Ads"
                price="$499"
                features={[
                  "Market Pricing & Trends",
                  "Unlimited Ads for Month",
                  "Get More Ads"
                ]}
                iconBg="#FFFCEB"
                iconPath="M57.6989 38.8194C56.6865 38.0656 55.5989 37.4161 54.4531 36.8809C53.2867 28.2588 47.4543 25.5415 44.8006 24.7454C39.0323 23.0146 32.4038 25.0886 29.3885 29.5627C29.2184 29.815 29.1003 30.0979 29.0408 30.3954C28.9813 30.6928 28.9817 30.9989 29.0418 31.2963C29.1632 31.8967 29.5208 32.4249 30.0359 32.7646C30.551 33.1043 31.1814 33.2276 31.7884 33.1076C32.089 33.0481 32.3748 32.9306 32.6295 32.7619C32.8842 32.5932 33.1028 32.3765 33.2729 32.1242C35.1305 29.3665 39.6885 28.0396 43.4474 29.1617C46.349 30.0271 48.3525 32.1329 49.3236 35.2194C47.8538 34.9426 46.3608 34.8045 44.8647 34.8069C40.8054 34.8069 37.0056 35.8425 34.171 37.7204C30.8349 39.9502 28.9977 43.2473 28.9977 46.9973C28.9977 52.9338 33.6228 57.2435 39.9947 57.2435C41.8684 57.2308 43.7206 56.8462 45.4413 56.1123C47.1619 55.3785 48.7162 54.3104 50.0118 52.9713C51.8898 51.0386 54.0944 47.6752 54.564 42.2694C54.6748 42.3444 54.7798 42.4223 54.8847 42.5002C57.833 44.704 59.3261 47.7704 59.3261 51.6127C59.3261 57.1973 53.3946 65.4588 40.6625 65.4588C32.8675 65.4588 27.3996 62.9636 23.941 57.8319C21.1036 53.6319 19.6659 47.6492 19.6659 40.0742C19.6659 32.4992 21.1036 26.5165 23.941 22.3165C27.3996 17.1848 32.8675 14.6896 40.6625 14.6896C50.2655 14.6896 56.4099 18.5117 59.4807 26.3781C59.5883 26.6641 59.7523 26.9262 59.963 27.1492C60.1738 27.3721 60.4272 27.5515 60.7085 27.6769C60.9898 27.8024 61.2935 27.8713 61.602 27.8798C61.9104 27.8883 62.2175 27.8362 62.5055 27.7265C62.7935 27.6168 63.0566 27.4517 63.2796 27.2407C63.5026 27.0298 63.681 26.7771 63.8047 26.4974C63.9283 26.2177 63.9946 25.9166 63.9997 25.6114C64.0048 25.3062 63.9487 25.003 63.8345 24.7194C60.1076 15.1396 52.0939 10.0742 40.6625 10.0742C31.3307 10.0742 24.3872 13.3309 20.0567 19.755C16.7001 24.7367 15 31.5704 15 40.0742C15 48.5781 16.7001 55.4117 20.0567 60.3935C24.3872 66.8175 31.3307 70.0742 40.6625 70.0742C49.4315 70.0742 54.9226 66.7627 57.9846 63.9877C61.7465 60.5781 63.992 55.9396 63.992 51.6127C63.992 46.3223 61.8165 41.8973 57.6989 38.8194ZM46.6494 49.7809C45.7897 50.6731 44.7577 51.3855 43.6146 51.876C42.4716 52.3665 41.2406 52.6252 39.9947 52.6367C36.8423 52.6367 33.6636 50.9059 33.6636 47.0059C33.6636 43.3627 37.163 39.4454 44.8647 39.4454C46.5991 39.4407 48.3256 39.6757 49.9943 40.1435C49.9943 44.205 48.8278 47.5338 46.6494 49.7723V49.7809Z"
                onPlayClick={() => openModal('ads')}
                onInfoClick={() => openInfoModal('Ads')}
                onSelectPackage={handleSelectPackage}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                src={currentVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {isInfoModalOpen && currentPackageInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeInfoModal}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="font-medium">Close</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentPackageInfo.title}</h2>
              <p className="text-gray-600 mb-8">{currentPackageInfo.description}</p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h3>
              
              <div className="space-y-4">
                {currentPackageInfo.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border-2"
                    style={{ 
                      backgroundColor: '#FFFCEB',
                      borderColor: '#FFE135'
                    }}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-white p-4 rounded-full border border-[#FFE135] mt-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#FFE135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Reusable Package Card Component
const PackageCard: React.FC<PackageCardProps> = ({ 
  id,
  title, 
  price, 
  features, 
  iconBg, 
  iconPath, 
  iconComponent, 
  onPlayClick,
  onInfoClick,
  onSelectPackage
}) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="p-8 flex justify-between items-center" style={{ backgroundColor: iconBg }}>
        <div>
            {iconComponent || (
          <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={iconPath} fill="#FFE135"/>
          </svg>
        )}
        </div>
        <div>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="17" r="17" fill="#FFE135"/>
<path d="M10.7891 24.2362H12.2033L21.517 14.9225L20.1028 13.5083L10.7891 22.822V24.2362ZM26.7891 26.2362H8.78906V21.9935L22.2241 8.55852C22.6147 8.168 23.2478 8.168 23.6383 8.55852L26.4668 11.3869C26.8573 11.7775 26.8573 12.4106 26.4668 12.8012L15.0317 24.2362H26.7891V26.2362ZM21.517 12.0941L22.9312 13.5083L24.3454 12.0941L22.9312 10.6798L21.517 12.0941Z" fill="white"/>
</svg>
        </div>

      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            <button 
              onClick={onPlayClick}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14V0L12 7L0 14Z" fill="#606060"/>
              </svg>
              
            </button>
            <button 
              onClick={onInfoClick}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="#606060" strokeWidth="2"/>
                <path d="M9 5V9M9 13H9.01" stroke="#606060" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600 text-lg">/month</span>
        </div>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#FFE135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default Package