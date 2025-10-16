import car from "@/assets/vendor/car.png"
import profile from "@/assets/vendor/profile.png"
import Image from 'next/image'

interface InventoryItem {
  productId: string
  vehicle: string
  added: string
  onMarket: string
  price: string
  views: string
}

const inventoryData: InventoryItem[] = [
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
]

function ExistingInventoryTable() {
  // Popular Product data object
  const popularProducts = {
    title: "Popular Product",
    data: [
      {
        productName: "2020 Honda Civic LX",
        category: "Sedan",
        productId: "#434232",
        image: car
      },
      {
        productName: "2020 Honda Civic LX",
        category: "Sedan",
        productId: "#434232",
        image: car
      },
      {
        productName: "2020 Honda Civic LX",
        category: "Sedan",
        productId: "#434232",
        image: car
      },
      {
        productName: "2020 Honda Civic LX",
        category: "Sedan",
        productId: "#434232",
        image: car
      },
      {
        productName: "2020 Honda Civic LX",
        category: "Sedan",
        productId: "#434232",
        image: car
      }
    ]
  };

  // New Ads data object
  const newAds = {
    title: "New Ads",
    data: [
      {
        userName: "Abdur Rahman",
        orderId: "#434232",
        amount: "$2000",
        image: profile,
        buttonColor: "#FFE135",
        buttonText: "View"
      },
      {
        userName: "Abdur Rahman",
        orderId: "#434232",
        amount: "$2000",
        image: profile,
        buttonColor: "#FFE135",
        buttonText: "View"
      },
      {
        userName: "Abdur Rahman",
        orderId: "#434232",
        amount: "$2000",
        image: profile,
        buttonColor: "#FFE135",
        buttonText: "View"
      },
      {
        userName: "Abdur Rahman",
        orderId: "#434232",
        amount: "$2000",
        image: profile,
        buttonColor: "#FFE135",
        buttonText: "View"
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 -mt-5">
      {/* Popular Product Column */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{popularProducts.title}</h2>
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
            See All
          </button>
        </div>
        
        {/* Table Headers */}
        <div className="flex items-center gap-4 p-3 mb-3 border-b border-gray-200">
          <div className="w-12"></div>
          <div className="flex-1 grid grid-cols-3 text-sm font-medium text-gray-600">
            <span>Product Name</span>
            <span className="text-center">Category</span>
            <span className="text-right">Product ID</span>
          </div>
        </div>
        
        <div className="space-y-0">
          {popularProducts.data.map((product, index) => (
            <div key={index} className="flex items-center gap-4 p-3 border-b border-gray-100 last:border-b-0">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image 
                  src={product.image} 
                  alt={product.productName}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 grid grid-cols-3 items-center">
                <h3 className="font-medium text-gray-800">{product.productName}</h3>
                <span className="text-sm text-gray-600 text-center">{product.category}</span>
                <span className="text-sm text-gray-600 text-right">{product.productId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Ads Column */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{newAds.title}</h2>
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
            See All
          </button>
        </div>
        
        {/* Table Headers */}
        <div className="flex items-center justify-between p-3 mb-3 border-b border-gray-200">
          <div className="flex-1 text-sm font-medium text-gray-600">
            <span>User</span>
          </div>
          <div className="flex-1 grid grid-cols-2 text-sm font-medium text-gray-600 text-center">
            <span>Order ID</span>
            <span>Amount</span>
          </div>
          <div className="w-16"></div> {/* Spacer for button column */}
        </div>
        
        <div className="space-y-0">
          {newAds.data.map((ad, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image 
                    src={ad.image} 
                    alt={ad.userName}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{ad.userName}</h3>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 text-sm text-gray-600 text-center">
                <span>{ad.orderId}</span>
                <span>{ad.amount}</span>
              </div>
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-800 w-16"
                style={{ backgroundColor: ad.buttonColor }}
              >
                {ad.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ExistingInventoryTable }