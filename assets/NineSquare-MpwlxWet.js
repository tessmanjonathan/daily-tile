import{r as a,j as t}from"./index-xEvc3ED-.js";import{I,C as F,a as A,V as P}from"./Version-l2_etX6V.js";const E=()=>{const[o,p]=a.useState("playing"),[x,y]=a.useState(0),[b,i]=a.useState(""),[v,f]=a.useState(()=>{const e=localStorage.getItem("gamesShowInstructions");return e===null?!0:JSON.parse(e)}),[l,w]=a.useState(()=>{const e=new Date;return e.setHours(0,0,0,0),e}),[j,N]=a.useState([]),[u,g]=a.useState(Array(9).fill(!1)),[c,h]=a.useState(0),D=e=>{let r=e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate();const m=()=>(r=r*16807%2147483647,(r-1)/2147483646),s=Array.from({length:9},(n,d)=>d+1);for(let n=s.length-1;n>0;n--){const d=Math.floor(m()*(n+1));[s[n],s[d]]=[s[d],s[n]]}return s};a.useEffect(()=>{const e=D(l);N(e),g(Array(9).fill(!1)),h(0),p("playing"),y(0),i("")},[l]);const C=e=>{if(o==="playing")if(j[e]===c+1){const r=[...u];r[e]=!0,g(r),h(c+1),i(`Found ${c+1}!`),c+1===9&&(p("complete"),i(`Congratulations! You completed NineSquare for ${l.toLocaleDateString()} in ${x+1} ${x===0?"attempt":"attempts"}!`))}else g(Array(9).fill(!1)),h(0),y(r=>r+1),i("Wrong sequence! Start over.")},q=e=>{const r=new Date(e.target.value);w(r)},$=()=>{const e=new Date(l);e.setDate(e.getDate()-1),w(e)},k=e=>{const r=e.getFullYear(),m=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${r}-${m}-${s}`},S=new Date;return S.setHours(0,0,0,0),t.jsxs("div",{className:"p-6 relative",children:[t.jsxs("div",{className:"flex justify-between items-center mb-6",children:[t.jsx("h1",{className:"text-2xl font-bold dark:text-white",children:"NineSquare"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("input",{type:"date",value:k(l),onChange:q,max:k(S),className:`border rounded px-2 py-1 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark-mode-date
              [&::-webkit-calendar-picker-indicator]:dark:invert
              [&::-webkit-calendar-picker-indicator]:dark:opacity-70
              [&::-webkit-calendar-picker-indicator]:hover:cursor-pointer`}),t.jsx("button",{onClick:()=>f(!0),className:"p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:t.jsx(I,{className:"w-5 h-5"})})]})]}),t.jsx("div",{className:"grid grid-cols-3 gap-2 mb-6 mx-auto w-fit",children:j.map((e,r)=>t.jsx("div",{onClick:()=>C(r),className:`
              w-20 h-20 flex items-center justify-center text-2xl font-bold
              border-2 cursor-pointer transition-all
              ${u[r]?"bg-green-500 text-white border-green-600":"bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-white hover:border-blue-300"}
              ${o==="playing"?"":"cursor-not-allowed"}
            `,children:u[r]?e:""},r))}),t.jsxs("div",{className:"space-y-4",children:[b&&t.jsx("p",{className:`text-center mb-4 ${o==="complete"?"text-green-600 dark:text-green-400 font-bold text-xl":"text-gray-600 dark:text-gray-400"}`,children:b}),o==="complete"&&t.jsxs("div",{className:"space-y-2",children:[t.jsxs("button",{onClick:$,className:"w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[t.jsx(F,{className:"w-4 h-4"})," Play Previous Day"]}),t.jsx("a",{href:"#tiles",className:"block w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center",children:"Try out today's Tiles game"})]})]}),t.jsxs(A,{isOpen:v,onClose:()=>f(!1),title:"Welcome to Daily NineSquare!",children:[t.jsx("p",{children:"Here's how to play:"}),t.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[t.jsx("li",{children:"Find the numbers 1-9 in sequential order"}),t.jsx("li",{children:"Click squares to reveal their numbers"}),t.jsx("li",{children:"If you click a wrong number, all revealed numbers will be hidden"}),t.jsx("li",{children:"Keep trying until you reveal all numbers in the correct order"}),t.jsx("li",{children:"You can play previous days' puzzles using the date selector"})]}),t.jsx("p",{children:"Good luck!"})]}),t.jsx(P,{gameName:"NineSquare"})]})};export{E as default};
