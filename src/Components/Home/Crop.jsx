import React, { useState } from "react";
import { Star, X, ShoppingCart } from "lucide-react";

// Public folder images
const cotton2 = "/Booster1.png";
const cotton4 = "/Convervex.png";
const cotton5 = "/Theorem.png";
const cotton6 = "/Axle.png";
const cotton7 = "/Blackhwk.png";
const cotton8 = "/Bul.png";
const cotton9 = "/Cluster.png";
const cotton10 = "/Ranch.png";
const cotton11 = "/Ratel.png";
const cotton12 = "/Reboot.png";
const cotton13 = "/Ridge.png";
const cotton14 = "/Traegerr.png";
const cotton15 = "/Combox.png";
const cotton16 = "Naqash.png";

export default function CoverImg() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // ✅ Products
  const products = [
   {
            img: cotton2,
            title: "Booster",
            price: "$60",
            desc: (
                <p className="text-right text-black" >
                    بوسٹر ایک چھچھوندر کش زہر ہے جو مخصوص طریقے سے تیار کی جاتی ہے۔ یہ پانی میں حل پذیر ہے
                    اور پتیوں پر چھڑکاؤ کے قابل ہے۔ بارش سے دھلنے سے محفوظ رہتی ہے اور پودوں کو بیماریوں سے بچاتی ہے۔
                    بوسٹر کے استعمال سے پودوں کی نشوونما بہتر ہوتی ہے اور پھلوں کے رنگ و معیار میں اضافہ ہوتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> گنا <br />
                    <span className="text-red-600 font-bold">نقصان دہ کیڑے:</span> بوررز <br />
                    <span className="text-purple-600 font-bold">مقدار زیر فی ایکڑ:</span> 6.06 - 9.06 کلو گرام فی ایکڑ <br />
                    <span className="text-green-600 font-bold">(PHI)</span> استعمال اور برداشت کے درمیان وقفہ: 30 دن <br />
                    <span className="text-orange-600 font-bold">(REI)</span> اسپرے کے بعد کم از کم 12 گھنٹے بعد کھیت میں داخل ہوں۔
                </p>
            ),
        },


        {
            img: cotton4,
            title: "Convervex",
            price: "$60",
            desc: (
                <p className="text-right text-black" >
                    کنوریسکس دو طاقتور زہروں کی بہترین کمبین اور کپاس کی گولائیڈ کا محفوظ مرکب ہے،
                    جو اپنی اثرات پچھری اور
                    <span className="text-green-700 font-bold"> ٹرانسلیمینر (Translaminar)</span>
                    اثر سے فصلات کی بیماریوں کے خلاف نہایت مؤثر ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> ترشاوہ پھل، کھیرا، پپیتا <br />
                    <span className="text-red-600 font-bold">بیماریاں:</span> سٹرکین کینکر، ڈاؤنی میلڈیو <br />
                    <span className="text-purple-600 font-bold">مقدار:</span> 90 تا 400 گرام فی 100 لیٹر پانی
                </p>
            ),
        },

        {
            img: cotton5,
            title: "Theorem™ Herbicide",
            price: "$80",
            desc: (
                <p className="text-right text-black" >
                    تھیورم™ مکئی اور مکادی میں اگنے والی جڑی بوٹیوں کے کنٹرول کے لیے مؤثر ہے۔
                    یہ پودوں میں جذب ہو کر خوراک کی فراہمی کو روکتا ہے اور کچھ دنوں میں جڑی بوٹیوں کا مکمل خاتمہ کر دیتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> مکئی <br />
                    <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 495 سے 727 ملی لیٹر <br />
                    <span className="text-purple-600 font-bold">طریقہ استعمال:</span> اسپرے کے لئے 100 تا 150 لیٹر پانی فی ایکڑ استعمال کریں۔
                </p>
            ),
        },
        {
            img: cotton6,
            title: "Axcel Tool",
            price: "$65",
            desc: (
                <p className="text-right text-black" >
                    <span className="font-bold text-green-700">ایکسپل</span> سینتھٹک پائرتھمائیڈ گروپ کا ایک
                    وسیع الاثر کیڑا مار زہر ہے۔ یہ اپنے خوردنی زہریلے اثر کی وجہ سے کتر کر کھانے والے کیڑوں کے خلاف
                    انتہائی مؤثر ہے۔ <span className="font-bold text-green-700">ایکسپل</span> کپاس کے علاوہ ترشاوہ پھل
                    اور آم کے ضرررساں کیڑوں کے خلاف بھی بے حد مؤثر ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">سفارشات برائے استعمال:</span>
                    <br /><br />
                    <span className="text-purple-600 font-bold">فصل:</span> کپاس <br />
                    <span className="text-red-600 font-bold">کیڑے:</span> گلابی، چستہ کیڑا، امریکی سنڈی، سفید مکھی، جیسڈ، تھرپس <br />
                    <span className="text-green-600 font-bold">مقدار:</span> 250 ملی لیٹر فی ایکڑ <br /><br />
                    <span className="text-purple-600 font-bold">فصل:</span> سٹرَس <br />
                    <span className="text-red-600 font-bold">کیڑے:</span> لیف مائنر <br />
                    <span className="text-green-600 font-bold">مقدار:</span> 100 لیٹر پانی میں 20 ملی لیٹر <br /><br />
                    <span className="text-purple-600 font-bold">فصل:</span> آم <br />
                    <span className="text-red-600 font-bold">کیڑے:</span> ہاپر <br />
                    <span className="text-green-600 font-bold">مقدار:</span> 100 لیٹر پانی میں 50 ملی لیٹر <br /><br />
                    <span className="text-purple-600 font-bold">فصل:</span> سیب <br />
                    <span className="text-red-600 font-bold">کیڑے:</span> مائٹس <br />
                    <span className="text-green-600 font-bold">مقدار:</span> 100 لیٹر پانی میں 20 ملی لیٹر <br /><br />
                    <span className="text-orange-600 font-bold">طریقہ استعمال:</span> کیلیبریشن کے ذریعے فی ایکڑ پانی کا تعین کریں۔
                    اسپرے ٹینک کو آدھا بھر کر دوا شامل کریں اور پھر مکمل پانی ڈالیں۔ اس طرح اسپرے کریں کہ تمام پودے
                    اچھی طرح تر ہو جائیں۔ اسپرے کیلئے ہالوکن استعمال کریں۔
                </p>
            ),
        },
        {
    img: cotton16,
    title: "Naqash 21% EC",
    price: "800–1000 ملی لیٹر فی ایکڑ",
    desc: (
        <p className="text-right text-black">
            نقاش (<span className="text-green-600 font-bold">امائیڈ ابروٹنا + لمبڈا ہائی پائروتھرین</span>) 
            کپاس کی سنڈیوں اور چوسنے والے کیڑوں کے خلاف موثر اور فوری اثر کرتا ہے۔  
            یہ کپاس کے پتوں میں انڈوں اور پتوں کی سنڈیوں کا خاتمہ کرنے میں نہایت کارآمد ہے 
            اور زیادہ پیداوار کو یقینی بناتا ہے۔  
            <br /><br />

            <span className="text-blue-600 font-bold">فصل:</span> کپاس <br />
            <span className="text-red-600 font-bold">نقصان دہ کیڑے:</span> چتکبری سنڈی، گلابی سنڈی، امریکن سنڈی <br />
            <span className="text-purple-600 font-bold">مقدار فی ایکڑ:</span> 800–1000 ملی لیٹر <br />
            <span className="text-pink-600 font-bold">طریقہ استعمال:</span> 
            اسپرے مشین (Calibration) کے ذریعے فی ایکڑ 100 تا 120 لیٹر پانی میں ملا کر استعمال کریں۔  
            اس بات کو یقینی بنائیں کہ سپرے یکساں طور پر ہو تاکہ بہترین نتائج حاصل ہوں۔  
        </p>
    ),
},
{
    img: cotton7,
    title: "BLACK HAWK 40% EC",
    price: "1000 ملی لیٹر",
    desc: (
        <p className="text-right text-black">
            بلیک ہاک نامی قائیفو گروپ سے تعلق رکھنے والی ایک مؤثر <span className="text-green-600 font-bold">انسیکٹی سائیڈ</span> ہے 
            جو کپاس کے لیکی پیٹ، امریکن سنڈی اور بورر کے علاوہ بنانا، چمڑا خور کاٹن تھرپس اور سبزیات کے تیلا کے 
            خاتمے کے لیے بہترین ہے۔ یہ کیڑوں کی نشوونما کو روک کر ان کے خلاف کام کرتی ہے۔
            <br /><br />
            
            <span className="text-blue-600 font-bold">فصلیں:</span> کپاس، مکئی، چنا، سبزیاں، باغات <br />
            <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 1000–750 ملی لیٹر (فصل کے مطابق) <br />
            <span className="text-purple-600 font-bold">پانی فی ایکڑ:</span> 100–200 لیٹر (کیلیبریشن کے مطابق) <br />
            <br />
            
            <span className="text-pink-600 font-bold">مسائل جن پر مؤثر:</span><br />
            ⚬ امریکن سنڈی، چیکڑی، گلابی سنڈی، لیکی پیٹ <br />
            ⚬ کاٹن تھرپس اور بورر کیڑوں کا مؤثر کنٹرول <br />
            ⚬ سبزیات اور باغات میں رس چوسنے والے کیڑوں کا خاتمہ <br />
            ⚬ بھنڈی اور دیگر سبزیوں پر سفید مکھی کا کنٹرول <br />
            <br />
            
            <span className="text-pink-600 font-bold">طریقہ استعمال:</span><br />
            ⚬ اسپرے کے لیے پانی کی صحیح مقدار منتخب کریں۔ <br />
            ⚬ فصل کی ضرورت کے مطابق مقدار کو پانی میں حل کریں۔ <br />
            ⚬ کیلیبریشن کے ذریعے پانی اور دوا کی صحیح مقدار طے کریں۔ <br />
            ⚬ بچوں اور جانوروں کی پہنچ سے دور رکھیں۔  
        </p>
    ),
},

        {
            img: cotton8,
            title: "Buldoz",
            price: "$85",
            desc: (
                <p className="text-right text-black" >
                    <span className="font-bold text-green-700">بَلڈوز</span> وہ مختلف طریقہ اثر رکھنے والے زہروں
                    کا طاقتور اور دانے دار مکسچر ہے جو کترنے اور سُرس چبانے والے کیڑوں کے خلاف نہایت مؤثر ہے۔
                    یہ کیڑوں کو اُن کے اعصابی نظام میں خلل ڈال کر ختم کرتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> گنا <br />
                    <span className="text-red-600 font-bold">نقصان دہ کیڑے:</span> بوررز <br />
                    <span className="text-green-600 font-bold">مقدار زیر فی ایکڑ:</span> 6.06 - 9.06 کلو گرام <br /><br />
                    <span className="text-orange-600 font-bold">(PHI):</span> استعمال اور برداشت کے درمیان وقفہ 30 دن <br />
                    <span className="text-orange-600 font-bold">(REI):</span> اسپرے کے بعد کم از کم 12 گھنٹے بعد کھیت میں داخل ہوں
                </p>
            ),
        },
        {
            img: cotton9,
            title: "Cluster",
            price: "$75",
            desc: (
                <p className="text-right text-black" >
                    کلسٹر ایک جدید اور مؤثر <span className="text-green-600 font-bold">انسیکٹی سائڈ</span> ہے،
                    جو فصلوں میں نقصان دہ کیڑوں کے خلاف فوری اور دیرپا کنٹرول فراہم کرتا ہے۔
                    یہ پودے کے پتوں میں جذب ہو کر کیڑوں کو ختم کرتا ہے اور فصل کو محفوظ بناتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> کپاس، مکئی، سبزیاں <br />
                    <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 200 تا 300 ملی لیٹر <br />
                    <span className="text-purple-600 font-bold">طریقہ استعمال:</span> اسپرے کے ذریعے 100 تا 120 لیٹر پانی فی ایکڑ استعمال کریں۔
                </p>
            ),
        },
        {
            img: cotton10,
            title: "Reboot",
            price: "$90",
            desc: (
                <p className="text-right text-black" >
                    ریبوٹ ایک طاقتور <span className="text-green-600 font-bold">فنگسائڈ</span> ہے جو فصلوں کو
                    مختلف بیماریوں سے محفوظ رکھتا ہے اور پودوں کی قوت مدافعت کو بڑھاتا ہے۔
                    اس کا استعمال فصل کو صحت مند اور زیادہ پیداوار کے قابل بناتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> گندم، کپاس، سبزیاں <br />
                    <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 250 تا 400 ملی لیٹر <br />
                    <span className="text-purple-600 font-bold">طریقہ استعمال:</span> اسپرے کے ذریعے 100 تا 120 لیٹر پانی فی ایکڑ استعمال کریں۔
                </p>
            ),
        }
        ,
        {
            img: cotton13,
            title: "Ranch",
            price: "$70",
            desc: (
                <p className="text-right text-black" >
                    رینچ ایک مؤثر <span className="text-green-600 font-bold">انسیکٹی سائیڈ</span> ہے جو فصلوں کو
                    نقصان دہ کیڑوں سے بچاتا ہے اور ان کے حملے کو فوراً ختم کرتا ہے۔
                    یہ پودوں کی نشوونما کو بہتر بناتا ہے اور زیادہ پیداوار کو یقینی بناتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> کپاس، مکئی، سبزیاں <br />
                    <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 300 تا 500 ملی لیٹر <br />
                    <span className="text-purple-600 font-bold">طریقہ استعمال:</span> اسپرے کے ذریعے 100 تا 120 لیٹر پانی فی ایکڑ استعمال کریں۔
                </p>
            ),
        },
        {
            img: cotton14,
            title: "Tragers",
            price: "$65",
            desc: (
                <p className="text-right text-black" >
                    ٹریگرز ایک طاقتور <span className="text-green-600 font-bold">فنگسائیڈ</span> ہے جو
                    فصلوں میں پیدا ہونے والی بیماریوں کو مؤثر طریقے سے کنٹرول کرتا ہے۔
                    یہ پتوں پر لگنے والی بیماریوں کو ختم کر کے فصل کو صحت مند اور بہتر پیداوار کے قابل بناتا ہے۔
                    <br /><br />
                    <span className="text-blue-600 font-bold">فصل:</span> کپاس، سبزیاں، گندم <br />
                    <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 200 تا 400 ملی لیٹر <br />
                    <span className="text-purple-600 font-bold">طریقہ استعمال:</span> اسپرے کے لئے 100 تا 120 لیٹر پانی فی ایکڑ استعمال کریں۔
                </p>
            ),
        },
{
    img: cotton15,
    title: "Combox 42% EC",
    price: "1000 ملی لیٹر",
    desc: (
        <p className="text-right text-black">
            کومباکس ایک مؤثر <span className="text-green-600 font-bold">انسیکٹی سائیڈ</span> ہے 
            جو کپاس کی فصل کو نقصان دہ کیڑوں سے بچانے کے لیے استعمال کی جاتی ہے۔ 
            یہ فوری طور پر اثر کرتی ہے اور فصل کو بہتر پیداوار میں مدد دیتی ہے۔
            <br /><br />
            
            <span className="text-blue-600 font-bold">فصل:</span> کپاس <br />
            <span className="text-red-600 font-bold">مقدار فی ایکڑ:</span> 1000 ملی لیٹر <br />
            <span className="text-purple-600 font-bold">طریقہ استعمال:</span> 
            اسپرے کے ذریعے پانی میں ملا کر استعمال کریں۔  
            <br /><br />
            
            <span className="text-pink-600 font-bold">اہم ہدایات:</span><br />
            ⚬ کیڑے کی شدت دیکھتے ہوئے سپرے کریں۔ <br />
            ⚬ صحیح وقت پر استعمال کریں (صبح یا شام)۔ <br />
            ⚬ اگلے 48–24 گھنٹے تک بارش نہ ہو۔ <br />
            ⚬ بچوں اور جانوروں کی پہنچ سے دور رکھیں۔  
        </p>
    ),
},


  ];

  // ✅ Rating Component
  const Rating = () => (
    <div className="flex items-center mt-1">
      {Array(5).fill(0).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
      <span className="ml-2 text-sm text-gray-500">(12)</span>
    </div>
  );

  // ✅ Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === product.title);
      if (existing) {
        return prev.map((item) =>
          item.title === product.title ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setShowCart(true); // ✅ Add hone ke baad direct cart khul jaye
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const updateQty = (title, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace("$", "")) * item.qty,
    0
  );

  // ✅ Card Component
  const Card = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <img src={product.img} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <Rating />
      <p className="text-green-600 font-bold">{product.price}</p>
      <div className="flex mt-2">
        <button
          onClick={() => {
            setSelectedProduct(product);
            setShowForm(false);
          }}
          className="bg-[#76B74E] text-black px-4 py-2 rounded-lg mx-auto flex items-center hover:bg-green-700 transition"
        >
          Explore
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-10">
      {/* ✅ Cart Top Right */}
      <div className="flex justify-end mb-4">
        <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
          <ShoppingCart className="w-8 h-8 text-green-700" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

     {/*  Cart Drawer */}
{showCart && (
  <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
    <div className="bg-white w-96 h-full p-6 shadow-lg relative">
      {/* 🔙 Back Option in Cart */}
      <button
        onClick={() => setShowCart(false)}
        className="absolute top-2 left-2 bg-green-700 text-black px-3 py-1 rounded hover:bg-green-800 z-50"
      >
        ← Back
      </button>
      <button onClick={() => setShowCart(false)} className="absolute top-2 right-2 z-50">
        <X className="w-5 h-5" />
      </button>

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">
                  {item.price} × {item.qty}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(item.title, -1)} className="px-2 bg-gray-200 rounded">-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.title, 1)} className="px-2 bg-gray-200 rounded">+</button>
                <button onClick={() => removeFromCart(item.title)} className="text-red-600 ml-2">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 border-t pt-4">
        <p className="font-bold">Total: ${total}</p>
        <button className="bg-green-600 text-black px-4 py-2 rounded w-full mt-2 hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  </div>
)}

      {/* ✅ Title */}
      <h1 className="text-3xl font-bold text-center" style={{ color: "#76B74E" }}>
        Our  Products
      </h1>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((p, i) => (
          <Card key={i} product={p} />
        ))}
      </div>

      {/* ✅ Explore Modal */}
      {selectedProduct && !showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg relative max-w-6xl w-full max-h-[90vh] overflow-y-auto flex">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2">
              <X color="black" />
            </button>
            {/* 🔙 Back */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 left-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              ← Back
            </button>

            {/* Left: Product */}
            <div className="flex-1 pr-6 border-r">
              <div className="text-center">
                <img src={selectedProduct.img} alt={selectedProduct.title} className="w-44 mx-auto" />
                <h2 className="text-xl font-bold mt-2">{selectedProduct.title}</h2>
                <div className="mt-2">{selectedProduct.desc}</div>
                <p className="text-green-600 font-bold mt-2">{selectedProduct.price}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-1/2 bg-green-600 text-black py-2 rounded"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    className="w-1/2 bg-yellow-400 text-black py-2 rounded flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Related */}
            <div className="w-1/3 pl-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">You may also like</h3>
              <div className="grid grid-cols-2 gap-4">
                {products
                  .filter((p) => p.title !== selectedProduct.title)
                  .slice(0, 8)
                  .map((p, i) => (
                    <div key={i} className="bg-gray-50 shadow-sm hover:shadow-md rounded-xl p-3 text-center">
                      <img src={p.img} alt={p.title} className="w-28 h-28 object-contain mb-2" />
                      <p className="text-sm font-semibold text-gray-700">{p.title}</p>
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setShowForm(false);
                        }}
                        className="mt-2 text-xs bg-[#76B74E] hover:bg-green-700 text-black px-3 py-1 rounded-lg"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Order Form Modal */}
      {selectedProduct && showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-6 text-black rounded-lg relative max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* 🔙 Back */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 left-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              ← Back
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setSelectedProduct(null);
              }}
              className="absolute top-2 right-2"
            >
              <X color="black" />
            </button>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-40 mx-auto mb-4" />
            <form className="mt-4 space-y-3 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold">Order Form</h3>
              <input type="text" placeholder="Sub Total" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Total Bill" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Delivery Charges" className="w-full p-2 border rounded" />
              <textarea placeholder="Grand Total" className="w-full p-2 border rounded"></textarea>
              <p className="font-semibold">Payment Method</p>
              <textarea placeholder="Cash On Delivery" className="w-full p-2 border rounded"></textarea>
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
              <textarea placeholder="Address" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-800 w-full">
                SUBMIT ORDER
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
