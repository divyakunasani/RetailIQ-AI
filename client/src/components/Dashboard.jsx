import { useEffect, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import {
  FaRobot,
  FaChartLine,
  FaBox,
  FaArrowUp
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function Dashboard() {

const [products,setProducts] = useState([
{
id:1,
name:"iPhone 15",
category:"Electronics",
suggestedPrice:72999
},
{
id:2,
name:"AirPods Pro",
category:"Accessories",
suggestedPrice:24999
},
{
id:3,
name:"Samsung S25",
category:"Mobile",
suggestedPrice:79999
}
]);




useEffect(()=>{

fetchProducts();

},[]);



const fetchProducts = async()=>{

try{

const response = await axios.get("https://retailiq-ai.onrender.com/api/products");

if(res.data.length > 0){
setProducts(res.data);
}

}

catch(error){

console.log("Product fetch error:",error);

}

};



const salesData=[

{
day:"Day 1",
sales:4200
},

{
day:"Day 5",
sales:6200
},

{
day:"Day 10",
sales:7800
},

{
day:"Day 15",
sales:9500
},

{
day:"Day 20",
sales:11200
},

{
day:"Day 30",
sales:14000
}

];



const animation={

initial:{
opacity:0,
y:30
},

animate:{
opacity:1,
y:0
},

transition:{
duration:0.6
}

};





return(

<div
className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
text-white
p-6 md:p-10
"
>



{/* HEADER */}


<motion.div {...animation}>


<h1 className="text-5xl font-bold">

🚀 RetailIQ.AI

</h1>



<p className="text-xl text-gray-300 mt-3">

AI Powered Retail Decision Intelligence

</p>



<p className="text-gray-400 mt-2">

Predict prices • Optimize inventory • Maximize revenue

</p>



<div
className="
mt-4
inline-flex
bg-green-500/20
border
border-green-400/40
px-4
py-2
rounded-full
text-green-300
"
>

🟢 AI System Active

</div>



</motion.div>







{/* KPI CARDS */}



<div className="grid md:grid-cols-4 gap-5 mt-8">


<Metric
title="Total Revenue"
value="₹24.8L"
color="text-green-400"
/>


<Metric
title="Orders"
value="12,540"
/>


<Metric
title="Customers"
value="8,920"
/>


<Metric
title="AI Accuracy"
value="94%"
color="text-blue-400"
/>


</div>







{/* AI PRICE PREDICTION */}



<motion.div

{...animation}

className="
mt-8
bg-white/10
backdrop-blur-lg
rounded-2xl
p-6
shadow-2xl
border
border-blue-400/40
hover:scale-[1.02]
transition
"

>


<h2 className="
text-3xl
font-bold
flex
gap-3
items-center
">

<FaRobot className="text-blue-400"/>

AI Price Prediction Engine

</h2>





<div className="
grid
md:grid-cols-3
gap-5
mt-6
">


<Metric
title="Product"
value="iPhone 15"
/>


<Metric
title="Current Price"
value="₹69,999"
/>


<Metric
title="AI Recommended"
value="₹72,999"
color="text-green-400"
/>



<Metric
title="Demand Score"
value="92%"
/>


<Metric
title="Confidence"
value="94%"
/>


<Metric
title="Expected Revenue"
value="+18%"
color="text-green-400"
/>


</div>



<p className="
mt-6
flex
gap-2
items-center
text-green-400
font-bold
text-lg
">

<FaArrowUp/>

Market Trend: Increasing

</p>



</motion.div>







{/* SALES ANALYTICS */}



<motion.div

{...animation}

className="
mt-8
bg-white/10
backdrop-blur-lg
rounded-2xl
p-6
shadow-2xl
border
border-white/20
"

>



<h2 className="
text-3xl
font-bold
flex
gap-3
items-center
">

<FaChartLine/>

📊 Sales Performance Intelligence

</h2>




<p className="text-gray-300 mt-2">

AI Generated Sales Forecast Based On Market Trends

</p>




<div className="h-80 mt-6">


<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart data={salesData}>


<XAxis dataKey="day"/>


<YAxis/>


<Tooltip/>



<Bar

dataKey="sales"

fill="#38bdf8"

animationDuration={2000}

radius={[10,10,0,0]}

/>



</BarChart>


</ResponsiveContainer>


</div>



</motion.div>
{/* AI BUSINESS INSIGHT */}


<motion.div

{...animation}

className="
mt-8
bg-white/10
backdrop-blur-lg
rounded-2xl
p-6
shadow-2xl
border
border-purple-400/40
"

>


<h2 className="
text-3xl
font-bold
flex
gap-3
items-center
">

<FaRobot/>

AI Business Insight

</h2>



<div className="
mt-5
space-y-3
text-lg
">


<p>
🔥 iPhone 15 demand increased by 24%
</p>


<p>
Competitor pricing is 5% higher.
</p>


<p className="text-green-400 font-bold">

Recommended Strategy:
Increase price by ₹3000

</p>


<p>
Expected Impact:
Revenue +18%
</p>


<p>
Customer retention 96%
</p>


<p className="text-blue-400 font-bold">

AI Confidence: 94%

</p>


</div>


</motion.div>








{/* INVENTORY INTELLIGENCE */}



<motion.div

{...animation}

className="
mt-8
bg-white/10
backdrop-blur-lg
rounded-2xl
p-6
shadow-xl
border
border-orange-400/40
"

>


<h2 className="
text-3xl
font-bold
flex
gap-3
items-center
">

<FaBox/>

Inventory Intelligence

</h2>



<div className="
mt-5
space-y-3
text-lg
">


<p>
Product:
<b> AirPods Pro</b>
</p>


<p>
Stock:
<b>72%</b>
</p>


<p className="text-orange-400">

⚠ Low Stock

</p>


<p>

AI Action:
Increase inventory by 20%

</p>


<p>

Predicted Stockout:
<b>7 Days</b>

</p>


</div>


</motion.div>










{/* PRODUCT INTELLIGENCE CENTER */}



<motion.div

{...animation}

className="
mt-8
bg-white/10
backdrop-blur-lg
rounded-2xl
p-6
shadow-2xl
border
border-white/20
"

>


<h2 className="text-3xl font-bold">

📦 Product Intelligence Center

</h2>


<p className="text-gray-300 mt-2">

AI monitored products and pricing decisions

</p>




<div className="overflow-x-auto mt-6">


<table className="w-full text-left">


<thead className="
border-b
border-white/20
">


<tr>


<th className="p-3">
Product
</th>


<th className="p-3">
Category
</th>


<th className="p-3">
AI Price
</th>


<th className="p-3">
Demand
</th>


<th className="p-3">
Status
</th>


</tr>


</thead>




<tbody>


{

products.length > 0 ?


products.map((product)=>(


<tr
key={product.id}
className="
border-b
border-white/10
"
>


<td className="p-3">

{product.name}

</td>



<td className="p-3">

{product.category}

</td>




<td className="
p-3
text-green-400
">

₹{product.suggestedPrice || "72,999"}

</td>




<td className="p-3">

92%

</td>




<td className="
p-3
text-green-400
">

AI Optimized

</td>



</tr>


))


:

(

<tr>

<td
colSpan="5"
className="
p-5
text-center
text-gray-400
"
>

No products available

</td>


</tr>


)


}



</tbody>



</table>


</div>



</motion.div>






</div>

);


}








function Metric({
title,
value,
color=""
}){


return(


<div className="
bg-black/20
rounded-xl
p-5
border
border-white/10
">


<p className="text-gray-300">

{title}

</p>



<h3 className={`
text-2xl
font-bold
mt-2
${color}
`}>

{value}

</h3>



</div>


);


}





export default Dashboard;