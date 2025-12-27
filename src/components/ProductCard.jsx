//1 in this page i learn about props in react js. that means how to read data (props) from parent component to the child component.

function ProductCard(props) {
    return (
       <>
        <h1>{props.title}</h1>
        <p>Price: ₹{props.price}</p>
        <p>Brand: {props.brand}</p>
        <p>Required:{props.required ? "Yes": "No"}</p>
       </>
    );
}

export default ProductCard; 

//2 Better Way – Destructuring (Interview Favorite) this is the best way to read props in react js.

// function ProductCard({title, price, brand, required}) {
//     return (
//         <>
//             <h1>{title}</h1>
//             <p>Price: ₹{price}</p>
//             <p>Brand: {brand}</p>
//             <p>Required:{required ? "Yes": "No"}</p>
//         </>
//     );
// }

// export default ProductCard;

//3️⃣ How to Specify Default Values for Props

// function ProductCard({ title = "No Title", price = 0 }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <p>Price: ₹{price}</p>
//     </>
//   );
// }

// export default ProductCard;


//4️⃣ How to Pass JSX to a Component (🔥 Important)

// function ProductCard({title, children}) {
//     return (
//         <>
//        <h2>{title}</h2>
//         {children}
//         </>
//     );
// }

// export default ProductCard;