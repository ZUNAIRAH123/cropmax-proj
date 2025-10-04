import React, { useState } from "react";
import { Star, X, ShoppingCart } from "lucide-react";

// Public folder images
const cotton2 = "/cotton.png";
const cotton4 = "/maize.png";
const cotton5 = "/rubi.jpeg";
const cotton6 = "/oil.png";
const cotton7 = "/Blackhwk.png";
const cotton8 = "/summer1.png";
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
  title: "Cotton",
  price: "$60",
  desc: (
    <div className="text-right text-black space-y-4 leading-relaxed">

      {/* بیج کا اگاؤ معلوم کرنے کا طریقہ */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        بیج کا اگاؤ معلوم کرنے کا طریقہ
      </h2>
      <p>
        بیج کا اگاؤ معلوم کرنے کے لئے 100 دانے بیج کے لے کر 7 سے 8 دن کے لئے پانی میں بھیگو دیں اور بھیگے ہوئے بیج کپڑے کے ٹکڑے میں لپیٹ کر رکھیں۔ کپڑے کو نم رکھیں اور 7 سے 8 دن کے بعد بیجوں کو دیکھیں۔ جو بیج اگ آئے ہوں، ان کی گنتی کریں۔ بیج کے اگے ہوئے دانوں کی تعداد کو 100 پر تقسیم کریں اور پھر 100 سے ضرب دیں۔ یہ بیج کا اگاؤ فیصد ہوگا۔
      </p>

      {/* بیج سے اگاؤ جانچنا */}
      <h2 className="bg-blue-200 text-blue-900 font-bold px-2 py-1 rounded">
        بیج سے اگاؤ جانچنا
      </h2>
      <p>
        کپاس کی کاشت کے لئے زراعت طور پر تیار شدہ بیج کا استعمال کریں۔ اگر بیج تیار شدہ نہ ہو تو پہلے اس کا اگاؤ جانچیں۔ بیج کے اگاؤ معلوم کرنے کے لئے کپاس کے بیج کو کپڑے میں لپیٹ کر نم جگہ پر رکھیں۔ 7 سے 8 دن بعد کپڑا کھول کر بیج دیکھیں۔ جو بیج اگ آئے ہوں، ان کی گنتی کریں۔ بیج کے اگاؤ کی شرح اگر 75 فیصد سے زیادہ ہو تو کاشت کے لئے موزوں ہے۔
      </p>

      {/* کپاس کی کاشت کے لئے شرحِ بیج */}
      <h2 className="bg-yellow-200 text-yellow-900 font-bold px-2 py-1 rounded">
        کپاس کی کاشت کے لئے شرحِ بیج
      </h2>
      <p>
        کپاس کی بہتر پیداوار کے لئے منظور شدہ اقسام کا بیج استعمال کریں۔ شرح بیج کا انحصار زمین کی قسم، تیاری، نمی اور کاشت کے طریقے پر ہوتا ہے۔ کپاس کی بہتر پیداوار کے لئے درج ذیل جدول کے مطابق بیج استعمال کریں۔ بیج کی شرح مختلف عوامل کے تحت کم یا زیادہ کی جا سکتی ہے۔
      </p>
      <ul className="list-disc pr-5 space-y-1">
        <li>75 یا زیادہ → 5 تا 8 کلوگرام فی ایکڑ</li>
        <li>ڈرل سے کاشت → 3 تا 5 کلوگرام فی ایکڑ</li>
        <li>کم اگاؤ → 10 کلوگرام تک</li>
        <li>اچھے اگاؤ کی صورت میں بیج کی شرح کم رکھیں</li>
        <li>فیصد 60 سے کم ہو تو بیج کی مقدار بڑھا دیں</li>
      </ul>

      {/* کپاس 2025 پیداوار ی نصاب */}
      <h2 className="bg-red-200 text-red-900 font-bold px-2 py-1 rounded">
        کپاس 2025 - پیداوار ی نصاب
      </h2>
      <p>
        کپاس ہمارے ملک کی معیشت کی ناہید ہے۔ یہ ایک اہم نقد آور فصل ہے۔ ہماری زراعت کے لئے ریڑھ کی ہڈی کی حیثیت رکھتی ہے۔ اس کی ملکی معیشت میں اہمیت کے پیش نظر کسان بھائیوں کو کپاس کی پیداوار میں اضافے کے لئے جدید ٹیکنالوجی کو بروئے کار لانا ہوگا تاکہ ملکی ضروریات کو پورا کرنے کے ساتھ ساتھ برآمدات میں بھی اضافہ ہو سکے۔ کپاس کی فی ایکڑ پیداوار میں اضافے کے لئے ہمیں کپاس کی فصل میں موسم کے اثرات، کیڑوں کے حملے، کھادوں کے متوازن استعمال، جدید زرعی مشینری، وقت پر پانی دینے، اور بروقت کاشت کرنے کے اصولوں پر عمل کرنا ہوگا۔
      </p>

      {/* موسمیاتی تبدیلیوں کے اثرات */}
      <h2 className="bg-purple-200 text-purple-900 font-bold px-2 py-1 rounded">
        کپاس کی فصل پر موسمیاتی تبدیلیوں کے اثرات
      </h2>
      <p>
        موسمیاتی تبدیلیوں کے سبب پھپوندی، جڑی بوٹیوں اور مختلف ضرر رساں کیڑوں میں بھی اضافہ ہو رہا ہے جس سے فصلوں کی پیداوار اور معیار متاثر ہوتے ہیں۔ ان اثرات سے بچاؤ کے لئے زرعی ماہرین کی ہدایات پر عمل کرنا نہایت ضروری ہے۔ گزشتہ سال بارشوں کی وجہ سے کپاس کی فصل کو شدید نقصان ہوا تھا۔ اس سے نمٹنے کے لئے کسان بھائیوں کو موسمی پیشگوئی پر نظر رکھنی چاہیے تاکہ کسی بھی غیر متوقع صورتحال کے لئے حکمت عملی بنائی جا سکے۔
      </p>

      {/* گزشتہ پانچ سالوں کا ڈیٹا */}
      <h2 className="bg-gray-300 text-gray-900 font-bold px-2 py-1 rounded">
        گزشتہ پانچ سالوں میں کپاس کی کاشت، رقبہ، پیداوار اور اوسط پیداوار
      </h2>
      <table className="w-full border border-black text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-black px-2">سال</th>
            <th className="border border-black px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border border-black px-2">پیداوار (ہزار بیلز)</th>
            <th className="border border-black px-2">کل پیداوار (کلوگرام فی ہیکٹر)</th>
            <th className="border border-black px-2">اوسط پیداوار (40 کلوگرام فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black">2019-20</td>
            <td className="border border-black">1879.73</td>
            <td className="border border-black">4645</td>
            <td className="border border-black">6306</td>
            <td className="border border-black">1610</td>
          </tr>
          <tr>
            <td className="border border-black">2020-21</td>
            <td className="border border-black">1546.27</td>
            <td className="border border-black">3821</td>
            <td className="border border-black">5044</td>
            <td className="border border-black">1566</td>
          </tr>
          <tr>
            <td className="border border-black">2021-22</td>
            <td className="border border-black">1279.19</td>
            <td className="border border-black">3161</td>
            <td className="border border-black">5168</td>
            <td className="border border-black">1939</td>
          </tr>
        </tbody>
      </table>

      {/* 2022-2025 کا ڈیٹا */}
      <h2 className="bg-orange-200 text-orange-900 font-bold px-2 py-1 rounded mt-3">
        2022 تا 2025 کا ڈیٹا
      </h2>
      <table className="w-full border border-black text-center">
        <thead className="bg-orange-100">
          <tr>
            <th className="border border-black px-2">سال</th>
            <th className="border border-black px-2">پیداوار (ہزار بیلز)</th>
            <th className="border border-black px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border border-black px-2">پیداوار (کلوگرام فی ہیکٹر)</th>
            <th className="border border-black px-2">اوسط پیداوار (40 کلوگرام فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black">2022-23</td>
            <td className="border border-black">1485.00</td>
            <td className="border border-black">3670</td>
            <td className="border border-black">3210</td>
            <td className="border border-black">1038</td>
          </tr>
          <tr>
            <td className="border border-black">2023-24</td>
            <td className="border border-black">1680.00</td>
            <td className="border border-black">4152</td>
            <td className="border border-black">6028</td>
            <td className="border border-black">1722</td>
          </tr>
          <tr>
            <td className="border border-black">2024-25</td>
            <td className="border border-black">1303.00</td>
            <td className="border border-black">3221</td>
            <td className="border border-black">3838</td>
            <td className="border border-black">1413</td>
          </tr>
        </tbody>
      </table>

      {/* بیج کو زہر لگا کر بونا */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded mt-3">
        بیج کو زہر لگا کر بونا
      </h2>
      <p>
        بونے سے پہلے کپاس کے بیج کو بیماریوں کے خلاف بچاؤ کے لیے زہر لگانا ضروری ہے۔ اس مقصد کے لئے فنجیسائیڈ استعمال کریں۔ بیج کو زہر لگانے سے فصل کے ابتدائی دنوں میں پودے بیماریوں سے محفوظ رہتے ہیں اور بڑھوتری بہتر ہوتی ہے۔ بیج کو زہر لگانے کے لئے تجویز کردہ دوائیوں کا استعمال کریں اور مقررہ مقدار کا خیال رکھیں۔ زہر لگانے کے بعد بیج کو فوراً کاشت کریں تاکہ اثر قائم رہے۔
      </p>

      {/* بیج کو لگانے کے لئے سفارش کردہ زہر */}
      <h2 className="bg-blue-200 text-blue-900 font-bold px-2 py-1 rounded">
        بیج کو لگانے کے لئے سفارش کردہ زہر
      </h2>
      <ul className="list-disc pr-5 space-y-1">
        <li>اسٹیمپر یا فنگی سائیڈ: 10 گرام فی کلوگرام بیج</li>
        <li>اکسٹی کلورائیڈ یا کپتان: 9 گرام فی کلوگرام بیج</li>
        <li>اکسٹی کلورائیڈ + میٹالاکسل (مثلاً ریڈومل) : 9 گرام فی کلوگرام بیج</li>
      </ul>
      <p>
        یہ دوائیں کپاس کے بیج کو بیماریوں سے محفوظ رکھتی ہیں اور فصل کی بہتر نشوونما کا باعث بنتی ہیں۔
      </p>

      {/* کھادوں کے استعمال کا طریقہ کار */}
      <h2 className="bg-yellow-200 text-yellow-900 font-bold px-2 py-1 rounded">
        کھادوں کے استعمال کا طریقہ کار
      </h2>
      <p>
        کپاس کی فصل کو زیادہ پیداوار کے لئے متوازن کھادوں کی ضرورت ہوتی ہے۔ زمین کی تیاری کے وقت کھاد ڈالنا سب سے بہتر طریقہ ہے۔ کپاس کے بیج کے اگاؤ اور بڑھوتری کے لئے نائٹروجن، فاسفورس اور پوٹاش کا استعمال کریں۔ کپاس کی فصل کے لئے تجویز کردہ کھادوں کی مقدار درج ذیل ہے:
      </p>
      <ul className="list-disc pr-5 space-y-1">
        <li>فاسفورس والی کھاد زمین کی تیاری کے وقت ڈالیں۔</li>
        <li>پوٹاش والی کھاد بھی بیج کے ساتھ یا زمین کی تیاری کے وقت ڈالیں۔</li>
        <li>نائٹروجن والی کھاد کو تین اقساط میں ڈالیں تاکہ فصل کو مسلسل خوراک ملتی رہے۔</li>
      </ul>

      {/* زنک اور بوران کا استعمال */}
      <h2 className="bg-purple-200 text-purple-900 font-bold px-2 py-1 rounded">
        زنک اور بوران کا استعمال
      </h2>
      <p>
        اچھی پیداوار کے لئے کپاس کو زنک اور بوران جیسے خوردنی اجزاء کی بھی ضرورت ہوتی ہے۔ زنک سلفیٹ (33 فیصد) 5 کلوگرام فی ایکڑ یا 27 فیصد زنک سلفیٹ 7 کلوگرام فی ایکڑ ڈالیں۔ بوران کے لئے بوریکس 10 کلوگرام فی ایکڑ استعمال کریں۔ یہ کھادیں کپاس کی فصل کی جڑوں اور پھولوں کو بہتر بناتی ہیں اور پیداوار میں اضافہ کرتی ہیں۔
      </p>
      <p>
        زنک اور بوران کی کمی سے پودے کی بڑھوتری متاثر ہوتی ہے اور پیداوار میں کمی واقع ہو جاتی ہے۔ اس لیے کپاس کی فصل کے لئے خوردنی اجزاء کا استعمال نہایت ضروری ہے۔
      </p>


        <div className="text-right text-black space-y-4">

            <p className="bg-red-600 text-white font-bold px-2 py-1 rounded">
                کپاس کی فصل کے لئے کھادوں کی سفارشات
            </p>
            ⚬ کپاس کی بہترین نشوونما اور زیادہ پیداوار کے لیے نائٹروجن، فاسفورس اور پوٹاش کی کھادوں کا استعمال ضروری ہے۔<br />
            ⚬ فی ایکڑ اوسط سفارشات درج ذیل ہیں:<br /><br />

            <p className="bg-blue-600 text-white font-bold px-2 py-1 rounded">
                فی ایکڑ کھادوں کی مقدار
            </p>
            ▪ نائٹروجن (N): 90 کلوگرام <br />
            ▪ فاسفورس (P₂O₅): 45 کلوگرام <br />
            ▪ پوٹاش (K₂O): 60 کلوگرام <br />
            ▪ یوریا: 195 کلوگرام <br />
            ▪ ڈی اے پی: 100 کلوگرام <br />
            ▪ پوٹاش: 100 کلوگرام <br /><br />

            <p className="bg-pink-600 text-white font-bold px-2 py-1 rounded">
                اہم ہدایات
            </p>
            ⚬ آدھی یوریا کاشت کے وقت ڈالیں اور باقی پھول آنے پر۔<br />
            ⚬ فاسفورس اور پوٹاش کاشت کے وقت ہی ڈالیں۔<br />
            ⚬ گوبر کی گلی سڑی کھاد ڈالنے سے مٹی کی زرخیزی بہتر رہتی ہے۔<br /><br />

            <p className="bg-green-600 text-white font-bold px-2 py-1 rounded">
                کپاس کی فصل کے لئے اہم زرعی ہدایات
            </p>
            ⚬ اچھی پیداوار کے لئے بیج کا انتخاب انتہائی اہم ہے۔<br />
            ⚬ سفارش کردہ اقسام کا بیج استعمال کریں۔<br />
            ⚬ بیج کو کاشت سے پہلے زہر لگا کر بوئیں۔<br />
            ⚬ کاشت ہمیشہ موزوں وقت پر کریں تاکہ اچھی پیداوار حاصل ہو۔<br />
            ⚬ جڑی بوٹیوں کی تلفی پر خاص توجہ دیں۔<br /><br />

            <p className="bg-purple-600 text-white font-bold px-2 py-1 rounded">
                کپاس کی فصل کو نقصان پہنچانے والے عوامل
            </p>
            ⚬ کیڑے مکوڑے (امریکن سنڈی، گلابی سنڈی، سفید مکھی) <br />
            ⚬ بیماریوں کا حملہ (پتوں کا جھلساؤ، جڑ سڑ بیماری) <br />
            ⚬ غذائی کمی (بوران، زنک وغیرہ) <br /><br />

            <p className="bg-blue-600 text-white font-bold px-2 py-1 rounded">
                کپاس کی اچھی فصل کے لئے سفارشات
            </p>
            ⚬ صحیح مقدار میں کھاد ڈالیں۔<br />
            ⚬ کیڑوں اور بیماریوں کے حملے پر فوری سپرے کریں۔<br />
            ⚬ وقت پر گوڈی کریں تاکہ جڑیں مضبوط ہوں۔<br />
            ⚬ وقت پر پانی لگائیں لیکن زیادہ پانی سے بچیں۔<br />
            ⚬ نامیاتی کھاد کے ساتھ کیمیائی کھادوں کا استعمال کریں۔<br /><br />

            <p className="bg-red-600 text-white font-bold px-2 py-1 rounded">
                مزید ہدایات
            </p>
            ⚬ زمین کو اچھی طرح ہموار کریں۔<br />
            ⚬ فصل کو وقت پر چنیں تاکہ معیار بہتر رہے۔<br />
            ⚬ بچوں اور جانوروں کو کھیت میں سپرے کے وقت نہ جانے دیں۔<br />
            ⚬ خالی ڈبے اور بوتلیں مناسب طریقے سے تلف کریں۔<br />
        </div>
        <div className="text-right text-black space-y-4 leading-relaxed">

      {/* پیسٹ سروے کا وقت */}
      <h2 className="bg-[#76B74E] text-white font-bold px-3 py-2 rounded-lg inline-block">
        پیسٹ سروے کا وقت
      </h2>
      <p>
        اسپرے کے فیصلوں کا انحصار کیڑوں کے سروے اور ان کی تعداد پر ہوتا ہے۔  
        اس لیے ہر ہفتے باقاعدگی سے سروے کریں۔ خاص طور پر  
        <span className="text-blue-700 font-bold"> صبح 10 سے 12 بجے </span>  
        اور  
        <span className="text-blue-700 font-bold"> دوپہر 2 سے 4 بجے (I.P.M)</span>  
        کے اوقات میں سروے کریں۔
      </p>

      {/* فائدہ */}
      <h2 className="bg-green-200 text-green-900 font-bold px-3 py-2 rounded-lg inline-block">
        پیسٹ سروے کا فائدہ
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>کیڑوں کے اعداد کے ساتھ ساتھ فصل کو کیڑوں سے ہونے والے نقصانات سے بچانا</li>
        <li>اقتصادی نقصان سے بچنا</li>
        <li>کیڑوں کی زندگی کے مختلف مراحل جیسے انڈا، بچہ، سنڈی، پھل اور بالغ میں پہچان</li>
        <li>کیڑوں کی افزائش اور خوراک لینے کا عمل روکنا</li>
        <li>کیڑوں اور ان کے قدرتی دشمن کی پہچان</li>
        <li>کیڑوں کی مزاحمت کی روک تھام</li>
      </ul>

      {/* سفید مکھی */}
      <h2 className="bg-blue-200 text-blue-900 font-bold px-3 py-2 rounded-lg inline-block">
        سفید مکھی کی مینجمنٹ کیلئے پھپھوندی کا استعمال
      </h2>
      <p>
        <span className="text-green-700 font-bold">پودوں کا استعمال:</span> ایک ایکڑ میں 12-20 کلوگرام۔  
        بیج سے پہلے 15 کلوگرام اور بیج کے بعد 20 کلوگرام فی ایکڑ استعمال کریں۔
      </p>
      <p>
        <span className="text-green-700 font-bold">ٹیلوں کا استعمال:</span> ایک ایکڑ میں 15-20 ٹیلے ڈالیں،  
        ہر ٹیلے میں 5 کلوگرام۔
      </p>
      <div className="text-right text-black space-y-6 leading-relaxed">
        {/* پیسٹ سروے کا وقت */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          پیسٹ سروے کا وقت
        </h2>
        <p>
          اسپرے کے فیصلوں کا انحصار کیڑوں کے سروے اور ان کی تعداد پر ہوتا ہے۔
          اس لیے ہر ہفتے باقاعدگی سے سروے کریں۔ خاص طور پر دوپہر 10 سے 12 بجے
          اور دوپہر 2 سے 4 بجے (I.P.M) کے اوقات میں سروے کریں۔
        </p>

        {/* پیسٹ سروے کا فائدہ */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          پیسٹ سروے کا فائدہ
        </h2>
        <ul className="list-disc pr-5 space-y-1">
          <li>کیڑوں کے اعداد کے ساتھ ساتھ فصل کو کیڑوں سے ہونے والے نقصانات سے بچانا</li>
          <li>اقتصادی نقصان سے بچنا</li>
          <li>کیڑوں کی زندگی کے مختلف مراحل جیسے کہ انڈا، بچہ، سنڈی، پھل اور بالغ میں پہچان</li>
          <li>کیڑوں کی افزائش اور خوراک لینے کا عمل جو فصل کو نقصان پہنچاتا ہے</li>
          <li>کیڑوں اور ان کے قدرتی دشمن کی پہچان</li>
          <li>کیڑوں کی مزاحمت کی روک تھام</li>
        </ul>

        {/* سفید مکھی */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          سفید مکھی کی مینجمنٹ کے لیے پھپھوندی کا استعمال
        </h2>
        <p>
          <strong>پودوں کا استعمال:</strong> ایک ایکڑ میں پودوں کا استعمال 12-20 کلو گرام کے حساب سے کریں۔  
          بیج سے پہلے بونے کے لیے 15 کلو گرام فی ایکڑ اور بیج کے بعد 20 کلو گرام فی ایکڑ استعمال کریں۔
        </p>
        <p>
          <strong>ٹیلوں کا استعمال:</strong> ایک ایکڑ میں 15 سے 20 ٹیلے ڈالیں، اور ہر ٹیلے میں 5 کلو گرام استعمال کریں۔
        </p>

        {/* گلابی سنڈی */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          گلابی سنڈی کیلئے پتے پھندوں کا استعمال
        </h2>
        <p>
          گلابی سنڈی کے لیے پتے پھندوں کا استعمال 12 کلو گرام کے حساب سے کریں۔ اس طرح ایک مربع کلو میٹر میں 1200 پتے پھندے استعمال کریں۔
        </p>
        <p>
          <strong>طریقہ کار:</strong> پتے پھندوں کو ایک ہفتے میں دو دفعہ ڈالیں۔ ہر صبح و شام میں پندرہ منٹ تک ڈالیں۔
        </p>

        {/* چتکبری اور لشکری سنڈی */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          چتکبری اور لشکری سنڈی کا استعمال
        </h2>
        <p>
          <strong>گلابی اور چتکبری سنڈی:</strong> ایک ایکڑ میں 150 سے زیادہ سنڈیاں موجود ہوں تو اسپرے کریں۔
        </p>
        <p>
          <strong>لشکری سنڈی:</strong> ایک ایکڑ میں 8 سنڈیاں موجود ہوں تو اسپرے کریں۔
        </p>

        {/* کیڑوں کے لیے پھپھوندی */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          کیڑوں کے لیے پھپھوندی کا استعمال
        </h2>
        <p>
          <strong>فصل کی صورت:</strong> فصل پر پھپھوندی کا استعمال 20 ملی لیٹر فی ایکڑ میں کریں اور ہر 15 دن کے وقفے سے دوبارہ اسپرے کریں۔  
          اگر بیماریوں کا حملہ شدید ہو تو 15 دن کے وقفے سے 3 بار اسپرے کریں۔
        </p>
        <p>
          <strong>بیج کا استعمال:</strong> ایک ایکڑ میں بیج کا استعمال 12-20 کلو گرام کے حساب سے کریں۔  
          بیج کے بعد 20 کلو گرام فی ایکڑ استعمال کریں۔
        </p>
      </div>
       <div className="text-right text-black space-y-4 leading-relaxed">
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          سفارشات برائے استعمال
        </h2>
        <p>
          ایکسکل ٹول ایک جدید اور مؤثر کیڑے مار دوا ہے جو کپاس اور دیگر فصلوں میں نقصان دہ کیڑوں کو کنٹرول کرنے کے لیے استعمال ہوتی ہے۔  
          یہ خاص طور پر سفید مکھی، لشکری سنڈی اور چتکبری سنڈی کے خلاف مؤثر ہے۔
        </p>
      </div>
      <div className="text-right text-black space-y-6 leading-relaxed">
        {/* بلیک لیگ سنڈی */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          بلیک لیگ سنڈی اور اس کے انسداد کے لیے اقدامات
        </h2>
        <p>
          بلیک لیگ سنڈی کو کنٹرول کرنے کے لیے وزارت زراعت کی واضح ہدایات کے مطابق اقدامات کریں تاکہ فصل کو نقصان سے بچایا جا سکے۔
        </p>
        <p>
          <strong>ایجنٹس کے لیے پھپھوندی کا استعمال:</strong> فائٹرک پھپھوندی ایک قسم کی پھپھوندی ہے جو صرف ایک ہی قسم کے پھپھوندی پر اثر انداز ہوتی ہے۔  
          یہ بیج سے نکلنے والے پودوں میں شامل ہو کر پھپھوندی کو اندر سے کھا کر ختم کرتی ہے اور فصل کی طاقت کو کم نہیں کرتی۔
        </p>
        <p>
          <strong>بلیک لیگ سنڈیوں کی افزائش:</strong> یہ سنڈیاں پھپھوندی کے ذریعے پودوں پر اثر ڈالتی ہیں لیکن فائٹرک پھپھوندی ان کے اثرات کو ختم کرنے میں مدد دیتی ہے۔
        </p>

        {/* BCI */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          زرعی کیمیکل اور کیڑوں کو استعمال کرنے کی ہدایات (BCI)
        </h2>
        <p>
          <strong>پانی کا استعمال:</strong> پھل، پھول اور پتے پر چھڑکاؤ کریں تاکہ کیڑوں پر قابو پایا جا سکے۔  
        </p>
        <p>
          <strong>نقصانات اور کیڑے:</strong> فصل کو نقصان دہ کیڑوں سے بچائیں تاکہ پیداوار متاثر نہ ہو۔  
        </p>
        <p>
          <strong>فصل کی صحت:</strong> کیڑوں کی افزائش اور خوراک کے مطابق اسپرے کریں تاکہ فصل صحت مند رہے۔  
        </p>
        <p>
          <strong>رنگین مواد:</strong> رنگین مواد کا استعمال کر کے کیڑوں کے اثرات کم کریں۔  
        </p>
        <p>
          <strong>جراثیم کش:</strong> جراثیم کش ادویات کا استعمال کریں تاکہ حملے کا خطرہ کم ہو۔  
        </p>

        {/* کمیٹی کا کام */}
        <h2
          className="text-white font-bold px-2 py-1 rounded text-center"
          style={{ backgroundColor: "#76b74e" }}
        >
          کمیٹی کا کام اور طریقہ کار
        </h2>
        <p>
          <strong>کمیٹی کا کام:</strong> BCI کا مقصد کیڑوں کو مارنا اور فصل کو نقصان سے بچانا ہے۔  
        </p>
        <p>
          <strong>کام کرنے کا طریقہ:</strong> کیڑوں کے خلاف اقدامات کر کے ان کی تعداد کو کنٹرول میں رکھنا ضروری ہے۔  
        </p>
        <p>
          <strong>فصل کا انتظام:</strong> فصل کا بہتر انتظام پیداوار بڑھانے اور صحت مند رکھنے کے لئے ضروری ہے۔  
        </p>
        <p>
          <strong>پانی کا استعمال:</strong> مناسب پانی کے استعمال سے پیداوار اور صحت بہتر ہوتی ہے۔  
        </p>
        <p>
          <strong>رنگین مواد:</strong> پودوں پر رنگین مواد کا استعمال کیڑوں کے اثرات کو کم کرتا ہے۔  
        </p>
      </div>
      {/* گلابی سنڈی */}
      <h2 className="bg-red-200 text-red-900 font-bold px-3 py-2 rounded-lg inline-block">
        گلابی سنڈی کیلئے پتے پھندوں کا استعمال
      </h2>
      <p>
        12 کلوگرام فی ایکڑ کے حساب سے، ایک مربع کلومیٹر میں 1200 پتے پھندے استعمال کریں۔
      </p>
      <p className="text-purple-700 font-bold">طریقہ کار:</p>
      <p>پتے پھندوں کو ہفتے میں دو بار، صبح و شام 15 منٹ تک ڈالیں۔</p>

      {/* چتکبری اور لشکری سنڈی */}
      <h2 className="bg-yellow-200 text-yellow-900 font-bold px-3 py-2 rounded-lg inline-block">
        چتکبری اور لشکری سنڈی کا استعمال
      </h2>
      <p>
        <span className="text-blue-700 font-bold">گلابی و چتکبری سنڈی:</span>  
        ایک ایکڑ میں 150 سے زیادہ سنڈیاں ہوں تو اسپرے کریں۔
      </p>
      <p>
        <span className="text-blue-700 font-bold">لشکری سنڈی:</span>  
        ایک ایکڑ میں 8 سنڈیاں ہوں تو اسپرے کریں۔
      </p>

      {/* پھپھوندی */}
      <h2 className="bg-purple-200 text-purple-900 font-bold px-3 py-2 rounded-lg inline-block">
        کیڑوں کیلئے پھپھوندی کا استعمال
      </h2>
      <p>
        <span className="text-green-700 font-bold">فصل کی صورت:</span>  
        20 ملی لیٹر فی ایکڑ، ہر 15 دن بعد دوبارہ اسپرے۔  
        شدید حملے کی صورت میں 3 بار اسپرے کریں۔
      </p>
      <p>
        <span className="text-green-700 font-bold">بیج کا استعمال:</span>  
        ایک ایکڑ میں 12-20 کلوگرام، بیج کے بعد 20 کلوگرام فی ایکڑ۔
      </p>

    </div>
    
  
<div className="text-right text-black space-y-4 leading-relaxed">
      
      {/* زمین کی تیاری */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        زمین کی تیاری
      </h2>
      <p>
        اچھی فصل کے لئے زمین کو جڑی بوٹیوں سے مکمل طور پر صاف کرنا نہایت ضروری ہے تاکہ کپاس کی فصل کو زیادہ نقصان نہ ہو۔
        زمین کو بھاری ہل سے ایک مرتبہ اور روٹاویٹر سے دو مرتبہ چلا کر اچھی طرح تیار کریں تاکہ زمین میں نمی محفوظ رہے۔
        آخری ہل کے بعد زمین کو ہموار کر لیں۔ اس کے بعد زمین کو پانی لگا کر وتر آنے پر بیج کی کاشت کریں۔
      </p>

      {/* طریقۂ کاشت */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        طریقۂ کاشت
      </h2>
      <p>
        کپاس کی کاشت کے لئے ڈرل کا استعمال کریں تاکہ مناسب فاصلے پر بیج ڈالے جائیں اور یکساں اگاؤ حاصل ہو۔
        ایک ایکڑ کے لئے 8-10 کلوگرام بیج کافی ہوتا ہے۔ ڈرل کے ذریعے بیج 2-3 سینٹی میٹر کی گہرائی میں ڈالیں۔
      </p>
      <ul className="list-disc pr-6 space-y-1">
        <li>کاشت کا وقت: اپریل کے دوسرے پندرہ دن۔</li>
        <li>پودوں کا درمیانی فاصلہ: 9 انچ۔</li>
        <li>قطاروں کا درمیانی فاصلہ: 2.5 فٹ۔</li>
        <li>وتر کاشت کے لئے 12-15 کلو بیج فی ایکڑ استعمال کریں۔</li>
        <li>پودوں کی درست قطاروں میں کاشت سے پیداوار میں اضافہ ہوتا ہے۔</li>
      </ul>

      {/* پچھلی فصلوں کی کاشت */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        پچھلی فصلوں کی کاشت
      </h2>
      <p>
        اس بات کا خیال رکھیں کہ کپاس کے کھیت میں پچھلی فصل جڑی بوٹیوں سے پاک ہو تاکہ کپاس کی پیداوار متاثر نہ ہو۔
        پچھلی فصلوں کی باقیات کو اچھی طرح تلف کر دیں تاکہ زمین میں موجود جڑی بوٹیوں کے بیج ضائع ہو جائیں۔
      </p>

      {/* بیجوں کی تیاری */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        بیجوں کی تیاری
      </h2>
      <p>
        کپاس کی فصل کے لئے صحت مند اور اچھی کوالٹی کا بیج استعمال کریں۔
        بیج کو بوائی سے پہلے فنگس کش اور کیڑے مار دوا سے علاج کریں تاکہ پودوں کو شروع دن سے بیماریوں سے تحفظ ملے۔
      </p>

      {/* جڑی بوٹیوں کے نقصانات */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        جڑی بوٹیوں کے نقصانات
      </h2>
      <ul className="list-disc pr-6 space-y-1">
        <li>جڑی بوٹیاں کپاس کی پیداوار کم کرتی ہیں۔</li>
        <li>غذائی اجزاء اور پانی میں کپاس سے مقابلہ کرتی ہیں۔</li>
        <li>کپاس کی بڑھوتری اور پیداوار پر برا اثر ڈالتی ہیں۔</li>
        <li>پودوں کو دھوپ سے محروم کرتی ہیں۔</li>
        <li>نقصان دہ کیڑوں کی پناہ گاہ بنتی ہیں۔</li>
      </ul>

      {/* تدارک کے طریقے */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        تدارک کے طریقے
      </h2>
      <p>
        جڑی بوٹیوں کو زمین ہموار کرنے کے بعد ہل یا روٹاویٹر سے تلف کریں۔ بوائی کے بعد فصل اگنے سے پہلے جڑی بوٹیوں کو مارنے والی دوائیں استعمال کریں۔
        کپاس کی فصل میں ابتدائی 6-8 ہفتے جڑی بوٹیوں پر خصوصی کنٹرول کریں۔
      </p>

      {/* ٹرپل بین */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        ٹرپل بین، اقسام اور کاٹن سٹک کے خلاف قوت مدافعت
      </h2>
      <p>
        ٹرپل بین کپاس کی ایسی اقسام ہیں جن میں سفید مکھی اور پتہ مروڑ وائرس کے خلاف قوت مدافعت موجود ہے۔
        اس کے استعمال سے کسان اچھی پیداوار لے سکتا ہے۔
      </p>

      {/* جڑی بوٹی مار دوائی */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        جڑی بوٹی مار دوائی کے درست استعمال کا طریقہ کار
      </h2>
      <p>
        ضروری ہے کہ جڑی بوٹی مار دوائی ہمیشہ سفارش کردہ مقدار میں استعمال کی جائے۔
        پانی کے فی 100 لیٹر میں 200 گرام دوائی شامل کریں اور زمین میں یکساں چھڑکاؤ کریں۔
        دوا کا چھڑکاؤ وتر پر کریں تاکہ زیادہ اثر ہو۔ چھڑکاؤ صبح یا شام کے وقت کریں۔
        دوا کے چھڑکاؤ کے بعد کم از کم 24 گھنٹے تک زمین کو پانی نہ لگائیں۔
      </p>

      {/* پچھلی فصلوں کے فوائد */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        پچھلی فصلوں کی کاشت سے فوائد
      </h2>
      <ul className="list-disc pr-6 space-y-1">
        <li>زمین میں موجود جڑی بوٹیوں کے بیج ختم ہوتے ہیں۔</li>
        <li>زمین کی زرخیزی بڑھتی ہے۔</li>
        <li>پیداوار میں اضافہ ہوتا ہے۔</li>
        <li>بیماریوں اور کیڑوں میں کمی آتی ہے۔</li>
        <li>اگلی فصل کے لئے زمین نرم اور تیار ہو جاتی ہے۔</li>
      </ul>

      {/* نائٹروجن کھاد دینا */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        نائٹروجن کھاد دینا
      </h2>
      <p>
        فصل کو اگنے کے بعد پہلی آبپاشی پر نائٹروجن کھاد دیں۔
        اس کے بعد ہر آبپاشی کے ساتھ کھاد ڈالیں۔
        کپاس کو فی ایکڑ 3-4 بوری یوریا کی ضرورت ہوتی ہے۔
      </p>

      {/* کپاس کی اگیتی کاشت */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        کپاس کی اگیتی کاشت میں جڑی بوٹیوں کا انسداد
      </h2>
      <p>
        کپاس کی اگیتی کاشت میں جڑی بوٹیاں زیادہ نقصان کرتی ہیں۔
        ان کے انسداد کے لئے وتر پر کاشت کریں۔
        اس کے علاوہ زمین کو اچھی طرح تیار کریں اور کاشت کے 6-8 ہفتے بعد تک جڑی بوٹیوں پر کنٹرول رکھیں۔
      </p>
    </div>
    </div>
  ),
},
     {
  img: cotton4,
  title:"Maize crop",
  price: "$120",
  desc: (
    <div className="text-right text-black space-y-3">
      <h2 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        پیداواری منصوبہ مکئی 2025
      </h2>
      <p className="font-bold text-green-700">
        محکمہ زراعت حکومت پنجاب
      </p>
      <p>
        مکئی ایک اہم نقد آور فصل ہے۔ سال میں مکئی کی دو فصلیں کاشت ہوتی ہیں، ایک بہاریہ اور دوسری موسمی فصل۔ 
        مکئی کی پیداوار کا زیادہ تر حصہ مرغیوں کی خوراک میں استعمال ہوتا ہے۔ 
        یہ انسانی خوراک کے طور پر بھی مختلف طریقوں سے استعمال ہوتی ہے۔ 
        اس سے نشاستہ، خوردنی تیل، گلوکوز، کسٹرڈ، جیلی، کارن فلیکس اور پاپ کارن وغیرہ بھی تیار کئے جاتے ہیں۔
      </p>
      <p>
        مکئی سے مختلف مصنوعات بنانے والی فیکٹریاں پنجاب کے مختلف علاقوں میں واقع ہیں۔ 
        یہ فصل مویشیوں کے لیے سبز چارہ، سائلیج اور ونڈے کے طور پر بھی استعمال ہوتی ہے۔ 
        مکئی کے تنے بھی استعمال میں لائے جا رہے ہیں جو بطور ایندھن، گتا اور کاغذ سازی وغیرہ میں استعمال ہوتے ہیں 
        اور کاشتکاروں کی آمدن میں اضافہ کا باعث بنتے ہیں۔
      </p>
      <p>
        مکئی کی فصل کو مزید منافع بخش بنانے کے لئے اس کی فی ایکڑ پیداوار میں اضافہ ضروری ہے۔ 
        <span className="text-blue-600 font-bold">
          ترقی یافتہ ہائبرڈ اقسام کی ترویج
        </span> 
        اور 
        <span className="text-purple-600 font-bold">
          جدید پیداواری ٹیکنالوجی کے فروغ
        </span> 
        سے مکئی کی فی ایکڑ پیداوار میں اضافہ کیا جا سکتا ہے۔
      </p>
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        مکئی کے زیر کاشت رقبہ و پیداوار
      </h3>
      <p>
        پنجاب میں پچھلے پانچ سالوں میں مکئی کا زیر کاشت رقبہ، پیداوار اور اوسط پیداوار گوشوارے میں دی گئی ہے۔
      </p>
      <h4 className="font-bold">بہاریہ فصل</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">سال</th>
            <th className="border px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border px-2">رقبہ (ہزار ایکڑ)</th>
            <th className="border px-2">کل پیداوار (ہزار ٹن)</th>
            <th className="border px-2">اوسط پیداوار (کلو گرام فی ہیکٹر)</th>
            <th className="border px-2">اوسط پیداوار (من فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">2019-20</td><td className="border px-2">409.8</td><td className="border px-2">1012.6</td><td className="border px-2">3907.5</td><td className="border px-2">9535</td><td className="border px-2">96.47</td></tr>
          <tr><td className="border px-2">2020-21</td><td className="border px-2">463.8</td><td className="border px-2">1146.0</td><td className="border px-2">4491.1</td><td className="border px-2">9684</td><td className="border px-2">97.97</td></tr>
          <tr><td className="border px-2">2021-22</td><td className="border px-2">560.1</td><td className="border px-2">1384.0</td><td className="border px-2">4307.7</td><td className="border px-2">7691</td><td className="border px-2">77.81</td></tr>
          <tr><td className="border px-2">2022-23</td><td className="border px-2">655.6</td><td className="border px-2">1620.0</td><td className="border px-2">6036.7</td><td className="border px-2">9208</td><td className="border px-2">93.16</td></tr>
          <tr><td className="border px-2">2023-24</td><td className="border px-2">482.0</td><td className="border px-2">1191.0</td><td className="border px-2">4172.9</td><td className="border px-2">8658</td><td className="border px-2">87.59</td></tr>
        </tbody>
      </table>
      <h4 className="font-bold mt-3">خریف فصل</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">سال</th>
            <th className="border px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border px-2">رقبہ (ہزار ایکڑ)</th>
            <th className="border px-2">کل پیداوار (ہزار ٹن)</th>
            <th className="border px-2">اوسط پیداوار (کلو گرام فی ہیکٹر)</th>
            <th className="border px-2">اوسط پیداوار (من فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">2019-20</td><td className="border px-2">535.1</td><td className="border px-2">1322.4</td><td className="border px-2">3087.2</td><td className="border px-2">5769</td><td className="border px-2">58.36</td></tr>
          <tr><td className="border px-2">2020-21</td><td className="border px-2">484.8</td><td className="border px-2">1198.1</td><td className="border px-2">3548.8</td><td className="border px-2">7319</td><td className="border px-2">74.05</td></tr>
          <tr><td className="border px-2">2021-22</td><td className="border px-2">625.2</td><td className="border px-2">1545.1</td><td className="border px-2">4321.1</td><td className="border px-2">6911</td><td className="border px-2">69.92</td></tr>
          <tr><td className="border px-2">2022-23</td><td className="border px-2">587.8</td><td className="border px-2">1452.6</td><td className="border px-2">4017.7</td><td className="border px-2">6835</td><td className="border px-2">69.15</td></tr>
          <tr><td className="border px-2">2023-24</td><td className="border px-2">666.7</td><td className="border px-2">1647.6</td><td className="border px-2">4603.0</td><td className="border px-2">6903</td><td className="border px-2">69.84</td></tr>
        </tbody>
      </table>
      <h3 className="font-bold text-green-800 mt-4">فصلوں کی ترتیب اور مکئی کی کاشت</h3>
      <p>کم دورانیے کی فصل ہونے کی بنا پر مکئی کی بہاریہ اور موسمی فصل کو فصلوں کی ترتیب میں باآسانی شامل کیا جا سکتا ہے۔ کاشتکار اپنے حالات کو مد نظر رکھتے ہوئے ان سے استفادہ کر سکتے ہیں۔ کاشتکار مکئی کے زیر کاشت کھیت بدلتے رہیں تاکہ فصل بیماریوں اور نقصان دہ حشرات سے کم متاثر ہو۔</p>
      <h4 className="font-bold">ایک سالہ فصلی ترتیب</h4>
      <ul className="list-disc pr-6">
        <li>خریف مکئی، گندم و آلو، بہاریہ مکئی۔</li>
        <li>خریف مکئی، برسیم و دھان (موٹی اقسام)، آلو، بہاریہ مکئی، خریف مکئی۔</li>
        <li>آلو، بہاریہ مکئی، خریف مکئی۔</li>
      </ul>
      <h4 className="font-bold">دو سالہ فصلی ترتیب</h4>
      <ul className="list-disc pr-6">
        <li>خریف مکئی، گندم، خریف مکئی، برسیم، خریف مکئی، گندم، کپاس، برسیم۔</li>
      </ul>
      <h4 className="font-bold">مکئی کی بہاریہ فصل</h4>
      <p>مکئی کی بہاریہ فصل کی بڑھوتری کے ابتدائی مرحلے کے وقت درجہ حرارت کم ہوتا ہے اور بعد ازاں دن لمبے اور سورج کی وافر روشنی میسر ہوتی ہے جس سے فصل کا بڑھوتری کا دورانیہ موسمی مکئی کی نسبت زیادہ ہوتا ہے اور اس کی فی ایکڑ پیداوار خریف کی نسبت تقریباً 25 تا 30 فیصد زیادہ ہوتی ہے۔</p>
      <h3 className="font-bold text-green-800 mt-4">تحقیقاتی ادارہ مکئی، جوار و باجرہ، یوسف والا ضلع ساہیوال</h3>
      <h4 className="font-bold">عام اقسام (Synthetic Varieties)</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">نمبر شمار</th>
            <th className="border px-2">نام قسم</th>
            <th className="border px-2">منظوری کا سال</th>
            <th className="border px-2">دانوں کی رنگت</th>
            <th className="border px-2">پیداواری صلاحیت (من فی ایکڑ)</th>
            <th className="border px-2">پکنے کا عرصہ (بہاریہ)</th>
            <th className="border px-2">پکنے کا عرصہ (خریف)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">1</td><td className="border px-2">ملکہ 2016</td><td className="border px-2">2016</td><td className="border px-2">زرد</td><td className="border px-2">86</td><td className="border px-2">115</td><td className="border px-2">100</td></tr>
          <tr><td className="border px-2">2</td><td className="border px-2">گوہر - 19</td><td className="border px-2">2019</td><td className="border px-2">سفید</td><td className="border px-2">81</td><td className="border px-2">110-105</td><td className="border px-2">100-95</td></tr>
          <tr><td className="border px-2">3</td><td className="border px-2">ساہیوال گولڈ</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">91</td><td className="border px-2">115-110</td><td className="border px-2">105-100</td></tr>
          <tr><td className="border px-2">4</td><td className="border px-2">ساہیوال پاک</td><td className="border px-2">2019</td><td className="border px-2">سفید</td><td className="border px-2">71</td><td className="border px-2">100-90</td><td className="border px-2">90-85</td></tr>
          <tr><td className="border px-2">5</td><td className="border px-2">پاپ - 1</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">55</td><td className="border px-2">105-100</td><td className="border px-2">95-90</td></tr>
          <tr><td className="border px-2">6</td><td className="border px-2">سویٹ - 1</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">44</td><td className="border px-2">105-100</td><td className="border px-2">95-90</td></tr>
        </tbody>
      </table>
      <p>بارانی علاقوں میں جہاں آبپاشی کا خاطر خواہ انتظام نہ ہو وہاں مکئی کی عام اقسام کی کاشت زیادہ بہتر رہتی ہے۔ یہ اقسام سبز چارے کے لئے بھی نہایت موزوں ہیں۔</p>
      <h3 className="font-bold text-green-800">مکئی کی ہائبرڈ اقسام کی خصوصیات</h3>
      <p>مکئی کی ہائبرڈ اقسام زیادہ پیداوار کی حامل ہوتی ہیں۔ یہ دو مختلف اور جینیاتی خالص لائنوں کے کراس سے بنائی جاتی ہیں اور ان کی بڑھوتری میں یکسانیت پائی جاتی ہے۔ چھلیوں میں دانوں کی تعداد زیادہ ہوتی ہے نیز دانے موٹے اور وزنی ہوتے ہیں۔ ان اقسام کا قد درمیانہ اور جڑیں مضبوط ہوتی ہیں جس سے یہ گرنے سے محفوظ رہتی ہیں۔</p>
      <p className="font-bold">سفارش کردہ ہائبرڈ اقسام</p>
      <p>مارکیٹ میں بین الاقوامی اور قومی کمپنیوں کی تیار کردہ ہائبرڈ اقسام دستیاب ہیں۔ رجسٹرڈ ڈیلروں سے ہی خریدیں، رسید لازمی لیں اور بیج والی خالی تھیلیاں محفوظ رکھیں۔</p>
      <h4 className="font-bold">تحقیقاتی ادارہ مکئی، جوار و باجرہ، یوسف والا کی ہائبرڈ اقسام</h4>
      <p>ان اقسام میں وائی ایچ - 1898، ایف ایچ 1046، وائی ایچ - 5427، ایف 988، وائی ایچ - 5482، وائی - 5561، وائی 5568 اور وائی ایچ - 5560 شامل ہیں، البتہ ان کا بیج آئندہ سالوں میں دستیاب ہوگا۔</p>
      <h3 className="font-bold text-green-800">شرح بیج</h3>
      <p>شرح بیج فی ایکڑ 8 تا 10 کلو گرام ہونی چاہیے۔ بیج صاف ستھرا، صحت مند، خالص اور 90 فیصد سے زائد روئیدگی والا ہونا چاہیے۔</p>
      <h3 className="font-bold text-green-800">بیج کو زہر لگانا</h3>
      <p>ابتدائی مرحلے میں رس چوسنے والے کیڑوں خصوصاً کونپل کی مکھی سے بچاؤ کے لئے بیج کو مندرجہ ذیل زہروں میں سے کسی ایک سے ٹریٹ کریں:</p>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">زہر کا نام</th>
            <th className="border px-2">شرح استعمال</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">ایز وکسی سٹرو بن + کلوتھیا نیڈن + فلوڈی آکسی نل 72٪ ڈبلیو ایچ</td><td className="border px-2">6 گرام فی کلو گرام بیج</td></tr>
          <tr><td className="border px-2">امیڈا کلو پرائڈ 70٪ ڈبلیو ایس</td><td className="border px-2">6 گرام فی کلو گرام بیج</td></tr>
        </tbody>
      </table>
      <div className="text-right text-black leading-relaxed space-y-3">
      <h2 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        پیداواری منصوبہ مکئی 2025
      </h2>
      <p className="font-bold text-green-700">
        محکمہ زراعت حکومت پنجاب
      </p>
      <p>
        مکئی ایک <span className="text-red-600 font-bold">اہم نقد آور فصل</span> ہے۔ سال میں مکئی کی <span className="text-red-600 font-bold">دو فصلیں</span> کاشت ہوتی ہیں، ایک بہاریہ اور دوسری موسمی فصل۔ 
        مکئی کی پیداوار کا زیادہ تر حصہ مرغیوں کی خوراک میں استعمال ہوتا ہے۔ یہ انسانی خوراک کے طور پر بھی مختلف طریقوں سے استعمال ہوتی ہے۔ 
        اس سے نشاستہ، خوردنی تیل، گلوکوز، کسٹرڈ، جیلی، کارن فلیکس اور پاپ کارن وغیرہ بھی تیار کئے جاتے ہیں۔ 
        مکئی سے مختلف مصنوعات بنانے والی فیکٹریاں پنجاب کے مختلف علاقوں میں واقع ہیں۔ یہ فصل مویشیوں کے لیے سبز چارہ، سائلیج اور ونڈے کے طور پر بھی استعمال ہوتی ہے۔ 
        مکئی کے تنے بھی بطور ایندھن، گتہ اور کاغذ سازی میں استعمال ہوتے ہیں جو کاشتکاروں کی آمدن میں اضافہ کا باعث بنتے ہیں۔ 
        مکئی کی فصل کو مزید منافع بخش بنانے کے لئے اس کی فی ایکڑ پیداوار میں اضافہ ضروری ہے۔ 
        <span className="text-blue-600 font-bold">ترقی یافتہ ہائبرڈ اقسام کی ترویج</span> اور <span className="text-purple-600 font-bold">جدید پیداواری ٹیکنالوجی کے فروغ</span> سے مکئی کی فی ایکڑ پیداوار میں اضافہ کیا جا سکتا ہے۔
      </p>

      {/* =================== */}
      {/* مکئی کے زیر کاشت رقبہ */}
      {/* =================== */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        مکئی کے زیر کاشت رقبہ و پیداوار
      </h3>
      <p>پنجاب میں پچھلے پانچ سالوں میں مکئی کا زیر کاشت رقبہ، پیداوار اور اوسط پیداوار گوشوارے میں دی گئی ہے۔</p>

      {/* بہاریہ فصل جدول */}
      <h4 className="font-bold">بہاریہ فصل</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">سال</th>
            <th className="border px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border px-2">رقبہ (ہزار ایکڑ)</th>
            <th className="border px-2">کل پیداوار (ہزار ٹن)</th>
            <th className="border px-2">اوسط پیداوار (کلو گرام فی ہیکٹر)</th>
            <th className="border px-2">اوسط پیداوار (من فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">2019-20</td><td className="border px-2">409.8</td><td className="border px-2">1012.6</td><td className="border px-2">3907.5</td><td className="border px-2">9535</td><td className="border px-2">96.47</td></tr>
          <tr><td className="border px-2">2020-21</td><td className="border px-2">463.8</td><td className="border px-2">1146.0</td><td className="border px-2">4491.1</td><td className="border px-2">9684</td><td className="border px-2">97.97</td></tr>
          <tr><td className="border px-2">2021-22</td><td className="border px-2">560.1</td><td className="border px-2">1384.0</td><td className="border px-2">4307.7</td><td className="border px-2">7691</td><td className="border px-2">77.81</td></tr>
          <tr><td className="border px-2">2022-23</td><td className="border px-2">655.6</td><td className="border px-2">1620.0</td><td className="border px-2">6036.7</td><td className="border px-2">9208</td><td className="border px-2">93.16</td></tr>
          <tr><td className="border px-2">2023-24</td><td className="border px-2">482.0</td><td className="border px-2">1191.0</td><td className="border px-2">4172.9</td><td className="border px-2">8658</td><td className="border px-2">87.59</td></tr>
        </tbody>
      </table>

      {/* خریف فصل جدول */}
      <h4 className="font-bold mt-3">خریف فصل</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">سال</th>
            <th className="border px-2">رقبہ (ہزار ہیکٹر)</th>
            <th className="border px-2">رقبہ (ہزار ایکڑ)</th>
            <th className="border px-2">کل پیداوار (ہزار ٹن)</th>
            <th className="border px-2">اوسط پیداوار (کلو گرام فی ہیکٹر)</th>
            <th className="border px-2">اوسط پیداوار (من فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">2019-20</td><td className="border px-2">535.1</td><td className="border px-2">1322.4</td><td className="border px-2">3087.2</td><td className="border px-2">5769</td><td className="border px-2">58.36</td></tr>
          <tr><td className="border px-2">2020-21</td><td className="border px-2">484.8</td><td className="border px-2">1198.1</td><td className="border px-2">3548.8</td><td className="border px-2">7319</td><td className="border px-2">74.05</td></tr>
          <tr><td className="border px-2">2021-22</td><td className="border px-2">625.2</td><td className="border px-2">1545.1</td><td className="border px-2">4321.1</td><td className="border px-2">6911</td><td className="border px-2">69.92</td></tr>
          <tr><td className="border px-2">2022-23</td><td className="border px-2">587.8</td><td className="border px-2">1452.6</td><td className="border px-2">4017.7</td><td className="border px-2">6835</td><td className="border px-2">69.15</td></tr>
          <tr><td className="border px-2">2023-24</td><td className="border px-2">666.7</td><td className="border px-2">1647.6</td><td className="border px-2">4603.0</td><td className="border px-2">6903</td><td className="border px-2">69.84</td></tr>
        </tbody>
      </table>

      {/* فصلوں کی ترتیب */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        فصلوں کی ترتیب اور مکئی کی کاشت
      </h3>
      <p>کم دورانیے کی فصل ہونے کی بنا پر مکئی کی بہاریہ اور موسمی فصل کو فصلوں کی ترتیب میں باآسانی شامل کیا جا سکتا ہے۔ کاشتکار اپنے حالات کو مد نظر رکھتے ہوئے ان سے استفادہ کر سکتے ہیں۔ کاشتکار مکئی کے زیر کاشت کھیت بدلتے رہیں تاکہ فصل بیماریوں اور نقصان دہ حشرات سے کم متاثر ہو۔</p>

      <h4 className="font-bold">ایک سالہ فصلی ترتیب</h4>
      <ul className="list-disc pr-6">
        <li>خریف مکئی، گندم و آلو، بہاریہ مکئی۔</li>
        <li>خریف مکئی، برسیم و دھان (موٹی اقسام)، آلو، بہاریہ مکئی، خریف مکئی۔</li>
        <li>آلو، بہاریہ مکئی، خریف مکئی۔</li>
      </ul>

      <h4 className="font-bold">دو سالہ فصلی ترتیب</h4>
      <ul className="list-disc pr-6">
        <li>خریف مکئی، گندم، خریف مکئی، برسیم، خریف مکئی، گندم، کپاس، برسیم۔</li>
      </ul>

      <h4 className="font-bold">مکئی کی بہاریہ فصل</h4>
      <p>مکئی کی بہاریہ فصل کی بڑھوتری کے ابتدائی مرحلے کے وقت <span className="text-orange-600 font-bold">درجہ حرارت کم</span> ہوتا ہے اور بعد ازاں دن لمبے اور <span className="text-orange-600 font-bold">سورج کی وافر روشنی</span> میسر ہوتی ہے جس سے فصل کا بڑھوتری کا دورانیہ موسمی مکئی کی نسبت زیادہ ہوتا ہے اور اس کی فی ایکڑ پیداوار خریف کی نسبت تقریباً <span className="text-orange-600 font-bold">25 تا 30 فیصد زیادہ</span> ہوتی ہے۔</p>

      {/* =================== */}
      {/* تحقیقاتی ادارہ */}
      {/* =================== */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        تحقیقاتی ادارہ مکئی، جوار و باجرہ، یوسف والا ضلع ساہیوال
      </h3>

      <h4 className="font-bold">عام اقسام (Synthetic Varieties)</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">نمبر شمار</th>
            <th className="border px-2">نام قسم</th>
            <th className="border px-2">منظوری کا سال</th>
            <th className="border px-2">دانوں کی رنگت</th>
            <th className="border px-2">پیداواری صلاحیت (من فی ایکڑ)</th>
            <th className="border px-2">پکنے کا عرصہ (بہاریہ)</th>
            <th className="border px-2">پکنے کا عرصہ (خریف)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">1</td><td className="border px-2">ملکہ 2016</td><td className="border px-2">2016</td><td className="border px-2">زرد</td><td className="border px-2">86</td><td className="border px-2">115</td><td className="border px-2">100</td></tr>
          <tr><td className="border px-2">2</td><td className="border px-2">گوہر - 19</td><td className="border px-2">2019</td><td className="border px-2">سفید</td><td className="border px-2">81</td><td className="border px-2">110-105</td><td className="border px-2">100-95</td></tr>
          <tr><td className="border px-2">3</td><td className="border px-2">ساہیوال گولڈ</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">91</td><td className="border px-2">115-110</td><td className="border px-2">105-100</td></tr>
          <tr><td className="border px-2">4</td><td className="border px-2">ساہیوال پاک</td><td className="border px-2">2019</td><td className="border px-2">سفید</td><td className="border px-2">71</td><td className="border px-2">100-90</td><td className="border px-2">90-85</td></tr>
          <tr><td className="border px-2">5</td><td className="border px-2">پاپ - 1</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">55</td><td className="border px-2">105-100</td><td className="border px-2">95-90</td></tr>
          <tr><td className="border px-2">6</td><td className="border px-2">سویٹ - 1</td><td className="border px-2">2019</td><td className="border px-2">زرد</td><td className="border px-2">44</td><td className="border px-2">105-100</td><td className="border px-2">95-90</td></tr>
        </tbody>
      </table>
      <p>بارانی علاقوں میں جہاں آبپاشی کا خاطر خواہ انتظام نہ ہو وہاں مکئی کی <span className="text-teal-600 font-bold">عام اقسام کی کاشت زیادہ بہتر</span> رہتی ہے۔ یہ اقسام <span className="text-teal-600 font-bold">سبز چارے کے لئے بھی نہایت موزوں</span> ہیں۔</p>

      {/* ہائبرڈ اقسام */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        مکئی کی ہائبرڈ اقسام کی خصوصیات
      </h3>
      <p>مکئی کی ہائبرڈ اقسام <span className="text-red-600 font-bold">زیادہ پیداوار</span> کی حامل ہوتی ہیں۔ یہ دو مختلف اور جینیاتی خالص لائنوں کے کراس سے بنائی جاتی ہیں اور ان کی بڑھوتری میں یکسانیت پائی جاتی ہے۔ چھلیوں میں دانوں کی تعداد زیادہ ہوتی ہے نیز دانے موٹے اور وزنی ہوتے ہیں۔ ان اقسام کا قد درمیانہ اور جڑیں مضبوط ہوتی ہیں جس سے یہ گرنے سے محفوظ رہتی ہیں۔</p>
      <p className="font-bold">سفارش کردہ ہائبرڈ اقسام</p>
      <p>مارکیٹ میں بین الاقوامی اور قومی کمپنیوں کی تیار کردہ ہائبرڈ اقسام دستیاب ہیں۔ <span className="text-green-600 font-bold">رجسٹرڈ ڈیلروں سے ہی خریدیں، رسید لازمی لیں</span> اور بیج والی خالی تھیلیاں محفوظ رکھیں۔</p>

      <h4 className="font-bold">تحقیقاتی ادارہ مکئی، جوار و باجرہ، یوسف والا کی ہائبرڈ اقسام</h4>
      <p>ان اقسام میں <span className="text-teal-600 font-bold">وائی ایچ - 1898، ایف ایچ 1046، وائی ایچ - 5427، ایف 988، وائی ایچ - 5482، وائی - 5561، وائی 5568 اور وائی ایچ - 5560</span> شامل ہیں، البتہ ان کا بیج آئندہ سالوں میں دستیاب ہوگا۔</p>

      {/* شرح بیج */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        شرح بیج
      </h3>
      <p><span className="text-red-600 font-bold">شرح بیج فی ایکڑ 8 تا 10 کلو گرام</span> ہونی چاہیے۔ بیج صاف ستھرا، صحت مند، خالص اور <span className="text-red-600 font-bold">90 فیصد سے زائد روئیدگی</span> والا ہونا چاہیے۔</p>

      {/* بیج کو زہر لگانا */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        بیج کو زہر لگانا
      </h3>
      <p>ابتدائی مرحلے میں <span className="text-purple-600 font-bold">رس چوسنے والے کیڑوں خصوصاً کونپل کی مکھی</span> کے حملہ سے بچاؤ اور فصل کو بیماریوں کے حملے سے بچانے کے لئے بیج کو بوائی سے پہلے مندرجہ ذیل زہروں میں سے کوئی ایک زہر لازمی لگائیں۔</p>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">زہر کا نام</th>
            <th className="border px-2">شرح استعمال</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">ایز وکسی سٹرو بن + کلوتھیا نیڈن + فلوڈی آکسی نل 72 فیصد ڈبلیو ایچ</td><td className="border px-2">6 گرام فی کلو گرام بیج</td></tr>
          <tr><td className="border px-2">امیڈا کلو پرڈ + ٹیپو کو نازول 372.5 فیصد</td><td className="border px-2">10 ملی لٹر فی کلو گرام بیج</td></tr>
          <tr><td className="border px-2">ایز وکسی سٹرو بن + کلوتھیا نیڈن 62.5 فیصد</td><td className="border px-2">6 گرام فی کلو گرام بیج</td></tr>
          <tr><td className="border px-2">تھایا میتھا گزم 350 ایف ایس</td><td className="border px-2">10 ملی لیٹر فی کلو گرام بیج</td></tr>
        </tbody>
      </table>
      
      {/* وقت کاشت */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        وقت کاشت
      </h3>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">فصل</th>
            <th className="border px-2">وقت کاشت</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2"><span className="text-teal-600 font-bold">بہاریہ فصل</span></td><td className="border px-2"><span className="text-teal-600 font-bold">آخر جنوری تا 28 فروری</span></td></tr>
          <tr><td className="border px-2"><span className="text-teal-600 font-bold">خریف (موسمی) فصل</span></td><td className="border px-2"><span className="text-teal-600 font-bold">15 جولائی تا 15 اگست</span></td></tr>
        </tbody>
      </table>

      {/* وقت کاشت اور اہم عوامل */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        وقت کاشت اور اہم عوامل
      </h3>
      <p>موسمیاتی تبدیلیوں کو مد نظر رکھتے ہوئے مکئی کے وقت کاشت میں مناسب رد و بدل کیا جا سکتا ہے۔ سبز بھٹوں کے لیے مکئی کی خریف کاشت آخر اگست تک کی جا سکتی ہے۔ اٹک، جہلم، راولپنڈی، چکوال اور گجرات کے بارانی علاقوں میں مکئی کی بوائی مون سون کے آغاز کے مطابق کریں۔</p>

      {/* موزوں زمین */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        موزوں زمین
      </h3>
      <p><span className="text-purple-600 font-bold">میرا، بھاری میرا اور گہری زرخیز زمین</span> جس میں نامیاتی مادہ کی مقدار بہتر ہو اور پانی جذب کرنے کی صلاحیت اچھی ہو مکئی کی کاشت کے لئے موزوں ہے۔ <span className="text-red-600 font-bold">ریتلی، سیم زدہ اور کلر اٹھی زمین اس کے لیے موزوں نہیں</span>۔</p>

      {/* زمین کی تیاری */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        زمین کی تیاری
      </h3>
      <p>فصل کے اچھے اگاؤ اور بڑھوتری کے لئے کھیت کا <span className="text-red-600 font-bold">اچھی طرح تیار ہونا</span> بہت ضروری ہے۔ مکئی کے بیج کو اگاؤ کے لیے نمی، مناسب درجہ حرارت کے ساتھ ساتھ زمین کا <span className="text-red-600 font-bold">بھربھرا ہونا</span> بھی ضروری ہے۔ زمین میں سخت تہہ کے پیش نظر دو تا تین سال بعد <span className="text-red-600 font-bold">گہرا ہل چلائیں</span>۔ اس کے ساتھ ساتھ کھیت کو ہموار بھی کریں۔ زیادہ بہتر ہے کہ زمین کی تیاری سے پہلے <span className="text-red-600 font-bold">لیزر لینڈ لیولر</span> سے زمین ہموار کریں۔ زمین کی بہتر تیاری کے لئے <span className="text-red-600 font-bold">تین تا چار مرتبہ ہل اور سہا گہ</span> چلائیں۔ زمین میں اگر سابقہ فصل کے مدھ یا ڈھیلے ہوں تو پہلے روٹا ویٹر چلا کر انہیں باریک کر لیں۔</p>

      {/* طریقہ کاشت */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        طریقہ کاشت
      </h3>
      <p>مکئی کی کاشت مندرجہ ذیل طریقوں سے کامیابی سے کی جا سکتی ہے:</p>
      
      {/* 1. وٹوں پر کاشت */}
      <h4 className="font-bold">1. وٹوں پر کاشت</h4>
      <p>آبپاش علاقوں میں مکئی کی کاشت کا بہتر طریقہ یہ ہے کہ <span className="text-teal-600 font-bold">سوا دو تا اڑھائی فٹ کے فاصلہ</span> پر شرقاً غرباً وٹیں بنائی جائیں اور ہلکا پانی لگانے کے فورا بعد پانی کی سطح سے تھوڑا اوپر وٹوں کی ڈھلوان پر ایک ایک بیج کا چوپا لگا دیں۔ بہاریہ کاشت میں وٹوں کی <span className="text-teal-600 font-bold">جنوبی سمت</span> اور خریف کاشت میں <span className="text-teal-600 font-bold">شمالی سمت</span> پر چوپا لگائیں۔ بہاریہ مکئی میں ہائبرڈ اقسام کو <span className="text-teal-600 font-bold">6 انچ</span> اور عام اقسام کو <span className="text-teal-600 font-bold">7 تا 8 انچ</span> کے فاصلہ پر کاشت کریں اور خریف کاشت میں ہائبرڈ اقسام کو <span className="text-teal-600 font-bold">17 انچ</span> جبکہ عام اقسام کو <span className="text-teal-600 font-bold">8 تا 9 انچ</span> کے فاصلہ پر کاشت کریں۔</p>

      {/* 2. پٹریوں پر کاشت */}
      <h4 className="font-bold">2. پٹریوں پر کاشت</h4>
      <p>آبپاش علاقوں میں مکئی پٹریوں (Beds) پر بھی کاشت کی جاتی ہے۔ اس طریقہ کاشت میں مکئی کو <span className="text-teal-600 font-bold">ساڑھے تین فٹ کے باہمی فاصلہ</span> پر بنائی گئی پٹریوں پر کاشت کیا جاتا ہے، ان پٹریوں کی ٹاپ تقریباً اڑھائی فٹ ہوتی ہے اور بیج کا چوپا <span className="text-teal-600 font-bold">پٹریوں کی دونوں اطراف</span> لگایا جاتا ہے۔ بہاریہ مکئی میں ہائبرڈ اقسام کو <span className="text-teal-600 font-bold">8 تا 9 انچ</span> اور عام اقسام کو <span className="text-teal-600 font-bold">10 تا 11 انچ</span> کے فاصلہ پر کاشت کریں اور خریف کاشت میں ہائبرڈ اقسام کو <span className="text-teal-600 font-bold">10 انچ</span> کے فاصلہ پر جبکہ عام اقسام کو <span className="text-teal-600 font-bold">11 تا 12 انچ</span> کے فاصلہ پر کاشت کریں۔</p>

      {/* 3. قطاروں میں کاشت */}
      <h4 className="font-bold">3. قطاروں میں کاشت</h4>
      <p>بارانی علاقوں میں مکئی <span className="text-teal-600 font-bold">اڑھائی فٹ کے فاصلہ پر ڈرل، پلانٹر یا پور</span> سے کاشت کریں۔ فصل کا قد جب 4 تا 6 انچ ہو جائے تو کمزور اور بیمار پودے نکال کر چھدرائی کریں۔ کم دنوں میں پک کر تیار ہونے والی اقسام میں پودوں کا باہمی فاصلہ <span className="text-teal-600 font-bold">6 تا 7 انچ</span> رکھیں جبکہ دیر سے پکنے والی اقسام کے لیے <span className="text-teal-600 font-bold">7 تا 8 انچ</span> کا درمیانی فاصلہ رکھیں۔</p>

      {/* 4. کاشت بذریعہ میز پلانٹر */}
      <h4 className="font-bold">4. کاشت بذریعہ میز پلانٹر</h4>
      <p>مکئی کی بروقت اور موثر کاشت کے لیے <span className="text-teal-600 font-bold">آٹو میٹک میز پلانٹر</span> بہت کارآمد ہے۔ پلانٹر سے کاشت کی گئی فصل کا نہ صرف اگاؤ بہتر اور یکساں ہوتا ہے بلکہ لیبر اور لاگت کاشت میں بھی بچت ہوتی ہے۔</p>

      {/* میٹھی مکئی اور پھلے بنانے والی مکئی */}
      <h4 className="font-bold">میٹھی مکئی اور پھلے بنانے والی مکئی</h4>
      <p>میٹھی مکئی (Sweet Corn) اور پھلے بنانے والی مکئی (Pop Corn) کے لئے بہاریہ کاشت میں پودوں کا باہمی فاصلہ <span className="text-teal-600 font-bold">8 انچ</span> اور خریف کاشت میں <span className="text-teal-600 font-bold">9 انچ</span> رکھیں۔</p>
      
      {/* پودوں کی سفارش کردہ فی ایکڑ تعداد */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        پودوں کی سفارش کردہ فی ایکڑ تعداد
      </h3>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">نمبر شمار</th>
            <th className="border px-2">موسم</th>
            <th className="border px-2">قسم</th>
            <th className="border px-2">پودوں کی فی ایکڑ مطلوبہ تعداد</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">1</td><td className="border px-2">بہاریہ</td><td className="border px-2">ہائبرڈ اقسام</td><td className="border px-2"><span className="text-red-600 font-bold">35000</span></td></tr>
          <tr><td className="border px-2"></td><td className="border px-2"></td><td className="border px-2">عام اقسام</td><td className="border px-2">26000-30000</td></tr>
          <tr><td className="border px-2">2</td><td className="border px-2">خریف</td><td className="border px-2">ہائبرڈ اقسام</td><td className="border px-2"><span className="text-red-600 font-bold">30000</span></td></tr>
          <tr><td className="border px-2"></td><td className="border px-2"></td><td className="border px-2">عام اقسام</td><td className="border px-2">23000-26000</td></tr>
        </tbody>
      </table>

      {/* بیج کی گہرائی */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        بیج کی گہرائی
      </h3>
      <p>بیج کے بہترین اگاؤ کے لیے دوسرے عوامل کے ساتھ ساتھ اس کو مناسب گہرائی پر کاشت کرنا بہت ہی ضروری ہے۔ میرا اور بھاری میرا زمینوں میں مکئی کے بیج کی گہرائی <span className="text-red-600 font-bold">ڈیڑھ تا دو انچ</span> ہونی چاہیے۔ ریتلی زمین میں بیج کی گہرائی <span className="text-red-600 font-bold">کم از کم دو انچ</span> رکھیں۔</p>
      <p>
        <span className="font-bold">نوٹ:</span> یاد رکھیں کہ مکئی کی فصل میں پودوں کی تعداد کو پورا کرنے کے لئے <span className="text-orange-600 font-bold">نافعے ہرگز نہ لگائیں</span> کیونکہ یہ پہلے اگے ہوئے پودوں کے برابر قد نہیں کر سکتے اور پیداواری لحاظ سے فائدہ مند نہیں ہوتے۔
      </p>

      {/* آبپاشی */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        آبپاشی
      </h3>
      <p>عموماً وٹوں پر کاشت مکئی کی بہاریہ فصل کو <span className="text-teal-600 font-bold">12 تا 14</span> جبکہ خریف کاشتہ فصل کو <span className="text-teal-600 font-bold">10 تا 12</span> پانی درکار ہوتے ہیں۔</p>
      
      {/* آبپاشی سے متعلق ضروری ہدایات */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        آبپاشی سے متعلق ضروری ہدایات
      </h3>
      <p>ہموار کھیت میں کاشتہ فصل کو <span className="text-purple-600 font-bold">پہلی آبپاشی اگاؤ کے 10 تا 12 دن بعد</span> جبکہ وٹوں اور کھیلیوں پر کاشتہ فصل کو اگاؤ تک وتر میں رکھیں یعنی زمین کی ضرورت کے مطابق ہلکا پانی لگاتے رہیں۔ خاص طور پر موسمی مکئی میں <span className="text-purple-600 font-bold">بوائی کے چوتھے دن ایک پانی لگائیں</span> تاکہ اگاؤ اور روئیدگی میں سہولت رہے۔ پھول آنے، عمل زیرگی اور دانے کی دودھیا حالت میں فصل کو سوکھا نہ آنے دیں۔ شدید گرمی میں آبپاشی کا وقفہ کم کر دیں اور درجہ حرارت میں کمی ہونے پر یہ وقفہ بڑھا دیں۔ زیادہ بارش کے بعد <span className="text-purple-600 font-bold">فالتو پانی فوراً کھیت سے نکال دیں</span>۔ آبپاشی سے پہلے موسمی پیش گوئی سے باخبر رہیں۔</p>

      {/* جڑی بوٹیوں کا انسداد */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        جڑی بوٹیوں کا انسداد
      </h3>
      <p>فصل کی بھرپور پیداوار لینے کے لئے <span className="text-red-600 font-bold">جڑی بوٹیوں کی تلفی انتہائی ضروری</span> ہے۔ ایک اندازے کے مطابق بعض صورتوں میں جڑی بوٹیوں کی وجہ سے مکئی کی پیداوار <span className="text-red-600 font-bold">30 تا 50 فیصد تک کم</span> ہو سکتی ہے۔ چھوٹے پیمانے پر کاشتہ فصل میں جڑی بوٹیوں کے انسداد کے لیے <span className="text-teal-600 font-bold">گوڈی</span> بھی کی جا سکتی ہے۔ جڑی بوٹیوں کے کیمیائی انسداد کے لیے درج ذیل گوشوارے سے مدد لیں۔</p>

      {/* جڑی بوٹیاں اگنے سے پہلے زہر کا استعمال */}
      <h4 className="font-bold">جڑی بوٹیاں اگنے سے پہلے زہر کا استعمال</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">نمبر شمار</th>
            <th className="border px-2">جڑی بوٹی مار زہریں</th>
            <th className="border px-2">جڑی بوٹیاں</th>
            <th className="border px-2">مقدار فی ایکڑ</th>
            <th className="border px-2">وقت استعمال</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">1</td><td className="border px-2">ایٹرازین + ایس میٹولا کلور 720 ایس سی</td><td className="border px-2">ہر قسم کی جڑی بوٹیوں کے لیے</td><td className="border px-2"><span className="text-purple-600 font-bold">800 ملی لٹر</span></td><td className="border px-2"><span className="text-purple-600 font-bold">بوائی کے 24 تا 48 گھنٹے کے اندر</span></td></tr>
        </tbody>
      </table>
      
      {/* جڑی بوٹیاں اگنے کے بعد زہر کا استعمال */}
      <h4 className="font-bold">جڑی بوٹیاں اگنے کے بعد زہر کا استعمال</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">نمبر شمار</th>
            <th className="border px-2">جڑی بوٹی مار زہریں</th>
            <th className="border px-2">جڑی بوٹیاں</th>
            <th className="border px-2">مقدار فی ایکڑ</th>
            <th className="border px-2">وقت استعمال</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">1</td><td className="border px-2">میز وٹرائی اون + ایٹرازین 48 ایس سی</td><td className="border px-2">ڈیلا ہوئی گھاس اور چوڑے پتے والی جڑی بوٹیاں</td><td className="border px-2">650 ملی لٹر</td><td className="border px-2">جب تمام جڑی بوٹیاں اگ چکی ہوں</td></tr>
          <tr><td className="border px-2">2</td><td className="border px-2">بالوسلفیوران میتھائل 75 ڈبلیو ڈی جی</td><td className="border px-2">ڈیلا</td><td className="border px-2">20 گرام</td><td className="border px-2">ڈیلا اگ آنے پر</td></tr>
          <tr><td className="border px-2">3</td><td className="border px-2">آنسو کسا فلیٹول 19.07 فیصد</td><td className="border px-2">گھاس اور چوڑے پتے والی جڑی بوٹیاں</td><td className="border px-2">132 ملی لٹر</td><td className="border px-2">اگاؤ سے لے کر تین پی ایچ تک</td></tr>
        </tbody>
      </table>

      {/* کیمیائی کھادوں کا استعمال */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        کیمیائی کھادوں کا استعمال
      </h3>
      <p>فصل کے لئے کھاد کی ضرورت کا اندازہ زمین کی بنیادی زرخیزی، کلر اٹھا پن، اس کی قسم اور نوعیت، دستیاب پانی کی کوالٹی، مختلف فصلوں کی کثرت کاشت اور پچھلی فصل کی بنا پر کیا جا سکتا ہے۔ اس کے لیے <span className="text-red-600 font-bold">زمین کا لیبارٹری تجزیہ</span> کروائیں اور سفارش کردہ کھادوں کا استعمال ذیل میں دیے گئے گوشواروں کے مطابق کریں۔</p>

      {/* ہائبرڈ اقسام کے لیے کھادوں کی سفارشات */}
      <h4 className="font-bold">ہائبرڈ اقسام کے لیے کھادوں کی سفارشات</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">قسم زمین</th>
            <th className="border px-2">نائٹروجن (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">فاسفورس (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">پوٹاش (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">بوائی کے وقت (بوریاں فی ایکڑ)</th>
            <th className="border px-2">پانچ تا چھ پتے نکلنے پر (بوریاں فی ایکڑ)</th>
            <th className="border px-2">آٹھ تا دس پتے نکلنے پر (بوریاں فی ایکڑ)</th>
            <th className="border px-2">پھول آنے سے تقریباً ایک ہفتہ قبل (بوریاں فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">کمزور زمین</td><td className="border px-2">119</td><td className="border px-2">69</td><td className="border px-2">50</td><td className="border px-2">2.5 بوری ڈی اے پی + 2 بوری ایس او پی یا 7.5 بوری سنگل سپر فاسفیٹ (18) + 2 بوری ایس او پی + 1.5 بوری یوریا</td><td className="border px-2">1.25 بوری یوریا</td><td className="border px-2">1.25 بوری یوریا</td><td className="border px-2">1.25 بوری یوریا</td></tr>
          <tr><td className="border px-2">درمیانی زمین</td><td className="border px-2">92</td><td className="border px-2">58</td><td className="border px-2">37</td><td className="border px-2">2.5 بوری ڈی اے پی + 1.5 بوری ایس او پی یا 6.5 بوری سنگل سپر فاسفیٹ (18) + 1.5 بوری ایس او پی + 1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td></tr>
          <tr><td className="border px-2">زرخیز زمین</td><td className="border px-2">75</td><td className="border px-2">46</td><td className="border px-2">25</td><td className="border px-2">2 بوری ڈی اے پی + 1 بوری ایس او پی یا 5 بوری سنگل سپر فاسفیٹ (18) + 1 بوری ایس او پی + 0.75 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">0.75 بوری یوریا</td><td className="border px-2">0.75 بوری یوریا</td></tr>
        </tbody>
      </table>

      {/* عام اقسام کے لیے کھادوں کی سفارشات */}
      <h4 className="font-bold mt-4">عام اقسام کے لیے کھادوں کی سفارشات (آبپاش علاقے)</h4>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">قسم زمین</th>
            <th className="border px-2">نائٹروجن (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">فاسفورس (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">پوٹاش (کلو گرام فی ایکڑ)</th>
            <th className="border px-2">بوائی کے وقت (بوریاں فی ایکڑ)</th>
            <th className="border px-2">پانچ تا چھ پتے نکلنے پر (بوریاں فی ایکڑ)</th>
            <th className="border px-2">آٹھ تا 9 پتے نکلنے پر (بوریاں فی ایکڑ)</th>
            <th className="border px-2">پھول آنے سے تقریباً 15 دن قبل (بوریاں فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">کمزور زمین</td><td className="border px-2">92</td><td className="border px-2">58</td><td className="border px-2">37</td><td className="border px-2">2.5 بوری ڈی اے پی + 1.5 بوری ایس او پی یا 6.5 بوری سنگل سپر فاسفیٹ (18) + 1.5 بوری ایس او پی + 1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td></tr>
          <tr><td className="border px-2">درمیانی زمین</td><td className="border px-2">80</td><td className="border px-2">46</td><td className="border px-2">37</td><td className="border px-2">2 بوری ڈی اے پی + 1.5 بوری ایس او پی یا 5 بوری سنگل سپر فاسفیٹ (18) + 1.5 بوری ایس او پی + 0.75 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">1 بوری یوریا</td><td className="border px-2">0.75 بوری یوریا</td></tr>
        </tbody>
      </table>
    </div>
    </div>
  ),
},

      {
  img: cotton5,
  title: "Pian Rubi",
  price: "$80",
  desc: (
    <div className="text-right text-black space-y-4 leading-relaxed bg-green-50 p-4 rounded-lg">
      {/* مین ہیڈنگ */}
      <h2 className="text-2xl font-bold text-center bg-green-600 text-white py-2 rounded">
        پیداواری منصوبہ مکئی 2025
      </h2>
      <h3 className="text-center text-lg font-semibold text-gray-700">
        محکمہ زراعت حکومت پنجاب
      </h3>

      <p>
        مکئی ایک اہم نقد آور فصل ہے۔ سال میں مکئی کی دو فصلیں کاشت ہوتی ہیں،
        ایک بہاریہ اور دوسری موسمی فصل۔ مکئی کی پیداوار کا زیادہ تر حصہ مرغیوں
        کی خوراک میں استعمال ہوتا ہے۔ یہ انسانی خوراک کے طور پر بھی مختلف
        طریقوں سے استعمال ہوتی ہے۔ اس سے نشاستہ، خوردنی تیل، گلوکوز، کسٹرڈ،
        جیلی، کارن فلیکس اور پاپ کارن وغیرہ بھی تیار کئے جاتے ہیں۔
      </p>

      <p>
        مکئی سے مختلف مصنوعات بنانے والی فیکٹریاں پنجاب کے مختلف علاقوں میں واقع
        ہیں۔ یہ فصل مویشیوں کے لیے سبز چارہ، سائلیج اور ونڈے کے طور پر بھی
        استعمال ہوتی ہے۔ مکئی کے تنے بھی استعمال میں لائے جا رہے ہیں جو بطور
        ایندھن، گتا اور کاغذ سازی وغیرہ میں استعمال ہوتے ہیں اور کاشتکاروں کی
        آمدن میں اضافہ کا باعث بنتے ہیں۔
      </p>

      <p>
        مکئی کی فصل کو مزید منافع بخش بنانے کے لئے اس کی فی ایکڑ پیداوار میں
        اضافہ ضروری ہے۔ ترقی یافتہ ہائبرڈ اقسام کی ترویج اور جدید پیداواری
        ٹیکنالوجی کے فروغ سے مکئی کی فی ایکڑ پیداوار میں اضافہ کیا جا سکتا ہے۔
      </p>

      {/* رقبہ اور پیداوار */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        مکئی کے زیر کاشت رقبہ و پیداوار
      </h3>
      <p>
        پنجاب میں پچھلے پانچ سالوں میں مکئی کا زیر کاشت رقبہ، پیداوار اور اوسط
        پیداوار گوشوارے میں دی گئی ہے۔
      </p>

      <h4 className="font-bold text-green-700">بہاریہ فصل</h4>
      <ul className="list-disc pr-6 space-y-1">
        <li>سال: 2019-20, 2020-21, 2021-22, 2022-23, 2023-24</li>
        <li>رقبہ (ہزار ہیکٹر): 409.8, 463.8, 560.1, 655.6, 482.0</li>
        <li>کل پیداوار (ہزار ٹن): 3907.5, 4491.1, 4307.7, 6036.7, 4172.9</li>
        <li>اوسط پیداوار (من فی ایکڑ): 96.47, 97.97, 77.81, 93.16, 87.59</li>
      </ul>

      <h4 className="font-bold text-green-700">خریف فصل</h4>
      <ul className="list-disc pr-6 space-y-1">
        <li>سال: 2019-20, 2020-21, 2021-22, 2022-23, 2023-24</li>
        <li>رقبہ (ہزار ہیکٹر): 535.1, 484.8, 625.2, 587.8, 666.7</li>
        <li>کل پیداوار (ہزار ٹن): 3087.2, 3548.8, 4321.1, 4017.7, 4603.0</li>
        <li>اوسط پیداوار (من فی ایکڑ): 58.36, 74.05, 69.92, 69.15, 69.84</li>
      </ul>

      {/* فصلوں کی ترتیب */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        فصلوں کی ترتیب اور مکئی کی کاشت
      </h3>
      <p>
        کم دورانیے کی فصل ہونے کی بنا پر مکئی کی بہاریہ اور موسمی فصل کو فصلوں کی
        ترتیب میں باآسانی شامل کیا جا سکتا ہے۔
      </p>

      <h4 className="font-bold text-green-700">ایک سالہ فصلی ترتیب</h4>
      <ul className="list-disc pr-6 space-y-1">
        <li>خریف مکئی، گندم و آلو، بہاریہ مکئی</li>
        <li>خریف مکئی، برسیم و دھان، آلو، بہاریہ مکئی</li>
        <li>آلو، بہاریہ مکئی، خریف مکئی</li>
      </ul>

      <h4 className="font-bold text-green-700">دو سالہ فصلی ترتیب</h4>
      <p>
        خریف مکئی، گندم، خریف مکئی، برسیم، خریف مکئی، گندم، کپاس، برسیم
      </p>

      {/* تحقیقاتی ادارہ */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        تحقیقاتی ادارہ مکئی، جوار و باجرہ، یوسف والا ضلع ساہیوال
      </h3>
      <p className="font-semibold text-gray-700">عام اقسام (Synthetic Varieties)</p>
      <ul className="list-disc pr-6 space-y-1">
        <li>ملکہ 2016، زرد، 86 من فی ایکڑ</li>
        <li>گوہر-19، سفید، 81 من فی ایکڑ</li>
        <li>ساہیوال گولڈ، زرد، 91 من فی ایکڑ</li>
        <li>ساہیوال پاک، سفید، 71 من فی ایکڑ</li>
        <li>پاپ-1، زرد، 55 من فی ایکڑ</li>
        <li>سویٹ-1، زرد، 44 من فی ایکڑ</li>
      </ul>

      <p>
        بارانی علاقوں میں جہاں آبپاشی کا خاطر خواہ انتظام نہ ہو وہاں مکئی کی عام
        اقسام کی کاشت زیادہ بہتر رہتی ہے۔
      </p>

      <p className="font-semibold text-gray-700">
        مکئی کی ہائبرڈ اقسام کی خصوصیات
      </p>
      <p>
        یہ اقسام زیادہ پیداوار کی حامل ہوتی ہیں، چھلیوں میں دانوں کی تعداد زیادہ
        اور جڑیں مضبوط ہوتی ہیں۔
      </p>

      {/* شرح بیج */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        شرح بیج
      </h3>
      <p>
        شرح بیج فی ایکڑ 8 تا 10 کلو گرام ہونی چاہیے۔ بیج صاف ستھرا اور صحت مند
        ہونا چاہیے۔
      </p>
<div className="text-right text-black space-y-4 leading-relaxed bg-green-50 p-4 rounded-lg">
      {/* مین ہیڈنگ */}
      <h2 className="text-2xl font-bold text-center bg-green-600 text-white py-2 rounded">
        پیداواری منصوبہ مکئی 2025
      </h2>
      <h3 className="text-center text-lg font-semibold text-gray-700">
        محکمہ زراعت حکومت پنجاب
      </h3>

      {/* --- مکئی والا حصہ (جیسا آپ نے دیا تھا) --- */}
      <p>
        مکئی ایک اہم نقد آور فصل ہے۔ سال میں مکئی کی دو فصلیں کاشت ہوتی ہیں، ایک بہاریہ اور دوسری موسمی فصل۔ 
        مکئی کی پیداوار کا زیادہ تر حصہ مرغیوں کی خوراک میں استعمال ہوتا ہے۔ یہ انسانی خوراک کے طور پر بھی 
        مختلف طریقوں سے استعمال ہوتی ہے۔ اس سے نشاستہ، خوردنی تیل، گلوکوز، کسٹرڈ، جیلی، کارن فلیکس اور پاپ کارن 
        وغیرہ بھی تیار کئے جاتے ہیں۔
      </p>

      <p>
        مکئی سے مختلف مصنوعات بنانے والی فیکٹریاں پنجاب کے مختلف علاقوں میں واقع ہیں۔ یہ فصل مویشیوں کے لیے سبز چارہ، 
        سائلیج اور ونڈے کے طور پر بھی استعمال ہوتی ہے۔ مکئی کے تنے بھی استعمال میں لائے جا رہے ہیں جو بطور ایندھن، 
        گتا اور کاغذ سازی وغیرہ میں استعمال ہوتے ہیں اور کاشتکاروں کی آمدن میں اضافہ کا باعث بنتے ہیں۔
      </p>

      {/* --- نیا حصہ شامل کیا گیا --- */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        کام کی منظور شدہ اقسام
      </h3>
      <p>
        کام کی منظور شدہ اقسام میں مختلف علاقے اور حالات کے مطابق کاشت کے اصول طے کیے گئے ہیں۔ 
        ان اقسام کی خاصیت یہ ہے کہ یہ کم پانی میں بھی اچھی پیداوار دیتی ہیں اور بیماریوں کے خلاف بہتر مدافعت رکھتی ہیں۔
      </p>

      <ul className="list-disc pr-6 space-y-1">
        <li>پر لیٹ فیصل آباد 21</li>
        <li>منی پر لائل پور 15 جون تک کاشت کی جا سکتی ہے</li>
        <li>بیماریوں کے اثرات کم ہوتے ہیں</li>
        <li>شرح بیج ہمیشہ صحت مند اور جڑی بوٹیوں سے پاک ہونا چاہیے</li>
      </ul>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        برسیم کی مخلوط کاشت
      </h3>
      <p>
        برسیم کو رائی کے ساتھ ملا کر بھی کاشت کیا جا سکتا ہے۔ اس طریقہ کا فائدہ یہ ہے کہ فصل زیادہ غذائیت بخش ہو جاتی ہے۔  
        مخلوط کاشت کی صورت میں:
      </p>
      <ul className="list-disc pr-6 space-y-1">
        <li>7 کلوگرام برسیم کا بیج فی ایکڑ</li>
        <li>1 کلوگرام رائی گھاس کا بیج فی ایکڑ</li>
        <li>صاف ستھرا اور بیماریوں سے پاک بیج استعمال کیا جائے</li>
      </ul>
    </div>
    <div className="text-right text-black space-y-4 leading-relaxed bg-green-50 p-4 rounded-lg">
      {/* مین ہیڈنگ */}
      <h2 className="text-2xl font-bold text-center bg-green-600 text-white py-2 rounded">
        پیداواری منصوبہ مکئی 2025
      </h2>
      <h3 className="text-center text-lg font-semibold text-gray-700">
        محکمہ زراعت حکومت پنجاب
      </h3>

      {/* --- مکئی والا حصہ --- */}
      <p>
        مکئی ایک اہم نقد آور فصل ہے۔ سال میں مکئی کی دو فصلیں کاشت ہوتی ہیں، ایک بہاریہ اور دوسری موسمی فصل۔ 
        مکئی کی پیداوار کا زیادہ تر حصہ مرغیوں کی خوراک میں استعمال ہوتا ہے۔ یہ انسانی خوراک کے طور پر بھی 
        مختلف طریقوں سے استعمال ہوتی ہے۔ اس سے نشاستہ، خوردنی تیل، گلوکوز، کسٹرڈ، جیلی، کارن فلیکس اور پاپ کارن 
        وغیرہ بھی تیار کئے جاتے ہیں۔
      </p>

      {/* --- کام کی منظور شدہ اقسام --- */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        کام کی منظور شدہ اقسام
      </h3>
      <p>
        کام کی منظور شدہ اقسام میں مختلف علاقے اور حالات کے مطابق کاشت کے اصول طے کیے گئے ہیں۔ 
        ان اقسام کی خاصیت یہ ہے کہ یہ کم پانی میں بھی اچھی پیداوار دیتی ہیں اور بیماریوں کے خلاف بہتر مدافعت رکھتی ہیں۔
      </p>

      <ul className="list-disc pr-6 space-y-1">
        <li>پر لیٹ فیصل آباد 21</li>
        <li>منی پر لائل پور 15 جون تک کاشت کی جا سکتی ہے</li>
        <li>بیماریوں کے اثرات کم ہوتے ہیں</li>
        <li>شرح بیج ہمیشہ صحت مند اور جڑی بوٹیوں سے پاک ہونا چاہیے</li>
      </ul>

      {/* --- برسیم کی مخلوط کاشت --- */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        برسیم کی مخلوط کاشت
      </h3>
      <p>
        برسیم کو رائی کے ساتھ ملا کر بھی کاشت کیا جا سکتا ہے۔ اس طریقہ کا فائدہ یہ ہے کہ فصل زیادہ غذائیت بخش ہو جاتی ہے۔  
        مخلوط کاشت کی صورت میں:
      </p>
      <ul className="list-disc pr-6 space-y-1">
        <li>7 کلوگرام برسیم کا بیج فی ایکڑ</li>
        <li>1 کلوگرام رائی گھاس کا بیج فی ایکڑ</li>
        <li>صاف ستھرا اور بیماریوں سے پاک بیج استعمال کیا جائے</li>
      </ul>

      {/* --- نیا سیکشن: وقت کاشت وغیرہ --- */}
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        وقت کاشت
      </h3>
      <p>
        برسیم کی کاشت کا بہترین وقت کم تا وسط اکتوبر ہے۔ تاہم حالات کے مطابق نومبر میں بھی کاشت کی جا سکتی ہے۔ 
        وقت پر کاشت سے فی ایکڑ پیداوار بہتر حاصل ہوتی ہے۔
      </p>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        موزوں آب و ہوا
      </h3>
      <p>
        معتدل سے گرم آب و ہوا برسیم کی کاشت کے لئے موزوں ہے۔ ہوا اور نمی کی مناسب مقدار فصل کی بڑھوتری کے لئے ضروری ہے۔
      </p>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        موزوں زمین
      </h3>
      <p>
        درمیانی میرا زمین برسیم کی کاشت کے لئے بہترین سمجھی جاتی ہے۔ 
        البتہ زمین ہموار اور زرخیز ہو تو پیداوار میں اضافہ ہوتا ہے۔
      </p>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        زمین کی تیاری
      </h3>
      
      <p>
        زمین کی تیاری کے لئے 3 تا 4 ہل اور سہاگہ دینا ضروری ہے تاکہ زمین ہموار ہو جائے۔ 
        جڑی بوٹیوں کی صفائی اور نرم مٹی فصل کی بہتر پیداوار میں مدد دیتی ہے۔
      </p>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        طریقہ کاشت
      </h3>
      <p>
        پہلی آبپاشی کے بعد زمین میں ہلکا پانی کھڑا کر کے بیج بویا جائے۔ 
        بیج کی گہرائی اور زمین کی نمی کو مدنظر رکھتے ہوئے مناسب وقت پر بوائی کی جائے۔
      </p>

      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        جتی اور برسیم کی مخلوط کاشت
      </h3>
      <p>
        جتی اور برسیم کو ملا کر بھی کاشت کیا جا سکتا ہے۔ اس صورت میں فی ایکڑ تقریباً 10 کلوگرام بیج استعمال کیا جائے 
        تاکہ دونوں فصلیں متوازن پیداوار دیں۔
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        کھادوں کا استعمال
      </h2>

      <p>
        کھاد کی مقدار کا تعین کرنے کے لئے زمین کا <span style={{ color: "#d53f8c", fontWeight: "bold" }}>تجزیہ کروانا</span> ضروری ہے تاکہ یہ معلوم ہو سکے کہ زمین کے لئے کون سی کھاد موزوں ہے۔
      </p>

      <p>
        علایق موامر المرام فی من <span style={{ color: "#dd6b20", fontWeight: "bold" }}>12 35 کمار کی عمارا</span> یہاں کی کار اج مد بوری ای اس پی آرسی پوری انا اولی کا چار بوری میں ایس پی (186) و آرامی برای پور راه آرگی باری خان بولی۔ 
        توت یارے کی بر کتائی کے بعد عمل کی ضرورت کے مطابق ناظر و منی تھانوں سوال ہے۔ میں کھاد کی ضرورت ارنے کا با تای یاری کا ملا دیا ہے تو بات ہیلی کھا کا استعمال کم کریں۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        آبپاشی
      </h3>
      <p>
        چونکہ <span style={{ color: "#d69e2e", fontWeight: "bold" }}>پانی لگانے</span> کے بعد کھاد دی جاتی ہے، اس لئے پہلی آبپاشی کاشت کے ایک ہفتے بعد کریں۔ 
        اس کے بعد حسب ضرورت پانی لگائیں۔ شدید سردی اور کورا پڑنے کے دنوں میں ہلکا سا پانی لگانے سے فصل کو کافی حد تک بچایا جا سکتا ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        برسیم کا جدا شیمی ٹیکہ (حیاتیاتی کھاد)
      </h3>
      <p>
        بیج پر <span style={{ color: "#d53f8c", fontWeight: "bold" }}>ٹیکہ لگانے</span> سے پودے میں نائٹروجن حاصل کرنے کی صلاحیت بڑھتی ہے۔ 
        100 گرام چینی کو 112 ملی لیٹر پانی میں حل کریں اور اس میں ٹیکہ ملا کر اچھی طرح مکس کریں۔ بیج پر لگانے کے بعد انہیں ہوا دار جگہ پر خشک کریں اور فوراً کاشت کریں۔
      </p>

      <p>
        یہ ٹیکہ زرعی یونیورسٹی فیصل آباد اور قومی زرعی تحقیقاتی ادارہ اسلام آباد سے باآسانی دستیاب ہے۔
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* Section 1 */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        نوسرن کی سفارش کردہ اقسام
      </h2>

      <p>
        دار آید و <span style={{ color: "#d53f8c", fontWeight: "bold" }}>رویات سرگودھا</span> کی حضور شد و التسام۔  
        اوت بوت کار اسی زمین میں کاشت کے لئے بھی موزوں قسم ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        شرح بیج
      </h3>
      <p>
        سرگودھا اوران 2002 مددری مورے میں۔  
        بیج کا <span style={{ color: "#dd6b20", fontWeight: "bold" }}>صحیح مقدار</span> زمین کی پیداوار بڑھانے کے لیے ضروری ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        وقت کاشت
      </h3>
      <p>
        توران کا بستر سے اقبہ کاشت 15 اکتوبر کے پیش نظر <span style={{ color: "#d53f8c", fontWeight: "bold" }}>وقت کاشت</span> میں دلاسہ ضروری ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        موزوں آب و ہوا
      </h3>
      <p>
        آب و ہوا اور پاش فصل کی تیاری سے کام اپنی مالی حیثیت میں رکھ سکتی ہے۔  
        بارش اور نمی کی مناسب مقدار فصل کے لیے اہم ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        موزوں زمین اور اسکی تیاری
      </h3>
      <p>
        اومرین کی فصل کے لیے بہتر جنکاس والی زمین موزوں ہے۔  
        زمین کی تیاری کے لیے <span style={{ color: "#dd6b20", fontWeight: "bold" }}>سہا گہ</span> اور ہل سے کام کریں تاکہ زمین ہموار ہو جائے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        طریقہ کاشت
      </h3>
      <p>
        فصل کو الگ الگ رو کر اور مناسب فاصلے پر بویا جائے۔  
        پانی کی مناسب مقدار دینا ضروری ہے تاکہ <span style={{ color: "#d53f8c", fontWeight: "bold" }}>پودے کی نمو</span> بہتر ہو۔
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* پہلا صفحہ */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        گندم کی فصل میں جڑی بوٹیوں کی نشاندہی اور بروقت کنٹرول
      </h2>

      <p>
        جڑی بوٹیاں گندم کی فصل کی پیداوار میں بڑی رکاوٹ ہیں، بروقت اقدامات اور مناسب تدابیر اپنا کر پیداوار میں اضافہ ممکن بنائیں۔ مزید تفصیلات جاننے کے لیے پوسٹر پڑھیں۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        گندم کی فصل میں جڑی بوٹیوں کی اقسام
      </h3>
      <ul className="list-disc pr-6 space-y-1">
        <li>
          <strong>چوڑے پتے والی جڑی بوٹیاں:</strong> باتھو، جنگلی پالک، سانی، پیازی، شاہترہ، کرنڈ
        </li>
        <li>
          <strong>نوکیلے پتے والی جڑی بوٹیاں:</strong> جنگلی جئی، دمبی ستی، گھاس
        </li>
      </ul>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        جڑی بوٹیوں کے نقصانات
      </h3>
      <ul className="list-disc pr-6 space-y-1">
        <li>خوراک، پانی اور روشنی کے لیے فصل سے مقابلہ کرتی ہیں۔</li>
        <li>کیڑے مکوڑوں اور بیماریوں کی پناہ گاہ بنتی ہیں۔</li>
        <li>فصل کی کٹائی میں رکاوٹ پیدا کرتی ہیں۔</li>
        <li>پیداوار میں کمی اور معیار میں گراوٹ کا باعث بنتی ہیں۔</li>
      </ul>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        جڑی بوٹیوں کی کنٹرول کے طریقے
      </h3>
      <p><strong>احتیاطی تدابیر:</strong></p>
      <ul className="list-disc pr-6 space-y-1">
        <li>صاف بیج کا استعمال کریں۔</li>
        <li>کھیت کو جڑی بوٹیوں سے پاک رکھیں۔</li>
        <li>بروقت کاشت کریں۔</li>
      </ul>

      <p><strong>میکانکی کنٹرول:</strong></p>
      <ul className="list-disc pr-6 space-y-1">
        <li>ہاتھ سے گوڈی کرنا۔</li>
        <li>کاشتکاری کے اوزاروں کا استعمال۔</li>
      </ul>

      <p><strong>کیمیائی کنٹرول (جڑی بوٹی مار ادویات):</strong></p>
      <ul className="list-disc pr-6 space-y-1">
        <li>چوڑے پتے والی جڑی بوٹیوں کے لیے: 2,4-D, Bromoxynil, MCPA</li>
        <li>نوکیلے پتے والی جڑی بوٹیوں کے لیے: Pinoxaden, Clodinafop</li>
        <li>دونوں قسم کی جڑی بوٹیوں کے لیے: Metsulfuron-methyl + Carfentrazone-ethyl</li>
      </ul>

      <p><strong>اہم ہدایات:</strong></p>
      <ul className="list-disc pr-6 space-y-1">
        <li>جڑی بوٹی مار ادویات کا استعمال ماہرین کے مشورے سے کریں۔</li>
        <li>ادویات کا صحیح مقدار اور صحیح وقت پر استعمال کریں۔</li>
        <li>ادویات کے استعمال کے دوران حفاظتی تدابیر اختیار کریں۔</li>
      </ul>

      {/* دوسرا صفحہ */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginTop: "30px",
          marginBottom: "15px"
        }}
      >
        جڑی بوٹیوں کی نشاندہی اور بروقت کنٹرول
      </h2>

      <p>
        فصل کے ابتدائی مراحل میں جڑی بوٹیوں کی نشاندہی کریں اور مختلف اقسام کی جڑی بوٹیوں کو پہچانیں۔  
        جڑی بوٹیوں کو پھول آنے سے پہلے کنٹرول کرنا آسان ہوتا ہے۔
      </p>

      <p>
        <strong>احتیاط:</strong> صرف منظور شدہ ادویات استعمال کریں، ایکسپائری ڈیٹ چیک کریں اور بچوں و جانوروں کی پہنچ سے دور رکھیں۔
      </p>

      <p style={{ fontWeight: "bold", color: "#2f855a", marginTop: "20px" }}>
        خوشحال کسان، سرسبز بلوچستان  
        محکمہ زراعت (توسیع) بلوچستان
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* یج والی فصل کی برداشت */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        یج والی فصل کی برداشت
      </h2>

      <p>
        فصل کے مقصد کے لئے پار یکھیں کے چھتے (اے رکھنے سے <span style={{ color: "#d53f8c", fontWeight: "bold" }}>رہائی</span>) کا کل بہتر ہوگا اور بیچ کی پید اور میں خاطر خواہ اضافہ ممکن ہے۔ احتیاط سے پوری طرح پہلے پر برداشت کریں۔  
        کھیت میں پائی جانے کے بعد فصل کی <span style={{ color: "#dd6b20", fontWeight: "bold" }}>کل مقدار</span> بارہ شروع ہو جاتی ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        یج والی فصل کی گہائی اور ستھال
      </h3>

      <p>
        فصل کو <span style={{ color: "#d53f8c", fontWeight: "bold" }}>ہر گز نہ کالا</span> جائے تاکہ ناقص پیداوار سے بچا جا سکے۔  
        کنائی منی کے وقت مناسب اقدامات کریں تاکہ بیج کا محرج کم ہو۔ کٹائی کو مناسب پیٹرن سے کرائیں اور فصل کی صفائی کریں۔  
        بیج کو سنبھال کر رکھیں تاکہ اگلی فصل کے لیے معیار بہتر رہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        برسیم و لوسرن کی بیماریاں اور انسداد
      </h3>

      <p>
        پر حکم اور لوسرن کے تنے کا سڑنا (Sclerotinia mitution) کی وجہ سے لگتی ہے۔ یہ زیاری <span style={{ color: "#d53f8c", fontWeight: "bold" }}>پورے کنو</span> پر اثر انداز ہوتی ہے اور فصل کی پیداوار کم کر دیتی ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        تدارک
      </h3>

      <p>
        زمین کی تیاری پر دھیان دیں، زمین کو انبار کریں، اور کھیت میں مناسب پانی کا استعمال کریں۔  
        <span style={{ color: "#dd6b20", fontWeight: "bold" }}>فی ایکڑ 22 گرام</span> ادویات استعمال کریں تاکہ بیماری پر قابو پایا جا سکے۔  
        فصل کی صحت مند کٹائی اور صفائی کا مکمل خیال رکھیں۔
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* برسیم کی جڑ کا اکھیڑا */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        برسیم کی جڑ کا اکھیڑا (Root Rot)
      </h2>

      <p>
        یہ بیماری <span style={{ color: "#d53f8c", fontWeight: "bold" }}>Anurbotanis solars</span> کی وجہ سے ہوتی ہے۔ حملے کے بعد پودے کی جڑ سڑ جاتی ہے۔  
        متاثرہ جڑ کو <span style={{ color: "#dd6b20", fontWeight: "bold" }}>ہٹانا اور ضائع کرنا</span> ضروری ہے۔  
        متاثرہ جگہ پر کم از کم چار سال تک دوبارہ کاشت نہ کریں۔  
        پانی دینے اور فصل کی دیکھ بھال میں احتیاط کریں تاکہ بیماری دوبارہ نہ پھیلے۔
      </p>

      {/* Collar Rot */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        Collar Rot (کالر روٹ)
      </h3>

      <p>
        یہ بیماری <span style={{ color: "#d53f8c", fontWeight: "bold" }}>Phytophthora megasperma</span> کی وجہ سے ہوتی ہے۔  
        متاثرہ جگہ سے پودا گل جاتا ہے اور رنگ تبدیل ہو جاتا ہے۔  
        پانی دینے میں احتیاط کریں؛ زیادہ پانی دینے سے بیماری کا پھیلاؤ بڑھ سکتا ہے۔
      </p>

      {/* Anthracnose */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        Anthracnose (انتھریک نوز)
      </h3>

      <p>
        یہ بیماری <span style={{ color: "#d53f8c", fontWeight: "bold" }}>Cotototrichum milani</span> کی وجہ سے ہوتی ہے۔  
        پانی دینے اور فصل کی دیکھ بھال میں احتیاط کریں۔  
        متاثرہ پودوں کو ہٹائیں اور ضائع کریں تاکہ بیماری کا پھیلاؤ کم کیا جا سکے۔
      </p>

      {/* مدارک */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        مدارک
      </h3>

      <p>
        فروری میں چارے کی کتابی کے بعد <span style={{ color: "#dd6b20", fontWeight: "bold" }}>1 سی سی فی ناظر والی بوری</span> یا  
        <span style={{ color: "#dd6b20", fontWeight: "bold" }}>2 گرام فی لٹر</span> والی ادویات استعمال کریں تاکہ بیماری کا تدارک کیا جا سکے۔
      </p>
    </div>
     <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* جنى */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        جنى فصل
      </h2>

      <p>
        یہ فصل <span style={{ color: "#d53f8c", fontWeight: "bold" }}>می علیا اور فلایت</span> سے بھرپور چارہ فراہم کرتی ہے۔  
        فصل سردی میں بھی اپنی پیداواری صلاحیت برقرار رکھتی ہے اور جانوروں کے لیے <span style={{ color: "#dd6b20", fontWeight: "bold" }}>بہت اعلی معیار کی چارہ</span> فراہم کرتی ہے۔  
        خشک چارہ (May) بھی حاصل کیا جا سکتا ہے، جو <span style={{ color: "#d53f8c", fontWeight: "bold" }}>غذائیت سے بھرپور</span> ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        جنسی کی منظور شدہ اقسام
      </h3>

      <ul style={{ listStyle: "disc", paddingRight: "20px" }}>
        <li><span style={{ color: "#dd6b20", fontWeight: "bold" }}>الله الامان</span></li>
        <li>این اساری منی اور لی</li>
        <li>ایور گرین منی</li>
      </ul>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        وقت کاشت
      </h3>

      <p>
        فصل کی کاشت <span style={{ color: "#d53f8c", fontWeight: "bold" }}>اوت تا سال محرر محمد</span> کے دوران کی جاتی ہے۔  
        کاشت سے پہلے زمین کو مناسب طریقے سے تیار کریں، اور پیوندی کی مناسب دیکھ بھال کریں۔  
        ہلتے ہوئے بیج کو مناسب فاصلے پر بو کر فصل کی بہترین پیداوار حاصل کی جا سکتی ہے۔
      </p>
    </div>
 <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* توت */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        توت فصل
      </h2>

      <p>
        اگر <span style={{ color: "#d53f8c", fontWeight: "bold" }}>توت کی اکیلی فصل</span> کو 10 mseون کے بعد چارے کے لیے کٹا جائے، تو اس کی زندگی بڑھ جاتی ہے اور اچھا حاصل حاصل کیا جا سکتا ہے۔  
        اگر صرف ایک ای کتانی مینی بار اتصل 100000 توں ہیں، تو پارہ کے لیے بھی مفید ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        موزوں آب و ہوا
      </h3>

      <p>
        یہ فصل <span style={{ color: "#dd6b20", fontWeight: "bold" }}>بارانی اور نیم مرطوب علاقوں</span> کے لیے موزوں ہے۔  
        جہاں گندم کاشت ہوتی ہے، وہاں اس کی کاشت بھی کی جا سکتی ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        زمین اور اس کی تیاری
      </h3>

      <p>
        زمین کو <span style={{ color: "#d53f8c", fontWeight: "bold" }}>تین چار بار ہلایا</span> اور بھاری جور لگایا جائے۔  
        یہ زمین توت کی کاشت کے لیے موزوں ہے، جبکہ کم زرخیز یا پتلی زمین کے لیے مناسب نہیں۔  
        زمین کی ہمواری اور مناسب تیاری فصل کی پیداوار بڑھانے میں مددگار ہے۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        کھادوں کا استعمال
      </h3>

      <p>
        کھاد کی مقدار اور استعمال <span style={{ color: "#dd6b20", fontWeight: "bold" }}>زمیندار کی سفارش</span> کے مطابق کریں۔  
        بارانی علاقوں میں فصل کو مناسب وقت پر کھاد فراہم کریں۔
      </p>

      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        طریقہ کاشت
      </h3>

      <p>
        فصل کی کاشت <span style={{ color: "#d53f8c", fontWeight: "bold" }}>بیچ کی بھر چور</span> اور مناسب فاصلے پر کریں۔  
        اس سے حاصل بہتر ہوتا ہے اور فصل متوازن پیداوار دیتی ہے۔
      </p>
    </div>
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* آبپاشی */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        آبپاشی
      </h2>
      <p>
        فصل کو <span style={{ color: "#d53f8c", fontWeight: "bold" }}>مناسب پانی</span> فراہم کریں۔  
        ان گلی اور پانی کی حالت میں فصل کی بہتر نشوونما کے لیے <span style={{ color: "#dd6b20", fontWeight: "bold" }}>پہلا پانی وقت پر لگانا</span> ضروری ہے۔
      </p>

      {/* پیداوار و برداشت */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        پیداوار و برداشت
      </h3>
      <p>
        اس فصل کی اصل بعد <span style={{ color: "#d53f8c", fontWeight: "bold" }}>700-8000 کلوگرام</span> حاصل کی جا سکتی ہے۔  
        بہتر پیداوار کے لیے <span style={{ color: "#dd6b20", fontWeight: "bold" }}>پھول آنے پر وقت پر فصل کاٹنا</span> ضروری ہے۔
      </p>

      {/* رانی گھاس */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        رانی گھاس
      </h3>
      <p>
        یہ فصل <span style={{ color: "#d53f8c", fontWeight: "bold" }}>سردی برداشت</span> کر سکتی ہے اور جانور اسے شوق سے کھاتے ہیں۔  
        کلر اٹھی زمین میں آسانی سے اگائی جا سکتی ہے اور خشک چارہ بھی فراہم کرتی ہے۔
      </p>

      {/* سفارش کرده هم */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        سفارش کرده هم
      </h3>
      <p>
        یہ فصل <span style={{ color: "#dd6b20", fontWeight: "bold" }}>چشم مرے کی اداروں</span> کی سفارش شدہ ہے اور تیار شدہ چارہ بہترین ہے۔
      </p>

      {/* آب و ہوا */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        آب و ہوا
      </h3>
      <p>
        یہ فصل ان علاقوں کے لیے موزوں ہے جہاں <span style={{ color: "#d53f8c", fontWeight: "bold" }}>بارش اور آبپاشی کا مناسب انتظام</span> موجود ہو۔  
        شدید سردی اور خشک علاقوں میں اس کی کاشت محدود ہے۔
      </p>

      {/* موزوں زمین اور اسکی تیاری */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        موزوں زمین اور اسکی تیاری
      </h3>
      <p>
        زمین کو <span style={{ color: "#dd6b20", fontWeight: "bold" }}>ہموار اور زرخیز</span> ہونا چاہیے۔  
        فصل کی بہتر پیداوار کے لیے زمین کی تیاری میں <span style={{ color: "#d53f8c", fontWeight: "bold" }}>حوالہ و ہل چلانا اور بھاری جور لگانا</span> ضروری ہے۔
      </p>

      {/* شرح بیج */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        شرح بیج
      </h3>
      <p>
        ہر ایکڑ کے لیے <span style={{ color: "#d53f8c", fontWeight: "bold" }}>صحیح مقدار میں بیج</span> استعمال کریں۔  
        بیج صاف، صحت مند اور بیماریوں سے پاک ہونا چاہیے۔
      </p>
    </div>
     <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "'Noto Nastaliq Urdu', serif",
        lineHeight: 2,
        textAlign: "right",
        direction: "rtl",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      {/* وقت و طریقه کاشت */}
      <h2
        style={{
          backgroundColor: "#2c7a7b",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      >
        وقت و طریقه کاشت
      </h2>
      <p>
        فصل کی ہوائی بونے کا وقت <span style={{ color: "#d53f8c", fontWeight: "bold" }}>اکتوبر و نومبر</span> ہے۔  
        بیچ کی کاشت میں <span style={{ color: "#dd6b20", fontWeight: "bold" }}>11.5 فٹ فاصلہ</span> رکھنا بہتر نتائج دیتا ہے۔
      </p>

      {/* آبپاشی */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        آبپاشی
      </h3>
      <p>
        فصل کی آبیاری زمین کی نوعیت اور حالات پر منحصر ہے۔  
        پہلا پانی بوائی کے <span style={{ color: "#d53f8c", fontWeight: "bold" }}>تین ہفتے بعد</span> لگائیں اور اس کے بعد حسب ضرورت پانی دیں۔
      </p>

      {/* کھادوں کا استعمال */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        کھادوں کا استعمال
      </h3>
      <p>
        کھاد کی مقدار کا تعین <span style={{ color: "#dd6b20", fontWeight: "bold" }}>زمین کے تجزیہ</span> کی بنیاد پر کریں۔  
        زرخیز زمین میں <span style={{ color: "#d53f8c", fontWeight: "bold" }}>متوازن کھاد</span> کا استعمال ضروری ہے۔
      </p>

      {/* پرداشت */}
      <h3
        style={{
          backgroundColor: "#2f855a",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          marginTop: "25px"
        }}
      >
        پرداشت
      </h3>
      <p>
        چنے کی فصل <span style={{ color: "#d53f8c", fontWeight: "bold" }}>60 دن بعد</span> پک جاتی ہے۔  
        ہر ایکڑ سے تقریباً <span style={{ color: "#dd6b20", fontWeight: "bold" }}>1000 کلوگرام</span> پیداوار حاصل ہو سکتی ہے۔  
        صحیح وقت پر کٹائی سے <span style={{ color: "#d53f8c", fontWeight: "bold" }}>معیاری اور زیادہ پیداوار</span> ممکن ہوتی ہے۔
      </p>
    </div>
      <h3 className="bg-green-600 text-white font-bold px-3 py-1 rounded">
        بیج کو زہر لگانا
      </h3>
      <ul className="list-disc pr-6 space-y-1">
        <li>ایز وکسی سٹرو بن + کلوتھیا نیڈن + فلوڈی آکسی نل: 6 گرام فی کلو</li>
        <li>امیڈا کلو پرڈ + ٹیپو کو نازول: 10 ملی لیٹر فی کلو</li>
        <li>تھایا میتھا گزم 350 ایف ایس: 10 ملی لیٹر فی کلو</li>
      </ul>
    </div>
  ),
},
{
  img: cotton6,
  title: "Axcel Tool",
  price: "$65",
  desc: (
    <div className="text-right text-black space-y-4 leading-relaxed">
<h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

      {/* Heading */}
     

      <p>
        <span className="text-green-700 font-bold">ایکسپل</span> ایک سنتھیٹک پائر تھرائیڈ گروپ کا
        وسیع الاثر کیڑا مار زہر ہے۔  
        یہ اپنے خوردنی و لمسی اثر کی وجہ سے کتر کر کھانے والے کیڑوں کے خلاف انتہائی مؤثر ہے۔  
        <span className="text-green-700 font-bold"> ایکسل</span> کپاس کے علاوہ ترشاوہ پھل اور آم کے
        ضرر رساں کیڑوں کے خلاف بھی بے حد مؤثر ہے۔
      </p>

      {/* سفارشات برائے استعمال */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        سفارشات برائے استعمال
      </h3>

      <table className="table-auto border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">فصل</th>
            <th className="border px-2 py-1">نقصان دہ کیڑے</th>
            <th className="border px-2 py-1">مقدار فی ایکڑ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">کپاس</td>
            <td className="border px-2 py-1 text-red-600 font-bold">گلابی، چتکبری، امریکن سنڈی، سفید مکھی، جیسیڈ، جوس</td>
            <td className="border px-2 py-1 text-purple-700 font-bold">250 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">سٹرَس</td>
            <td className="border px-2 py-1 text-red-600 font-bold">لیف مائنر</td>
            <td className="border px-2 py-1 text-purple-700 font-bold">100 لیٹر پانی میں 20 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">آم</td>
            <td className="border px-2 py-1 text-red-600 font-bold">ہاپر</td>
            <td className="border px-2 py-1 text-purple-700 font-bold">100 لیٹر پانی میں 50 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">سیب</td>
            <td className="border px-2 py-1 text-red-600 font-bold">مائٹس</td>
            <td className="border px-2 py-1 text-purple-700 font-bold">100 لیٹر پانی میں 20 ملی لیٹر</td>
          </tr>
        </tbody>
      </table>

      {/* طریقہ استعمال */}
      <h3 className="bg-[#76b74e] text-white font-bold px-3 py-1 rounded">
        طریقہ استعمال
      </h3>

      <p>
        کیلیبریشن کے ذریعے فی ایکڑ پانی کا تعین کریں۔  
        اسپرے کے ٹینک کو آدھا بھر لیں اور پھر دوا کی مجوزہ مقدار شامل کریں۔  
        اس کے بعد ٹینک کو مکمل پانی سے بھر کر اچھی طرح مکس کریں۔  
        محلول کو اس طرح اسپرے کریں کہ تمام پودے اچھی طرح تر ہو جائیں۔  
        اسپرے کیلئے <span className="text-orange-600 font-bold">ہلونی نوزل</span> استعمال کریں۔
      </p>
    </div>
  ),
},

 {
  img: cotton8,
  title: "مٹر",
  desc: (
    <div className="text-right leading-relaxed space-y-4 bg-green-50 p-6 rounded-lg shadow-md text-gray-900">
      {/* --- مین ہیڈنگ --- */}
      <h2 className="text-2xl font-bold text-green-700 bg-green-100 p-3 rounded text-center">
        پیداواری منصوبہ سبزیات موسم سرما 25-2024
      </h2>

      {/* --- آبپاشی --- */}
      <h3 className="text-xl font-semibold text-blue-700 bg-blue-100 p-2 rounded">آبپاشی</h3>
      <p className="text-gray-800">
        اکھٹی کا یہ فصل کو شروع میں ہر ملتے پانی کی ضرورت ہوتی ہے تا ہم موسم سرد ہو جائے کہ یہ قعہ پڑھایا جا سکتا ہے۔
        بے والی فصل کو پھول آنے اور پھلیاں بننے پر آبپاش ضرور کر یں۔
      </p>

      {/* --- پرندوں سے حفاظت --- */}
      <h3 className="text-xl font-semibold text-purple-700 bg-purple-100 p-2 rounded">پرندوں سے حفاظت</h3>
      <p className="text-gray-800">
        مٹر کی پھلیوں کو مختلف پرندے مثلاً طوطے، کوّے اور چڑیاں نقصان پہنچاتے ہیں۔
        پھلیاں جب دانوں سے بھری ہوئی پکی اور نرم ہوں تو اس وقت نقصان کا خطرہ زیادہ ہوتا ہے۔
        اس کیلئے مندرجہ ذیل طریقوں پر عمل کرنے سے بہتر نتائج حاصل کئے جا سکتے ہیں:
      </p>
      <ul className="list-disc pr-6 text-gray-800 space-y-1">
        <li>فصل کاشت کرتے وقت اس بات کا خیال رکھیں کہ کھیت صبح اور شام کے وقت زیادہ متاثر ہوتا ہے۔ ان اوقات میں شور مچانے والے آلات چلا کر پرندوں کو بھگائیں۔</li>
        <li>چمکدار باریک پلاسٹک کی پٹیاں کھیت کے آر پار مناسب فاصلے پر لگا دیں تاکہ ان کے ہلنے سے پرندے دور رہیں۔</li>
        <li>پرانے کپڑوں اور ٹوپی وغیرہ سے آدمی کی شکل بنا کر کھیت میں گاڑ دیں تاکہ پرندے ڈر کر دور رہیں۔</li>
      </ul>

      {/* --- برداشت --- */}
      <h3 className="text-xl font-semibold text-red-700 bg-red-100 p-2 rounded">برداشت</h3>
      <p className="text-gray-800">
        جب پھلیوں میں دانے بھر جائیں تو سبز پھلیوں کی چنائی کرلیں۔ چنائی احتیاط سے کریں تاکہ پودے الٹ پلٹ نہ ہوں۔
        مقامی منڈی میں فروخت کیلئے چنائی صبح کے وقت جبکہ دور دراز کی منڈی کیلئے شام کو کریں۔
        پھلیوں کو کپڑے کی صاف بوریوں میں رکھیں تاکہ ان کا رنگ اور تازگی متاثر نہ ہو۔
        عام طور پر اگیتی اقسام دو جبکہ پھیلی اقسام تین چٹائیاں دیتی ہیں۔
      </p>

      {/* --- پھول گوبھی --- */}
      <h3 className="text-xl font-semibold text-green-800 bg-green-200 p-2 rounded">پھول گوبھی</h3>
      <p className="text-gray-800">
        پھول گوبھی موسم سرما کی ایک لذیذ سبزی ہے۔ اس کا نباتاتی نام 
        <span className="font-semibold"> Brassica oleracea var. botrytis </span> 
        ہے۔ یہ غذائیت سے بھرپور ریشہ دار سبزی ہے جو وٹامن سی، مینگنیز، اور دیگر معدنیات کا اچھا ذریعہ ہے۔
        اس میں وٹامن کے، اومیگا-3، اور فیٹی ایسڈز کی موجودگی مختلف بیماریوں کو کم کرنے میں مدد دیتی ہے۔
      </p>

    <div className="text-right leading-relaxed space-y-6 bg-green-50 text-green-900 p-6 rounded-lg shadow-md">
      
      {/* --- مین ہیڈنگ --- */}
      <h2 className="text-3xl font-bold text-green-700 bg-green-100 p-3 rounded-lg text-center">
        پیداواری منصوبہ سبزیات موسم سرما 25-2024
      </h2>

      {/* --- شرح بیج --- */}
      <p className="bg-white p-3 rounded-lg shadow-sm">
        <span className="font-semibold text-green-700">شرح بیج:</span>  
        مٹر کی اگیتی اقسام کیلئے 30-35 کلو گرام اور تحقیقی اقسام کیلئے 20-25 کلو گرام بیج فی ایکڑ استعمال کریں۔
      </p>

      {/* --- اقسام --- */}
      <h3 className="text-2xl font-bold text-green-700 bg-green-100 p-2 rounded-lg">
        مٹر کی ترقی دادہ اقسام
      </h3>
      <p>وقت کاشت کے لحاظ سے مٹر کی اگیتی اور تحقیقی اقسام ہیں۔ اگیتی اقسام کا فصلی دورانیہ 60-70 دن ہے جبکہ تحقیقی اقسام کا دورانیہ 100-125 دن تک ہے۔ ادارہ تحقیقات بہتر بات فیصل آباد کی تیار کردہ آئینی اور تحقیقی اقسام اور خصوصیات درج ذیل ہیں:</p>

      {/* --- جدول اقسام --- */}
      <table className="table-auto border-collapse border border-green-300 w-full text-right bg-white">
        <thead className="bg-green-100 text-green-800">
          <tr>
            <th className="border border-green-300 p-2">نمبر شمار</th>
            <th className="border border-green-300 p-2">اقسام</th>
            <th className="border border-green-300 p-2">گروپ</th>
            <th className="border border-green-300 p-2">خصوصیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">پریم (اگیتی)</td>
            <td className="border p-2">اگیتی</td>
            <td className="border p-2">پیداواری صلاحیت بہترین، سبز پھلیوں کی پیداوار 100 من فی ایکڑ، بیج 20-25 من فی ایکڑ، پھلی لمبی تلوار نما، 11-15 دانے فی پھلی۔</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">اتفاق (اگیتی)</td>
            <td className="border p-2">اگیتی</td>
            <td className="border p-2">پیداواری صلاحیت اچھی، بیماریوں کے خلاف مزاحمت، سبز پھلیاں 80-85 من فی ایکڑ، بیج 25-30 من فی ایکڑ۔</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">جمیعی (تحقیقی)</td>
            <td className="border p-2">تحقیقی</td>
            <td className="border p-2">پھلی 7 سینٹی میٹر، 7-8 دانے، سبز پھلیاں 55-60 من فی ایکڑ، بیج 20-25 من فی ایکڑ۔</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">راز الحق (تحقیقی)</td>
            <td className="border p-2">تحقیقی</td>
            <td className="border p-2">زیادہ پیداوار دینے والی قسم، پھلی چوڑی، 6-7 دانے فی پھلی، سبز پھلیاں 75-80 من فی ایکڑ۔</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">اہمیتی (تحقیقی)</td>
            <td className="border p-2">تحقیقی</td>
            <td className="border p-2">پھلی سبز رنگ کی، دانے پیلے زرد، سبز پھلیاں 45-50 من فی ایکڑ، بیج 20-25 من فی ایکڑ۔</td>
          </tr>
        </tbody>
      </table>

      {/* --- آبپاشی --- */}
      <h3 className="text-2xl font-bold text-blue-700 bg-blue-100 p-2 rounded-lg">
        آبپاشی
      </h3>
      <p className="bg-white p-3 rounded-lg">
        اکھٹی کا یہ فصل کو شروع میں ہر ملتے پانی کی ضرورت ہوتی ہے تا ہم موسم سرد ہو جائے تو یہ وقفہ بڑھایا جا سکتا ہے۔ بیج والی فصل کو پھول آنے اور پھلیاں بننے پر آبپاشی ضرور کریں۔
      </p>

      {/* --- پرندوں سے حفاظت --- */}
      <h3 className="text-2xl font-bold text-orange-700 bg-orange-100 p-2 rounded-lg">
        پرندوں سے حفاظت
      </h3>
      <p>
        مٹر کی پھلیوں کو مختلف پرندے مثلاً طوطے اور مینا نقصان پہنچاتے ہیں۔ جب پھلیاں دانوں سے بھری ہوں تو نقصان کا خطرہ زیادہ ہوتا ہے۔
      </p>
      <ul className="list-disc pr-6 bg-white p-3 rounded-lg space-y-1">
        <li>کھیت کے ارد گرد چمکدار باریک پلاسٹک فیتہ لگائیں تاکہ پرندے دور رہیں۔</li>
        <li>کھیت میں پرانی کپڑے کی گڑیا یا آدمی کی شکل کا پُتلا لگا دیں۔</li>
        <li>صبح و شام شور یا ڈھول بجا کر پرندوں کو بھگائیں۔</li>
      </ul>

      {/* --- برداشت --- */}
      <h3 className="text-2xl font-bold text-purple-700 bg-purple-100 p-2 rounded-lg">
        برداشت
      </h3>
      <p className="bg-white p-3 rounded-lg">
        جب پھلیوں میں دانے بھر جائیں تو سبز پھلیوں کی چنائی کریں۔ احتیاط کریں کہ پودے الٹ نہ جائیں۔  
        مقامی منڈی کیلئے صبح اور دور دراز کیلئے شام کو چنائی بہتر ہے۔  
        پھلیوں کو کپڑے کی صاف بوریوں میں رکھیں تاکہ تازگی برقرار رہے۔  
        عام طور پر اگیتی اقسام دو چنائیاں جبکہ تحقیقی اقسام تین چنائیاں دیتی ہیں۔
      </p>

      {/* --- پھول گوبھی --- */}
      <h3 className="text-2xl font-bold text-pink-700 bg-pink-100 p-2 rounded-lg">
        پھول گوبھی
      </h3>
      <p className="bg-white p-3 rounded-lg">
        پھول گوبھی موسمِ سرما کی ایک لذیذ سبزی ہے۔ اس کا نباتاتی نام 
        <span className="font-semibold"> Brassica oleracea var. botrytis </span>
        ہے۔ یہ غذائیت سے بھرپور ریشہ دار سبزی ہے جس میں وٹامن K، اومیگا 3 فیٹی ایسڈز، کیلشیم، میگنیشیم اور فاسفورس شامل ہیں۔ یہ دل، ہڈیوں اور دماغ کیلئے مفید ہے۔
      </p>

      {/* --- پھول گوبھی جدول --- */}
      <table className="table-auto border-collapse border border-pink-300 w-full text-right bg-white">
        <thead className="bg-pink-100 text-pink-800">
          <tr>
            <th className="border border-pink-300 p-2">سال</th>
            <th className="border border-pink-300 p-2">زیر کاشت رقبہ (ہزار ہیکٹر)</th>
            <th className="border border-pink-300 p-2">کل پیداوار (ہزار ٹن)</th>
            <th className="border border-pink-300 p-2">اوسط پیداوار (من فی ایکڑ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">2019-20</td><td className="border p-2">4.626</td><td className="border p-2">117.238</td><td className="border p-2">256.38</td></tr>
          <tr><td className="border p-2">2020-21</td><td className="border p-2">6.993</td><td className="border p-2">253.455</td><td className="border p-2">366.69</td></tr>
          <tr><td className="border p-2">2021-22</td><td className="border p-2">6.076</td><td className="border p-2">214.785</td><td className="border p-2">357.62</td></tr>
          <tr><td className="border p-2">2022-23</td><td className="border p-2">6.988</td><td className="border p-2">277.071</td><td className="border p-2">401.00</td></tr>
          <tr><td className="border p-2">2023-24</td><td className="border p-2">5.351</td><td className="border p-2">255.754</td><td className="border p-2">484.00</td></tr>
        </tbody>
      </table>

      {/* --- نتیجہ --- */}
      <h3 className="text-2xl font-bold text-green-800 bg-green-100 p-2 rounded-lg">
        نتیجہ
      </h3>
      <p className="bg-white p-3 rounded-lg">
        مناسب آبپاشی، پرندوں سے حفاظت اور وقت پر برداشت کرنے سے مٹر اور پھول گوبھی کی پیداوار میں واضح اضافہ کیا جا سکتا ہے۔
      </p>
    </div>
      <p className="text-gray-800">
        پنجاب میں پچھلے پانچ سالوں میں پھول گوبھی کے زیر کاشت رقبہ، کل پیداوار اور اوسط پیداوار درج ذیل ہے:
      </p>

      {/* --- جدول --- */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-center">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="border border-gray-400 p-2">سال</th>
              <th className="border border-gray-400 p-2">ہزار ہیکٹر</th>
              <th className="border border-gray-400 p-2">ہزار ایکٹر</th>
              <th className="border border-gray-400 p-2">کل پیداوار (ہزار ٹن)</th>
              <th className="border border-gray-400 p-2">کلوگرام فی ہیکٹر</th>
              <th className="border border-gray-400 p-2">اوسط پیداوار (من فی ایکڑ)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border p-2">2019-20</td>
              <td className="border p-2">4.626</td>
              <td className="border p-2">11.432</td>
              <td className="border p-2">117.238</td>
              <td className="border p-2">25333</td>
              <td className="border p-2">256.38</td>
            </tr>
            <tr>
              <td className="border p-2">2020-21</td>
              <td className="border p-2">6.993</td>
              <td className="border p-2">17.282</td>
              <td className="border p-2">253.455</td>
              <td className="border p-2">36245</td>
              <td className="border p-2">366.69</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">2021-22</td>
              <td className="border p-2">6.076</td>
              <td className="border p-2">15.015</td>
              <td className="border p-2">214.785</td>
              <td className="border p-2">35350</td>
              <td className="border p-2">357.62</td>
            </tr>
            <tr>
              <td className="border p-2">2022-23</td>
              <td className="border p-2">6.988</td>
              <td className="border p-2">17.263</td>
              <td className="border p-2">277.071</td>
              <td className="border p-2">39661</td>
              <td className="border p-2">401.00</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">2023-24</td>
              <td className="border p-2">5.351</td>
              <td className="border p-2">13.222</td>
              <td className="border p-2">255.754</td>
              <td className="border p-2">47796</td>
              <td className="border p-2">484.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
}
,
{
    img: cotton9,
    title: "Cluster",
    price: "$75",
    desc: (
        <div className="text-right text-black bg-gray-50 p-4 rounded-xl shadow-md"> 
        <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <p className="mb-3">
                <span className="text-green-600 font-bold">کلسٹر</span> دنیا کا بہترین وسیع دائرہ اثر رکھنے والا 
                نیوکیمسٹری کیڑے مار زہر ہے جو کہ دو طاقتور کیڑے مار زہروں کا شاندار مرکب ہے۔ 
                اس میں موجود کیڑے مار زہروں کو ایک خاص تناسب سے ملایا گیا ہے۔ 
                یہ کیڑوں کو فوری طور پر کنٹرول کر کے فصل کو سرسبز و شاداب رکھتا ہے اور پیداوار میں یقینی اضافہ کا باعث بنتا ہے۔
            </p>

            <h3 className="text-lg font-bold text-blue-700 mb-2">سفارشات برائے استعمال</h3>
            <table className="w-full border border-gray-400 text-sm mb-3">
                <thead className="bg-green-100">
                    <tr>
                        <th className="border border-gray-400 p-2">فصل</th>
                        <th className="border border-gray-400 p-2">ضرر رساں کیڑے</th>
                        <th className="border border-gray-400 p-2">مقدار فی ایکڑ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 p-2">فالسہ و وڈز</td>
                        <td className="border border-gray-400 p-2">فال ویب ورم</td>
                        <td className="border border-gray-400 p-2">15 سے 20 ملی لیٹر</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-lg font-bold text-purple-700 mb-1">طریقہ استعمال:</h3>
            <p>
                کیلیبریشن (Calibration) کے ذریعے فی ایکڑ پانی کا تعین کریں۔ 
                اس کے بعد اسپرے کے ٹینک کو آدھا بھر لیں۔ 
                اب اس میں زہر کی مجوزہ مقدار ڈالیں اور اسپرے کے ٹینک کو مطلوبہ مقدار تک بھر لیں۔ 
                تیار شدہ محلول کو اس طرح اسپرے کریں کہ تمام پودے زہر سے اچھی طرح تر ہو جائیں۔ 
                اسپرے کیلئے ہلکے نوزل استعمال کریں۔
            </p>
        </div>
    ),
},

       {
    img: cotton10,
    title: "Ranch",
    price: "$90",
    desc: (
        <div className="text-right text-black bg-yellow-50 p-4 rounded-xl shadow-md">

          <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <h2 className="text-xl font-bold text-green-700 mb-2">RANCH™ 1.9% EC</h2>
            <p className="mb-3">
                <span className="text-red-600 font-bold">رینچ</span> نقصان دہ کیڑوں کو کچلنے، 
                چوسنے اور کھانے سے کنٹرول کرتا ہے۔ یہ کیڑوں کے اعصابی نظام میں پیغام رساں 
                اعصاب کی صلاحیت کو مفلوج کرتا ہے، نتیجتاً سنڈیاں دماغی طور پر مفلوج ہو کر 
                کھانا بند کر دیتی ہیں جس سے پودوں کا نقصان رک جاتا ہے اور سنڈیاں گھنٹوں میں 
                مرنے لگتی ہیں۔ سپرے کے تین یا چار ایام تک شرح اموات بتدریج بڑھتی رہتی ہے۔ 
                <span className="text-green-600 font-bold"> رینچ</span> کم شرح استعمال سے دشمن 
                کیڑوں کا بہترین کنٹرول کرنے کے ساتھ ساتھ ماحول پر بھی اثر انداز نہیں ہوتا ہے۔
            </p>

            <h3 className="text-lg font-bold text-blue-700 mb-2">سفارشات برائے زرعی استعمال</h3>
            <table className="w-full border border-gray-400 text-sm mb-3">
                <thead className="bg-green-100">
                    <tr>
                        <th className="border border-gray-400 p-2">فصل</th>
                        <th className="border border-gray-400 p-2">نقصان دہ کیڑے</th>
                        <th className="border border-gray-400 p-2">مقدار فی ایکڑ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 p-2">کپاس</td>
                        <td className="border border-gray-400 p-2">امریکن سنڈی</td>
                        <td className="border border-gray-400 p-2">200 ملی لیٹر</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-lg font-bold text-purple-700 mb-1">طریقہ استعمال:</h3>
            <p>
                کیلیبریشن (Calibration) کے ذریعے فی ایکڑ پانی کا تعین کریں۔ اس کے بعد اسپرے 
                کے ٹینک کو آدھا بھر لیں۔ اب اس میں زہر کی مجوزہ مقدار ڈالیں اور اسپرے کے 
                ٹینک کو مطلوبہ مقدار تک بھر لیں۔ تیار شدہ محلول کو اس طرح اسپرے کریں کہ 
                تمام پودے زہر سے اچھی طرح تر ہو جائیں۔ اسپرے کیلئے{" "}
                <span className="font-bold text-red-600">ہالوکون</span> استعمال کریں۔
            </p>
        </div>
    ),
},
       {
  img: cotton13,
  title: "Ridge",
  price: "$70",
  desc: (
    <div className="text-right text-black space-y-4 leading-relaxed">
<h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

      {/* Ranch basic description */}
      
      {/* RIDGE Section */}
      <h2 className="bg-green-200 text-green-900 font-bold px-2 py-1 rounded">
        RIDGE™ 2.5% EC
      </h2>
      <p>
        <span className="font-bold text-red-700">رج</span> پائیر تھرائیڈ گروپ کا ایک وسیع الاثر کیڑے مار زہر ہے
        جو اپنے حکمی اور لمسی اثر کی بدولت مختلف سنڈیوں اور رس چوسنے والے کیڑوں کے خاتمے کیلئے انتہائی مؤثر ہے۔
      </p>

      {/* Recommendations */}
      <h2 className="bg-blue-200 text-blue-900 font-bold px-2 py-1 rounded">
        سفارشات برائے زرعی استعمال
      </h2>
      <table className="w-full border border-black text-center">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-black px-2">فصل</th>
            <th className="border border-black px-2">نقصان دہ کیڑے</th>
            <th className="border border-black px-2">مقدار فی ایکڑ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black">کپاس</td>
            <td className="border border-black">ٹینڈوں کی سنڈیاں، سفید مکھی اور تھرس</td>
            <td className="border border-black">330 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border border-black">چاول</td>
            <td className="border border-black">تنے کی سنڈی اور پتہ لپیٹ سنڈی</td>
            <td className="border border-black">200-250 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border border-black">چنا</td>
            <td className="border border-black">ڈوڈی کی سنڈی</td>
            <td className="border border-black">250 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border border-black">بینگن اور بھنڈی</td>
            <td className="border border-black">پھل کی سنڈی</td>
            <td className="border border-black">200 ملی لیٹر</td>
          </tr>
          <tr>
            <td className="border border-black">آم</td>
            <td className="border border-black">آم کا تیلا</td>
            <td className="border border-black">40 ملی لیٹر فی 100 لیٹر پانی</td>
          </tr>
        </tbody>
      </table>

      {/* Usage Instructions */}
      <h2 className="bg-yellow-200 text-yellow-900 font-bold px-2 py-1 rounded">
        طریقہ استعمال
      </h2>
      <p>
        کیلیبریشن (Calibration) کے ذریعے فی ایکڑ پانی کا تعین کریں۔ اس کے بعد اسپرے کے ٹینک کو آدھا بھر لیں۔ 
        اب اس میں زہر کی مجوزہ مقدار ڈالیں اور اسپرے کے ٹینک کو مطلوبہ مقدار تک بھر لیں۔ تیار شدہ محلول کو اس طرح 
        اسپرے کریں کہ تمام پودے زہر سے اچھی طرح تر ہو جائیں۔ اسپرے کیلئے{" "}
        <span className="font-bold text-red-600">ہالوکون</span> استعمال کریں۔
      </p>
    </div>
  ),
},
       {
    img: cotton14,
    title: "Tragers",
    price: "$65",
    desc: (
        <p className="text-right text-black"> 
        <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <span className="bg-yellow-200 font-bold">TRAGER™ 11.6% SC</span><br /><br />

            <span className="text-green-600 font-bold">ٹریگر</span> 11.6 فیصد ایس سی دھان میں نقصان دہ سنڈیوں کیلئے بہترین زہر ہے۔  
            <span className="text-green-600 font-bold">ٹریگر</span> 11.6 فیصد ایس سی جدید، طاقتور اور بہترین زہر ہے جو ماحول دوست اور کیڑوں کیلئے بے ضرر ہے۔  
            <span className="text-green-600 font-bold">ٹریگر</span> 11.6 فیصد ایس سی متاثرہ سنڈی کو فوراً مفلوج کرنے کے بعد ہلاک کر دیتا ہے۔  
            <br /><br />

            <span className="bg-blue-200 font-bold">سفارشات برائے استعمال</span><br />
            <table className="table-auto border-collapse border border-gray-400 w-full text-center mt-2">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2">فصل</th>
                        <th className="border border-gray-400 px-2">کیڑے</th>
                        <th className="border border-gray-400 px-2">مقدار فی ایکڑ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-2">دھان</td>
                        <td className="border border-gray-400 px-2">پتہ لپیٹ سنڈی</td>
                        <td className="border border-gray-400 px-2">60 - 90 ملی لیٹر</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className="bg-pink-200 font-bold">طریقہ استعمال:</span><br />
            کسی بھی ہاتھ سے چلنے والی (ہینڈ سپ بیک) یا ٹریکٹر بوم اسپرے سے اسپرے کیا جا سکتا ہے۔  
            زہر کی مطلوبہ مقدار کو ضرورت کے مطابق پانی میں ڈال کر محلول بنائیں۔  
            تیار شدہ محلول کو اس طرح اسپرے کریں کہ زہر پودوں کے تمام حصوں تک یکساں پہنچ جائے۔  
            <br /><br />

            <span className="bg-purple-200 font-bold">محلول تیار کرنے کا طریقہ:</span><br />
            اسپرے سے پہلے اس بات کا تعین کریں کہ ایک ایکڑ میں کتنی ٹنکیاں درکار ہیں (مشین کی کیلیبریشن کریں)۔  
            اب ایک ایکڑ میں جتنی ٹنکیاں استعمال کریں گے اتنے الگ الگ بالٹی میں پانی ڈالیں۔  
            زہر کی صحیح فی ایکڑ مقدار چھینٹے سے ناپ کر اس بالٹی میں ڈالیں اور کسی صاف لکڑی یا ڈنڈے سے اچھی طرح ہلا لیں۔  
            اسپرے مشین کی ٹینکی میں آدھا پانی بھر لیں اور پھر ایک الگ پانی والی بالٹی سے نکال کر اس میں ڈال دیں۔  
            ٹینکی کو مطلوبہ نشان تک پانی سے بھر لیں اور اچھی طرح ہلا لیں۔  
            محلول اسپرے کرنے کیلئے تیار ہے۔
        </p>
    ),
},


{
    img: cotton15,
    title: "Combox",
    price: "1000 ملی لیٹر",
    desc: (
        <p className="text-right text-black"> 
        <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <span className="bg-yellow-200 font-bold">COMBOX™</span><br /><br />

            <span className="text-green-600 font-bold">کومبوکس</span> مختلف جڑی بوٹی مار زہروں کا مکسچر ہے۔  
            <span className="text-green-600 font-bold">کومبوکس</span> کپاس کی فصل کی جڑی بوٹیوں کو اگنے سے پہلے ہی کنٹرول کر کے فصل کو شاندار آغاز فراہم کرتی ہے۔  
            <span className="text-green-600 font-bold">کومبوکس</span> کے استعمال سے فصل شروع ہی سے جڑی بوٹیوں کے دباؤ سے آزاد رہتی ہے لہذا فصل کی بہتر نشوونما ہوتی ہے۔  
            <span className="text-green-600 font-bold">کومبوکس</span> فصل کے اگاؤ اور بڑھوتری کے عمل کو متاثر نہیں کرتی۔
            <br /><br />

            <span className="bg-blue-200 font-bold">سفارشات برائے استعمال</span><br />
            <table className="table-auto border-collapse border border-gray-400 w-full text-center mt-2">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2">فصل</th>
                        <th className="border border-gray-400 px-2">نقصان دہ جڑی بوٹیاں</th>
                        <th className="border border-gray-400 px-2">مقدار زہر فی ایکڑ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-2">کپاس</td>
                        <td className="border border-gray-400 px-2">
                            اٹ سٹ، مدھانہ، سوانکی، ہاتھو، کریڑ، چولائی، قلفی، تاندلہ
                        </td>
                        <td className="border border-gray-400 px-2">1000 ملی لیٹر</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className="bg-pink-200 font-bold">کومبوکس اسپرے کرنے کا وقت اور طریقہ:</span><br /><br />

            <span className="font-bold">پہلی رائونی کا شت کرنے کی صورت میں:</span><br />
            پہلی رائونی کے بعد دو تین رسپر یا اگاؤ لگا کر <span className="text-green-600 font-bold">کومبوکس</span> کا اسپرے کریں اور بجائی کے لئے زمین تیار کر کے پانی کا پٹی رائونی کے بعد بجائی کے لئے زمین تیار کر کے آخری سہاگہ دینے سے پہلے <span className="text-green-600 font-bold">کومبوکس</span> کا اسپرے کریں اور ہلکی ڈیر کے ساتھ سہاگہ دے کر زہر کو مٹی میں ملائیں اور بجائی کریں۔  
            <span className="text-green-600 font-bold">کومبوکس</span> کا پہلی رائونی کا اسپرے کریں اور کھیت کو پانی لگائیں۔ وتر آنے پر زمین تیار کر کے بجائی کریں۔
            <br /><br />

            <span className="font-bold">پھلیوں پر کا شت کرنے کے صورت میں:</span><br />
            پھلیوں پر کا شت کی گئی کپاس کو بجائی کے بعد کپاس اگنے سے پہلے وتر میں <span className="text-green-600 font-bold">کومبوکس</span> اسپرے کریں۔
            <br /><br />

            <span className="font-bold">بجائی کے 24-48 گھنٹے کے اندر اسپرے:</span><br /><br />

            <span className="bg-purple-200 font-bold">طریقہ استعمال:</span><br />
            زہر کو کسی بھی ہاتھ سے چلنے والی یا مشین اسپرے سے استعمال کیا جا سکتا ہے۔  
            زہر کے مطلوبہ مقدار کو ضرورت کے مطابق پانی ڈال کر الگ محلول تیار کر لیں۔  
            تیار شدہ محلول کو اس طرح اسپرے کریں کہ زہر کھیت کے تمام حصوں تک پہنچ جائے۔
        </p>
    ),
},

{
    img: cotton16,
    title: "Naqash",
    price: "800–1000 ملی لیٹر فی ایکڑ",
    desc: (
        <p className="text-right text-black">
          <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <span className="bg-yellow-200 font-bold">نقش</span> <br /><br />

            <span className="text-green-600 font-bold">نقش</span> 
            (ٹرائی ازو فاس + لیمبڈا سائی ہیلو تھرین) کپاس کی سنڈیوں اور رس چوسنے والے کیڑوں کے لگنے، کھانے اور چھونے کے ذریعے ہلاک کرتا ہے۔  
            کپاس کے کھیتوں میں انڈوں اور چھوٹی سنڈیوں کا حملہ شروع ہوتے ہی فوراً سپرے کریں۔
            <br /><br />

            <span className="bg-blue-200 font-bold">سفارشات برائے زرعی استعمال</span><br />
            <table className="table-auto border-collapse border border-gray-400 w-full text-center mt-2">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2">فصل</th>
                        <th className="border border-gray-400 px-2">نقصان دہ کیڑے</th>
                        <th className="border border-gray-400 px-2">مقدار زہر فی ایکڑ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-2">کپاس</td>
                        <td className="border border-gray-400 px-2">چتکبری سنڈی، گلابی سنڈی، امریکن سنڈی</td>
                        <td className="border border-gray-400 px-2">800 - 1000 ملی لیٹر فی ایکڑ</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className="bg-pink-200 font-bold">طریقہ استعمال:</span><br />
            کیلیبریشن (Calibration) کے ذریعے فی ایکڑ پانی کا تعین کریں۔  
            اس کے بعد اسپرے کے ٹینک کو آدھا بھر لیں۔  
            اب اس میں زہر کی مجوزہ مقدار ڈالیں اور اسپرے کے ٹینک کو مطلوبہ مقدار تک بھر لیں۔  
            تیار شدہ محلول کو اس طرح اسپرے کریں کہ تمام پودے زہر سے اچھی طرح تر ہو جائیں۔  
            اسپرے کیلئے ہالوکون استعمال کریں۔
        </p>
    ),
},

{
    img: cotton7,
    title: "BLACK HAWK",
    price: "1000 ملی لیٹر",
    desc: (
        <div className="text-right text-black bg-gray-50 p-4 rounded-xl shadow-md">
          <h2 className="font-bold   text-center px-3 py-2 rounded  ">
      BOOSTER 80% WG <br />
      Chemical composition on 100% basics <br />
      sulphur..................800 g/kg (80% w/w)
    </h2>

            <h2 className="text-xl font-bold text-green-700 mb-2">BLACK HAWK™ 40% EC</h2>
            <p className="mb-3">
                <span className="text-green-600 font-bold">بلیک ہاک</span> نامیاتی فاسفیٹ گروپ سے تعلق رکھنے والی 
                ایک مؤثر کیڑے مار زہر ہے جو کہ کپاس کے السیٹ پیٹ، کمپلیکس، کماد اور مکئی کے بوررز کے علاوہ 
                باغات پر حملہ آور، کا ڈلنگ ماتھ اور سبزیات کے تیلاؤ کے خاتمے کے لئے بہترین ہے۔ 
                یہ حسی، حکمی اور بخارتی عمل کے ذریعے ان کیڑوں پر حملہ کر کے ان کا خاتمہ کرتی ہے۔
            </p>

            <h3 className="text-lg font-bold text-blue-700 mb-2">سفارشات برائے زرعی استعمال</h3>
            <table className="w-full border border-gray-400 text-sm mb-3">
                <thead className="bg-green-100">
                    <tr>
                        <th className="border border-gray-400 p-2">فصل</th>
                        <th className="border border-gray-400 p-2">مسئلہ</th>
                        <th className="border border-gray-400 p-2">مقدار فی ایکڑ</th>
                        <th className="border border-gray-400 p-2">پی ایچ آئی</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 p-2">کپاس</td>
                        <td className="border border-gray-400 p-2">امریکن، چتکبری، گلابی اور لشکری سنڈی، تیلا، جیسیلا اور تھرپس</td>
                        <td className="border border-gray-400 p-2">1000 ملی لیٹر</td>
                        <td className="border border-gray-400 p-2">21 دن</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">مکئی</td>
                        <td className="border border-gray-400 p-2">تنے کی سنڈیاں</td>
                        <td className="border border-gray-400 p-2">750 ملی لیٹر</td>
                        <td className="border border-gray-400 p-2">42 دن</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">گنا</td>
                        <td className="border border-gray-400 p-2">تنے کی سنڈیاں</td>
                        <td className="border border-gray-400 p-2">750 ملی لیٹر</td>
                        <td className="border border-gray-400 p-2">42 دن</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">باغات</td>
                        <td className="border border-gray-400 p-2">کا ڈلنگ ماتھ</td>
                        <td className="border border-gray-400 p-2">150 تا 200 ملی لیٹر فی 100 لیٹر پانی</td>
                        <td className="border border-gray-400 p-2">28-30 دن</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">سبزیات</td>
                        <td className="border border-gray-400 p-2">پھپھوندی (پھپھو)</td>
                        <td className="border border-gray-400 p-2">750 ملی لیٹر</td>
                        <td className="border border-gray-400 p-2">7 دن</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-lg font-bold text-purple-700 mb-1">طریقہ استعمال:</h3>
            <p>
                کیلیبریشن (Calibration) کے ذریعے فی ایکڑ پانی کا تعین کریں۔ اس کے بعد اسپرے کے ٹینک کو آدھا بھر لیں۔ 
                اب اس میں زہر کی مجوزہ مقدار ڈالیں اور اسپرے کے ٹینک کو مطلوبہ مقدار تک بھر لیں۔ 
                تیار شدہ محلول کو اس طرح اسپرے کریں کہ تمام پودے زہر سے اچھی طرح تر ہو جائیں۔ 
                اسپرے کیلئے ہالوکون استعمال کریں۔
            </p>
        </div>
    ),
},
  ];

  // ✅ Rating Component
  const Rating = () => (
    <div className="flex items-center mt-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
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
          item.title === product.title
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setShowCart(true);
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
    <div className="overflow-hidden rounded-xl">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-contain transform transition-transform duration-300 hover:scale-75"
      />
    </div>
    <h2 className="text-lg font-bold mt-2">{product.title}</h2>
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
        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <ShoppingCart className="w-8 h-8 text-green-700" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* ✅ Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
          <div className="bg-white w-96 h-full p-6 shadow-lg relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 left-2 bg-green-700 text-black px-3 py-1 rounded hover:bg-green-800 z-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2 z-50"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        {item.price} × {item.qty}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.title, -1)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.title, 1)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="text-red-600 ml-2"
                      >
                        Remove
                      </button>
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
      <h1
        className="text-3xl font-bold text-center"
        style={{ color: "#76B74E" }}
      >
       Major Crops 
      </h1>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((p, i) => (
          <Card key={i} product={p} />
        ))}
      </div>

      {/* ✅ Fullscreen Explore Page */}
      {selectedProduct && !showForm && (
        <div className="fixed inset-0 w-screen h-screen bg-white z-50 overflow-y-auto">
          <div className="relative w-full h-full flex">
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              <X color="black" />
            </button>

            {/* Left Side - Product Detail */}
            <div className="flex-1 p-10 border-r overflow-y-auto">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="w-56 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-4 text-center">
                {selectedProduct.title}
              </h2>
              <div className="mt-4">{selectedProduct.desc}</div>
              <p className="text-green-600 font-bold mt-4 text-xl text-center">
                {selectedProduct.price}
              </p>

              <div className="flex gap-4 mt-6 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-600 text-black px-6 py-2 rounded hover:bg-green-700"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="bg-yellow-400 text-black px-6 py-2 rounded flex items-center hover:bg-yellow-500"
                >
                  <ShoppingCart className="w-4 h-4 mr-1" /> Add to Cart
                </button>
              </div>
            </div>

            {/* Right Side - Related */}
            <div className="w-1/3 p-10 bg-gray-50 overflow-y-auto">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">
                You may also like
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {products
                  .filter((p) => p.title !== selectedProduct.title)
                  .slice(0, 12)
                  .map((p, i) => (
                    <div
                      key={i}
                      className="bg-white shadow rounded-lg p-3 text-center"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-24 h-24 mx-auto object-contain"
                      />
                      <p className="text-sm font-semibold mt-2">{p.title}</p>
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setShowForm(false);
                        }}
                        className="mt-2 text-xs bg-[#76B74E] hover:bg-green-700 text-black px-3 py-1 rounded"
                      >
                        View
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Order Form */}
      {selectedProduct && showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 text-black rounded-lg relative max-w-md w-full max-h-[80vh] overflow-y-auto">
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
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-40 mx-auto mb-4"
            />
            <form className="mt-4 space-y-3 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold">Order Form</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Address"
                className="w-full border rounded px-3 py-2"
              />
              <button className="w-full bg-green-600 text-black py-2 rounded hover:bg-green-700">
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
